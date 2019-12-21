import { Meteor } from 'meteor/meteor';
import { Projects } from '../lib/collections/projects';
import { Productos } from '../lib/collections/productos';


Meteor.publish('projects', function projectsPublication()
{
	return Projects.find({owner: this.userId});
});
Meteor.publish('productos', function productosPublication()
{
	return Productos.find({owner: this.userId});
});

Meteor.publish('clientes', function clientesPublication()
{
	return Clientes.find({owner: this.userId});
});