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
        this.letterCards($('.card'))
        $(e.target).addClass('white')
      }.bind(this)
      )
  },
  letterCards: function(cards){
    cards.each( function(index, card){
      if ($(card).hasClass('white')){
        this.count +=  1
        }
      }.bind(this))
      this.checkCards()
    },
  checkCards: function(){
    if(this.count > 2 ){
      $('.card').each(function(index, card){
        $(card).removeClass('white')
      })
      this.count = 0
    }
  }
}