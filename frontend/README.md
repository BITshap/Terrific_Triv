# Project Terriffic-Trivia

## Description
Terriffic-Trivia is a MERN stack web app where users can test their knowledge against a host of different trivia qquestions. It utilizes server side centeric coding to accomplish a request and response handling, pushing finished products to the end user.

## Ideas for data presentation
User can look at previos sessions to see score, and a list of questions with their answer compared to the correct answer with indicator for if they were correct.

## Ideas for question selection and session tracking
Each category could have a pool of questions, and each session would be a random selection of ten of those questions.
When a session is submited after answers are selected, a new session is created in the sessions collection containing: an overall score, the date and time of the session's submission, and an array containing: each question asked, the correct answer, and the user's selected answer. It should also contain the ObjectId of the question so we could easily replicate the session if the user wants to try the exact session again.

## Backend Routes
| Method | Path                                  | Purpose                                       |
|:-------|:--------------------------------------|:----------------------------------------------|
| GET    | /                                     | Welcome message                               |
|        | **USERS**                             |                                               |
| GET    | /users                                | Find all users                                |
| GET    | /users/:id                            | Find specific user                            |
| POST   | /users                                | Create new user                               |
| PUT    | /users/:id                            | Update specific user                          |
| DELETE | /users/:id                            | Delete specific user                          |
| GET    | /users/:id/sessions                   | Get all sessions of specific user             |
| GET    | /users/:id/sessions/:sessionId        | Get specific session of specific user         |
| POST   | /users/:id/sessions                   | Create new session of specific user           |
| DELETE | /users/:id/sessions/:sessionId        | Delete specific session of specific user      |
|        | **CATEGORIES**                        |                                               |
| GET    | /categories                           | Find all categories                           |
| GET    | /categories/:id                       | Find specific category                        |
| POST   | /categories                           | Create new category                           |
| PUT    | /categories/:id                       | Update specific category                      |
| DELETE | /categories/:id                       | Delete specific category                      |
| GET    | /categories/:id/questions             | Find all questions of specific category       |
| GET    | /categories/:id/questions/:questionId | Find specific question of specific category   |
| POST   | /categories/:id/questions             | Create new question of specific category      |
| PUT    | /categories/:id/questions/:questoinId | Update specific question of specific category |
| DELETE | /categories/:id/questions/:questoinId | Delete specific question of specific category |

## Data Model Referance
|  Category | ObjectId                                   | QuestionId       | 
|:---------:|:------------------------------------------:|:-----------------|
|  Anatomy  |    ObjectId("63960b51cd6b86a544c3a509")    | Array of Strings |
|  Biology  |    ObjectId("63960b7dcd6b86a544c3a50a")    | Array of Strings |
| Chemistry |    ObjectId("63960b9ccd6b86a544c3a50b")    | Array of Strings |

## Schema Outlines

### Users
| firstName | lastName | email  | password | age    | lastPlayed | lastLogin | sessions                   | overallGrade |
|:----------|:---------|:-------|:---------|:-------|:-----------|:----------|:---------------------------|:-------------|
| String    | String   | String | String   | Number | Date       | Date      | Array of Session ObjectIds | String       |

### Sessions
| user          | questions        | score               | date |
|:--------------|:-----------------|:--------------------|:-----|
| User ObjectId | Array of Objects | String (Percentage) | Date |

#### Session question objects
| questionId        | question | correctAnswer | selectedAnswer | isCorrect |
|:------------------|:---------|:--------------|:---------------|:----------|
| Question ObjectId | String   | String        | String         | Boolean   |

### Categories
| name   | QuestionId                  | 
|:-------|:----------------------------|
| String | Array of Question ObjectIds |

### Questions
| question | correctAnswer | incorrectAnswers | 
|:---------|:--------------|:-----------------|
| String   | String        | Array of Strings |

## Technologies Used
Node.js, REACT, Express Server, Dotenv, MongoDB, and Mongoose

### Other Technologies used to in development
Nodemon, and Postman