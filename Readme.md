# Projet Next.js avec PostgreSQL, Apollo Client/Server, TypeORM, GraphQL, React, et
Docker

Ce projet vous permettra de démarrer rapidement avec un environnement Next.js complet
utilisant PostgreSQL comme base de données, Apollo Client/Server pour la gestion des
requêtes GraphQL, TypeORM pour la gestion des modèles de base de données, React pour
l&#39;interface utilisateur, et Docker pour la gestion des conteneurs.


### Étapes d&#39;initialisation

```bash

npx create-next-app . --typescript # Initialise le projet Next.js avec TypeScript
npm install @apollo/client graphql # Installe les dépendances pour Apollo Client et GraphQL

npm install typeorm reflect-metadata pg # Installe TypeORM et le driver PostgreSQL
npm install @nestjs/typeorm @nestjs/graphql @nestjs/apollo graphql-tools graphql apollo-
server-express # Installe les dépendances pour Apollo Server et GraphQL
npm start # Lance le serveur Node.js


### Docker

docker build -t nom_image . # Remplacez "nom_image" par le nom que vous souhaitez donner à votre image pour creer une image docker
docker-compose up -d # Démarre les conteneurs en arrière-plan
docker run -p 3000:3000 nom_image # Remplacez "nom_image" par le nom que vous avez donné à votre image