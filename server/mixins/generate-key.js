const uuidV4 = require('uuid/v4');
module.exports = function(Model, options) {
  'use strict';
  Model.observe('before save', function event(ctx, next) { //Observe any insert/update event on Model
    if (ctx.instance) {
      ctx.instance.id = uuidV4();
    } else {
      ctx.data.id = uuidV4();
    }
    next();
  });
};
