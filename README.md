# 🚀Get-Post Project 🌐

This project demonstrates a basic **Express.js** server that handles both GET and POST requests from HTML forms. The project includes an HTML form file with two sections to test GET and POST requests to the `/register` endpoint.


## Features

- 📨 **GET Request Handling**:  
  - Handles form submissions using the HTTP GET method to `/register`.
  - Responds with a standard GET response.
  
- 🛠️ **POST Request Handling**: 
  - Handles form submissions using the HTTP POST method to `/register`.
  - Logs the request body to the console.
  - Responds with a standard POST response.

- 🌟 **HTML Form Integration**:
  - Includes a simple HTML page with forms for testing GET and POST requests.


## 🔧 Installation

1. Clone the repository:
   git clone https://github.com/eabhishek24/Get-Post.git
  
2. Install dependencies
   npm install express

3. Start the server:
   node app.js

4. Open the index.html file in your browser http://localhost:8080 🎉.(or any compatible HTTP client) to test the forms.


## Project Structure 
├── app.js         # Main Express.js server file
├── index.html     # HTML form for GET and POST requests
├── package.json   # Dependency management
└── README.md      # Project documentation
