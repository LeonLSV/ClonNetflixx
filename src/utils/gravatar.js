import md5 from "md5";

const gravatar = (email) => {
  const base = "https://gravatar.com/avatar/";
  const formattedEmail = email.trim().toLowerCase(); //elimina espacios y lo pasa a minusculas
  const hash = md5(formattedEmail, { encoding: "binary" }); //(correo en formato, no podemos pasar tal cual arroba)
  return `${base}${hash}?d=identicon`;
};

export default gravatar;
