import { useSearchParams } from 'react-router-dom'
import { products } from '../data'
import { useDocumentMeta } from '../useDocumentMeta'

export default function Catalogue() {
  const [params] = useSearchParams()
  const tri = params.get('tri')

  // les deux URLs de tri donnent la même liste : on indique la version de référence
  useDocumentMeta({
    title: 'Nos produits | CycloShop',
    canonical: 'https://cycloshop.exemple.fr/produits?tri=prix',
  })

  const sorted = tri === 'prix' || tri === 'prix-asc'
    ? [...products].sort((a, b) => a.price - b.price)
    : products

  return (
    <div className="page">
      <h1>Nos produits</h1>
      <ul>
        {sorted.map((p) => (
          <li key={p.id}>{p.name} - {p.price} €</li>
        ))}
      </ul>
    </div>
  )
}
