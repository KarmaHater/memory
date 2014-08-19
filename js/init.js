$(document).ready(function() {


  var cv = new Mermory.Cards.View
  var cm = new Mermory.Cards.Model
  var cardCollection = new Mermory.Cards.Controller(cm, cv)
  cardCollection.makeDeck()
})


