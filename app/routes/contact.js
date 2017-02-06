import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    sendEmail(name, subject, message){
      window.open('mailto:kikki.tkd@gmail.com' + '?subject=' + subject + '&body=' + message + ' Sincerely, ' + name);
    }
  }
});
