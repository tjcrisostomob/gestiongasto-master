#Imagen base para el contenedor
FROM node:12-alpine
# Crear directorio de la aplicación
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
# Instalar dependencias 
# Una invitacion es usada para asegurar que ambos package.json Y package-lock.json se copian 
# donde esta disponible (npm@5+)
COPY package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .
# If you are building your code for production
# Si estas construyendo tu codigo para produccion
RUN npm ci --only=production

# Fuente de la aplicación del paquete 
COPY --chown=node:node .env .
EXPOSE 6000
CMD [ "npm", "start" ]