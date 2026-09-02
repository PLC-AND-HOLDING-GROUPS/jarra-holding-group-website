FROM node:20-slim

# Set working directory
WORKDIR /app

# Install build dependencies for native modules (like bcrypt)
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

# Copy package files
COPY package*.json ./
# Delete lockfile to bypass Windows-generated lockfile restricting optional dependencies
RUN rm -f package-lock.json

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set permissions for uploads (if needed)
RUN mkdir -p uploads && chmod -R 777 uploads

# Expose the backend port
EXPOSE 4000

# Start command with migration
CMD ["sh", "-c", "npx sequelize-cli db:migrate && npx sequelize-cli db:seed --seed 20260622130000-seed-production-permissions.js && npm start"]
