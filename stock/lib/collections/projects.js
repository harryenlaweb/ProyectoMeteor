import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema'; //ESTA LIBRERIA CAMBIO, es diferente a la del video
import { Notes } from './notes';

export const Projects = new Mongo.Collection('projects');

Projects.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: 'Nombre del proyecto',
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
	summary:{ 
		type: String, 
		label: 'Detalle del Proyecto', 
		optional: true, 
		max: 2000, 
		autoform:{ 					//EL AUTOFORM SE DEFINE DIFERENTE AL VIDEO
			type: "textarea", 
			row: 10, 
			//class: "materialize-textarea"
			class: "textarea"
		}
	}﻿,
	
	notes: {        
    type: Array,		//EL ARRAY TAMBIEN SE DEFINE DIFERENTE AL VIDEO
    optional: true,    
  	},
  	'notes.$': Notes
}));