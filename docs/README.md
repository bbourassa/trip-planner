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

### 1.3 "View Generated Trips" Page

### 1.4 "View Generated Trip Comparisons" Page

## 2. Structure & Functionality

### 2.1 Struture of Front-End Components

### 2.2 The CRUD Service:

### 2.3 Structure of Back-End: Server File

### 2.4 Structure of the Back-End: Routing And Database Calls

## 3. API Structure 

## 4. Database Structure 