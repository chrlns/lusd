# LUSD #

LUSD stands for little url shortening daemon and is what it says.

## Requirements ##

 - CouchDB Database
 - python-configobj
 - python-couchdb
 - python-twisted 

## Setup ##

 - Create database in CouchDB
 - Create document with ID "stats_" and one field "nextID=1"
 - Adapt config.cfg to your needs"

## Local startup ##

Start the daemon: ./lusd
It will run on port 8080 per default.

