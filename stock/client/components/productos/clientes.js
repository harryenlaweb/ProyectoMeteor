import { Meteor } from 'meteor/meteor';
import {ReactiveVar} from 'meteor/reactive-var';
import { Clientes } from '../../../lib/collections/clientes';


Template.clientes.helpers({
	formCollection() {
		return Clientes;
	}
})