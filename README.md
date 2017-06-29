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

## License

`ember-cli-graphql-file` is © 2017 [Mirego](http://www.mirego.com) and may be freely distributed under the [New BSD license](http://opensource.org/licenses/BSD-3-Clause).
See the [`LICENSE.md`](https://github.com/mirego/ember-cli-graphql-file/blob/master/LICENSE.md) file.

## About Mirego

[Mirego](http://mirego.com) is a team of passionate people who believe that work is a place where you can innovate and have fun. We're a team of [talented people](http://life.mirego.com) who imagine and build beautiful Web and mobile applications. We come together to share ideas and [change the world](http://mirego.org).

We also [love open-source software](http://open.mirego.com) and we try to give back to the community as much as we can.
