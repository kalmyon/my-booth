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
    <div>
      <h2>{product.title}</h2>

      <p>{product.description}</p>

      <p>{product.price}円</p>
    </div>
  );
}