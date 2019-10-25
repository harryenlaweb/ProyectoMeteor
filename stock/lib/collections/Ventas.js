import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema'; //ESTA LIBRERIA CAMBIO, es diferente a la del video
import { Items } from './items';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { EasySearch } from 'meteor/easy:search';

SimpleSchema.extendOptions(['autoform']);

export const Ventas = new Mongo.Collection('Ventas');

export const VentasIndex = new EasySearch.Index({
	collection: Ventas,
	fields: ['name', 'summary'],
	engine: new EasySearch.Minimongo(),
	defaultSearchOptions: {limit: 10}
})


Ventas.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: 'Nombre del producto',
		max: 200
	},
	owner:{
		type: String,
		label: "Propietario",
		autoValue() {
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
	created: {
		type: Date,
		autoValue() {
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	},
	detalle:{ 
		type: String, 
		label: 'Detalle del Producto', 
		optional: true, 
		max: 2000,
		autoform:{ 					//EL AUTOFORM SE DEFINE DIFERENTE AL VIDEO
			type: "textarea", 
			row: 10, 
			//class: "materialize-textarea"
			class: "textarea"
		}
	}﻿,
	
	cantidad: {        
    type: String,		//EL ARRAY TAMBIEN SE DEFINE DIFERENTE AL VIDEO
    optional: true,    
  	},
  	'items.$': Items
}));

Ventas.allow({
	insert: function(userId, doc){
		return doc.owner === userId;
	}
})

