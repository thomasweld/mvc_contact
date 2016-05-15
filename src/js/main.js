
import $ from 'jquery';
import _ from 'lodash';

// import classes // models and controllers
import { ContactList } from './models/contactList';
import { AppController } from './controllers/appController';

// Store HTML Elements
let contactForm = $('.contactForm'); // <form>
let contactListArea = $('.contactListArea'); // <ul>

// new instance of ContactList
let myList = new ContactList('My List');

// Instantiate App Controller
let app = new AppController(contactForm, contactListArea, myList);

// starts app
app.init();
