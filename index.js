// index.js
const { AlunoController } = require("./src/controllers/ControllerAluno");
const { Curso } = require("./src/models/Curso");

const alunos = new AlunoController()

alunos.adicionarAluno('fulano', 'fulano@gmail.com', '84999998', '1234567', 'tec em desenvolvimento')
alunos.listarAluno();