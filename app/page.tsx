import { supabase } from "@/lib/supabase";

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
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}円</p>
        </div>
      ))}
    </main>
  );
}