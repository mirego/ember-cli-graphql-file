# ember-cli-graphql-file

An addon to precompile your `.graphql` files with [graphql-tag](https://github.com/apollographql/graphql-tag) and turn them into importable modules.

## Installation

```
$ ember install ember-cli-graphql-file
```

## Usage

__Put your GraphQL query in a file__

```graphql
# app/graphql/query.graphql

query {
  hero {
    name

    friends {
      name
    }
  }
}
```

__Import it from JS to execute it with Apollo__

```js
import Ember from 'ember';
import query from 'my-app/graphql/query';

export Ember.Route.extend({
  apollo: Ember.inject.service(),

  model() {
    return this.get('apollo').query({query});
  }
});
```
