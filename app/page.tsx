import { supabase } from "@/lib/supabase";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

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
      <Link
        href="/products/new"
        className="inline-block mb-6 bg-black text-white px-4 py-2 rounded"
      >
        商品作成
      </Link>

      <div className="grid gap-4">
        {data?.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
        >
          <ProductCard product={product}/>

        </Link>
      ))}
      </div>
    </main>
  );
}