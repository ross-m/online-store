# online-store

## Description
This is a simple online store built with the MERN stack. It was built as an exercise in web development and JavaScript. The 
general layout of the project is as follows:

* Backend
  * Node 
  * Express middleware handles HTTP requests
  * Mongoose schemas are used to model data (products, sessions, users, promotions)
  * Passport.js to manage session cookies
                  
* Frontend
  * React
  * State is managed with hooks rather than classes
  * Session persistence is implemented with localStorage (no sensitive data is stored here)
  * Axios is used to make HTTP requests
  
* Database
  * mongoDB 
  * Stores user sessions, products, promotions, and users
  
## Installation Guide
1. Clone the repo
```
$ git clone https://github.com/ross-m/online-store.git
$ cd online-store
```
2. Start the server
 ```
 $ cd root/Backend
 $ nodemon server.js
 ```
3. Start the front end application
 ```
 $ cd root/Frontend
 $ npm start
 ```
