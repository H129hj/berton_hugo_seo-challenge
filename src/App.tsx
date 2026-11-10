import { useEffect, useState } from 'react'

const HERO = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400'%3E%3Crect width='800' height='400' fill='%231a5fa8'/%3E%3Ctext x='400' y='210' font-size='28' fill='white' text-anchor='middle'%3EVélo électrique pliable%3C/text%3E%3C/svg%3E"

export default function App() {
  const [showBanner, setShowBanner] = useState(false)
  const [points, setPoints] = useState<number | null>(null)

  useEffect(() => {
    const t = setTimeout(() => setShowBanner(true), 1200)
    return () => clearTimeout(t)
  }, [])

  // le calcul est fait par tranches pour ne pas figer la page :
  // entre deux tranches le navigateur peut répondre aux clics
  function calculerPoints() {
    const TOTAL = 400_000_000
    const TRANCHE = 2_000_000
    let total = 0
    let i = 0

    function tranche() {
      const fin = Math.min(i + TRANCHE, TOTAL)
      for (; i < fin; i++) {
        total += Math.sqrt(i) % 7
      }
      if (i < TOTAL) {
        setTimeout(tranche, 0)
      } else {
        setPoints(Math.round(total % 1000))
      }
    }
    tranche()
  }

  return (
    <div className="page">
      {/* la place du bandeau est toujours réservée, il apparaît juste par opacité */}
      <div className="banner-zone">
        <div className={showBanner ? 'banner visible' : 'banner'}>
          🎉 Livraison offerte ce week-end !
        </div>
      </div>

      <h1>CycloShop</h1>

      <img
        src={HERO}
        alt="Vélo électrique pliable"
        width={800}
        height={400}
        style={{ aspectRatio: '800 / 400', width: '100%', height: 'auto' }}
      />

      <p>Le vélo électrique pliable le plus vendu de la boutique.</p>

      <button onClick={calculerPoints}>Calculer mes points fidélité</button>
      {points !== null && <p>Tu as {points} points fidélité.</p>}
    </div>
  )
}
