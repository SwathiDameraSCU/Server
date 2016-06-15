var mainApp = angular.module("mainApp", ['ngRoute','mainApp.controller']);
 
mainApp.config(function($routeProvider) {
    $routeProvider
        .when('/signIn', {
            templateUrl: 'AdminLogin.html',
            controller: 'AdminController'
        })		
	    .when('/home',{
			templateUrl : 'RegisterAdminOrPatient.html',
			controller: 'AdminPatientRegContrller'
		})
		.when('/patientRegister',{
			templateUrl : 'PatientRegistration.html',
			controller: 'PatientController'
		})
		.when('/doctorRegister',{
			templateUrl : 'DoctorRegistration.html',
			controller : 'DoctorController'
		})
		.when('/adminRegister',{
			templateUrl: 'AdminRegistration.html',
			controller: 'AdminRegController'
		})
		.when('/viewExistingPatients',{
			templateUrl : 'ViewPatients.html',
			controller : 'ViewPatientsController'
		})
		.when('/viewExistingAdmins',{
			templateUrl : 'ViewAdmin.html',
			controller : 'ViewAdminController'
		})
		.when('/viewExistingDoctors',{
			templateUrl : 'ViewDoctors.html',
			controller : 'ViewDoctorsController'
		})
		.when('/bookGroupAppointment',{
			templateUrl : 'BookGroupAppointment.html',
			controller : 'BookGrpAppntController'
		})
        .otherwise({
            redirectTo: '/signIn'
        });
});




