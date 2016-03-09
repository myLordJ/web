'use strict';

angular.module('rac.directives')
.directive('slider', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      scope.$watch('loadedImages', function() {
        attrs.slider = attrs.slider === 'true';
        if (attrs.slider) {
          var slider = $(element);
          var $isotopeContainer = $(element).closest('div.isotope');

          slider.imagesLoaded().done( function( ){
            $(element).flexslider({
              slideshow: slider.attr('data-flex-slideshow') === 'false' ? false : true,
              animation: !slider.attr('data-flex-animation') ? 'slide' : slider.attr('data-flex-animation'),
              direction: !slider.attr('data-flex-sliderdirection') ? 'horizontal' : slider.attr('data-flex-sliderdirection'),
              slideshowSpeed: parseInt(!slider.attr('data-flex-speed') ? 7000 : slider.attr('data-flex-speed')),
              animationSpeed: parseInt(!slider.attr('data-flex-duration') ? 600 : slider.attr('data-flex-duration')),
              itemWidth: !slider.attr('data-flex-itemwidth') ? 0 : parseInt(slider.attr('data-flex-itemwidth'), 10),
              minItems: !slider.attr('data-flex-itemmin') ? 0 : parseInt(slider.attr('data-flex-itemmin'), 0),
              maxItems: !slider.attr('data-flex-itemmax') ? 0 : parseInt(slider.attr('data-flex-itemmax'), 0),
              controlNav: slider.attr('data-flex-controls') === 'thumbnails' ? 'thumbnails' : slider.attr('data-flex-controls') === 'hide' ? false : true,
              directionNav: slider.attr('data-flex-directions') === 'hide' ? false : true,
              prevText: '',
              nextText: '',
              smoothHeight: true,
              animationLoop: slider.attr('data-flex-animationloop') === 'false' ? false : true,
              reverse: slider.attr('data-flex-reverse') === 'false' ? false : true,
              useCSS : false,
              after: function() {
                if ($isotopeContainer.length > 0 ) {
                  $isotopeContainer.isotope( 'reLayout' );
                }
              }
            });

            var sliderControlsPosition = slider.attr('data-flex-controlsposition') === 'inside' ? 'flex-controls-inside' : 'flex-controls-outside';
            var sliderControlsAlign = !slider.attr('data-flex-controlsalign') ? 'flex-controls-center' : 'flex-controls-' + slider.attr('data-flex-controlsalign');
            var sliderDirectionsType = slider.attr('data-flex-directions-type') === 'fancy' ? 'flex-directions-fancy' : '';
            var sliderDirectionsPosition = slider.attr('data-flex-directions-position') === 'outside' ? 'flex-directions-outside' : '';
            var sliderCaptionsHorizontal = slider.attr('data-flex-captionhorizontal') === 'alternate' ? 'flex-caption-alternate' : 'flex-caption-'+ slider.attr('data-flex-captionhorizontal');
            var sliderCaptionsVertical = slider.attr('data-flex-captionvertical') === 'top' ? 'flex-caption-top' : '';

            slider.addClass(sliderControlsPosition).addClass(sliderControlsAlign).addClass(sliderDirectionsType).addClass(sliderDirectionsPosition).addClass(sliderCaptionsHorizontal).addClass(sliderCaptionsVertical);
          });
        }
      });
    }
  };
});