# Step 1: Use Node.js base image for building
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire project and build it
COPY . .
RUN npm run build

# Step 2: Use a smaller image to run the app
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy only the necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

# Expose port (change this if your app uses a different one)
EXPOSE 3000

# Start the app
CMD ["node", "dist/main"]
