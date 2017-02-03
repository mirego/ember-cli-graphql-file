import Ember from 'ember';
import query from '../graphql/query';

const {computed} = Ember;

export default Ember.Controller.extend({
  query: computed(() => {
    return query;
  })
});
