import { Router } from 'meteor/iron:router';
import { Meteor } from 'meteor/meteor';
import { Projects, ProjectsIndex } from '../lib/collections/projects';


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
	layoutTemplate: 'baseLayout',
	waitOn:function() { 
		return Meteor.subscribe('projects'); 
	}	
});

Router.route('/', {
  name: 'home'
});

//-------------------------------SECCION PROYECTOS----------------------------------
Router.route('/projects',{
	name: 'projects',
	data: {
		projects(){
			return Projects.find();
		}
	}
})

Router.route('/project_form', {
	name: 'project_form'
})

