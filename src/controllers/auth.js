const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()
const app_name = process.env.PROJECT_NAME
const maxAge = 1 * 24 * 60 * 60

// handle error
const handleErrors = (err) => {
    let errors = { surname: '', other_names: '', email: '', password: '' }
    console.log(err.message, err.code);
    if(err.code === 11000){
        errors.email = 'Duplicate email.'
    }
    if (err.message === 'invalid credentials') {
        errors.email = 'Invalid User Credentials.'
    }

    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message
        })
    }

    return errors
}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: maxAge })
}
