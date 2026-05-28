"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase-client";
import toast from "react-hot-toast"

export default function NewProductPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>)
  {
    e.preventDefault();

    if (title.trim() === "") {
      toast.error("商品名を入力してください");
      return;
    }

    if (description.trim() === "") {
      toast.error("商品説明を入力してください");
      return;
    }

    if (Number(price) <= 0) {
      toast.error("価格は1円以上にしてください");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("products")
      .insert({
        title,
        description,
        price: Number(price),
      });

      if ( error ){
        setLoading(false);
        toast.error("作成失敗");
        console.log(error);
        return;
      }

      toast.success("商品を作成しました");
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
          disabled = {loading}
          className="bg-black text-white p-2 rounded disabled:opacity-50"
        >
          {loading ? "作成中..." : "作成"}
        </button>
      </form>
    </main>
  );
}