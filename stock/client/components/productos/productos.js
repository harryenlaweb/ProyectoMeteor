import { Meteor } from 'meteor/meteor';
import {ReactiveVar} from 'meteor/reactive-var';
import { Productos } from '../../../lib/collections/productos';
import './productos.html';


var cantidad = Productos.find({cantidad})

Template.productos.onCreated(function productosOnCreated() {

	this.counter = new ReactiveVar(cantidad)
});

Template.productos.helpers({
	counter(){
		return Template.instance().counter.get();
	},

});


Template.productos.events({
	'click .remove': function(event, template){
		//console.log(this._id); //con esto muestro el id por consola que voy a eliminar
		Meteor.call('productos.remove',this._id);

	},
	'click #1 '(event,instance) {
		instance.counter.set(instance.counter.get()+1); 
	},
	'click #2 '(event,instance) {
		instance.counter.set(instance.counter.get()-1); 
	},
});



