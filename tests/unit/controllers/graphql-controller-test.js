import {moduleFor, test} from 'ember-qunit';

moduleFor('controller:graphql-controller', 'Unit | Controller | graphql-controller');

test('it can import a .graphql file', function(assert) {
  const controller = this.subject();

  assert.ok(controller.get('query'));
});
