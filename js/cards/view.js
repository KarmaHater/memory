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