# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

RUN npm install
RUN npm list

# Expose the port used by the React development server (if needed)
EXPOSE 3000

# Start the development server
CMD ["npm", "run", "dev"]
