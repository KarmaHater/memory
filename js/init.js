$(document).ready(function() {
  var cm = new Mermory.Game.Model
  var cardCollection = new Mermory.Game.Controller(cm)
  cardCollection.bindListeners()
  var levels = new Mermory.Level.Controller()
  levels.init()
})

