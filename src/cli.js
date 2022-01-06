#!/usr/bin/env node

const { resolve } = require('path');
const { create } = require('create-create-app');

const templateRoot = resolve(__dirname, '..', 'templates');

// See https://github.com/uetchy/create-create-app/blob/master/README.md for other options.

create('create-fxhash', {
  templateRoot,
  extra: {
  },
});
