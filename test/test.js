// Import Chai
import chai from 'chai';

// Import Any Files to Test
import { AppController } from '../src/js/controllers/appController';
import { ContactList } from '../src/js/models/contactList';
import { SingleContact } from '../src/js/models/singleContact';

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('Something We Want To Test', function () {

  describe('Testing the Creation of Something', function () {

    it('should exist after we create it', function () {
      let x = new AppController;
      expect(x).to.be.an.instanceof(AppController);
    });

    it('should exist after we create it', function () {
      let x = new ContactList;
      expect(x).to.be.an.instanceof(ContactList);
    });

    it('should exist after we create it', function () {
      let x = new SingleContact;
      expect(x).to.be.an.instanceof(SingleContact);
    });

  });


});
