
import $ from 'jquery';
import _ from 'lodash';

// import classes // models and controllers
import { AppController } from './controllers/appController';
import { ContactList } from './models/contactList'

// Store HTML Elements
let contactForm = $('.contactForm'); // <form>
let contactListArea = $('.contactListArea'); // <ul>

// create instance of our contact List
let myList = new ContactList('My List');

// Instantiate App Controller
let app = new AppController(contactForm, contactListArea, myList);

// starts app
app.init();
