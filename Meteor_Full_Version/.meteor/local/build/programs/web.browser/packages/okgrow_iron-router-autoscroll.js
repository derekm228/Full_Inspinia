//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var IronRouterAutoscroll;

(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// packages/okgrow:iron-router-autoscroll/client/iron-router-autoscroll.js                          //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                    //
IronRouterAutoscroll = {                                                                            // 1
  animationDuration: 200,                                                                           // 2
};                                                                                                  // 3
                                                                                                    // 4
var scrollPositions = {};                                                                           // 5
var backToPosition;                                                                                 // 6
                                                                                                    // 7
// Keep track of the last position for every page in case we return to it                           // 8
// via the back button or history.                                                                  // 9
// TODO we should probably be keeping this in history.state rather than having                      // 10
// a scrollPositions object                                                                         // 11
var saveScrollPosition = function () {                                                              // 12
  scrollPositions[window.location] = $(window).scrollTop();                                         // 13
};                                                                                                  // 14
                                                                                                    // 15
window.onpopstate = function(event) {                                                               // 16
  // We used the back button, find the position we were at on that page                             // 17
  // last time                                                                                      // 18
  backToPosition = scrollPositions[window.location];                                                // 19
};                                                                                                  // 20
                                                                                                    // 21
// Scroll to the right place after changing routes. "The right place" is:                           // 22
// 1. The previous position if we're returning via the back button                                  // 23
// 2. The element whose id is specified in the URL hash                                             // 24
// 3. The top of page otherwise                                                                     // 25
var scrollToTop = function () {                                                                     // 26
  var self = this;                                                                                  // 27
  self.next();                                                                                      // 28
                                                                                                    // 29
  if (self.ready()) {                                                                               // 30
    // defer until after the DOM update so that the position can be correct                         // 31
    Tracker.afterFlush(function () {                                                                // 32
      var hash = window.location.hash;                                                              // 33
      var position;                                                                                 // 34
                                                                                                    // 35
      if (backToPosition) {                                                                         // 36
        position = backToPosition;                                                                  // 37
        backToPosition = null;                                                                      // 38
      } else if ($(hash).length) {                                                                  // 39
        position = $(hash).offset().top;                                                            // 40
      }                                                                                             // 41
      else {                                                                                        // 42
        position = 0;                                                                               // 43
      }                                                                                             // 44
                                                                                                    // 45
      $('body,html').animate({                                                                      // 46
        scrollTop: position                                                                         // 47
      }, IronRouterAutoscroll.animationDuration);                                                   // 48
    });                                                                                             // 49
  }                                                                                                 // 50
};                                                                                                  // 51
                                                                                                    // 52
if (Package['iron:router']) {                                                                       // 53
  Package['iron:router'].Router.onStop(saveScrollPosition);                                         // 54
  Package['iron:router'].Router.onRun(scrollToTop);                                                 // 55
} else {                                                                                            // 56
  if (console.warn) {                                                                               // 57
    console.warn("The okgrow:iron-router-autoscroll package requires iron:router, please add it."); // 58
  }                                                                                                 // 59
}                                                                                                   // 60
                                                                                                    // 61
//////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['okgrow:iron-router-autoscroll'] = {
  IronRouterAutoscroll: IronRouterAutoscroll
};

})();
