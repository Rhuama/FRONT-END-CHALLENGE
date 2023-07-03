# FRONT-END-CHALLENGE
# Nome do Projeto

Descrição curta do projeto.

## Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- Docker

## Como executar localmente

1. Clone este repositório:

   ```bash
      git clone https://github.com/Rhuama/FRONT-END-CHALLENGE.git
   ```
2. Navegue até o diretório do projeto:

    ```bash
      cd unycos
   ```
3. Construa a imagem Docker:

   ```bash
      docker build -t unycos .
   ```
4. Execute o contêiner Docker:

   ```bash
      docker run -p 9004:9004 unycos
   ```
4. Acesse o projeto no navegador:

   ```bash
      http://localhost:9004
   ```

Bibliotecas utilizadas
A seguir estão as bibliotecas utilizadas neste projeto:

- axios: ^1.4.0
- react: ^18.2.0
- react-dom: ^18.2.0
- react-dropdown-select: ^4.9.4
- react-icons: ^4.10.1
- react-responsive: ^9.0.2
- vite: ^4.3.9

Essas bibliotecas estão listadas no arquivo package.json e são gerenciadas pelo npm durante a instalação das dependências do projeto.

Certifique-se de que todas as bibliotecas estejam corretamente instaladas antes de executar o projeto. Isso pode ser feito durante a construção da imagem Docker, conforme definido no Dockerfile.
