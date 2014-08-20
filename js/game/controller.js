Mermory.Game.Controller = function(model){
  this.model = model;
  this.view = new Mermory.Game.View;
  this.score = 0
}

Mermory.Game.Controller.prototype = {
  makeDeck: function(cards){
    var shuffledCards = this.model.shuffle(cards)
    this.view.displayCards(shuffledCards)
  },
  bindListeners: function(){
    $('body').on('click','.card', function(e){
      this.cardsCount($('.card'))
      $(e.target).addClass('white')
    }.bind(this))

    $('.css_btn_class').on('click', function(){
      $( ".card" ).each(function( index, card ) {
        $(card).remove()
      });
      var cards = this.model.shuffle(this.model.cards)
      this.view.removeScore()
      this.makeDeck(cards)
    }.bind(this))

    $(document).on('changeLevel', function(e, level){
      var cards = this.model.splitCards(level)
      this.makeDeck(cards)
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
  }
}