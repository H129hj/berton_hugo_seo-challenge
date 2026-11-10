# REFLEXION.md

1. `robots.txt` empêche-t-il, à lui seul, le duplicate content entre
   `/produits?tri=prix` et `/produits?tri=prix-asc` ? Pourquoi ?

   Non. `robots.txt` interdit seulement l'exploration (le crawl) de certaines
   URLs. Les deux URLs de tri restent explorables et peuvent être indexées
   toutes les deux, par exemple si un lien externe pointe vers l'une d'elles.
   Le problème de contenu dupliqué est un problème d'indexation, pas d'exploration.

2. Pourquoi la balise canonique est-elle l'outil adapté ici, plutôt que
   `robots.txt` ou une meta `noindex` ?

   La canonique dit à Google quelle URL garder parmi plusieurs qui affichent la
   même chose, et les signaux (liens, popularité) se regroupent sur cette
   version. `robots.txt` bloquerait l'exploration sans régler le choix de l'URL.
   Un `noindex` retirerait la page de l'index alors qu'on veut justement qu'une
   des deux versions reste indexée.

3. Si demain `/admin` existe sur ce site et ne doit jamais être exploré par
   Google, quelle ligne ajoutes-tu dans `robots.txt` ?

   `Disallow: /admin` sous `User-agent: *` (c'est la ligne déjà présente dans
   `public/robots.txt`). Pour une vraie page privée il faut en plus une
   authentification, car `robots.txt` est public et n'est pas une protection.
