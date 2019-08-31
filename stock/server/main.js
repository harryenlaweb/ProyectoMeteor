import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Accounts.config({
  //ESTA LINEA SIRVE PARA HABILITAR/DESHABILITAR LA CREACION DE USUARIOS:
  //Deshabilitada --> true
  //Habilitada --> false
  forbidClientAccountCreation: true
});
