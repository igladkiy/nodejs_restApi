const { user } = require('../models/user');
const createUserValid = (req, res, next) => {  
    const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneNumberStartWith = '+380'
    const { email, phoneNumber, firstName, lastName, password } = req.body
    user.email = email;
    user.phoneNumber = phoneNumber;
    user.firstName = firstName;
    user.lastName = lastName;
    user.password = password;

    if (user.email && user.phoneNumber && user.firstName && user.lastName && user.password) {
        const emailValid = emailReg.test(String(user.email).toLowerCase());
        const emailGmailValid = user.email.indexOf('@gmail.com') !== -1;
        const phoneNumberValid = user.phoneNumber.startsWith(phoneNumberStartWith);

        if (emailValid && emailGmailValid && phoneNumberValid) {
            res.body = res.status(200).json({
                error: false,
                message: "User created"
            })
            next(res.body);
        } else {
            res.body = res.status(400).json({
                error: true,
                message: "Email or phone number is not valid"
            })
            next(res.body);
        }
    } else {
        res.body = res.status(400).json({
            error: true,
            message: "User entity to create is not valid"
        })
        next(res.body);
    }
}



const updateUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during update

    next();
}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;