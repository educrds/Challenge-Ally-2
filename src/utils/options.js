const registeredOption = {
  nome: {
    required: true,
    pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
  },
  email: {
    required: true,
    pattern:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  telefone: {
    required: true,
    pattern: /^[(]?[0-9]{2}[)]?[-\s\.]?[0-9]{5}?[-\s\.]?[0-9]{4}$/g,
  },
  cpf: {
    required: true,
    pattern: /^[0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2}$/,
  },
};

export default registeredOption