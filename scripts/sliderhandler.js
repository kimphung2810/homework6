(function(window) {
    'use strict';

    var App = window.App || {};
    var $ = window.jQuery;


    function SliderHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }

        this.$SliderElement = $(selector);
        if (this.$SliderElement.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    SliderHandler.prototype.addSliderHandler = function(selector) {
        console.log('Showing number of range');
        this.$SliderElement.on('change', function(event) {
            event.preventDefault();
            var value = event.target.value;
            var $text = $(selector);
            console.log($text);
            $text[0].textContent = "Cafeeine Rating: " + value;
            if (value <= 33) $text.css('color', 'green');
            else if (value > 66) $text.css('color', 'red');
            else $text.css('color', 'blue');
        });
    };

    App.SliderHandler = SliderHandler;
    window.App = App;
})(window);
