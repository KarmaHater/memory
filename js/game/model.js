Mermory.Game.Model = function() {
  this.cards = ["A","A","B", "B","C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H", "I", "I", "J", "J", "K", "K", "L", "L", "M", "M", "N", "N", "O", "O", "P", "P","Q","Q", "R", "R", "S", "S", "T", "T"]
}

Mermory.Game.Model.prototype = {
  shuffle: function(cards) {
    shuffledCards =  _.shuffle(cards)
    return shuffledCards
  },
  splitCards: function(number) {
    if(number === " 1"){
      $('.card').remove()
      var deck = _.sortBy(this.cards).slice(0, 16)
      return deck
    } else if (number === " 2"){
      $('.card').remove()
      var deck = _.sortBy(this.cards).slice(0, 24)
      return deck
    } else if (number === " 3"){
      $('.card').remove()
      var deck = _.sortBy(this.cards).slice(0, 32)
      return deck
    } else if (number === " 4"){
      $('.card').remove()
      var deck = _.sortBy(this.cards).slice(0, 40)
      return deck
    }
  }
}

