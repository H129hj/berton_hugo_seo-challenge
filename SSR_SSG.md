# SSR_SSG.md

1. Choisirais-tu plutôt du SSR, du SSG, ou du pré-rendu ?

   Du SSG (ou du pré-rendu). Le catalogue fait quelques dizaines de produits
   et ne change qu'occasionnellement : on peut générer les pages HTML une fois
   au build et les redéployer à chaque modification. Les crawlers et les bots
   des réseaux sociaux reçoivent directement le bon `<title>` et les balises
   `og:*` sans exécuter de JavaScript, et il n'y a pas de serveur à faire
   tourner à chaque visite.

2. Si le site affichait un stock en temps réel, ce choix changerait-il ?

   Pas pour les pages elles-mêmes : le titre, la description et le contenu
   qui compte pour le référencement restent statiques, donc le SSG reste
   valable. Par contre le stock ne doit pas être figé dans le HTML du build.
   Je le chargerais côté navigateur (appel à une API après l'affichage). Si on
   voulait vraiment le stock dans le HTML, il faudrait passer au SSR ou à une
   régénération très fréquente, mais ça coûte plus cher et le stock n'apporte
   rien au référencement.
