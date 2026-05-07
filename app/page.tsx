import { supabase } from "@/lib/supabase";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const { data, error } = await supabase
    .from("products")
    .select("*");

  if (error) {
    return <div>エラーが発生しました</div>;
  }

  return (
    <main>
      <h1>商品一覧</h1>

      {data?.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </main>
  );
}