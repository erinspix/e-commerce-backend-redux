# E-commerce backend
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
The E-commerce Backend is a back-end application designed for an e-commerce site. It provides robust data management using Express.js, Sequelize, and PostgreSQL, allowing for efficient handling of products, categories, and tags. This API demonstrates object-relational mapping (ORM) concepts to interact with the database and handle various CRUD operations for managing product catalogs.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

*Clone the repository** to your local machine:
https://github.com/erinspix/e-commerce-backend-redux.git
Install Dependancies:
npm install

make .env file
DB_NAME=ecommerce_db
DB_USER=your_username
DB_PASSWORD=your_password
eplace your_username and your_password with your PostgreSQL credentials

Make sure PostgreSQL is installed and running.
npm run seed

## Usage
run in terminal,

npm start


Usage
Base URL: http://localhost:3001/api/
API Endpoints
Categories
GET /api/categories - Retrieve all categories.
POST /api/categories - Create a new category.

{ "category_name": "Electronics" }
GET /api/categories/:id - Get a category by ID.
PUT /api/categories/:id - Update a category by ID.

{ "category_name": "Updated Electronics" }
DELETE /api/categories/:id - Delete a category by ID.
Products
GET /api/products - Retrieve all products.
POST /api/products - Create a new product.

{ "product_name": "Basketball", "price": 200.00, "stock": 3, "tagIds": [1, 2] }
GET /api/products/:id - Get a product by ID.
PUT /api/products/:id - Update a product by ID.

{ "product_name": "Updated Basketball", "price": 180.00, "stock": 5, "tagIds": [2, 3] }
DELETE /api/products/:id - Delete a product by ID.

GET /api/tags - Retrieve all tags.
POST /api/tags - Create a new tag.

{ "tag_name": "New Tag" }
GET /api/tags/:id - Get a tag by ID.
PUT /api/tags/:id - Update a tag by ID.

{ "tag_name": "Updated Tag" }
DELETE /api/tags/:id - Delete a tag by ID.
## License

This project is licensed under the MIT license.
For more details, see: [MIT](https://opensource.org/licenses/MIT)

## Contributing
Feel free to fork this repository and make improvements. If you find any issues or have suggestions for enhancements, please open an issue or submit a pull request.
## Tests

Use Insomnia or Postman to test the API endpoints:

Start the server with npm start.
Send GET, POST, PUT, and DELETE requests to the API endpoints.
Verify responses and data persistence in the PostgreSQL database.
Example Tests
Add a Category: Send a POST request to /api/categories with a JSON body containing "category_name".
Add a Product: Send a POST request to /api/products with "product_name", "price", "stock", and "tagIds".
Add a Tag: Send a POST request to /api/tags with "tag_name".

## Questions

For any questions, please contact me with the information below:

GitHub: [erinspix](https://github.com/erinspix)  
Email: e.spix@yahoo.com

- **Insomnia Tests**:
GET
 ![Get](./Insomnia-images/ecommerce-get-categories.png)
CREATE
 ![Create](./Insomnia-images/ecom-create.png)
UPDATE
 ![Update](./Insomnia-images/ecommerse-put-png.png)
DELETE
 ![BALETED](./Insomnia-images/ecommerse-delete.png)



Demo:
https://drive.google.com/file/d/18c9zzAcYCiy2aK1PAMDUYjWUhES9ZPTt/view?usp=sharing