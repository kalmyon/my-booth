import { supabase } from "@/lib/supabase";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetail({
  params,
}: Props) {
    const { id }=await params;
  
    const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return <div>商品が見つかりません</div>;
  }

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold">
        {data.title}
      </h1>

      <p className="mt-4 text-gray-600">
        {data.description}
      </p>

      <p className="mt-6 text-2xl">
        {data.price}円
      </p>
    </main>
  );
}