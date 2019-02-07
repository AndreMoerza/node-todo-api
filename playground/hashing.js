const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

var hashedpassword = '$2a$10$r.kj3pgS8a04lit7.oMoNe.qtSK9BCHHeAuT8nsdIbDhEL/aqI5hC';
bcrypt.compare(password, hashedpassword, (err, res) => {
    console.log(res);
});
/*var token = jwt.sign(data, '123abac');
console.log(token);

var decoded = jwt.verify(token, '123abac');
console.log(decoded);*/
/*var message = 'I am user number 3';
var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

var data = {
    id: 4
};

var token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
} 

token.data.id = 5;
token.hash = SHA256(JSON.stringify(token.data)).toString();

var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();


if (resultHash === token.hash) {
    console.log('Data was not changed');
} else {
    console.log('Data was changed. Do not trust!');
}*/