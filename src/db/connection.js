const mongoose = require('mongoose')

const conexao = async () => {
    try {
      await mongoose.connect('mongodb://127.0.0.1:27017/loginnodejs');
  
      console.log('Conectado ao banco de dados');
    } catch (error) {
      console.error('Erro ao conectar ao banco de dados', error);
      throw error;
    }
  };
  module.exports = conexao;
  