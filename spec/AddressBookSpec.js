describe('Address Book', () => {
    let addressBook,
        thisContact;

    beforeEach(() => {
        addressBook = new AddressBook();
        thisContact = new Contact();
    }),

        it('should be able to add a contact', () => {
            addressBook.addContact(thisContact);
            expect(addressBook.getContact(0)).toBe(thisContact);
        }),

        it('should be able to delete a contact', () => {
            addressBook.deleteContact(thisContact);
            expect(addressBook.contacts.includes(thisContact)).toBe(false);
        }),

        "END"
});

describe('Async Address Book', () => {
    let addressBook = new AddressBook();

    beforeEach((done) => {
        addressBook.getInitialContacts(() => done())
    }),

        it('should grab initial contacts', (done) => {
            expect(addressBook.initialComplete).toBe(true);
            done();
        }),

        "END"
})
