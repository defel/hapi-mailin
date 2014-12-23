var mailin = require('mailin');

exports.register = function (plugin, options, next) {
  mailin.start(options);

  next(null);
}

exports.register.attributes = {
    name: 'mailin'
};