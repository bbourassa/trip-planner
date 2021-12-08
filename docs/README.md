# TripPlanner

*Link to application: https://trip-to-plan.herokuapp.com/*

TripPlanner is an application designed to help users plan trips more efficiently by easily comparing important factors of two different trips side by side. The goal is for users to be able to compare factors like hotel and travel prices while adjusting certain characteristics such as trip dates and hotel or travel method of choice to assist in optimizing planning the best trip possible while aiming for a certain budget. 

Users can create individual trips that can later be use to generate the comparisons. 

## 1. User Guide

TripPlanner's homepage provides a main menu for the user to initially decide what they would like to do. There are two dropdowns with two possible options each. Each one will link to a page on the applicaton. The dropdowns and their sub-pages are:
- Create A Trip/Trip Comparison:
   - Create A New Trip
   - Create A New Trip Comparison
- View Available Trips/Trip Comparisons:
   - View Generated Trips
   - View Generated Trip Comparisons

This main menu is always available from any of the pages in the application by navigating to the top of the page. You can get to any of the pages in the application by the same dropdowns available in the top navigation bar. To return to the main menu, click on the application name, "TripPlanner", on the top navigation bar.

### 1.1 "Create A New Trip" Page

The "Create A New Trip" page is where a user can submit information on an individual trip that can later be used in a trip comparison. Note that all pricing is done PER PERSON and that calculation should be done BY the user - the software will NOT split any pricing to reflect individual price. It WILL use the prices per person that are given to calculate a total price per person for the whole trip.

The following information is required for a trip:
- Trip Name
- Trip Location
- Start Date
- End Date
- Number of People
- Hotel/Airbnb Name
- Hotel/Airbnb Rating
- Hotel/Airbnb Price - Per Person
- Travel Expenses To Destination - Per Person
- Travel Expenses Home - Per Person
- Other Expenses Predicted - Per Person

Optional Fields for a trip are:
- Pros
- Cons
- Additional Notes

Required fields are indicated with an asterisk and a red border. The button to submit a trip will also not activate until the required fields are filled out by the user. 

Trips are required to have unique names and this is indicated by the red border around the "Trip Name" input in the form. When a user inputs a trip name, the border will stay red if the name has already been used for a trip. Valid trip names will be indicated by a removal of the red border.

Once all required fields are filled out, the form's submit button will activate and the trip can be created. On submission, the trip is created and the trip information is displayed to the user in a pop-up.

To get rid of the popup, a user can click on the faded out background to get back to the trip page. From there, new trips can be submitted. 

### 1.2 "Create A New Trip Comparison" Page

The "Create A New Trip Comparison" page is where trip comparisons can be made. On this page, you add in the name for two trips that have been previously generated as well as a comparison name and can generate the comparison.

Additionally, on the page is a table of previously generated trips. This table can be searched by inserting a keyword into the search field and searching for certain trips. The purpose of having the previously generated trips on this page is to make it easier for the user to locate the trip names needed for their comparison. The rows in the table are clickable and will display the trip information on selection as well for user reference. 

The following information for a trip comparison is required:
- Comparison Name
- First Trip Name
- Second Trip Name

Required fields are indicated with an asterisk and a red border. Additionally, the comparison name inputed must be unique and the trip names inputed must exist in the previous trips. The red border will also indicate if there is a duplicate name input or a trip name input that doesn't exist. This is also indicated by a message above the generate trip comparison button.

The button will remain deactivated until the fields are filled out with valid information and then the user can submit the trip comparison.

On submission, the trip comparison information is visible to the user. The trip location, number of people, hotel dates, length of stay, hotel names, hotel ratings, pros, cons, and additional notes are directly compared with side-by-side text.

The trip pricing for total cost, hotel cost, travel to destination, travel home, and other expenses are all compared using bar graphs. 

To get rid of the popup with the trip comparison information, a user can click on the faded out background to get back to the trip comparison page. From there, new trip comparisons can be submitted. 

### 1.3 "View Generated Trips" Page

On the View Generated Trips page, users can view a table of past generated trips. The table is searchable by looking for a keyword in the search field. There is a clear button to clear the search as well. Each of the table rows with the trips is clickable and on selection, will display the associated trip information. 

### 1.4 "View Generated Trip Comparisons" Page

On the View Generated Trip Comparisons page, users can view a table of past generated trip comparisons. The table is searchable by looking for a keyword in the search field. There is a clear button to clear the search as well. Each of the table rows with the trip comparisons is clickable and on selection, will display the associated trip comparison information. 

## 2. Structure & Functionality

### 2.1 Struture of Front-End Components

The front-end uses angular to break up the code into components. Each component contains the html, css, and typescript files related to it. The main components relative to the application functionality are listed below:
- create-comparison
- create-trip
- main-menu
- one-trip
- one-trip-view
- service (described in greater detail in 2.2)
- trip-comparison
- trip-comparison-view

#### create-comparison

This component contains the code for the dialog box that gives an individual comparison's information.

