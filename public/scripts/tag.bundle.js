webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1)

	angular.module('tagApp', []);

	__webpack_require__(3)
	__webpack_require__(4)
	__webpack_require__(5)


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	
	var angular = __webpack_require__(1)

	angular.module('tagApp')
	.controller('mainCtrl', function($scope, $location, dataService){        
	  
	})

/***/ },
/* 4 */
/***/ function(module, exports) {

	
	angular.module('tagApp')
	.service('dataService', function($http, $q) {
	 
	});


/***/ },
/* 5 */
/***/ function(module, exports) {

	angular.module('tagApp')
	.directive('homepage', function(){
	  return {
	    templateUrl: 'templates/homepage.html',
	    controller: 'mainCtrl'
	  }
	});

/***/ }
]);