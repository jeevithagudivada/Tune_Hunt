angular.module('userApp', ['appRoutes', 'userControllers', 'userServices','ngAnimate', 'mainController', 'authServices', 'emailController', 'managementController','queryCtrl','gservice','geolocation'])

.config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptors');
});
