import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data, error } = await supabase
    .from("products")
    .select("*");

  console.log(data);
  console.log(error);

  return (
    <main>
      <h1>Lotteria Booth</h1>
    </main>
  );
}