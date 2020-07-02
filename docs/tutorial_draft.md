# My Take on the JAM Stack Tutorial

Tutorial 1

Setting up all the components:

This Webpage is hosted on a Ubuntu Server 18 machine in the Cloud. 
In this Tutorial you will learn how to setup an environment containing a Full Web app  build with Angular. 
A Headless CMS with the help of Strapi. Where we will host our content and access it via it's API.
Each of those apps will be hosted in a docker container.
To make the development as smooth as possible we will Integrate Travis-CI to our git repository. This will enable a CI environment where the docker images will be pushed to the docker.io Hub repository.



## Setting up the environment

I have created a monolithic approach for the backend as well as the frontend. Just to make sure everything is in place. I will consider moving it in seperate repositories in the future.

STRAPI: Setting up the headless CMS. 
Different post why i have considered STRAPI as the CMS and moved away from GHOST CMS.

strapi is easily setup as with a great CLI they offering.
I followed their Quickstart tuorial. For the local environment we are using the sqlite3 database, later on for production we will move to mysql. To accomplish we will adjust the configuration which is placed under `./config/environments`. 

### development
``` json 
{
  "defaultConnection": "default",
  "connections": {
    "default": {
      "connector": "bookshelf",
      "settings": {
        "client": "sqlite",
        "filename": ".tmp/data.db",
        "host": "",
        "port": "",
        "database": "",
        "username": "",
        "password": "",
        "ssl": false
      },
      "options": {
        "useNullAsDefault": true
      }
    }
  }
}

```

### production
``` json
{
  "defaultConnection": "default",
  "connections": {
    "default": {
      "connector": "bookshelf",
      "settings": {
        "client": "mysql",
        "host": "${process.env.DATABASE_HOST || '127.0.0.1'}",
        "port": "${process.env.DATABASE_PORT || 27017}",
        "database": "${process.env.DATABASE_NAME || 'strapi'}",
        "username": "${process.env.DATABASE_USERNAME || ''}",
        "password": "${process.env.DATABASE_PASSWORD || ''}"
      },
      "options": {}
    }
  }
}

```
as you can see the only real difference is the client `connections.default.settings.client` property. Production only have some variables to connect to the actual mysql server whereas sqlite has a filename property which links to the .db file itself.


