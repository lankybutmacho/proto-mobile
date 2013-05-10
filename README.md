<img align="right" src="http://f.cl.ly/items/21240p2l2W0R0M0K0Y0f/Screen%20Shot%202013-05-10%20at%2010.27.50%20AM.png" />

# Proto Mobile

Proto is a tiny framework for prototyping mobile interactions and animation using simple HTML and Javascript.

## Features

- View and interact with your prototypes in a desktop browser for easy iterating and sharing
- View the same page in a mobile browser to get a feel for how interactions are working
- Use the Timeline class to quickly put together sequences of events

## What's included

- `index.html` is a page that will render a preview of an iPhone in desktop browsers, and a container with no additional chrome in mobile browsers.
- jQuery, for setting up events and interactions.
- Timeline.js, a simple class for creating time-based series of JS events.
- Animate.css, a [great tool by Dan Eden](http://daneden.me/animate/) for quickly creating CSS animations.

## Usage

To get started, all you need to do is open index.html in your favorite editor and start putting stuff inside `<div id="container">`. I generally start by saving a screenshot or a mockup from Photoshop of the screen I'm working on to use as the "background", and then saving assets for any buttons or elements I want to make interactive or animated. The container is set up to display a 640x960 screen, so size your elements accordingly (i.e. for iOS prototypes, export as you would for a retina display).

From there, creating your prototype is just a matter of laying out the elements in HTML and CSS. Here are a few best practices:

### Layout

Don't be afraid to use absolute positioning. This is just a prototype after all, and it can be easier to just put things where you want them than to try to reason about the box model.

### Animation

If you want to animate things, I highly recommend doing it with CSS classes that you turn on/off with jQuery rather than the built-in jQuery effects. CSS animations make use of the GPU and will perform much better and look more like the real thing.

To the same point, if you want to quickly create transitions. use animate.css. For example, if you want to fade an image in, you can set it to display: none; on page load, and then later do this:

    $('#yourElement').show().addClass('animated fadeIn')

You can see demos of other effects [here](http://daneden.me/animate/).

### Events

For tap-triggered events, just create a jQuery click handler:

    $('#yourElement').click(function() {
      // do stuff here!
    });

If you want to trigger a sequence of events, use the included Timeline class. It works like this:

    var myTimeline = new Timeline();

    myTimeline.add(function() {
      // do stuff here!
    }, 0);

The second argument to Timeline.add() is the number of milleseconds after the start of this timeline that you want the event to occur. For the first event, we'll start at 0. Then we can queue up a couple more events:

    myTimeline.add(function() {
      // do more stuff here!
    }, 500);

    myTimeline.add(function() {
      // do even more stuff here!
    }, 2000);

Now, to kick it off just do this:

    myTimeline.start();

More likely you'll want to start your timeline on some click event, like this:

    $('#myElement').click(myTimeline.start);

### Previewing on mobile

The easiest way to see your prototype on a mobile device is to host it on a server that you can access from your phone.

For the most realistic experience, you'll want to save a bookmark to this URL to your home screen. This lets you see the page without any browser chrome, so it feels like a native app.