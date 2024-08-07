import Link from 'next/link';

export default function Categories() {
  return (
    <div className="py-6">
      <h1 className=" max-w-[75%]">Kategori Recommended Untukmu!</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <Link href="/products/1">Kemeja</Link>
        <Link href="/products/2">Celana</Link>
        <Link href="/products/3">Sepatu</Link>
        <Link href="/products/4">Jaket</Link>
        <Link href="/products/5">Tas</Link>
        <Link href="/products/6">Kacamata</Link>
      </div>
    </div>
  );
}
