"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase-client";


export default function NewProductPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>)
  {
    e.preventDefault();

    const { error } = await supabase
      .from("products")
      .insert({
        title,
        description,
        price: Number(price),
      });

      if ( error ){
        alert("作成失敗");
        console.log(error);
        return;
      }

      router.push("/");
  }


  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">
        商品作成
      </h1>

      <form 
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
        >
        <input
          type="text"
          placeholder="商品名"
          className="border p-2 rounded"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <textarea
          placeholder="商品説明"
          className="border p-2 rounded"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="価格"
          className="border p-2 rounded"
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
          }
        />

        <button
          className="bg-black text-white p-2 rounded"
        >
          作成
        </button>
      </form>
    </main>
  );
}