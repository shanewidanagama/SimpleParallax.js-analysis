"use strict";  //executes code in "strict mode"
// Page name: Javascript for Parallax.js
// Description: Selects images and applies various parallax animations
//to them using simpleParallax.js .

//applies a default parallax effect
let image = document.getElementsByClassName('sample');
new simpleParallax(image);

//applies a parallax effect that moves right as user scrolls down
let orientationImg = document.getElementsByClassName("orientationExample");
new simpleParallax(orientationImg, {orientation: 'right'});

//applies parralax effect that moves twice as fast
let scaleImg = document.getElementsByClassName('scaleExample');
new simpleParallax(scaleImg, {scale: 2});

//applies overflow tag to parallax to allow image to travel across page
let overflowImg = document.getElementsByClassName("overflowExample");
new simpleParallax(overflowImg, {overflow: true, orientation: 'right'});

//specifies how long the parallax effect should continue for after user
//has stopped scrolling
let delayImg = document.getElementsByClassName("delayExample");
new simpleParallax(delayImg, {delay: 5});
