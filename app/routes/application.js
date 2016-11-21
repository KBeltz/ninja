import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // Categories
    // 100: Category
    // 200: Numbers
    // 300: Blocks
    // 400: Punches
    // 500: Strikes
    // 600: Kicks
    // 700: Stances
    // 800: Miscellaneous
    this.store.push({
      data: [{
        id: 100,
        type: 'terminology',
        attributes: {
          term: 'Numbers',
          japanese: '',
          kanji: '',
          korean: '',
          hangul: '',
          category: ''
        },
        relationships: {}
      }, {
        id: 200,
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
        id: 201,
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
        id: 202,
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
        id: 203,
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
        id: 204,
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
        id: 205,
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
        id: 206,
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
        id: 207,
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
        id: 208,
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
        id: 209,
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
        id: 101,
        type: 'terminology',
        attributes: {
          term: 'Miscellaneous',
          japanese: '',
          kanji: '',
          korean: '',
          hangul: '',
          category: ''
        },
        relationships: {}
      }, {
        id: 800,
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
        id: 801,
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
      }, {
        id: 802,
        type: 'terminology',
        attributes: {
          term: 'Begin',
          japanese: 'Hajime',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Miscellaneous'
        },
        relationships: {}
      }, {
        id: 803,
        type: 'terminology',
        attributes: {
          term: 'Bow',
          japanese: 'Rei',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Miscellaneous'
        },
        relationships: {}
      }, {
        id: 804,
        type: 'terminology',
        attributes: {
          term: 'Basic',
          japanese: 'Kihon',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Miscellaneous'
        },
        relationships: {}
      }, {
        id: 805,
        type: 'terminology',
        attributes: {
          term: 'Technique',
          japanese: 'Waza',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Miscellaneous'
        },
        relationships: {}
      }, {
        id: 806,
        type: 'terminology',
        attributes: {
          term: 'Stop',
          japanese: 'Yame',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Miscellaneous'
        },
        relationships: {}
      }]
    });
  }
});
