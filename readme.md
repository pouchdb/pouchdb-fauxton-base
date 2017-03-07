PouchDB-Fauxton - base code
===========================

[![Greenkeeper badge](https://badges.greenkeeper.io/pouchdb/pouchdb-fauxton-base.svg)](https://greenkeeper.io/)

This is a fork of [the express-pouchdb Fauxton project](https://github.com/pouchdb/pouchdb-fauxton)
which makes Fauxton run on top of pure PouchDB by intercepting
XMLHttpRequests. Go there for non-pouchdb-fauxton browser addons
specific stuff.

Express-pouchdb's Fauxton is in turn based on
[the main Fauxton project](https://github.com/apache/couchdb-fauxton).
Go there for the real repo and real documentation.

Build
-----

Build the HTML/CSS/JS:

    npm install
    ./node_modules/.bin/grunt couchdb

Then copy `dist/release` into your `pouchdb-fauxton-logic/fauxton` directory.
