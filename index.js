/* eslint-env node */

'use strict';

const Filter = require('broccoli-persistent-filter');
const gql = require('graphql-tag');

const ADDON_NAME = 'ember-cli-graphql-file';

class GraphQLCompiler extends Filter {
  constructor(inputNode) {
    super(inputNode, {name: ADDON_NAME});
    this.extensions = ['graphql'];
    this.targetExtension = 'js';
  }

  processString(content) {
    return `export default ${JSON.stringify(gql`${content}`)};`;
  }
}

module.exports = {
  name: ADDON_NAME,

  // eslint-disable-next-line no-unused-vars
  setupPreprocessorRegistry(type, registry) {
    registry.add('js', {
      name: ADDON_NAME,
      ext: 'graphql',

      toTree(tree) {
        return new GraphQLCompiler(tree);
      }
    });
  }
};
