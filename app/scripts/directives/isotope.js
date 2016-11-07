'use strict';

angular.module('rac.directives')
.directive('isotope', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      scope.$watch('schedule.loadedImages', function() {

        attrs.isotope = attrs.isotope === 'true';
        if (!attrs.isotope) {
          return;
        }

        var $container = $(element);
        $container.imagesLoaded().done( function() {
          setTimeout(function() {
            $container.isotope();
            setTimeout(function() {
              $container.removeClass('no-transition');
            },500);
          },100);
        });

        var portfolios = $('.portfolio');
        portfolios.each(function() {
          var portfolio = $(this);
          portfolio.imagesLoaded().done(function() {
            portfolio.find('.portfolio-item').css('display', 'block');

            if ( portfolio.hasClass('portfolio-hex') ) {
              portfolio.find('figure').append('<div class="hex-right"></div><div class="hex-left"></div>');
              portfolio.find('.more, .link').addClass('hex-alt');
            }

            if ( portfolio.hasClass('portfolio-round') ) {
              portfolio.find('img').addClass('img-circle');
            }

            if ( portfolio.hasClass('portfolio-shadows') && portfolio.hasClass('portfolio-hex') ) {
              portfolio.find('figure').wrap('<div class="flat-shadow">');
            }

            if ( portfolio.hasClass('portfolio-shadows') && portfolio.hasClass('portfolio-round') ) {
              portfolio.find('figure').wrap('<div class="flat-shadow">');
            }

            if ( portfolio.hasClass('portfolio-shadows') && portfolio.hasClass('portfolio-rect') ) {
              portfolio.find('figure').wrap('<div class="flat-shadow flat-rect">');
            }
            if ( portfolio.hasClass('portfolio-shadows') && portfolio.hasClass('portfolio-square') ) {
              portfolio.find('figure').wrap('<div class="flat-shadow flat-square">');
            }
          });
        });
      });
    }
  };
})
.directive('isotopeFilter', function () {
  return {
    restrict: 'A',
    link: function (scope, element) {
      $(element).on('click', 'a', function() {
        var active = $(this);
        var parentFilters = active.closest('.isotope-filters');

        if (active.hasClass('selected')) {
          return false;
        }

        parentFilters.find('a').removeClass('active');
        active.addClass('active');
        parentFilters.next().find('.isotope').addBack('.isotope').isotope({ filter: active.attr('data-filter') });

        return false;
      });
    }
  };
});
