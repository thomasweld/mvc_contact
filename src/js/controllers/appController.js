import _ from 'lodash';
import $ from 'jquery';

import { SingleContact } from '../models/singleContact';

export class AppController {

  constructor(contactForm, contactListArea, myList) {
    this.contactForm = contactForm;
    this.contactListArea = contactListArea;
    this.contactList = myList
  }

  init() {
    this.formSubmit();
    this.deleteContact();
  }

  formSubmit() {
    this.contactForm.on('submit', (event) => {
      event.preventDefault();

      // use form data to create a single contact

      // find the form
      let form = this.contactForm;

      // assign form field values to variables
      let firstName = form.find('#firstNameInput').val();
      let lastName = form.find('#lastNameInput').val();
      let imageURL = form.find('#imageURLInput').val();
      let phoneNumber = form.find('#phoneNumberInput').val();
      let cityState = form.find('#cityStateInput').val();

      // use placeholder if no image url is entered
      if (imageURL === '') {
        imageURL = 'http://placehold.it/200x200';
      }

      // new contact equals instance of SingleContact class
      var newContact = new SingleContact(firstName, lastName, imageURL, phoneNumber, cityState);

      // run addContactToCollection function and pass in new instance of SingleContact obj
      this.addContactToCollection( newContact );

      // // clear out form fields after submission
      form.find('#firstNameInput').val('');
      form.find('#lastNameInput').val('');
      form.find('#imageURLInput').val('');
      form.find('#phoneNumberInput').val('');
      form.find('#cityStateInput').val('');

    });
  }

  addContactToCollection( newContact ) {
    this.contactList.contacts.push(newContact); // Push to my contacts array
    this.addToContactListArea(newContact); // call an update to the view
  }

  addToContactListArea(newContact) {
    let contactHTML = this.contactTemplate(newContact);
    this.contactListArea.prepend(contactHTML);
  }

  contactTemplate(newContact) {
    return `
    <li>
      <p class="name">${newContact.firstName} ${newContact.lastName}</p>
      <p class="phone">${newContact.phoneNumber}</p>
      <p class="addy">${newContact.cityState}</p>
      <img class="contactPhoto" src="${newContact.imageURL}" alt="contactImage" />
      <p>&nbsp;</p>
      <button class="deleteButton">DELETE</button>
    </li>
    `;
  }


  deleteContact(){

      $( '.deleteButton' ).click(function() {
        alert( "Handler for .click() called." );
      });

    }

}
