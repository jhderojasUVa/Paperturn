# One page web app

This is an example of a one page fetching web app. Very simple.

## The requisites

- Create the image slider in the top of the page with an MVC / MVVM framework. Images placed in images folder needs to be loaded with ajax/JSON.

- Create the php script that serves the images list JSON file. The form in the bottom should work and send data to PHP script created by you that stores the name, email and timestamp to a MYSQL database.

- Use HTML 5 and CSS 3 or LESS/SASS.  Needs to work and look the same on Chrome, FF, Safari, Edge and MSIE9+. Any JavaScript Framework is allowed to be used. No PHP framework is allowed to be used.

For the frontend framework I have choose React, an MVVM library that will help to do all the job.

There's no requisite or something about the HTML framework so I take Bootstrap 4.

The React components are not compiled in order to show how they are coded, so babel.js is needed

## How it works

On the js directory you will find the components needed.

On the scss directory is the app.scss file where the SCSS needed is. A layer over Bootstrap. On the css directory you will find the compiled version.

## Needs

You will need:

- Apache or Nginx or ISS web server or any web server with PHP module (or FastCGI or whatever you want).

- A MySQL.

- A web browser.

## Files

A brief description about you have.

```
css/app.css - Compiled CSS file
images/...jpg - Slideshow images
js/formcomponent.js - Form component in React
js/slideshowcomponent.js - Slideshow component in React
scss/app.scss - SCSS for the styles
sql/paperturn.sql - Dump of the database (empty)
index.html - Principal file where the One Single Page is
README.md - This file!
savedatabase.php - PHP file who test and send data to the MySQL
sendjson.php - PHP file that send the slideshowdata.json file
slideshowdata.json - The data in JSON of the images of the slideshow
```

### Slideshow

The slideshow is the most easy component.

formcomponent.js is the form component that takes the data sended by sendjson.php who takes the slideshowdata.json file (is a simply JSON file) and creates the slideshow thanks Bootstrap element.

In UX we show the slideshow putting more than one element in a row but means that it's a "one image" slideshow. I have take this idea. If not, simply its to use, for example Slick (http://kenwheeler.github.io/slick/) and refactor this component to create the proper slideshow.

This component have an initial state where the data is not recived and change this state when reads and takes all the JSON. Then it mount, read the data on the mount and render the slideshow. Easy.

### Form

The form have two important elements: the javascript component and the php file who recives the data from the form and save on the database.

For security reasons we made double test, one in the client by javascript using html5 and the second on the server side on the savedatabase.php file.

The form component it's very easy. Print a form and take cares of the submit who send a JSON file to savedatabase.php file.

The savedatabase.php have the database connection string (that must be changed, of course) test the data, and do the job. If something go wrong it populates an array that will converted to JSON who is sended to the form component to show errors (or not errors... the user must be always informed of what happens).

Of course, a "big error" that must show that can't connect to database or something it's not showed. Only a small error will be show and the administrator must see the logs on the server side.

## The solution

This is a simple solution of the problem. It can be done with many many forms, many many frontend frameworks like angular, angularjs, vue... (or not, it can be done in vanilla mode), many many html frameworks (foundation, grid, flex...) and with many many php frameworks.

I have selected react as a frontend because it will be nice to rememeber how things are doing with this framework.

The bootstrap framework was selected in order to complete it quick and because it have an slideshow inside but it can be done by creating an slideshow from scratch or using one of the many libraries that are there.

It's very nice that in the PSD file you have included how many columns everything are, thanks!.
