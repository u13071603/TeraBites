'use strict';

var myApp = angular.module('loginForm', []);

myApp.controller('loginController', ["$scope", "$window", "$http", function($scope, $window, $http) {

    $scope.submitFunction = function() 
    {
            var encodedString = 'username=' +
            encodeURIComponent($scope.userName) +
            '&password=' +
            encodeURIComponent($scope.password);
       
            alert("Js");
            $http({
                method: 'POST',
                url: 'webresources/login',
                data: encodedString,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(response) {
                    window.location = "admin.html"; 

                }).
                error(function(response)
                {
                    $window.alert("Server error..request not sent");
                });

        };
}]);


myApp.controller('ViewLevels', ["$scope", "$window", "$http", function($scope, $window, $http) {

    $scope.ViewLevel = function() 
    {
            
            $http({
                method: 'POST',
                url: 'webresources/getLevels',
                headers: {'Content-Type': 'application/json'}
            }).success(function(response)
            {
		alert("success");
                  
             }).
              error(function(response)
              {
                  //When server is down
                   $window.alert("Server error........request not sent");
              });

        };
}]);

myApp.controller('addUser', ["$scope", "$window", "$http", function($scope, $window, $http) {

    $scope.UserAddition = function() 
    {
        
            alert($scope.userType);
            
            var encodedString = 'name=' +
            encodeURIComponent($scope.userName) +
            '&surname=' +
            encodeURIComponent($scope.surname)+
            '&username=' +
            encodeURIComponent($scope.username)+
            '&password=' +
            encodeURIComponent($scope.password)+
            '&email=' +
            encodeURIComponent($scope.email)+
            '&userType=' +
            encodeURIComponent($scope.userType);
    
        

            $http({
                method: 'POST',
                url: 'webresources/addUser',
                data: encodedString,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(response) {
                    alert(responce);
                  
             }).
              error(function(response)
              {
                   $window.alert("Server error.......rquest not sent");
              });

        };
}]);

myApp.controller('addLevels', ["$scope", "$window", "$http", function($scope, $window, $http) {

    $scope.addLevel = function() 
    {
            var encodedString = 'levelname=' +
            encodeURIComponent($scope.levelname) +
            '&challengename=' +
            encodeURIComponent($scope.challengeUnder);
    
            alert(encodedString);

    
            $http({
                method: 'POST',
                url: 'webresources/addLevel',
                data: encodedString,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(response)
            {
                alert(response);
                  
             }).
              error(function(response)
              {
                  //When server is down
                   $window.alert("Server error........request not sent");
              });

        };
}]);


myApp.controller('addQuestions', ["$scope", "$window", "$http", function($scope, $window, $http) {

    $scope.addQuestion = function() 
    {
            var encodedString = 
            'question=' +
            encodeURIComponent($scope.question)+
            '&answer=' +
            encodeURIComponent($scope.answer)+
            '&level=' +
            encodeURIComponent($scope.levelname)+
            '&challenge=' +
            encodeURIComponent($scope.challengename);
    
            alert(encodedString);

    
            $http({
                method: 'POST',
                url: 'webresources/addQuestion',
                data: encodedString,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(response)
            {
                alert(response);
                  
             }).
              error(function(response)
              {
                  //When server is down
                   $window.alert("Server error........request not sent");
              });

        };
}]);

myApp.controller('AddChallenges', ["$scope", "$window", "$http", function($scope, $window, $http) {

    $scope.AddChallenge = function() 
    {
            alert("hellllo");
            var encodedString = 'challenge=' +
            encodeURIComponent($scope.challenge);
            
            $http({
                method: 'POST',
                url: 'webresources/addChallenge',
                data: encodedString,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(response)
            {
                alert(response);
                  
             }).
              error(function(response)
              {
                  //When server is down
                   $window.alert("Server error........request not sent");
              });

        };


myApp.controller('removeChallenges', ["$scope", "$window", "$http", function($scope, $window, $http) {

    $scope.removeChallenge = function() 
    {
            
            var encodedString = 'challenge=' +
            encodeURIComponent($scope.remchallenge);
    
            
            
            $http({
                method: 'POST',
                url: 'webresources/removeChallenge',
                data: encodedString,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(response)
            {
                alert(response);
                  
             }).
              error(function(response)
              {
                  //When server is down
                   $window.alert("Server error........request not sent");
              });

        };
}]);

myApp.controller('removeQuestions', ["$scope", "$window", "$http", function($scope, $window, $http) {

    $scope.removeQuestion = function() 
    {
            var encodedString = 'questionNumber=' +
            encodeURIComponent($scope.questionNumber) +
            '&levelName=' +
            encodeURIComponent($scope.levelName)+
            '&challengeName=' +
            encodeURIComponent($scope.challengeName);
            
            $http({
                method: 'POST',
                url: 'webresources/removeQuestion',
                data: encodedString,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(response) {
                    alert("sucess");

                }).
                error(function(response)
                {
                    $window.alert("Server error..request not sent");
                });

        };
}]);


myApp.controller('removeUsers', ["$scope", "$window", "$http", function($scope, $window, $http) {

    $scope.removeUser = function() 
    {
            var encodedString = 'user=' +
            encodeURIComponent($scope.user);
       
            
            $http({
                method: 'POST',
                url: 'webresources/getUsers',
                data: encodedString,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(response) {
		    
                    alert("success");

                }).
                error(function(response)
                {
                    $window.alert("Server error..request not sent");
                });

        };
}]);

myApp.controller('removeLevels', ["$scope", "$window", "$http", function($scope, $window, $http) {

    $scope.removeLevel = function() 
    {
            var encodedString = 'levelName=' +
            encodeURIComponent($scope.levelName)
            +'&challengeName='+
            encodeURIComponent($scope.challengeName) ;
       
            
            $http({
                method: 'POST',
                url: 'webresources/removeLevel',
                data: encodedString,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(response) {
		    
                    alert("success");

                }).
                error(function(response)
                {
                    $window.alert("Server error..request not sent");
                });

        };
}]);

myApp.controller('viewChallenges', ["$scope", "$window", "$http", function($scope, $window, $http) {

    $scope.viewChallenge = function() 
    {
            
            $http({
                method: 'GET',
                url: 'webresources/getChallenges',
                headers: {'Content-Type': 'application/json'}
            }).success(function(response)
            {
                alert(response);
                $scope.challenges = response;
                console.log(response);
                  
             }).
              error(function(response)
              {
                  //When server is down
                   $window.alert("Server error........request not sent");
              });

        };
}]);

myApp.controller('viewUsers', ["$scope", "$window", "$http", function($scope, $window, $http) {

    $scope.viewUser = function() 
    {
            
            $http({
                method: 'GET',
                url: 'webresources/getUsers',
                headers: {'Content-Type': 'application/json'}
            }).success(function(response)
            {
                
                $scope.result=response;
               
            }).
              error(function(response)
              {
                  //When server is down
                   $window.alert("Server error........request not sent");
              });

        };
}]);


myApp.controller('ViewLevels', ["$scope", "$window", "$http", function($scope, $window, $http) {

    $scope.ViewLevel = function() 
    {
            
            $http({
                method: 'POST',
                url: 'webresources/getLevels',
                headers: {'Content-Type': 'application/json'}
            }).success(function(response)
            {
		alert("success");
                  
             }).
              error(function(response)
              {
                  //When server is down
                   $window.alert("Server error........request not sent");
              });

        };
}]);


myApp.controller('viewQuestions', ["$scope", "$window", "$http", function($scope, $window, $http) {

    $scope.viewQuestion = function() 
    {
            
            $http({
                method: 'POST',
                url: 'webresources/getQuestions',
                headers: {'Content-Type': 'application/json'}
            }).success(function(response)
            {
                alert("success");
                  
             }).
              error(function(response)
              {
                  //When server is down
                   $window.alert("Server error........request not sent");
              });

        };
}]);