import { useQuery } from "@tanstack/react-query";
import { api, type MenuListResponse } from "@shared/routes";

export function useMenu() {
  return useQuery({
    queryKey: [api.menu.list.path],
    queryFn: async () => {
      const res = await fetch(api.menu.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch menu items");
      const data = await res.json();
      return api.menu.list.responses[200].parse(data);
    },
  });
}

// Helper hook to get organized menu data
export function useMenuData() {
  const { data: menuItems, isLoading, error } = useMenu();

  const categories = menuItems 
    ? Array.from(new Set(menuItems.map(item => item.category)))
    : [];

  const highlights = menuItems 
    ? menuItems.filter(item => item.isHighlight)
    : [];

  const itemsByCategory = menuItems?.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof menuItems>) || {};

  return {
    menuItems,
    categories,
    highlights,
    itemsByCategory,
    isLoading,
    error
  };
}
