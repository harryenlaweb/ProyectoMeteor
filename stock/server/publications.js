import { Meteor } from 'meteor/meteor';
import { Projects } from '../lib/collections/projects';
import { Productos } from '../lib/collections/productos';
import { Clientes} from	'../lib/collections/clientes';
import { Proveedores} from	'../lib/collections/proveedores';

Meteor.publish('projects', function projectsPublication()
{
	return Projects.find({owner: this.userId});
});
Meteor.publish('productos', function productosPublication()
{
	//return Productos.find({owner: this.userId});
	return Productos.find({});
});

Meteor.publish('clientes', function clientesPublication()
{
	//return Clientes.find({owner: this.userId});
	return Clientes.find({});
});
Meteor.publish('proveedores', function proveedoresPublication()
{
	return Proveedores.find({});
});