super.methodName();

class WhatsApp extends Mail {
    constructor(username, isBussinessAccount, phoneNumber) {
        super(phoneNumber);
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }
 
    // Overriding method => Melakukan Override Total
    sendMessage(msg, to) {
        super.sendMessage(msg, to);
        console.log('Send by WA');
    }
}

const wa1 = new WhatsApp('di', true, '089000999888');
wa1.sendMessage('halo', '089000999888');
 
/**
Output:
Send by WA
**/

/*Catatan:

super(...) digunakan untuk memanggil constructor parent dan hanya dapat digunakan di constructor.

super.methodName(...) digunakan untuk memanggil parent method. */