/* eslint-env node */
'use strict';
// eslint-disable-next-line node/no-unpublished-require
const EngineAddon = require('ember-engines/lib/engine-addon');


module.exports = EngineAddon.extend({
  name: 'chat-engine',
  lazyLoading: false

});
