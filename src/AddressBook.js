class AddressBook {
    constructor(contacts) {
        this.contacts = [];
        this.initialComplete = false;
        this.addContact = (contact) => this.contacts.push(contact);
        this.getContact = (index) => this.contacts[index];
        this.deleteContact = (contact) => this.contacts.splice(this.contacts.indexOf(contact));
        this.getInitialContacts = (cb) => {
            let self = this;
            setTimeout(() => {
                self.initialComplete = true;
                if (cb) return cb();
            }, 3);
        }
    }
};
