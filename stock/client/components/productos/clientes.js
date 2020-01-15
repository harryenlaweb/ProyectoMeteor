import { Meteor } from 'meteor/meteor';
import {ReactiveVar} from 'meteor/reactive-var';
import { Productos } from '../../../lib/collections/productos';

Template.clientes.helpers({
	formCollection() {
		return Productos;
		
	}
})