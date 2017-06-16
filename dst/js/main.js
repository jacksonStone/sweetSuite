"use strict";
(function(window){
  var sweetSuite = window.sweetSuite = {};
  var h = maquette.h;
  var projector = maquette.createProjector();

  
  function renderMaquette2() {
    return h('h1', ['Hey',
      h('div', ['Greetings'])
    ]);
  }

  // Initializes the projector 
  document.addEventListener('DOMContentLoaded', function () {
    console.log('hey');
    projector.append(document.body, renderMaquette);
  });

console.log('hey');


}(window));