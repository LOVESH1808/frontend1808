import Validations from "./Validations";

export default class SignupValidations {
    constructor(email,password) {
        this.email = email;
        this.password = password;
    }
    checkValidations() {
        let errors = [];
        if(!Validations.checkEmail(this.email))
            errors['email'] = 'Invalid Email';
        if(!Validations.minLength(this.password,4))
            errors['password'] = 'Password should be of minimum 4 characters';
        return errors;
    }
}