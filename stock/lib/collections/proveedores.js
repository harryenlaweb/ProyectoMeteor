import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema'; //ESTA LIBRERIA CAMBIO, es diferente a la del video
import { Items } from './items';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { EasySearch } from 'meteor/easy:search';

// Required AutoForm setup
SimpleSchema.extendOptions(['autoform']);

export const Proveedores = new Mongo.Collection('proveedores');


export const ProveedoresIndex = new EasySearch.Index({
	collection: Proveedores,
	fields: ['name'],
	engine: new EasySearch.Minimongo(),
	defaultSearchOptions: {limit: 10}
})

Proveedores.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: 'Nombre del proveedor',
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
	telefono:{ 
		type: String, 
		label: 'telefono', 
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
    type: Number,		//EL ARRAY TAMBIEN SE DEFINE DIFERENTE AL VIDEO
    optional: true,    
  	},
}));

Proveedores.allow({
	insert: function(userId, doc){
		return doc.owner === userId;
	},
	update: function(userId,doc){
		return doc.owner === userId;
	}
})