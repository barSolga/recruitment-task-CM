# Recruitment task - simple products API [Bartosz Sołga]

## Technologies
Project is created with:
* [Node.js](https://nodejs.org/en/)
* [Typescript](https://www.typescriptlang.org/)
* [MongoDB](https://www.mongodb.com/)

## Setup
To run this project, install it locally using npm:

```
$ npm i
$ npm run build
$ npm start
```

## Testing
For testing purposes, I included exported postman collection [coffemug-api.postman_collection]. 
To run API test application should run on localhost:5000. 
Import the collection from a file into [POSTMAN](https://www.postman.com/) application and then choose the option "Run collection" to start the tests

## Project requirements:
### 1.  Create an API in Node.js using any framework along with Typescript language.

### 2.  Project requirements:
```
    a. Handle routes/methods:
            • Products list
            • Product details
            • Create product
            • Update product
            • Delete product

    b.  Each method should correspond with the specified HTTP query type(GET, POST, PUT, DELETE).

    c.  Products should be stored in a database (free to choose) or file (any format)

    d.  Application should be separated into layers - design pattern is free to choose
        (controller/router should only serve as a data flow controller)

    e.  Product entity should consist of:
        • Id
        • Name
        • Price
        • UpdateDate

    f.  The input data in the app should be validated
        (name and price are required for a new product, in the case of
        updating it ID is a requirement, and the maximum length of a name is 100 characters)

    g.  Additionally, all services and possible repositories can be injected with
        IOC container via DI - optional task.
``` 
### 3.  The code should be hosted on the GitHub platform.

### 4.  The solution will be delivered by sending a link to the project along with startup instructions.

### 5.  The solution should be testable from the level of the browser or tools such as Postman.

### 6.   The code should contain English names (variables, functions etc).