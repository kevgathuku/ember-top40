App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
  	var url = 'http://ben-major.co.uk/labs/top40/api/singles/';
    return Ember.$.getJSON(url);
  }
});

Ember.Handlebars.helper('format-date', function(date) {
  return moment.unix(date).format('LL');
});
