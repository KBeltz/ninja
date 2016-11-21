import DS from 'ember-data';

export default DS.Model.extend({
  term: DS.attr('string'),
  japanese: DS.attr('string'),
  kanji: DS.attr('string'),
  korean: DS.attr('string'),
  hangul: DS.attr('string'),
  category: DS.attr('string')
});
