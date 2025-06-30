import { supabase } from '$lib/supabaseClient';

export const load = async () => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('year', { ascending: false }) // latest year first
    .order('id', { ascending: true });

  if (error) {
    console.error(error);
    throw new Error('Failed to load products');
  }

  // Group products by year
  const grouped = new Map<number, typeof data>();

  for (const product of data) {
    if (!grouped.has(product.year)) {
      grouped.set(product.year, []);
    }
    grouped.get(product.year)!.push(product);
  }

  return {
    groupedProducts: Array.from(grouped.entries()) // [ [2025, [...]], [2024, [...]], ... ]
  };
};
