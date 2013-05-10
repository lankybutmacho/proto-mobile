function Timeline() {

  var self = this;

  this.init = function() {
    self.events = [];
    self.timeouts = [];
  };

  this.reset = function() {
    self.timeouts = [];
  };

  this.add = function(eventFunction, milliseconds) {
    self.events.push({
      m: milliseconds,
      f: eventFunction
    });
  };

  this.start = function() {
    $(self.events).each(function(i, e) {
      self.timeouts[i] = setTimeout(e.f, e.m);
    });
  };

  self.init();
}