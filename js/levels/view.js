Mermory.Level.Controller = function() {
  this.view = new Mermory.Level.View()
}

Mermory.Level.Controller.prototype = {
  init: function(){
   this.view.bindEvents()
  }
}

Mermory.Level.View = function() {}

Mermory.Level.View.prototype = {
  bindEvents: function(){
    $('i').on('click', function(e){
      var level = $(e.target).html()
      $(document).trigger('changeLevel', level)
    })
  }
}