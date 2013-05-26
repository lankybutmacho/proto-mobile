function Mockup() {

  this.init = function() {
    this.$reset = $('#reset');
    this.render();
  },

  this.render = function() {
    this.disableOverscroll_();
    this.decorate();
  },

  this.decorate = function() {
    this.$reset.click(function() { location.reload(); });
  },

  this.disableOverscroll_ = function() {
    // TODO(matt): find some other way to do this, eating touchmove events is not great

    document.body.addEventListener('touchmove', function(event) {
      event.preventDefault();
    }, false);
  }
};