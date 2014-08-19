Mermory.Cards.Model = function() {
  this.cards = ["A","A","B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H", "I", "I", "J", "J", "K", "K", "L", "L", "M", "M", "N", "N", "O", "O", "P", "P","Q","Q","R", "R", "S", "S", "T", "T"]
}

Mermory.Cards.Model.prototype = {
  shuffle: function() {
    this.cards = _.shuffle(this.cards)
  }
}

Mermory.Cards.View = function(){

}

Mermory.Cards.View.prototype = {
  displayCards: function(letters){
    var source   = $("#card-template").html();
    var template = Handlebars.compile(source);
    var context = {cards: letters}
    var html    = template(context);
    $('.container').append(html)
  }
}

Mermory.Cards.Controller = function(model, view, game){
  this.model = model;
  this.view = view;
  this.count = 0
}

Mermory.Cards.Controller.prototype = {
  makeDeck: function(){
    this.model.shuffle()
    this.view.displayCards(this.model.cards)
    this.bindListeners()
  },
  bindListeners: function(){
    $('.card').on('click', function(e){
        this.cardsCount($('.card'))
        $(e.target).addClass('white')
      }.bind(this))
  },
  cardsCount: function(cards){
    cards.each( function(index, card){
      if ($(card).hasClass('white')){
        this.count +=  1
         }
      }.bind(this))
      if (this.count > 2) {
        this.checkMatch()
        };
    },
  checkMatch:function(){
    console.log('cats')
      var cards =  $('.container').find('.white')
      var first = cards.first().html()
      var last = cards.last().html()
      if ( first === last){
        console.log('cats')
    //   }else {
    //     this.turnCards()
    //   }
    }
  }
}