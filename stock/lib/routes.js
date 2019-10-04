import { Router } from 'meteor/iron:router';
import { Meteor } from 'meteor/meteor';
import { Projects, ProjectsIndex } from '../lib/collections/projects';
import { Productos, ProductosIndex } from '../lib/collections/productos';


Router.onBeforeAction(function () {  

  if (!Meteor.userId()) {    
    Router.go('home');    
  } else {
    if(Router.current().route.getName() === 'home'){
       Router.go('productos');       
    }        
  }
  this.next();
  
});

Router.configure({
	layoutTemplate: 'baseLayout',
	waitOn:function() { 
		return Meteor.subscribe('productos'); 
	}	
});

Router.route('/', {
  name: 'home'
});


//-------------------------------SECCION PROYECTOS----------------------------------
Router.route('/productos',{
	name: 'productos',
	data: {
		productos(){
			return ProductosIndex;
		}
	}
})

Router.route('/producto_form', {
	name: 'producto_form'
})

Router.route('/producto/:_id', function(){
	let producto = Productos.findOne({_id: this.params._id});
	if (!producto){
		Router.go('productos');
	}
	else{
		this.render('producto_detail',{
			data: {
				producto: producto
			}
		})
	}
}, {
	name: 'producto_detail'
})


//-------------------------------SECCION PROFILE----------------------------------
Router.route('/profile', {
	name: 'stock',
	data: {
		user() {
			if(Meteor.user()){
				return {
				id: Meteor.user()._id,
				email: Meteor.user().emails[0].address
				}
			}
			
		}
	}
})

//-------------------------------SECCION PRODUCTOS----------------------------------
