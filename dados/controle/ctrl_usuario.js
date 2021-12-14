const Usuario = require('../modelos/mod_usuario');
const bcrypt = require('bcrypt');

const create = async (body) => {
  const { usu_senha, usu_nome, usu_email, usu_idAcesso } = body;
  const senhaCripto = await bcrypt.hash(usu_senha, 10);//senhaCripto recebe criptografia do bcrypt
  await Usuario.create({ usu_nome, usu_email, usu_idAcesso, usu_senha: senhaCripto});
}

const getUsuario = async (id) => {
    const usuario = await Usuario.findOne({
      where: {usu_id: id},
      attributes: ["usu_nome", "usu_email", "usu_idAcesso"]
    });
    if(!usuario) {
      throw new UserNotFoundException();
    }
    return usuario;
}

const getUsuarios = async () => {
  const usuarios = await Usuario.findAll();
  return usuarios;
}

const getUsuarioEmail = async (email) => {
  return await Usuario.findOne({where: {usu_email: email}});
}

module.exports = {
  create,
  getUsuario,
  getUsuarios,
  getUsuarioEmail
}