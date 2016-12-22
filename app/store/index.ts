'use strict';

if (process.env.NODE_ENV === 'production') {
    exports.configure = require('./store.prod').default;
} else {
    exports.configure = require('./store.dev').default;
}
