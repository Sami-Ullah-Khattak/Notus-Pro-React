# Use a base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 10000

# Set environment variable to specify the port
# ENV PORT 10000

# Start the application
CMD ["npm", "start"]
