# fullstack-solution
* Groupomania is my 7th project learning web development at Openclassrooms web developer path.
* The project will be to build an internal social network for Groupomania's employees, The goal of this tool is to facilitate more interaction between colleagues.

## Architecture 
* The front-end is built using React.js, Tailwindcss and DaisyUI.
* There are 5 pages: Home, Profile, SignIn, SignUp and NotFound.
* The back-end is built With: NodeJS, Express, Mysql, JWT, Multer and Sequelize ORM.

## Prerequisites
Nodejs, Nodemon, MySQL
## Installation
* 1 Clone the repository : <br/> `git clone https://github.com/lamhaouas/fullstack-solution.git`
* 2 from the server folder run : <br/>`npm install` <br/>and<br/> `nodemon derver`
* 3 from the client folder run : <br/> `npm start`
### Data base installation 
After creating a local MySQL connection update your credential in the `config/config.json` file then<br/> Run <br/> `npx sequelize-cli db:create <br/>npx sequelize-cli db:migrate`
