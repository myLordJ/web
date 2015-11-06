'use strict';
angular.module('rac')
  .factory('$weather', function($resource) {
    return $resource('http://api.openweathermap.org/data/2.5/weather?id=3433955&appid=c51971bedd25383fc22e9e2846e868b1', {}, 
      { 
        get: { 
          method: 'GET'
        }
    });
  });