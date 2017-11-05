const validation = {
    name: {
      presence: {
        message: '^Campo obrigatório.'
      }
    },
    raceTime: {
      presence: {
        message: '^Campo obrigatório.'
      },
      format: {
        pattern: "^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$",
        message: "^Formato incorreto. Exemplo: 07:00"
      }
    },
    raceValue: {
      presence: {
        message: '^Campo obrigatório.'
      },
      format: {
        pattern: "^[-+]?([0-9]*\.[0-9]+|[0-9]+)",
        message: "^Formato incorreto. Exemplo: 100,00"
      }
    },
    raceLink: {
      presence: {
        message: '^Campo obrigatório.'
      },
      format: {
        pattern: "^([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$",
        message: "^Formato incorreto. Exemplo: www.evento.com"
      }
    },
    email: {
      presence: {
        message: '^Campo obrigatório.'
      }
    },
    password: {
      presence: {
        message: '^Campo obrigatório.'
      }
    }
  }

  export default validation;
