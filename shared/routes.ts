import { z } from 'zod';
import { menuItems } from './schema';

export const errorSchemas = {
  notFound: z.object({ message: z.string() }),
  internal: z.object({ message: z.string() }),
};

export const api = {
  menu: {
    list: {
      method: 'GET' as const,
      path: '/api/menu' as const,
      responses: {
        200: z.array(z.custom<typeof menuItems.$inferSelect>()),
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

export type MenuListResponse = z.infer<typeof api.menu.list.responses[200]>;
