const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

/**
 *  @swagger
 *  components:
 *        schemas:
 *              books:
 *                  type: object
 *                  properties:
 *                      title:
 *                              type: string
 *                      author:
 *                              type: string
 *                      summary:
 *                              type: string
 *                      
 */

/**
 * @swagger
 * /viewbook:
 *        get:
 *             summary: get data by mongodb
 *             description: node js api
 *             responses:
 *                 200:
 *                    description: to test Get method
 *                    content:
 *                         application/json:
 *                                  schema:
 *                                      type: array
 *                                      items:
 *                                          $ref : '#components/schemas/books'
 */


/**
 * @swagger
 * /viewbook/{id}:
 *             get:
 *                  summary: get data from existing database by id
 *                  description: this api is used to check if get method is working or not
 *                  parameters:
 *                     - in: path
 *                       name: id
 *                       required: true
 *                       description: string id required
 *                       schema:
 *                         type: string
 *                  responses:
 *                       200:
 *                            description: to test get method
 */

/**
 * @swagger
 * /addbook:
 *      post:
 *          summary: add data in database
 *          description: nodejs api
 *          requestBody:
 *                  required: true
 *                  content:
 *                     application/json:
 *                         schema:
 *                              $ref : '#component/schemas/books'
 *          responses:
 *               200:
 *                    description: added successfully
 */


/**
 * @swagger
 * /updatebook/{id}:
 *                patch:
 *                    summary: update data from existing database by id
 *                    description: node js api
 *                    parameters:
 *                      - in: path
 *                        name: id
 *                        required: true
 *                        description: string id required
 *                        schema:
 *                              type: string
 *                    requestBody:
 *                        required: true
 *                        content:
 *                          application/json:
 *                            schema:
 *                               $ref : '#components/schemas/books'
 *                    responses:
 *                       200:
 *                         description: added successfully
 *                         content:
 *                            application/json:
 *                                  schema:
 *                                      type: array
 *                                      items:
 *                                          $ref : '#components/schemas/books'
 */


/**
 * @swagger
 * /deletebook/{id}:
 *             delete:
 *                  summary: delete data from existing database by id
 *                  description: this api is used to check if delete method is working or not
 *                  parameters:
 *                     - in: path
 *                       name: id
 *                       required: true
 *                       description: string id required
 *                       schema:
 *                         type: string
 *                  responses:
 *                       200:
 *                            description: to test delete method
 */


// Create a new book
router.post('/addbook', bookController.createBook);

// Get a list of all books
router.get('/viewbook', bookController.getAllBooks);

// Get details of a specific book by its ID
router.get('/viewbook/:id', bookController.getBookById);

// Update a book's details
router.patch('/updatebook/:id', bookController.updateBook);

// Delete a book
router.delete('/deletebook/:id', bookController.deleteBook);

module.exports = router;
