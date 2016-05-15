import _ from 'lodash';
import $ from 'jquery';

import { SingleContact } from '../models/singleContact';

export class AppController {

  constructor(contactForm, contactListArea, myList) {
    this.form = contactForm;
    this.contactListArea = contactListArea;
    this.myList = myList;
  }

  init() {
    this.formSubmit();
  }

  formSubmit() {
    this.form.on('submit', (event) => {
      event.preventDefault();
      // assign value of form elements to variables to build singleContact obj
      let firstNameInput = this.form.find('#firstNameInput')[0].value;
      let lastNameInput = this.form.find('#lastNameInput')[0].value;
      let imageURLInput = this.form.find('#imageURLInput')[0].value;
      let phoneNumberInput = this.form.find('#phoneNumberInput')[0].value;
      let cityStateInput = this.form.find('#cityStateInput')[0].value;
      // new contact equals inance / proto of SingleContact class
      let newContact = new SingleContact(firstNameInput, lastNameInput, imageURLInput, phoneNumberInput, cityStateInput);
      // run addContactToCollection function and pass in new instance of SingleContact obj
      this.addContactToCollection( newContact );

    });
  }

  addContactToCollection( newContact ) {
    this.myList.contacts.push(newContact); // Push to my contacts array
    this.addToContactListArea(newContact); // call an update to the view
  }

  addToContactListArea(taskObj) {
    let contactHTML = this.contactTemplate(taskObj);
    this.contactListArea.prepend(contactHTML);
  }

  contactTemplate(taskObj) {
    return `<li>${taskObj.firstName} ${taskObj.lastName}</li>`;
  }


}
