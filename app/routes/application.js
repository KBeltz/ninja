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
        id: 102,
        type: 'terminology',
        attributes: {
          term: 'Numbers',
          japanese: '',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Numbers'
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
        id: 103,
        type: 'terminology',
        attributes: {
          term: 'Blocks',
          japanese: 'Uke',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Blocks'
        },
        relationships: {}
      }, {
        id: 300,
        type: 'terminology',
        attributes: {
          term: 'Upper/Rising Block',
          japanese: 'Age Uke',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Blocks'
        },
        relationships: {}
      }, {
        id: 301,
        type: 'terminology',
        attributes: {
          term: 'Knife Hand Block',
          japanese: 'Shoto Uke',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Blocks'
        },
        relationships: {}
      }, {
        id: 302,
        type: 'terminology',
        attributes: {
          term: 'Inside Center Block',
          japanese: 'Uchi Uke',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Blocks'
        },
        relationships: {}
      }, {
        id: 303,
        type: 'terminology',
        attributes: {
          term: 'Down/Lower Block',
          japanese: 'Gedan Barai',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Blocks'
        },
        relationships: {}
      }, {
        id: 304,
        type: 'terminology',
        attributes: {
          term: 'Outside Center Block',
          japanese: 'Shoto Uke',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Blocks'
        },
        relationships: {}
      }, {
        id: 305,
        type: 'terminology',
        attributes: {
          term: 'Middle Level Block',
          japanese: 'Chudan Uke',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Blocks'
        },
        relationships: {}
      }, {
        id: 306,
        type: 'terminology',
        attributes: {
          term: 'Upper Level Block',
          japanese: 'Jodan Uke',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Blocks'
        },
        relationships: {}
      }, {
        id: 307,
        type: 'terminology',
        attributes: {
          term: 'Lower Level Block',
          japanese: 'Gedan Uke',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Blocks'
        },
        relationships: {}
      }, {
        id: 308,
        type: 'terminology',
        attributes: {
          term: 'Knee Block',
          japanese: 'Hiza Uke',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Blocks'
        },
        relationships: {}
      }, {
        id: 309,
        type: 'terminology',
        attributes: {
          term: 'X-Block',
          japanese: 'Juji Uke',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Blocks'
        },
        relationships: {}
      }, {
        id: 310,
        type: 'terminology',
        attributes: {
          term: 'Augmented Block',
          japanese: 'Morote Uke',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Blocks'
        },
        relationships: {}
      }, {
        id: 311,
        type: 'terminology',
        attributes: {
          term: 'Sweeping Block',
          japanese: 'Nagashi Uke',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Blocks'
        },
        relationships: {}
      }, {
        id: 312,
        type: 'terminology',
        attributes: {
          term: 'Rising Hand Block',
          japanese: 'Sashite Uke',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Blocks'
        },
        relationships: {}
      }, {
        id: 313,
        type: 'terminology',
        attributes: {
          term: 'Palm Heel Block',
          japanese: 'Teishi Uke',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Blocks'
        },
        relationships: {}
      },  {
        id: 104,
        type: 'terminology',
        attributes: {
          term: 'Punches',
          japanese: 'Zuki',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Punches'
        },
        relationships: {}
      }, {
        id: 400,
        type: 'terminology',
        attributes: {
          term: 'Upper/Rising Punch',
          japanese: 'Age Zuki',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Punches'
        },
        relationships: {}
      }, {
        id: 401,
        type: 'terminology',
        attributes: {
          term: 'U Punch',
          japanese: 'Awase Zuki',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Punches'
        },
        relationships: {}
      }, {
        id: 402,
        type: 'terminology',
        attributes: {
          term: 'Straight Punch',
          japanese: 'Choku Zuki',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Punches'
        },
        relationships: {}
      }, {
        id: 403,
        type: 'terminology',
        attributes: {
          term: 'Middle Punch',
          japanese: 'Chudan Zuki',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Punches'
        },
        relationships: {}
      }, {
        id: 404,
        type: 'terminology',
        attributes: {
          term: 'Reverse Punch',
          japanese: 'Gyaku Zuki',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Punches'
        },
        relationships: {}
      }, {
        id: 405,
        type: 'terminology',
        attributes: {
          term: 'Middle Level Block',
          japanese: 'Chudan Uke',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Punches'
        },
        relationships: {}
      }, {
        id: 406,
        type: 'terminology',
        attributes: {
          term: 'Face Level/High Punch',
          japanese: 'Jodan Zuki',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Punches'
        },
        relationships: {}
      }, {
        id: 407,
        type: 'terminology',
        attributes: {
          term: 'Double U Punch',
          japanese: 'Morote Zuki',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Punches'
        },
        relationships: {}
      }, {
        id: 408,
        type: 'terminology',
        attributes: {
          term: 'Knee Block',
          japanese: 'Hiza Uke',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Punches'
        },
        relationships: {}
      }, {
        id: 409,
        type: 'terminology',
        attributes: {
          term: 'X-Block',
          japanese: 'Juji Uke',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Punches'
        },
        relationships: {}
      }, {
        id: 410,
        type: 'terminology',
        attributes: {
          term: 'Lunge Punch',
          japanese: 'Oi Zuki',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Punches'
        },
        relationships: {}
      }, {
        id: 411,
        type: 'terminology',
        attributes: {
          term: 'Sweeping Block',
          japanese: 'Nagashi Uke',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Punches'
        },
        relationships: {}
      }, {
        id: 412,
        type: 'terminology',
        attributes: {
          term: 'Vertical Punch',
          japanese: 'Tate Zuki',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Punches'
        },
        relationships: {}
      }, {
        id: 413,
        type: 'terminology',
        attributes: {
          term: 'Palm Heel Punch',
          japanese: 'Teisho Zuki',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Punches'
        },
        relationships: {}
      }, {
        id: 414,
        type: 'terminology',
        attributes: {
          term: 'Close Punch',
          japanese: 'Ura Zuki',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Punches'
        },
        relationships: {}
      }, {
        id: 108,
        type: 'terminology',
        attributes: {
          term: 'Miscellaneous',
          japanese: '',
          kanji: '',
          korean: '',
          hangul: '',
          category: 'Miscellaneous'
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
