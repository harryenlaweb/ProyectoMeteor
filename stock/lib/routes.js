import { Router } from 'meteor/iron:router';
import { Meteor } from 'meteor/meteor';
import { Projects, ProjectsIndex } from '../lib/collections/projects';
import { Productos, ProductosIndex } from '../lib/collections/productos';
import { Clientes, ClientesIndex } from '../lib/collections/clientes';


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
		return [
			function() {return Meteor.subscribe('productos');},
			function() {return Meteor.subscribe('clientes');},
		]
		  
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

Router.route('/clientes',{
	name: 'clientes',
	data: {
		clientes(){
			return Clientes();
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

Router.route('Ventas', {
	name: 'Ventas'
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

