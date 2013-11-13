# lusd #

**lusd** stands for *little url shortening daemon* and is what it says.

## Requirements ##

 - CouchDB Database
 - python-configobj
 - python-couchdb
 - python-twisted 

## Setup ##

 - Create database in CouchDB
 - Adapt config.cfg to your needs

## Local startup ##

Start the daemon: 

    $ ./lusd


It will run on port 8080 per default.
Browse to http://mydomain:8080/static/create.html to create short urls.
Everything in the static/ subdir will be served by lusd, e.g. for your css etc.

If you'd like to run lusd behind a webserver as Apache, you could use this
rewrite rule:

	RewriteEngine on
	RewriteBase /
	RewriteRule ^\+(.+) http://localhost:8080/+$1 [P]

