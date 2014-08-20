Mermory.Game.View = function(){}

Mermory.Game.View.prototype = {
  displayCards: function(letters){
    // var template = "#" + "t"
    var source   = $("#card-template").html();
    var template = Handlebars.compile(source);
    var context = {cards: letters}
    var html    = template(context);
    $('.card_container').append(html)
  },
  displayScore: function(score){
    $('.card_score').remove()
    var source   = $("#score-template").html();
    var template = Handlebars.compile(source);
    var context = {score: score}
    var html    = template(context);
    $('.score').append(html)
  },
  removeScore: function(){
    $('.card_score').remove()
  },
  flippedCard: function(card){
    $(card).addClass("flippedCard")
    $(card).removeClass("white")
  }
}