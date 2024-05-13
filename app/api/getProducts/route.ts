"use server"

import xmlParse from "@/lib/fetchProducts";

export const getProducts = async (url: string) => {
  if(!url) return [];
  
  try {

      const response = await fetch(url, { cache: 'no-store'});

      if (!response.ok) {
          throw new Error('Failed to fetch products');
      }

      const data = await response.text();

      const fetchedProducts = await xmlParse(data);

      return fetchedProducts;
  } catch (error: any) {
        return []
  }
};