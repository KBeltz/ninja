import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.store.push({
      data: [{
        id: 1,
        type: 'terminology',
        attributes: {
          term: 'Numbers',
          japanese: '',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Category'
        },
        relationships: {}
      }, {
        id: 2,
        type: 'terminology',
        attributes: {
          term: 'One',
          japanese: 'Ichi',
          kanji: '',
          korean: 'Hana',
          hangul: '',
          category: 'Numbers'
        },
        relationships: {}
      }, {
        id: 3,
        type: 'terminology',
        attributes: {
          term: 'Two',
          japanese: 'Ni',
          kanji: '',
          korean: 'Dul',
          hangul: '',
          category: 'Numbers'
        },
        relationships: {}
      }, {
        id: 4,
        type: 'terminology',
        attributes: {
          term: 'Three',
          japanese: 'San',
          kanji: '',
          korean: 'Set',
          hangul: '',
          category: 'Numbers'
        },
        relationships: {}
      }, {
        id: 5,
        type: 'terminology',
        attributes: {
          term: 'Four',
          japanese: 'Shi',
          kanji: '',
          korean: 'Net',
          hangul: '',
          category: 'Numbers'
        },
        relationships: {}
      }, {
        id: 6,
        type: 'terminology',
        attributes: {
          term: 'Five',
          japanese: 'Go',
          kanji: '',
          korean: 'Daseot',
          hangul: '',
          category: 'Numbers'
        },
        relationships: {}
      }, {
        id: 7,
        type: 'terminology',
        attributes: {
          term: 'Six',
          japanese: 'Roku',
          kanji: '',
          korean: 'Yaseot',
          hangul: '',
          category: 'Numbers'
        },
        relationships: {}
      }, {
        id: 8,
        type: 'terminology',
        attributes: {
          term: 'Seven',
          japanese: 'Shichi',
          kanji: '',
          korean: 'Ilgop',
          hangul: '',
          category: 'Numbers'
        },
        relationships: {}
      }, {
        id: 9,
        type: 'terminology',
        attributes: {
          term: 'Eight',
          japanese: 'Hachi',
          kanji: '',
          korean: 'Yeodel',
          hangul: '',
          category: 'Numbers'
        },
        relationships: {}
      }, {
        id: 10,
        type: 'terminology',
        attributes: {
          term: 'Nine',
          japanese: 'Ku',
          kanji: '',
          korean: 'Ahop',
          hangul: '',
          category: 'Numbers'
        },
        relationships: {}
      }, {
        id: 11,
        type: 'terminology',
        attributes: {
          term: 'Ten',
          japanese: 'Ju',
          kanji: '',
          korean: 'Yul',
          hangul: '',
          category: 'Numbers'
        },
        relationships: {}
      }, {
        id: 12,
        type: 'terminology',
        attributes: {
          term: 'Miscellaneous',
          japanese: '',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Category'
        },
        relationships: {}
      }, {
        id: 13,
        type: 'terminology',
        attributes: {
          term: 'The place where one trains',
          japanese: 'Dojo',
          kanji: '',
          korean: 'Dojang',
          hangul: '',
          category: 'Miscellaneous'
        },
        relationships: {}
      }, {
        id: 14,
        type: 'terminology',
        attributes: {
          term: 'Uniform',
          japanese: 'Gi',
          kanji: '',
          korean: 'Dobok',
          hangul: '',
          category: 'Miscellaneous'
        },
        relationships: {}
      }]
    });
  }
});
