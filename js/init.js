$(document).ready(function() {
  var cm = new Mermory.Game.Model
  var cardCollection = new Mermory.Game.Controller(cm)
  cardCollection.makeDeck()

  var levels = new Mermory.Level.Controller()
  levels.init()
})

