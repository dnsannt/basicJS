class WhatsApp extends Mail {
    constructor(username, isBussinessAccount, phoneNumber) {
        super();
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }
}
 
const wa1 = new WhatsApp('dicoding', true, '089989090898');