var OneVill = angular.module('OneVill', ['ngAnimate','ui.router'])
.config(function($stateProvider){
	$stateProvider.state("index",{
		url:"",
		controller:"LoginCtrl",
		templateUrl:"templates/login.html"
	})
	$stateProvider.state("signup",{
		url:"/signup",
		controller:"SignUpCtrl",
		templateUrl:"templates/signup.html"
	})
	$stateProvider.state("Entry",{
		url:"/entry",
		controller:"LoginCtrl",
		templateUrl:"templates/entry.html"
	})
	$stateProvider.state("forgotPwd",{
		url:"/forgotPassword",
		controller:"forgotPwdCtrl",
		templateUrl:"templates/forgotPassword.html"
	})
	$stateProvider.state("eMarket",{
		url: "/eMarket",
		controller: "LoginCtrl",
		templateUrl:"templates/eMarketForm.html"		
	})
	$stateProvider.state("cropSelection",{
		url: "/cropSelection",
		controller: "dashboardCtrl",
		templateUrl:"templates/cropSelection.html"		
	})
	$stateProvider.state("eMarket.buy",{
		url: '/buy',
		templateUrl: 'templates/buy.html',
		controller: 'eMarketFormCtrl'
	})
	$stateProvider.state("eMarket.sell",{
		url: '/sell',
		templateUrl: 'templates/sell.html',
		controller: 'eMarketFormCtrl'
	})
	$stateProvider.state("dashboard",{
		url:"/dashboard",
		controller:"dashboardCtrl",
		templateUrl:"templates/dashboard.html"
	})
	$stateProvider.state("dashboard.userProfile",{
		url:"/userProfile",
		controller:"dashboardCtrl",
		templateUrl:"templates/userProfile.html"
	})
	$stateProvider.state("dashboard.family",{
		url:"/family",
		controller:"dashboardCtrl",
		templateUrl:"templates/family.html"
	})
	$stateProvider.state("dashboard.land",{
		url:"/land",
		controller:"dashboardCtrl",
		templateUrl:"templates/land.html"
	})
	$stateProvider.state("dashboard.bank",{
		url:"/bank",
		controller:"dashboardCtrl",
		templateUrl:"templates/bank.html"
	})
	$stateProvider.state("dashboard.health",{
		url:"/health",
		controller:"dashboardCtrl",
		templateUrl:"templates/health.html"
	})
	$stateProvider.state("dashboard.finance",{
		url:"/finance",
		controller:"dashboardCtrl",
		templateUrl:"templates/finance.html"
	})
	$stateProvider.state("dashboard.livestock",{
		url:"/livestock",
		controller:"dashboardCtrl",
		templateUrl:"templates/livestock.html"
	})
	$stateProvider.state("dashboard.serviceRequest",{
		url:"/serviceRequest",
		controller:"dashboardCtrl",
		templateUrl:"templates/serviceRequest.html"
	})
	
})

  .controller('forgotPwdCtrl', function forgotPwdCtrl($scope) {
	 
	  console.log("forgotPwd");
   

  

})
.controller('dashboardCtrl', function dashboardCtrl($scope,$location) {
	 
	 $scope.List=false;
$scope.create=true;
$scope.dashboardCropSelection=function(){
		$location.path("/cropSelection");
}
$scope.dashboardScreen=function(){
	$location.path("/dashboard/userProfile");
}
$scope.Details = [
                    { 
						'Name':'AB Devillers',
                    	'Email':'abc@xyz.com',
                    	'TicketId': '001',
						'Department':'Mobility',
						'Issue':'hardware',
						'Description':'I have a Acer keyboard in which the "ENTER" is not working.'
					},
					 { 
						'Name':'Sachin Tendulker',
                    	'Email':'DEF@xyz.com',
                    	'TicketId': '002',
						'Department':'Mobility',
						'Issue':'software',
						'Description':'Visual studio Installation'
					}
	                    	
                    ];
					
$scope.ListView=function(){
$scope.List=!$scope.List;
$scope.create=!$scope.create;
}
$scope.StartView=function(){
$scope.Name='';
	$scope.Email='';
	$scope.TicketId='';
	$scope.Department='';
	$scope.Issue='';
	$scope.Description='';
$scope.List=!$scope.List;
$scope.create=!$scope.create;
}

//Adding the Ticket
$scope.addTicket = function(){	
	$scope.Details.push({'Name':$scope.Name, 'Email': $scope.Email, 'TicketId':$scope.TicketId,'Department':$scope.Department,'Issue':$scope.Issue,'Description':$scope.Description });
	console.log($scope.Details);
	$scope.Name='';
	$scope.Email='';
	$scope.TicketId='';
	$scope.Department='';
	$scope.Issue='';
	$scope.Description='';
	$scope.List=!$scope.List;
	$scope.create=!$scope.create;
	};
	

	//Removing the Ticket
	$scope.removeRow = function(name){	
alert(name);			
		var index = -1;		
		var comArr = eval( $scope.Details );
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].Name === name ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.Details.splice( index, 1 );		
	};
		//edit 
	$scope.EditIndex='';
	$scope.edit = function (index) {
		alert(index);
		$scope.Name=$scope.Details[index].Name;
		$scope.Email=$scope.Details[index].Email;
		$scope.TicketId=$scope.Details[index].TicketId;
		$scope.Department=$scope.Details[index].Department;
		$scope.Issue=$scope.Details[index].Issue;
		$scope.Description=$scope.Details[index].Description;		
		$scope.EditIndex=index;	
		console.log($scope.EditIndex);
	}
	//update 
	$scope.update=function(){
		$.each($scope.Details, function(k, v) {
			console.log(k);
			console.log(v);
			if(k==$scope.EditIndex){
				$scope.Details[k].Name=$scope.Name; 
				$scope.Details[k].Email=$scope.Email;
				$scope.Details[k].TicketId=$scope.TicketId;
				$scope.Details[k].Department=$scope.Department;
				$scope.Details[k].Issue=$scope.Issue;
				$scope.Details[k].Description=$scope.Description; 
				
			}
		});
	};
	
	
	//for Crop Selection
	 $scope.rate = 7;
	  $scope.max = 10;
	  $scope.cropForm=true;
	 $scope.cropResult=false;
	  $scope.isReadonly = false;
	
           $scope.products = [{
		icon:"http://dummyimage.com/50x50/000/fff",
		crop : 'Wheat',
		season : 'Kharif',
		soil : 'black',
		irrigation : 'L',
		risk:3
	}, {
	icon:"http://dummyimage.com/50x50/000/fff",
		crop : 'Rice',
		season : 'Kharif',
		soil : 'black',
		irrigation : 'M',
		risk:2
		
	}, {
	icon:"http://dummyimage.com/50x50/000/fff",
		crop : 'tomatoes',
		season : 'Kharif',
		soil : 'black',
		irrigation : 'H',
		risk:3
	}, {
	icon:"http://dummyimage.com/50x50/000/fff",
		crop : 'Turmeric',
		season : 'Rubi',
		soil : 'sandy',
		irrigation : 'L',
		risk:4
	}, {
	icon:"http://dummyimage.com/50x50/000/fff",
		crop : 'ginger',
		season : 'Rubi',
		soil : 'clay',
		irrigation : 'M',
		risk:4
	}, {
	icon:"http://dummyimage.com/50x50/000/fff",
		crop : 'garlic',
		season : 'Rabi',
		soil : 'black',
		irrigation : 'H',
		risk:4
	},{
	icon:"http://dummyimage.com/50x50/000/fff",
		crop : 'cotton',
		season : 'Summer',
		soil : 'silt',
		irrigation : 'L',
		risk:5
	}, {
	icon:"http://dummyimage.com/50x50/000/fff",
		crop : 'coconut',
		season : 'Summer',
		soil : 'black',
		irrigation : 'M',
		risk:4
	}, {
	icon:"http://dummyimage.com/50x50/000/fff",
		crop : 'ginger',
		season : 'Summer',
		soil : 'red',
		irrigation : 'M',
		risk:3
	}];
	$scope.inSeasons = [{
			days:"Nitrogen (N)",
			input : '50',
			
			source:'200'
			
		},
		{
			days:"Nitrogen (N)",
			input : '50',
			
			source:'200'
		},
		{
			days:"Nitrogen (N)",
			input : '50',
			
			source:'200'
		}];
		$scope.cropSelectionData = [{
			comp:"Nitrogen (N)",
			qty : '50',
			aqty : '100'
			
		},
		{
			comp:"Phosphorus (P)",
			qty : '25',
			aqty : '25'
		},
		{
			comp:"Potassium (k)",
			qty : '30',
			aqty : '20'
		}];
	$scope.cropSelection=function(villagechoose){
		$scope.villageSelected=villagechoose;
		$scope.cropForm=!$scope.cropForm;
		$scope.cropResult=!$scope.cropResult;
	}
	$scope.edit = function (index) {
		$scope.icon=$scope.products[index].icon;
		$scope.crop=$scope.products[index].crop;
		$scope.risk=$scope.products[index].risk;
		$scope.season=$scope.products[index].season;
		$scope.cropForm=true;
		$scope.cropResult=false;
	}
	
            
    $scope.villages = [ 
                    {id: 1, name: 'Pudur'}, 
                    {id: 2, name: 'Ghandipuram'},
					{id: 3, name: 'Bhuvangir'}, 
					{id: 4, name: 'RS Palayam'}, 					
                  ];

   

  

})
.controller('eMarketFormCtrl', function eMarketFormCtrl($scope,$location) {
	

  

})
 .controller('LoginCtrl', function LoginCtrl($scope,$location) {
	 
	 function init(){
		/*  divTop = ($(document).height() - $(".button-section").height()) / 2;
    $(".button-section").css("margin-top", divTop);
    $(".e-market").width($(".knowledge-service").width());
   /* $(".e-market").click(function () {
        $.load("views/e-market.html");
    });*/
	 }
	  console.log("login");
   
	$scope.loginFunc= function(data){
		var loginDetails=data;
		console.log(data);
		$location.path("/entry");
	}
	$scope.knowledgeService=function(){
		$location.path("/dashboard/userProfile");
	}
	$scope.eMarket=function(){
		$location.path("/eMarket/buy");
	}
	$scope.EntryPage=function(){
	$location.path("/entry");
}

	init();
  

})

  
  .controller('SignUpCtrl', function SignUpCtrl($scope) {
	    console.log("signup");
     $scope.registerFunc= function(data){
		var registerDetails=data;
		console.log(data);
	}
	$scope.pwdCheck=function(data){
		console.log(data);
		if(data.password != data.confirmPassword)
		{
			$scope.pwdError=true;
		}
		else{
			$scope.pwdError=false;
		}
	}
  });
   

