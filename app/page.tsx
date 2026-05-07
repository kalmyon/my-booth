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
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">
        商品一覧
      </h1>

      <div className="grid gap-4">
        {data?.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
      </div>
    </main>
  );
}