import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

const seedData = [
  { category: "starters", name: "Classic Garlic Bread", price: 120 },
  { category: "starters", name: "Cheesy Garlic Bread", price: 150 },
  { category: "starters", name: "Onion Rings", price: 130 },
  { category: "starters", name: "Chilli Cheese Bruschetta", price: 180 },
  { category: "starters", name: "Paneer Bruschetta", price: 200 },
  { category: "starters", name: "Mushroom Bruschetta", price: 200 },
  { category: "starters", name: "Cheese Balls", price: 140 },
  { category: "starters", name: "Peri Peri Paneer Fingers", price: 180 },
  { category: "starters", name: "Cajun Spicy Potatoes", price: 160 },
  { category: "burgers", name: "Veggies Grilled Burger", price: 200 },
  { category: "burgers", name: "Bombay Aloo Tikki Burger", price: 220 },
  { category: "burgers", name: "Malai Cottage Cheese Burger", price: 240 },
  { category: "burgers", name: "Fiery Paneer Burger", price: 250, isHighlight: true },
  { category: "burgers", name: "Mushroom Teriyaki Burger", price: 260 },
  { category: "sandwiches", name: "Veg Grilled Sandwich", price: 180 },
  { category: "sandwiches", name: "Cheesy Grilled Sandwich", price: 200 },
  { category: "sandwiches", name: "Creamy Paneer Sandwich", price: 220 },
  { category: "sandwiches", name: "Peri Peri Paneer Sandwich", price: 230 },
  { category: "sandwiches", name: "Spinach & Corn Sandwich", price: 200 },
  { category: "sandwiches", name: "Grilled Peri Peri Fries Sandwich", price: 250 },
  { category: "sandwiches", name: "Teriyaki Mushroom Sandwich", price: 220 },
  { category: "sandwiches", name: "Paneer Tikka Sandwich", price: 240 },
  { category: "sandwiches", name: "Bombay Grilled Sandwich", price: 210 },
  { category: "sandwiches", name: "Italian Club Sandwich", price: 250 },
  { category: "pizza", name: "Margherita", price: 300 },
  { category: "pizza", name: "Veggie Loaded", price: 350 },
  { category: "pizza", name: "Paneer Makhani", price: 380 },
  { category: "pizza", name: "Farm Garden", price: 370 },
  { category: "pizza", name: "Pesto Retreat", price: 360 },
  { category: "pizza", name: "Shroom Teriyaki", price: 390 },
  { category: "pizza", name: "Chilli Paneer", price: 400 },
  { category: "pasta", name: "Alfredo", price: 250 },
  { category: "pasta", name: "Arrabiata", price: 260 },
  { category: "pasta", name: "Pink Pasta", price: 270 },
  { category: "pasta", name: "Lime Chilli Pasta", price: 280 },
  { category: "pasta", name: "Shroom Teriyaki Pasta", price: 300 },
  { category: "pasta", name: "Pesto Pasta", price: 290 },
  { category: "pasta", name: "Mac & Cheese", price: 250 },
  { category: "pasta", name: "Peri Peri Mac Cheese", price: 270 },
  { category: "pasta", name: "Aglio Olio", price: 260 },
  { category: "pasta", name: "Paneer Makhani Pasta", price: 300 },
  { category: "pasta", name: "Veg Lasagne", price: 320, isHighlight: true },
  { category: "waffles", name: "Banana Caramel Waffle", price: 200 },
  { category: "waffles", name: "Crunchy Butterscotch Waffle", price: 220 },
  { category: "waffles", name: "Oreo Nutella Waffle", price: 240 },
  { category: "waffles", name: "KitKat White Chocolate Waffle", price: 250 },
  { category: "waffles", name: "Triple Chocolate Waffle", price: 260 },
  { category: "waffles", name: "Red Velvet Waffle", price: 270 },
  { category: "waffles", name: "Lotus Biscoff Waffle", price: 280, isHighlight: true },
  { category: "shakes", name: "Parle-G Caramel", price: 150 },
  { category: "shakes", name: "Crunchy Butterscotch", price: 150 },
  { category: "shakes", name: "Chocolate Peanut Butter", price: 160 },
  { category: "shakes", name: "Mixed Berry Cheesecake", price: 170 },
  { category: "shakes", name: "Super Milo", price: 150 },
  { category: "shakes", name: "Blueberry Cheesecake", price: 170 },
  { category: "shakes", name: "Mango Madness", price: 160 },
  { category: "shakes", name: "Triple Chocolate", price: 180 },
  { category: "shakes", name: "Oreo Nutella", price: 180 },
  { category: "shakes", name: "KitKat Caramel", price: 180 },
  { category: "shakes", name: "Oreo Strawberry", price: 180 },
  { category: "shakes", name: "Brownie Break", price: 180 },
  { category: "shakes", name: "Lotus Biscoff", price: 180 },
  { category: "wraps", name: "Veggie Wrap", price: 200 },
  { category: "wraps", name: "Creamy Paneer Wrap", price: 220 },
  { category: "wraps", name: "Peri Peri Paneer Wrap", price: 230 },
  { category: "wraps", name: "Paneer Makhani Wrap", price: 240 },
  { category: "wraps", name: "Mushroom Teriyaki Wrap", price: 230 },
  { category: "wraps", name: "Bean Delight Wrap", price: 220 },
  { category: "wraps", name: "Paneer Tikka Wrap", price: 240 },
  { category: "dips", name: "Chilli Mayo", price: 50 },
  { category: "dips", name: "Cocktail Dip", price: 50 },
  { category: "dips", name: "Schezwan Chutney", price: 50 },
  { category: "dips", name: "Signature Salsa", price: 60 },
  { category: "dips", name: "Cheesy Jalapeno", price: 60 },
  { category: "dips", name: "Peri Peri Mayo", price: 60 }
];

async function seedDatabase() {
  try {
    const existingItems = await storage.getMenuItems();
    if (existingItems.length === 0) {
      for (const item of seedData) {
        await storage.createMenuItem(item);
      }
      console.log("Database seeded with menu items");
    }
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Call seed function at startup
  seedDatabase();

  app.get(api.menu.list.path, async (req, res) => {
    try {
      const items = await storage.getMenuItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch menu" });
    }
  });

  return httpServer;
}
