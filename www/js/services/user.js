angular.module('app')

.factory('UserService', function (localStorageService) {
  var user = {
    _id: 1337,
    firstName: 'John',
    lastName: 'Appleseed',
    community: '54950b8e079766ced2b1d0c8'
  };

  return {
    get: function () {
      return user;
    },

    favorites: function (favorites) {
      if (typeof favorites === 'object') {
        localStorageService.set('favorites', favorites);
      }

      return localStorageService.get('favorites') || {};
    },

    isLoggedIn: function (value) {
      if (typeof value === 'boolean') {
        localStorageService.set('skipLogin', value)
      }

      return localStorageService.get('skipLogin');
    },

    hasViewedIntro: function (value) {
      if (typeof value === 'boolean') {
        localStorageService.set('skipIntro', value);
      }

      return localStorageService.get('skipIntro');
    }
  };
});