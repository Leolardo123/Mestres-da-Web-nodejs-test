const Categoria = require('../modelos/mod_categoria');
const FilmeCategorias = require('../modelos/mod_filme_categorias');
const Filme = require('../modelos/mod_filme');

const create = async (body) => {//Testar
  let msg = [];
  const { fim_nome } = body;

  if(fim_categorias.length<1){
      msg.push('filme deve conter categorias!')
  }
  
  await Filme.create({ fim_nome });

  if(!msg) return 'filme cadastrado com sucesso!';
}

const getFilmes = async () => {//Testar
  const Filmes = await Filme.findAll({include:[{//SELECT * FROM Filmes JOIN FilmeCategorias ON fca_idFilme = id JOIN Categoria ON cat_id = fca_idCategoria
        model:FilmeCategorias,
        include:[{
            model:Categoria,
        }]
    }]
    });
  return Filmes;
}

const getFilme = async (id) => {//Testar
  return await 
    Filme.findOne({//SELECT * FROM Filmes INNER JOIN FilmeCategorias ON fca_idFilme = id INNER JOIN Categoria ON cat_id = fca_idCategoria Where id = $id
        where: {
            fim_id: id
        },
        include:[
            {
                model:FilmeCategorias,
                include:[{
                    model:Categoria,
                }]
            }
        ]
    });
}

module.exports = {
  create,
  getFilme,
  getFilmes
}