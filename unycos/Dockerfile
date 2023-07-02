# Imagem base
FROM node:14-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos de package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Instalar a biblioteca react-responsive
RUN npm install react-responsive --save

# Copiar os arquivos do projeto para o diretório de trabalho
COPY . .

EXPOSE 9004

# Instalar o Vite globalmente dentro do diretório /app/node_modules/.bin
RUN npm install -g vite --prefix /app/node_modules/.bin

# Comando para build do projeto com Vite
RUN npm run build

# Comando para iniciar o projeto
CMD ["npm", "run", "dev"]
