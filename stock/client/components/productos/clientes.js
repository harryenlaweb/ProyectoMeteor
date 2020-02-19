import { Meteor } from 'meteor/meteor';
import {ReactiveVar} from 'meteor/reactive-var';
import { Productos } from '../../../lib/collections/productos';
import { Clientes } from '../../../lib/collections/clientes';
Template.clientes.helpers({
  formCollection() {
    return Productos;

  }
});
Template.clientes.helpers({
  cliente: function() {
    return Clientes.find().fetch().map(
      function(it) {
        var pr = it.DNI + ", " + it.name;
        return pr;
      })
  },
	producto: function(){
		return Productos.find().fetch().map(
			function(it){
				var prod = it.name;
				return prod;
			}
		)
	}
});

Template.clientes.rendered = function() {
  Meteor.typeahead.inject();
};

Template.clientes.events({
  'change #cliente': function(event, template) {
    console.log(event.target.value);
    let inputValue = event.target.value.split(', ');
    console.log(inputValue[0]);

  }
});
