hapi-mailin
===========

Artisanal inbound emails for hapi

Install
=======

```bash
npm install --save hapi-mailin
```


Usage
=====

```js
var mailinOpts = {
  port: 25
};

server.pack.register({
  plugin: require('hapi-mailin'),
  options: mailinOpts
});
```




