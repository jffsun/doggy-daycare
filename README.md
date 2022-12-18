<div id="top"></div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#description">Description</a></li>
    <li><a href="#link-to-the-app">Link to App</a></li>
    <li><a href="#user-story">User Story</a></li>
    <li><a href="#future-development">Future Development</a></li>
    <li><a href="#collaborators">Collaborators</a></li>
  </ol>
</details>

# Doggy Daycare


## Description

![Doggy Daycare Logo](./images/logo.png "Doggy Daycare Logo") 

A pet service scheduling application where users can schedule daycare, board, grooming, and training services for their pet.

* After creating an account, the user is logged in and can add their pet's information along with an image. 
* Once they've added their pet, they may choose one of four pet services with the date of the service. After scheduling, all services will appear on the 'Bookings' page. 
* This application uses the MERN stack. MongoDB acts as our database, Express is a Node.js framework that helps manage servers and routes, and React is a front-end library that creates the app's user interface.

<p align="right">(<a href="#top">back to top</a>)</p>


## Link to App

* [Doggy Daycare Deployed Heroku App](https://lit-everglades-07230.herokuapp.com/services)

![](./client/src/assets/pup.png)

<p align="right">(<a href="#top">back to top</a>)</p>


## User Story

**Launch**

* WHEN I launch the application 

* THEN I will be directed to the home page with a button to log in.

* WHEN I click Log in

* THEN I will prompted to enter my credentials or register a new account.


**Registration**
* WHEN I click register

* THEN I will be presented with a form to enter an email address and password.

* WHEN I submit the form

* THEN I will be logged in and redirected to the home page.

**Login**

* WHEN I click login 

* THEN I there are fields to enter my email and password.

* WHEN I submit my login information

* THEN my credentials are checked. If invalid credentials, the application returns an error message.

* WHEN I am logged in 

* THEN I am on the homepage with navigation tabs.

**Navigation**

* WHEN I view the navigation tabs 

* THEN I see a section for "Home", "Pets", "Bookings" and "Services".

**Pets**

* WHEN I click on "Pets" 

* THEN I see an option to “Add Pet”.

* WHEN I click the “Add Pet” button

* THEN I see a form to add information about my pet (name / medication / photo / etc.).

* WHEN I submit my pet’s information

* THEN I see a card generated with my pet’s photo and name.

* WHEN I select the card

* THEN I will be able to see my pet’s information.

**Service**

* WHEN I click on the Service nav tab

* THEN I see a list of services and prices.

* WHEN I click "Add Service"

* THEN I can select one of my pets, the desired service, and the date and time for the service.

* WHEN I submit my choice

* THEN I see the reservation added to the calendar.

**Bookings**

* WHEN I click on "Bookings"

* THEN I see a calendar with the current bookings.

Pets (INSERT IMG)
![](./client/src/assets/pets.png)
![](./client/src/assets/add-pet.png)

Services (INSERT IMG)
![](./client/src/assets/services.png)
![](./client/src/assets/service-modal.png)

Bookings (INSERT IMG)
![](./client/src/assets/bookings.png)

<p align="right">(<a href="#top">back to top</a>)</p>

## Future Development

* Add a cart function and checkout page with payment API (i.e, Stripe)

* Image upload API instead of encoding images to Base64 string which severly detriments performance

* Color code services in bookings calendar

* Implement authorized view for daycare employee user who can view request details and either accept or decline service requests


## Collaborators
[Alan Huang](https://github.com/ahuang23)

[Anhvu Nguyen](https://github.com/IamIncognito123)

[Jeffrey Sun](https://github.com/jffsun)

[Markus Mercado](https://github.com/markkoos)

<p align="right">(<a href="#top">back to top</a>)</p>