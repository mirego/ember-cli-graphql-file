import Ember from 'ember';
import config from './config/environment';

const {locationType: location, rootURL} = config;

const Router = Ember.Router.extend({
  location,
  rootURL
});

Router.map(() => {});

export default Router;
