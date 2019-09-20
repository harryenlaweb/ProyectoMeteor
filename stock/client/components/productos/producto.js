import { Meteor } from 'meteor/meteor';

Template.productos.events({
	'click .remove': function(event, template){
		//console.log(this._id); //con esto muestro el id por consola que voy a eliminar
		Meteor.call('productos.remove',this._id);
	}
})