#### create-trip

This component contains the code for the dialog box that gives an individual trip's information.

#### main-menu

This component contains the main homepage code with the menu for page navigation.

#### one-trip

This component contains the code for the UI of the trip form and the functions associated with the front-end of trip submission and activating displaying the trip information. 

#### one-trip-view

This component contains the code for the UI of the previously generated trips table. It also contains the functions associated with the front-end portion of getting all available trips and activating the displaying of trip information on row selection.

#### trip-comparison

This component contains the code for the UI of the trip comparison form, utilizes the one-trip-view component, and the functions associated with the front-end of trip comparison submission and activating displaying the trip comparison information.

#### trip-comparison-view

This component contains the code for the UI of the previously generated trip comparisons table. It also contains the functions associated with the front-end portion of getting all available trip comparisons and activating the displaying of trip comparison information on row selection.

### 2.2 The CRUD Service:

The service component is used to connect the front-end to the back-end and identifies the API calls. The API calls themselves are defined in section 3. Mainly all of the front-end components utilize the CRUD service that is created. For the purpose of this application, there is no updating or deleting that occurs. 

##### getTrips()

getTrips() connects up the API call to get all of the available trips in the database. If successful, it will return a response with all the trips in the database and their information to the front-end.

##### getSomeTrips()

getSomeTrips() connects up the API call to get the trips that are being searched for. The searched for name is passed in as a parameter for the API call. If successful, it will return a response with all trips that contain that name in the trip name and their information to the front-end.

##### getTrip()

getSomeTrips() connects up the API call to get the trip that is being searched for. The searched for name is passed in as a parameter for the API call. If successful, it will return a response with the trip that contains that name as the trip name and its information to the front-end.

##### getHotel()

getHotel() connects up the API call to get the hotel that is being searched for. The searched for name is passed in as a parameter for the API call. If successful, it will return a response with the hotel's information to the front-end.

##### getComparisons()

getComparisons() connects up the API call to get all of the available trip comparisons in the database. If successful, it will return a response with all the trip comparisons in the database and their information to the front-end.

##### getSomeComparisons()

getSomeComparisons() connects up the API call to get the trip comparisons that are being searched for. The searched for name is passed in as a parameter for the API call. If successful, it will return a response with all trip comparisons that contain that name in the comparison name and their information to the front-end.

##### createTrip()

createTrip() connects up the API call to create a trip in the database. It takes in the name and data parameters from the front-end and creates a new trip and its associated hotel in the database. It then will return a response with the new trip's information to the front-end. 

##### createComparison()

createComparison() connects up the API call to create a trip in the database. It takes in the name and data parameters from the front-end and creates a new trip comparison in the database. It then will return a response with the new trip comparison's information to the front-end. 

##### handleError()

handleError() will handle if any errors occur both on client and server errors.

### 2.3 Structure of Back-End: Server File

The server file, index.js, utilizes express to set up the server. The file is used at runtime by heroku to host the application and by setting the port. It also handles the routing of the pages by assuring that the main-menu page is loaded on initial load of the webpage and assures that from any page, the page can be refreshed without losing the connection. 

### 2.4 Structure of the Back-End: Routing And Database Calls

To set up routing the API calls and the use of the database calls with angular, a trip.routes.js file was created. This file makes the database connection and also utilizes express.Router() to set up the API routes to be called. Their mapping in relation to the CRUD service file which helps to connect up these routes and how they relate to working with the database are explained as follows (API calls themselves are explained formally in section 3):

- GET /trip
  - Used in relation to the getTrips() method in the CRUD service
  - Runs a query on the database to get back all trips from the database in alphabetical order

- GET /trips/:name
  - Used in relation to the getSomeTrips() method in the CRUD service
  - Runs a query on the database to get back all trips that contain the passed in name in their trip name in alphabetical order

- GET /trip/:name
  - Used in relation to the getTrip() method in the CRUD service
  - Runs a query on the database to get back a singular trip matching the requested trip name

- PUT /trip/:name
  - Used in relation to the createTrip() method in the CRUD service
  - Runs a query on the database to first, add the new hotel to the database and then use the hotel's id number to add the trip information into the database
  - It then runs a query to get back the new trip from the database

- GET /hotel/:id
  - Used in relation to the getHotel() method in the CRUD service
  - Runs a query on the database to get back a singular hotel matching the requested hotel id

- GET /comparison
  - Used in relation to the getComparison() method in the CRUD service
  - Runs a query on the database to get back all comparisons from the database in alphabetical order

- GET /comparisons/:name
  - Used in relation to the getSomeComparisons() method in the CRUD service
  - Runs a query on the database to get back all comparisons that contain the passed in name in their comparison name in alphabetical order

- PUT /comparisons/:name
  - Used in relation to the createComparison() method in the CRUD service
  - Runs a query on the database to first, add the new comparison to the database
  - It then runs a query to get back the new trip from the database

## 3. API Structure 

## 4. Database Structure 