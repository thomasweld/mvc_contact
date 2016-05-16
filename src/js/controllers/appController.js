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
      // get jquery objects for each form field
      let firstNameFormField = this.form.find('#firstNameInput');
      let lastNameFormField = this.form.find('#lastNameInput');
      let imageURLFormField = this.form.find('#imageURLInput');
      let phoneNumberFormField = this.form.find('#phoneNumberInput');
      let cityStateFormField = this.form.find('#cityStateInput');

      // assign value of form elements to variables to build singleContact obj
      let firstNameInput = firstNameFormField[0].value;
      let lastNameInput = lastNameFormField[0].value;
      let imageURLInput = imageURLFormField[0].value;
      let phoneNumberInput = phoneNumberFormField[0].value;
      let cityStateInput = cityStateFormField[0].value;

      // new contact equals inance / proto of SingleContact class
      let newContact = new SingleContact(firstNameInput, lastNameInput, imageURLInput, phoneNumberInput, cityStateInput);

      // run addContactToCollection function and pass in new instance of SingleContact obj
      this.addContactToCollection( newContact );

      // clear out form fields after submission
      firstNameFormField.val('');
      lastNameFormField.val('');
      imageURLFormField.val('');
      phoneNumberFormField.val('');
      cityStateFormField.val('');

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
    return `
    <li>
      <p class="name">${taskObj.firstName} ${taskObj.lastName}</p>
      <p class="phone">${taskObj.phoneNumber}</p>
      <p class="addy">${taskObj.cityState}</p>
      <img class="contactPhoto" src="${taskObj.imageURL}" alt="contactImage" />
    </li>
    `;
  }


}
