'use strict';

module.exports = function(Stylist) {

  Stylist.listStylists = function(cb) {
    Stylist.find({
      fields: {}
    }, cb);
  };
  Stylist.remoteMethod('listStylists', {
    returns: {arg: 'stylists', type: 'array'},
    http: {path:'/list-stylists', verb: 'get'}
});

};
