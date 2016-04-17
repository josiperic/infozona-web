'use strict';

(function(){
    // code goes here
    console.log('loaded script');
    $(".header-toggle").on("click", function() {
        $(".header-toggle").parent().toggleClass('active');
        console.log("toggling");
    });
})();
