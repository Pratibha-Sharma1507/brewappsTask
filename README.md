#  Book Management API

# This is a simple CRUD API for managing books built with Node.js and MongoDB.

## API Endpoints and Their Usage

# Add a new book

Endpoint: POST [http://localhost:8000/addbook]
Usage:
Send a POST request to this endpoint with a JSON payload containing the book's title, author, and summary.

# View a list of all books

Endpoint: GET [http://localhost:8000/viewbook]
Usage:
Send a GET request to this endpoint to retrieve a list of all books in the database.

# View details of a specific book by its ID

Endpoint: GET [http://localhost:8000/viewbook/:id]
Usage:
Replace :id in the URL with the ID of the book you want to retrieve.
Send a GET request to this endpoint to get details of a specific book by its ID.

# Update a book's details

Endpoint: PATCH [http://localhost:8000/updatebook/:id]
Usage:
Replace :id in the URL with the ID of the book you want to update.
Send a PUT request to this endpoint with a JSON payload containing the updated book details (e.g., title, author, summary).


# Delete a book

Endpoint: DELETE [http://localhost:8000/deletebook/:id]
Usage:
Replace :id in the URL with the ID of the book you want to delete.
Send a DELETE request to this endpoint to delete a specific book by its ID.

## API Documentation with Swagger

We provide interactive API documentation using Swagger for our Book Management API. You can access and explore the API endpoints through the Swagger UI:

[Swagger Documentation](http://localhost:8000/testing)

Use the Swagger UI to easily test and understand the API endpoints.

**Note:** This link may only work when the application is running locally.


# Instructions to Set Up and Run the Application Locally.

# To set up and run the application locally, follow these steps:

# 1.Clone the repository:

git clone https://github.com/Pratibha-Sharma1507/brewappsTask.git
cd brewappsTask

# Install the required dependencies:

npm install

# Start the Node.js server.

npm start

## Decisions and Assumptions

# During the development process, I made the following decisions and assumptions:

1. We're using the Express framework for building the API, which is a popular and widely used choice for creating web applications in Node.js.
2. We're using the Mongoose library to interact with MongoDB, which simplifies database operations and provides a schema-based data model.


