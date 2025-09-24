import Link from 'next/link'
export const revalidate = 60

export default async function ProductsPage() {
  const res = await fetch('https://fakestoreapi.com/products', { next: { revalidate: 60 } })
  const products = await res.json()
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((p:any) => (
          <li key={p.id}>
            <img src={p.image} alt={p.title} style={{height:80}}/>
            <div>{p.title}</div>
            <div>${p.price}</div>
            <Link href={`/products/${p.id}`}>Voir</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}