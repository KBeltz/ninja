import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', { path: "/" });
  this.route('about');
  this.route('terminology');
  this.route('contact');
  this.route('history');
  this.route('sources');
});

export default Router;
