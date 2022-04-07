FROM node:16
# Crear directorio de la aplicación
WORKDIR /usr/src/app

# Instalar dependencias 
# Una invitacion es usada para asegurar que ambos package.json Y package-lock.json se copian 
# donde esta disponible (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# Si estas construyendo tu codigo para produccion
RUN npm ci --only=production

# Fuente de la aplicación del paquete
COPY . .

EXPOSE 6000
CMD [ "npm", "start" ]