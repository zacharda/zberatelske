import { supabase } from '$lib/supabaseClient';

export const load = async () => {
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .order('id');

  if (error) {
    console.error('Supabase error:', error);
    throw new Error('Failed to load products');
  }

  return { products };
};
