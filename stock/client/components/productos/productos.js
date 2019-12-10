import { Meteor } from 'meteor/meteor';
import {ReactiveVar} from 'meteor/reactive-var';
import { Productos } from '../../../lib/collections/productos';
import './productos.html';



Template.productos.onCreated(function productosOnCreated() {

	this.counter = new ReactiveVar(0);
});

Template.productos.helpers({
	counter(){
		return Template.instance().counter.get();
	},

	formCollection(){
		return Productos;
	},
});

Template.productos.events({
	'click .remove': function(event, template){
		//console.log(this._id); //con esto muestro el id por consola que voy a eliminar
		Meteor.call('productos.remove',this._id);

	},
	'click #1 '(event,instance) {
		var prod = Productos.findOne({"_id":this._id});
		var cant = prod.cantidad;
		cant = cant+1;
		Productos.update({"_id":this._id},{$set:{cantidad:cant}}) 
	},
	'click #2 '(event,instance) {
		var prod = Productos.findOne({"_id":this._id});
		var cant = prod.cantidad;
		cant = cant-1;
		Productos.update({"_id":this._id},{$set:{cantidad:cant}})
	},
	'click #3 '(event,instance) {
		var prod = Productos.findOne({"_id":this._id});
		var name = prod.name;
		var nombre= $('#nombre1').val();
		Productos.update({"_id":this._id},{$set:{name:nombre}})},

});



