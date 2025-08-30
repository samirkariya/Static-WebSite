# Step 1: Build the React application
FROM node:14-alpine AS build
 
# Set the working directory
WORKDIR /app
 
# Copy the package.json and package-lock.json
COPY package*.json ./
 
# Install the dependencies
RUN npm install
 
# Copy the rest of the project files
COPY . .
 
# Build the React app for production
RUN npm run build
 
# Step 2: Serve the application using Nginx
FROM nginx:alpine
 
# Copy the build output to Nginx's HTML folder
COPY --from=build /app/build /usr/share/nginx/html
 
# Expose port 80
EXPOSE 80
 
# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
