/* eslint-env node */

'use strict';

const Filter = require('broccoli-persistent-filter');
const gql = require('graphql-tag');

const ADDON_NAME = 'ember-cli-graphql-file';

function GraphQLCompiler(inputNode) {
  Filter.call(this, inputNode, {
    name: ADDON_NAME
  });
}

GraphQLCompiler.prototype = Object.create(Filter.prototype);
GraphQLCompiler.prototype.constructor = GraphQLCompiler;
GraphQLCompiler.prototype.extensions = ['graphql'];
GraphQLCompiler.prototype.targetExtension = 'js';

GraphQLCompiler.prototype.processString = function(content) {
  return `export default ${JSON.stringify(gql`${content}`)};`;
};

module.exports = {
  name: ADDON_NAME,

  setupPreprocessorRegistry: function(type, registry) {
    registry.add('js', {
      name: ADDON_NAME,
      ext: 'graphql',

      toTree: function(tree) {
        return new GraphQLCompiler(tree);
      }
    });
  }
};
