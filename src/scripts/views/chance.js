var tplChance = require('../tpl/chance.string');

SPA.defineView('chance', {
  html: tplChance,

  plugins: ['delegated'],
  bindActions: {
  'show.xiao':function(){
    SPA.open('xiao',{
    param:{
      friendId:2
    }
    });
    }
  }

});
