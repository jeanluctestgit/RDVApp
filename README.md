# RDVApp
Evaluation CDA - Application de prise de Rendez vous

L'application est composée de plusieurs microservices . Le prérequis est d'avoir docker installé sur sa machine , il faut ensuite lancer la commande:\
### docker-compose up -d

Une fois les microservices installés et démarrés il faut :\

## Configurer la base de données :
 1) Pour ce faire lancer la commande : <b>docker exec -it www_docker_symfony</b>
 2) à l'intérieur du Shell lancer : <b>cd api</b> pour se mettre dans le dossier du projet symfony
 3) Dans le dossier api lancer : <b>php bin/console doctrine:database:create</b> pour créer la base de données
 4) puis lancer : <b>php bin/console doctrine:migrations:migrate</b> pour mettre à jour le schéma de la base de données
 5) puis lancer : <b>php bin/console doctrine:fixtures:load</b> pour initialiser la base de données avec les données de base

## Lancer l'application cliente :
 Pour lancer l'application cliente aller à l'adresse : http://localhost:3000/
 
 Une fenetre de login est présente , pour s'authentifier il faut utiliser le compte suivant :
   - username : user
   - password : paris




