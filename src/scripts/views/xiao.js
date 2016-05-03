var tplXiao = require('../tpl/xiao.string');
SPA.defineView('xiao', {
  html: tplXiao,
  plugins: ['delegated'],
  bindActions: {
    'show.xiao': function () {
      console.log(11);
      this.hide();
    }
  },
  bindEvents: {
    'beforeShow': function() {
      console.log(11);
      var self = this;
      this.mySwiper = new Swiper('#index-swiper', {
        loop: false
      });
    }
  }
});
