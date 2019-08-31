import { Router } from 'meteor/iron:router';


Router.onBeforeAction(function () {  

  if (!Meteor.userId()) {    
    Router.go('home');    
  } else {
    if(Router.current().route.getName() === 'home'){
       Router.go('projects');       
    }        
  }
  this.next();
  
});

Router.configure({
	layoutTemplate: 'baseLayout'
	
});

Router.route('/', {
  name: 'home'
});
