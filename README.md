# Unit 19 React Homework: Employee Directory

## Overview

For this assignment, you'll create a employee directory with React. This assignment will require you to break up your application's UI into components, manage component state, and respond to user events.

## User Story

* As a user, I want to be able to view my entire employee directory at once so that I have quick access to their information.

## Business Context

An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.

## Acceptance Criteria

Given a table of random users generated from the [Random User API](https://randomuser.me/), when the user loads the page, a table of employees should render. 

The user should be able to:

  * Sort the table by at least one category

  * Filter the users by at least one property.

## Commit Early and Often

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

1. Your commit history is a signal to employers that you are actively working on projects and learning new skills

2. Your commit history allows you to revert your code base in the event that you need to return to a previous state

Follow these guidelines for committing:

* Make single purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits

* Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history

* Don't commit half done work, for the sake of your collaborators (and your future self!)

* Test your application before you commit to ensure functionality at every step in the development process

* We would like you to have well over 200 commits by graduation, so commit early and often!

* Deploy this site to GitHub Pages using the [Create React App docs for deployment.](https://create-react-app.dev/docs/deployment/#github-pages)

* **Important**: Be sure to push your codebase to GitHub and **NOT** your built and deployed code. Ensure this happens by following the above instructions and using the `gh-pages` branch to host the deployed application's code.

## Submission on BCS

You are required to submit the following:

* the URL to the deployed application

* the URL to the Github repository


# Employee Directory React

## Objective
To create a burger logger with MySQL, Node, Express, Handlebars and ORM. Follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.

## Acceptance Criteria
- Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.
- Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.
- Your app will store every burger in a database, whether devoured or not.
- Follow the MVC design instruction
    * App setup : express, mysql and express-handlebars
    * DB setup : schema.sql and seeds.sql
    * Config setup : connection.js and orm.js
    * Model setup : burger.js
    * Controller setup : burgers_controller.js
    * View setup : handlebars files
- This assignment must be deployed to Heroku
- Add this homework to your portfolio


## Application

### Github Repository URL
https://github.com/thammaraku/homework_12_burger_logger

### Heroku Deployed Link
https://still-coast-35905.herokuapp.com/

### Application Screenshot
![Application Screenshot](./public/assets/img/burger_app_screenshot.png)


## Knowledge learned from this assignment
1. Using MySQL to architect and manage database
2. Using Handlebars to generate HTML
3. Using Heroku and JawsDB to deploy application
4. Following MVC (Model View Controller) design pattern
5. Using ORM to create the methods in order to retrieve and store data
6. Hiding credential by using dotenv