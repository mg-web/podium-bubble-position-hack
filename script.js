// This needs to go in the footer script of the header and footer scripts tool.

jQuery(window).on('load', function() {
   setTimeout(function() { // Gotta wait for the podium script to load first. 100ms is enough.
      var screenw = jQuery(window).width(); // Detect screen width because we don't want to run this hack on desktop.
   
      if (screenw < 992) {
         // If the screen is mobile or tablet size then restyle the podium widget after everything is loaded.
         jQuery("#podium-bubble").css({"bottom": "60px", "right": "-20px"}); 
      }
   }, 100);
});
