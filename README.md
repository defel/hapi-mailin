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
  port: 25,
  webhook: 'http://localhost:8100/api/emails',
};

server.pack.register({
  plugin: require('hapi-mailin'),
  options: mailinOpts
}, function(err) {
  server.plugins['hapi-mailin'].mailin.on("authorizeUser", function(connection, username, password, done) {
    if (username == "demo" && password == "demo") {
      done(null, true);
    } else {
      done(new Error("Unauthorized!"), false)
    }
  });

  server.plugins['hapi-mailin'].mailin.on("message", function(connection, data, content) {
    // do something with data
  }
});
```




