Mermory.Cards.Model = function() {
  this.cards = ["A","A","B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H", "I", "I", "J", "J", "K", "K", "L", "L", "M", "M", "N", "N", "O", "O", "P", "P","Q","Q","R", "R", "S", "S", "T", "T"]
}

Mermory.Cards.Model.prototype = {
  shuffle: function() {
    this.cards = _.shuffle(this.cards)
  }
}

Mermory.Cards.Controller = function(model, view, game){
  this.model = model;
  this.view = view;
  this.score = 0
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
      if ($('.white').length == 2) {
        this.checkMatch()
        };
    },
  checkMatch:function(){
      var cards =  $('.card_container').find('.white')
      var firstCard = cards.first()
      var lastCard = cards.last()
      var firstLetter = cards.first().html()
      var lastLetter = cards.last().html()
      if ( firstLetter == lastLetter){
        this.turnCard(firstCard)
        this.turnCard(lastCard)
        this.changeScore()
        this.view.displayScore(this.score)
        this.winner()
      } else {
        $(cards).first().removeClass('white')
        $(cards).last().removeClass('white')
      }
    },
    changeScore: function(){
      this.score += 1
    },
    turnCard: function(card){
      this.view.flippedCard(card)
    },
    winner: function(){
      if(this.score == 20){
        alert('You win!')
      }
    }
  }