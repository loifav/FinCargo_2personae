# Builder Stage
FROM node:18.15.0-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the app's source code to the container
COPY . .

# Build the React app
RUN npm run build

# List the contents of /app to verify the build directory
RUN ls -la /app

# Production Stage
FROM node:18-alpine

# Install serve globally
RUN npm install -g serve

# Copy the build folder from the builder stage
COPY --from=builder /app/build /app/build

# Serve the build
CMD ["serve", "-s", "/app/build"]
