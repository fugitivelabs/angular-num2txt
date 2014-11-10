# AngularJS number to text filter

This is a simple filter that takes a number or currency string from input or $scope and converts it to longhand text. 

For example:
- `3425` becomes `Three Thousand Four Hundred Twenty-Five`
- `$422.73` becomes `Four Hundred Twenty-Two and 73/100`

## Dependencies
- required:
  [angularjs](http://angularjs.org/)

## Install 
1. Copy or download the angular-num2txt.min.js file to your project. 
2. Reference the file in your html 
3. Include the module in angular (i.e. in `app.js`) - `angular-num2txt`

## Documentation 
Reference angular-num2text in your HTML after angular and before your project app. 

```html

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.23/angular.js"></script>
<script type="text/javascript" src="angular-num2txt.min.js"></script>
<script type="text/javascript" src="app.js"></script>

```

Include the module in your angular.

```js

angular.module('myApp', [  
  "angular-num2txt"
])
.controller('HomeCtrl', ['$scope', function($scope) {
  console.log('HomeCtrl loaded...');
  $scope.number = 33449.67;
  $scope.currency = "$467.43";
}]);

```

Add the num2txt filter to whatever number or currency string you'd like to display as longhand.

```html

<div ng-controller="HomeCtrl">
  <input type="number" ng-model="number">
  <p> {{ number | num2txt }} </p>

  <input type="text" ng-model="currency">
  <p> {{ currency | num2txt }} </p>
</div>
```
