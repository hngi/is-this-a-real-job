# Is This A Real Job - Don't go for that interview until you are sure its real!!!

## Vision

A platform that lets job seekers verify the authenticity of a job interview invite.

---

## Project top-level directory structure

```    
src
    ├── config
    │   ├── constants.js           #  constants and environment variables
    ├── controllers                #  Objects will be grouped into a single controller entity
    ├── database
    │   ├── db.js                  # database configuration file
    ├── helpers                   # reusable functions across the project
    ├── middlewares                 # route validation functions
    ├── models                      # tables models
    ├── routes.js               # general routes for all modules
    │   ├── routes.js               # entry file for all routes
    ├── services                    # database interactions with models are referenced here
    ├── tests                       # integration test files
    └── views                       # frontend render files
        └── partials               # reusable files across frontend
    
  ```

 ### Installation
 
 1. Clone this repository by running this on your terminal: `git clone https://github.com/hngi/is-this-a-real-job.git`
 2. Navigate to the project's directory with: `cd is-this-a-real-job`
 3. Run `npm install` to install dependencies
 4. check [Setup Dotenv](#setup-dotenv) to setup evironment variables
 5. Run  `npm run start-dev` to start the server on a local host
 6. Run `npm test` to test.


# Setup Dotenv

#### A .env file is used to store configuration files especialy about development and testing.

#### Guide to use dotenv in this project

- Install dotenv package as a project dependency using "npm install dotenv" or "yarn add dotenv"
- Create .env file in project root directory.
- Add environment variables to .env file as seen in the .env.example file in the root folder.
 
##### Test Driven
Tests are written with mocha, chai-http and chai.

#### Stack:
* Node
* Express
* MySQL


#### License

ISC License

