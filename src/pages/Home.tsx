import { Link } from 'react-router-dom'
import { products } from '../data'
import { useDocumentMeta } from '../useDocumentMeta'

export default function Home() {
  useDocumentMeta({
    title: 'Vélo électrique, trottinette et casque en ville | CycloShop',
    description:
      "CycloShop : vélo électrique pliable, trottinette tout-terrain et casque connecté pour rouler en ville toute l'année.",
  })

  return (
    <div className="page">
      <h1>CycloShop</h1>
      <p>Tout l'équipement pour rouler en ville, toute l'année.</p>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/produits/${p.slug}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
