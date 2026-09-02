FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install build dependencies for native modules (like bcrypt)
RUN apk add --no-cache python3 make g++ libc6-compat

# Copy package files
COPY package*.json ./

# Install dependencies (using the lockfile for speed)
RUN npm install

# FORCE install the native Linux Alpine (musl) binaries for both x64 and arm64 processors to bypass ALL cross-platform bugs
RUN npm install --force @img/sharp-linuxmusl-x64@0.35.3 @img/sharp-linuxmusl-arm64@0.35.3

# Copy the rest of the application code
COPY . .

# Set permissions for uploads (if needed)
RUN mkdir -p uploads && chmod -R 777 uploads

# Expose the backend port
EXPOSE 4000

# Start command with migration
CMD ["sh", "-c", "npx sequelize-cli db:migrate && npx sequelize-cli db:seed --seed 20260622130000-seed-production-permissions.js && npm start"]
