# Project Terriffic-Trivia

## Description
Terriffic-Trivia is a MERN stack web app where users can test their knowledge against a host of different trivia qquestions. It utilizes server side centeric coding to accomplish a request and response handling, pushing finished products to the end user.

## Routes
| Method |           Path           |                      Purpose                     |
|:------:|:------------------------:|:------------------------------------------------:|
|   GET  |             /            |                     Home page                    |
|   GET  |          /places         |                 Places index page                |
|  POST  |          /places         |                 Create new place                 |
|   GET  |        /places/new       |        Form page for creating a new place        |
|   GET  |        /places/:id       |         Details about a particular place         |
|   PUT  |        /places/:id       |             Update a particular place            |
|   GET  |     /places/:id/edit     |      Form page for editing an existing place     |
| DELETE |        /places/:id       |             Delete a particular place            |
|  POST  |     /places/:id/rant     | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
|   GET  |             *            |  404 page (matches any route not defined above)  |

## Places
| Name   |           City           |                      Cuisines                    |                        Images                    |
|:------:|:------------------------:|:------------------------------------------------:|:------------------------------------------------:|
|        |                          |                                                  |                                                  |
|        |                          |                                                  |                                                  |

## Rants
| Field   |           Type           |                     Notes                        | 
|:-------:|:------------------------:|:------------------------------------------------:|
|         |                          |                                                  |
|         |                          |                                                  |

## Technologies Used
Node.js, REACT, Express Server, Dotenv, MongoDB, and Mongoose

### Other Technologies used to in development
Nodemon, and Postman