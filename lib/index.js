var mailin = require('mailin');

exports.register = function (plugin, options, next) {
  mailin.start(options);

  plugin.expose('mailin', mailin);

  next(null);
}

exports.register.attributes = {
    name: 'hapi-mailin'
};