import { notFound } from 'next/navigation' 
export const dynamic = 'force-dynamic'/* */ 

type Product = {
    id: number
    title: string
    description: string
    price: number
    image: string
  }
  
  export default async function ProductPage({ params }: { params: { id: string } }) {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`, {
      cache: 'no-store'
    })
    const product: Product = await res.json()
  
    return (
      <div>
        <h1>{product.title}</h1>
        <img src={product.image} alt={product.title} style={{ maxWidth: '200px' }} />
        <p>{product.description}</p>
        <p><b>Prix :</b> ${product.price}</p>
      </div>
    )
  }