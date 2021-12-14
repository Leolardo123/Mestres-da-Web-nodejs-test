const Usuario = require('../modelos/mod_usuario');
const bcrypt = require('bcrypt');

const create = async (body) => {
  const { usu_senha, usu_nome, usu_email } = body;
  const senhaCripto = await bcrypt.hash(usu_senha, 10);//senhaCripto recebe criptografia do bcrypt
  await User.create({ usu_username, usu_nome, senha: senhaCripto});
}

const getUsuario = async (id) => {
  const user = await User.findOne({
    where: {usu_id: id},
    attributes: ['usu_id', 'usu_username', 'usu_email']
  });
  if(!user) {
    throw new UserNotFoundException();
  }
  return user;
}

const findEmail = async (email) => {
  return await User.findOne({where: {usu_email: email}});
}

module.exports = {
  create,
  getUsuario,
  findEmail
}