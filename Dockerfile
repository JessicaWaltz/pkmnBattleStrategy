# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the project files to the working directory
COPY . .

# Build the React app
RUN npm run build

# Set the command to run the app when the container starts
CMD [ "npm", "start" ]

# Expose a TCP port
EXPOSE 80
