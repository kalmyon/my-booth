type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
};

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="border rounded-lg p-4 shadow">
      <h2 className="text-xl font-bold">
        {product.title}
      </h2>

      <p className="mt-2 text-gray-600">
        {product.description}
      </p>

      <p className="mt-4 text-lg">
        {product.price}円
      </p>
    </div>
  );
}