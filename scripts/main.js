(function(window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var SLIDER_SELECTOR = '[data-slider="slider"]';
    var TEXT_SELECTOR = '[data-text="text"]';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var myTruck = new Truck('ncc-1701', new DataStore());
    window.myTruck = myTruck;
    var formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));

    var sliderHandler = new App.SliderHandler(SLIDER_SELECTOR);
    sliderHandler.addSliderHandler(TEXT_SELECTOR);

    console.log(formHandler);
})(window);
