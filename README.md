# RDVApp
Evaluation CDA - Application de prise de Rendez vous

L'application est composée de plusieurs microservices . Le prérequis est d'avoir docker installé sur sa machine , il faut ensuite lancer la commande: <b>docker-compose up -d</b>

Une fois les microservices installés et démarrés il faut :

## Configurer la base de données :
 1) Pour ce faire lancer la commande : <b>docker exec -it www_docker_symfony bash</b>
 2) à l'intérieur du Shell lancer : <b>cd api</b> pour se mettre dans le dossier du projet symfony
 3) Dans le dossier api lancer : <b>composer install</b> pour installer les dépendances du projet
 4) Dans le dossier api lancer : <b>php bin/console doctrine:database:create</b> pour créer la base de données
 5) puis lancer : <b>php bin/console doctrine:migrations:migrate</b> pour mettre à jour le schéma de la base de données
 6) puis lancer : <b>php bin/console doctrine:fixtures:load</b> pour initialiser la base de données avec les données de base

## Lancer l'application cliente :
 1) Lancer la commande : <b> docker exec -it client bash </b>
 2) Lancer la commande : <b> npm install </b> pour installer les dépendances du projet .


 Pour lancer l'application cliente aller à l'adresse : http://localhost:3000/
 
 Une fenetre de login est présente , pour s'authentifier il faut utiliser le compte suivant :
   - username : user
   - password : paris

![Alt text](loginToapp.png?raw=true "Login")

## Ajouter un Rendez-vous :
  Voici l'interface de prise de rendez-vous :

![Alt text](RdvApp.png?raw=true "Rdv App")

Sélectionner en haut dans la liste un commercial , puis les dates et heures de début et de fin du rendez-vous

## Trouble shooting
Il se peut que les dépendances axios et react-query ne soit pas reconnues immédiatement . j'ai résolu le problème en installant ces dépendances dans le microservice client
Pour ce faire : 
1) Lancer : <b> docker exec -it client bash </b>
2) Lancer : <b> npm install axios react-query </b>
  




