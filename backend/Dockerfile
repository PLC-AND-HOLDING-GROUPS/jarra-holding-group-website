FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install build dependencies for native modules (like bcrypt)
RUN apk add --no-cache python3 make g++ libc6-compat

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install
# Force npm to download the correct Alpine (musl) binaries for sharp regardless of package-lock.json
RUN npm rm sharp && npm install --os=linux --libc=musl --cpu=x64 sharp

# Copy the rest of the application code
COPY . .

# Set permissions for uploads (if needed)
RUN mkdir -p uploads && chmod -R 777 uploads

# Expose the backend port
EXPOSE 4000

# Start command with migration
CMD ["sh", "-c", "npx sequelize-cli db:migrate && npx sequelize-cli db:seed --seed 20260622130000-seed-production-permissions.js && npm start"]
