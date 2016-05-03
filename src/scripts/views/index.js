var tplIndex = require('../tpl/index.string');

SPA.defineView('index', {
  html: tplIndex,

  plugins: ['delegated'],

  modules: [{
    name: 'indexContent',
    container: '.m-index-body',
    views: ['search', 'my', 'chance', 'message'],
    defaultTag: 'chance'
  }],

  bindActions: {
    'tap.switch': function (el, data) {
      this.modules.indexContent.launch(data.tag);
    }
  },

  bindEvents: {
    'beforeShow': function() {
      var self = this;
      this.mySwiper = new Swiper('#index-swiper', {
        loop: false
      });
    }
  }
});
