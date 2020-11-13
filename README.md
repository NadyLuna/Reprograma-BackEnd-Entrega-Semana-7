# API: Servidor com Node.js e Express consumindo .json
_______

Exercício:

1- Escolher dois temas dos json feitos na semana anterior;
2- Construir servidor local.

- Exemplo:
branch servidor-filmes

servidor-filmes
    node_modules
    src
        controller
            filmesController.json
        model
            filmes.json
        route
            filmesRoute.js
        app.js
    .gitignore
    package-lock.json
    package.json
    server.js
    
    ----> EXTRAS
Se quiser um desafio, além de pegar todo os dados .json para listar na rota /tarefas, você pode:

Fazer um método para listar tarefas a partir do nome do colaborador (por exemplo, getByNomeColaborador); pelo id (por exmplo, getById) e outros dados específicos do seu .json ou do .json de tarefas que usamos em aula :)
