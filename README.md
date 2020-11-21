# Doc Ashen's Wonderful Music Contraption
This app will allow a user to create an account/ login, and then make songs out of pre-recorded loops of music. 

## Working Prototype
You can access a working prototype of the react app here: placeholder

## User Stories
This app is for any user, with logged in users being able to access more features.

## Landing/ Login Page

### Sign Up Page

### Home Page

### Song Maker Page

### My Saved Loops Page


## Wireframes

Landing/Login Page
:------------------:
<img src="readme-images/Landing_ Login.jpg" />

Sign Up Page
:------------------:
<img src="readme-images/Sign Up.jpg" />

Song Maker Page
:------------------:
<img src="readme-images/Song Maker.jpg" />

Home Page
:------------------:
<img src="readme-images/Home.jpg" />

Saved Loops Page
:------------------:
<img src="readme-images/Saved Loops.jpg" />

Social Page
:------------------:
<img src="readme-images/Social.jpg" />










# Capstone Project Title (to do now)
One line description of what this app is doing and who is it for



### 1. Working Prototype (to do later)
(Example) You can access a working prototype of the React app here: https://your-app-client.herokuapp.com/ and Node app here: https://your-app-server.herokuapp.com/



### 2. User Stories (to do now)
This app is for two types of users: a visitor and a logged-in user

###### (Example) Landing Page (Importance - High) (Est: 1h)
* as a visitor
* I want to understand what I can do with this app (or sign up, or log in)
* so I can decide if I want to use it

###### (Example) Login Page (Importance - High) (Est: 3h)
* As a returning register user
* I want to enter my password and username to use this app,
* So I can have access to my account.

###### (Example) Sign Up (Importance - High)  (Est: 3h)
* As a visitor
* I want to register to use this app
* So I can create a personal account.

###### (Example) Home Page (Importance - Medium)  (Est: 2h)
* As a logged-in user,
* I want to be able to preview the content of the app,
* So i can decide what section I want to navigate to.



### 3. Functionality (to do now)
The app's functionality includes:
* (Example) Every User has the ability to create an account



### 4. Technology (done)
* Front-End: HTML5, CSS3, JavaScript ES6, React
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
* Development Environment: Heroku, DBeaver



### 5. Wireframes (to do now)
(Example) Landing Page
:-------------------------:
![Landing Page](/github-images/wireframes/landing-page-wireframe.png)
Register Page
![Register Page](/github-images/wireframes/register-page-wireframe.png)



### 6. Front-end Structure - React Components Map (to do later)
* (Example) __Index.js__ (stateless)
    * __App.js__ (stateful)
        * __LandingPage.js__ (stateful) - gets the _"prop name"_ and the _"callback prop name"_ from the __App.js__
            * __Login.js__ (stateful) -
            * __Register.js__ (stateful) -
        * __Navbar.js__ (stateless) -



### 7. Back-end Structure - Business Objects
* Users (database table)
    * id (auto-generated)
    * username (email validation)
    * password (at least 8 chars, at least one alpha and a special character validation)

* Music (database table)
    * id (auto-generated)
    * user_id (foreign key connecting with the users table)
    * group_one_two_beat_one (expect to be a string && varchar 255 characters)
    * group_one_two_beat_two (expect to be a string && varchar 255 characters)
    * group_two_one_beat_one (expect to be a string && varchar 255 characters)
    * group_two_one_beat_two (expect to be a string && varchar 255 characters)
    * group_two_one_beat_three (expect to be a string && varchar 255 characters)
    * group_two_one_beat_four (expect to be a string && varchar 255 characters)
    * group_three_two_beat_one (expect to be a string && varchar 255 characters)
    * group_three_two_beat_two (expect to be a string && varchar 255 characters)
    * sharable (boolean value default false)
    * date_last_edited (timestamp of when the user last saved to account)


### 8. API Documentation (to do later)
API Documentation details:
* (Example) get all users



### 9. Screenshots (to do later)
(Example) Landing Page
:-------------------------:
![Landing Page](/github-images/screenshots/landing-page-screenshot.png)
Register Page
![Register Page](/github-images/screenshots/register-page-screenshot.png)



### 10. Development Roadmap (to do later)
This is v1.0 of the app, but future enhancements are expected to include:
* (Example) add more functionality



### 11. How to run it (done)
Use command line to navigate into the project folder and run the following in terminal

##### Local React scripts
* To install the react project ===> npm install
* To run react (on port 3000) ===> npm start
* To run tests ===> npm run test

##### Local Node scripts
* To install the node project ===> npm install
* To migrate the database ===> npm run migrate -- 1
* To run Node server (on port 8000) ===> npm run dev
* To run tests ===> npm run test
