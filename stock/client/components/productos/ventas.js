import { Meteor } from 'meteor/meteor';
import { Clientes } from '../../../lib/collections/clientes';
import { Productos } from '../../../lib/collections/productos';

Template.ventas.helpers({
	formCollection() {
		return Clientes;
		
	}
})