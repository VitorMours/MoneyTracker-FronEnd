# Frontend 

# Executando o Projeto
Temos que para rodar o projeto do front-end, como esse projeto é experimental e visa apenas o estudo das ferramentas, ele não possui nenhum tipo de precaução em relação à indisponibilidade do back-end, com isso, é recomendado rodar o mesmo antes de subir essa aplicação.
Após inicializar o back-end, podemos digitar o comando 

```sh
npm run dev
```

para inicializar o front-end, e o mesmo poder consumir os dados da API, de forma a mostrar eles de forma mais estruturada, e possibilitar a inserção de novos dados por meio do formulário que é mostrado acima da tabela.

# React
Por ser uma biblioteca bastante famosa, e ter uma funcionalidade que permite gerenciamento de estados, e maior facilidade da compreensão do funcionamento, temos que foi a tecnologia utilizada dentro do projeto -- além de ser uma que possuo maior facilidade de usar, e maior compreensão sobre. Com isso, o uso da mesma com o **vite**, possibilitou gerenciar pacotes de forma organizada, e organizar o ambiente de desenvolvimento de forma a conseguirmos consumir a api dentro de qualquer parte do projeto, sem a necessidade de ficar explicitando a cada chamada, todo o caminho http da nossa api, graças à seguitne configuração:

```ts
server: {
  proxy: {
    "/api": {
      target: "http://localhost:8000",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    }
  }
}
```

Essa configuração permite especificarmos a localidade da nossa api dentro de toda aplicação, de forma a possibiltar a mesma ser chamada globalmente.

## useContext hook
Devido à forma como o código foi estruturado dentro do nosso projeto, temos que dois componentes, vizinhos, dividem um mesmo estado  e pois a entrada de dados em um deles, de forma a ser submetida por meio de um formulário, modifica a forma como a exibição dos dados do  outro componente se comporta, podendo ser maior, menor, com diferentes tipos de dados e vice-versa. Portanto, temos em vista a necessidade desses dois elementos compartilharem entre si, um estado de informação, de forma que para melhor experiência de usabilidade do usuário, a página não seja carregada a todo momento que um novo registro dentro da nossa plataforma é feito, pois pode incomodar, e "quebrar o fluxo de envio de dados" que pode ser feito de forma sequêncial, devido à necessidade da espera da atualização da página, para a efetivação de um novo registro. 

Com esses problemas em vista, temos que o hook do react `useContext` pode ser uma solução eficiente dentro do ambiente o qual foi estipulado dentro da nossa problemática. Temos a necessidade como foi observado de criar um estado que pode ser usado pelos dois. Linguagens como o flutter tem o conceito de **Provider**, que é um gerenciador de Estados, de forma que podem ser compartilhados e modificados de forma global, mas que são centralizados dentro de um único centro. Temos que por definição, o useContext pode ser entendido como:

> *useContext is a React Hook that lets you read and subscribe to context from your component. Context lets a parent component provide data to the entire tree below it. There are many uses for context.*



# Próximos Passos

Dentro dos próximos passos, é visar uma inteface mais amigável, e segmentada, de forma a diminuir a quantidade de poluição visual dentro de cada tela, tornando a experiência mais agradável. 

Outro ponto que pode ser objetificado nos próximos passos, é -- além da inclusão de um sistema de login por meio de JWT por exemplo -- à adição de gráficos e novas ferramentas para análise das despesas.