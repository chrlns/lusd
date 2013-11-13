# lusd #

**lusd** stands for *little url shortening daemon* and is what it says.

## Requirements ##

 - CouchDB Database
 - python-configobj
 - python-couchdb
 - python-twisted 

## Setup ##

 - Create database in CouchDB
 - Create document with ID "stats_" and one field "nextID=1"
 - Adapt config.cfg to your needs

## Local startup ##

Start the daemon: 
<pre>
$ ./lusd
</pre>

It will run on port 8080 per default.
Browse to http://mydomain:8080/static/create.html to create short urls.
Everything in the static/ subdir will be served by lusd, e.g. for your css etc.

If you'd like to run lusd behind a webserver as Apache, you could use this
rewrite rule:
<pre>
RewriteEngine on
RewriteBase /
RewriteRule ^\+(.+) http://localhost:8080/+$1 [P]
</pre>
