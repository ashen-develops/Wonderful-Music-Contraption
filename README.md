# Doc Ashen's Wonderful Music Contraption
This app will allow a user to create an account/ login, and then make songs out of pre-recorded loops of music.



### 1. Working Prototype
You can access a working prototype of the React app here: https://wonderful-music-contraption.vercel.app/ and Node app here: https://wonderful-music-contraption.herokuapp.com/



### 2. User Stories
This app is for two types of users: a visitor and a logged-in user

###### Landing Page (Importance - High) (Est: 1h)
* As a visitor
    * I can sign up, or log in
    * If I sign up I'll be able to log in later
    * If I log in, I'll be registered as a logged in user
    * I can try out the main feature of the app (making music) without being able to save
    * and without being able to use social features

######  Sign Up (Importance - High)  (Est: 3h)
* As a visitor
    * I want to register to use this app
    * So I can create a personal account.

######  Home Page (Importance - Medium)  (Est: 2h)
* As a logged-in user,
    * I want to be able to preview the content of the app,
    * So i can decide what section I want to navigate to.

###### Song Maker (Importance - High) (Est: 5h)
* as a visitor
    * I can sign up, or log in
    * If I sign up I'll be able to log in later
    * If I log in, I'll be registered as a logged in user
    * I can try out the main feature of the app (making music) without being able to save
    * and without being able to use social features

######  My Saved Songs (Importance - Medium)  (Est: 3h)
* As a logged-in user,
    * I want to register to use this app
    * So I can create a personal account.

######  Social Hub (Importance - Small)  (Est: 2h)
* As a logged-in user,
* I want to be able to preview the content of the app,
* So i can decide what section I want to navigate to.



### 3. Functionality
The app's functionality includes:
* Every User has the ability to
    * create an account
    * use the app to play with the sound files
    * view other people's sound file combinations
* Every logged in User has the added ability to
    * save their music creations to the database
    * rate other users music creations
    * post their own saved combinations to the social hub




### 4. Technology
* Front-End: HTML5, CSS3, JavaScript ES6, React
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, PostgreSQL
* Development Environment: Heroku, DBeaver, Vercel



### 5. Wireframes

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



### 10. Development Roadmap
This is v0.5 of the app, but future enhancements are expected to include:
* add more functionality



### 11. How to run it (done)
Use command line to navigate into the project folder and run the following in terminal

##### Local React scripts
* To install the react project ===> npm install
* To run react (on port 8000) ===> npm start
* To run tests ===> npm run test

##### Local Node scripts
* To install the node project ===> npm install
* To migrate the database ===> npm run migrate -- 1
* To run Node server (on port 8000) ===> npm run dev
* To run tests ===> npm run test
