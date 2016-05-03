var tplMessage = require('../tpl/message.string');

SPA.defineView('message', {
  html: tplMessage,
  bindEvents: {
    'beforeShow': function() {
  $('.sels-con>div:nth-child(2)').on('click',function(){
    console.log(2);
   $('.sels-con p').addClass('ddd').removeClass('dd')
  })
  $('.sels-con>div:nth-child(1)').on('click',function(){
    console.log(2);
   $('.sels-con p').addClass('dd').removeClass('ddd')
  })
    }
  }
});
