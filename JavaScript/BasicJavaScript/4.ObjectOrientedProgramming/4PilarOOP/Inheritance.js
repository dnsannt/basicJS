/*Misalkan kita akan membuat sebuah child class bernama WhatsApp yang mewarisi kelas Mail. 
Maka contoh kodenya adalah sebagai berikut:*/

class Mail {
    constructor(author) {
        this.from = author;
        this._contacts = [];
    }
    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this._contacts.push(to);
    }
    showAllContacts() {
        return this._contacts;
    }
}

class WhatsApp extends Mail {
    constructor(author) {
        super(author);
        this.username = 'dicoding';
        this.isBussinessAccount = true;
    }
    myProfile() {
        return `my name ${this.username}, is ${this.isBussinessAccount ? 'Business' : 'Personal'}`;
    }
}

const wa1 = new WhatsApp('080111000222');
console.log(wa1.myProfile());
// my name dicoding, is Business