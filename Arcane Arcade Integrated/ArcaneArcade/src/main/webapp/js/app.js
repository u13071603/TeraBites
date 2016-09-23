'use strict';

var myApp = angular.module('loginForm', []);

myApp.controller('loginController', ["$scope", "$window", "$http", function($scope, $window, $http) {

    $scope.submitFunction = function() 
    {
            var encodedString = 'username=' +
            encodeURIComponent($scope.userName) +
            '&password=' +
            encodeURIComponent($scope.password);
       
            
            $http({
                method: 'POST',
                url: 'webresources/login',
                data: encodedString,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(response) {
                
                 var str=JSON.stringify(response, null, 4);
                if(str.indexOf("success") !== -1)
                {
                    if(str.indexOf("player") !== -1)
                    {
                            window.location = "management.html";
                    }
                    else
                    {
                        window.location = "challenge.html";
                    }
                }
                else
                {
                   window.location = "index.html"; 
                }


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
    
                        alert(encodedString);


            $http({
                method: 'POST',
                url: 'webresources/addUser',
                data: encodedString,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(response) {
                
                    alert(response);
                  
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
}]);

myApp.controller('removeChallenges', ["$scope", "$window", "$http", function($scope, $window, $http) {

    $scope.removeChallenge = function() 
    {
            
            var encodedString = 'challenge=' +
            encodeURIComponent($scope.remChallenge);
    
            
            
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
                url: 'webresources/removeUser',
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
            encodeURIComponent($scope.challenge) ;
       
            
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
                $scope.challenges = response;
                
                  
             }).
              error(function(response)
              {
                  //When server is down
                   $window.alert("Server error........request not sent");
              });

        };
        $scope.fn_load = function () {
            alert("mmmmmmmmmmmmmmmmmmmmmmmmmmm");
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
                //console.log(response);
                $scope.result = response;
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
                method: 'GET',
                url: 'webresources/getLevels',
                headers: {'Content-Type': 'application/json'}
            }).success(function(response)
            {
		$scope.levels=response;
                  
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
                method: 'GET',
                url: 'webresources/getQuestions',
                headers: {'Content-Type': 'application/json'}
            }).success(function(response)
            {
                $scope.questions = response;
                  
             }).
              error(function(response)
              {
                  //When server is down
                   $window.alert("Server error........request not sent");
              });

        };
}]);

myApp.controller('loadQuestions', ["$scope", "$window", "$http", function($scope, $window, $http) {

    $scope.loadQuestion = function() 
    {
                       
            $http({
                method: 'GET',
                url: 'webresources/getChallenges',
                headers: {'Content-Type': 'application/json'}
            }).success(function(response)
            {
                $scope.challenges = response;
                 alert(JSON.stringify(response));
             }).
              error(function(response)
              {
                  //When server is down
                   $window.alert("Server error........request not sent");
              });

        };
        
    $scope.showAlert2 = function(){
    alert("dziiiii");
};
}]);




myApp.controller('getChallenges', ["$scope", "$window", "$http", function($scope, $window, $http) {

    $scope.getChallenge = function() 
    {
                        alert("Get Chals");

            
            $http({
                method: 'GET',
                url: 'webresources/getChallenges',
                headers: {'Content-Type': 'application/json'}
            }).success(function(response)
            {
                $scope.challenges = response;
                 alert(JSON.stringify(response));
             }).
              error(function(response)
              {
                  //When server is down
                   $window.alert("Server error........request not sent");
              });

        };
}]);


myApp.controller('CheckAnswers', ["$scope", "$window", "$http", function($scope, $window, $http) {

    $scope.CheckAnswer = function() 
    {
       
             var myAnswer;
             var correctAnswer;
            
            $http({
                method: 'GET',
                url: 'webresources/getChallenges',
                headers: {'Content-Type': 'application/json'}
            }).success(function(response)
            {
                $scope.challenges = response;
                myAnswer = $scope.userAnswer;
                correctAnswer=response[1].challengeLevels[0].levelQuestions[0].answer.answer;
                
                //document.getElementById("trygain").style.visibility = "hidden";
                //document.getElementById("continue").style.visibility = "hidden";
                
                if(myAnswer===correctAnswer)
                {
                  //  alert("The answer is right");
                    document.getElementById("modalp").innerHTML="Right answer";
                    
                //show continue button
                //document.getElementById("continue").style.visibility = 'visible';
                }
                else
                {
                     //   alert("The answer is wrong");
                     document.getElementById("modalp").innerHTML="Wrong answer";
                     //show try again button
                    // document.getElementById("trygain").style.visibility = 'visible';
                }
                
             }).
              error(function(response)
              {
                  //When server is down
                   $window.alert("Server error........request not sent");
              });

        };
}]);