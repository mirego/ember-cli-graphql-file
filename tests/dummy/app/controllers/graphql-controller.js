import {computed} from '@ember/object';
import Controller from '@ember/controller';
import query from '../graphql/query';

export default Controller.extend({
  query: computed(() => {
    return query;
  })
});
