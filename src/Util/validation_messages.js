const validation = {
  name: {
      presence: {
        message: '^Please enter an email address'
      }
    },
    password: {
      presence: {
        message: '^Please enter a password'
      },
      length: {
        minimum: 5,
        message: '^Your password must be at least 5 characters'
      }
    }
  }

  export default validation;