import { Template } from 'meteor/templating';
import './index.html';

Session.setDefault('templateName','');

Template.index.onCreated(function() {
});

Template.index.onRendered(function() {
    Meteor.clearInterval(intervalRodaMusica);
    rodaMusica('audio','.rodar-index',80);
});

Template.index.onDestroyed(function() {
    Meteor.clearInterval(intervalRodaMusica);
});

Template.variacoestemperatura.onRendered(function() {
    rodaMusica('audio','.rodar', 59);
});
Template.variacoestemperatura.helpers({
    titulo: function() {
        return 'Variações de Temperatura';
    }
});
Template.variacoestemperatura.onDestroyed(function() {
    Meteor.clearInterval(intervalRodaMusica);
    Meteor.isCordova && mediaRodaMusica.release();
});

Template.antartidamass.onRendered(function() {
    rodaMusica('audio','.rodar',39);
});
Template.antartidamass.helpers({
    titulo: function() {
        return 'Massa da Antártida';
    }
});
Template.antartidamass.onDestroyed(function() {
    Meteor.clearInterval(intervalRodaMusica);
    Meteor.isCordova && mediaRodaMusica.release();
});

Template.oceanmass.onRendered(function() {
    rodaMusica('audio','.rodar',39);
});
Template.oceanmass.helpers({
    titulo: function() {
        return 'Volume dos Oceanos';
    }
});
Template.oceanmass.onDestroyed(function() {
    Meteor.clearInterval(intervalRodaMusica);
    Meteor.isCordova && mediaRodaMusica.release();
});

Template.niveisdeco2.onRendered(function() {
    rodaMusica('audio','.rodar',45);
});
Template.niveisdeco2.helpers({
    titulo: function() {
        return 'Níveis de Co2';
    }
});
Template.niveisdeco2.onDestroyed(function() {
    Meteor.clearInterval(intervalRodaMusica);
    Meteor.isCordova && mediaRodaMusica.release();
});

Template.body.helpers({
   templateName: function() {
       return Session.get('templateName');
   }
});

Template.index.events({

    'click .logo': function(e,tmpl) {
        Session.set('templateName','variacoestemperatura');
    }
});
