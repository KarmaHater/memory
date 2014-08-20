Mermory.Cards.View = function(){}

Mermory.Cards.View.prototype = {
  displayCards: function(letters){
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
  flippedCard: function(card){
    $(card).css("background-color", "pink")
    $(card).removeClass("white")
  }
}