var bundle1 = require('bundle.one');

module.exports = {
  callDatFunction: function () {
    bundle1.doSomething('called from bundle2');
  }
};
