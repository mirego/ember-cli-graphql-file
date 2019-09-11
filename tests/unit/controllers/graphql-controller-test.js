import {module, test, setupTest} from 'ember-qunit';

module('Unit | Controller | graphql-controller', (hooks) => {
  setupTest(hooks);

  test('it can import a .graphql file', function(assert) {
    const controller = this.owner.lookup('controller:graphql-controller');

    assert.ok(controller.get('query'));
  });
});
