function Mockup() {

  this.init = function() {
    this.render();
  },

  this.render = function() {
    this.disableOverscroll_();
  },

  this.disableOverscroll_ = function() {
    // TODO(matt): find some other way to do this, eating touchmove events is shitty

    document.body.addEventListener('touchmove', function(event) {
      event.preventDefault();
    }, false);
  }

  this.init();
};