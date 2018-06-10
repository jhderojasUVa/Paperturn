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
php/savedatabase.php - PHP file who test and send data to the MySQL
php/sendjson.php - PHP file that send the slideshowdata.json file
json/slideshowdata.json - The data in JSON of the images of the slideshow
```

### Slideshow

The slideshow is the most easy component.

formcomponent.js is the form component that takes the data sended by sendjson.php (on php directory) who takes the slideshowdata.json file (is a simply JSON file) and creates the slideshow thanks Bootstrap element.

In UX we show the slideshow putting more than one element in a row but means that it's a "one image" slideshow. I have take this idea. If not, simply its to use, for example Slick (http://kenwheeler.github.io/slick/) and refactor this component to create the proper slideshow.

This component have an initial state where the data is not recived and change this state when reads and takes all the JSON. Then it mount, read the data on the mount and render the slideshow. Easy.

About the visual experience. Images are from different sizes, so the best way to put an image inside an element of a fixed size it's to put as a background of a div, use CSS3 and "cover" the size of the div. With that elements of different size fit great but, if you need to see all the image, you must take different approach resizing the height.

On the PSD (render) there's not arrow or dot or element that helps you to move from one to another so I put in "auto" mode. If needed the Bootstrap carousel (slideshow) data-interval can be used (and if needed arrows, and all the stuff too).

### Form

The form have two important elements: the javascript component and the php file who recives the data from the form and save on the database.

For security reasons we made double test, one in the client by javascript using html5 and the second on the server side on the savedatabase.php file inside de php directory where all the php files relay.

The form component it's very easy. Print a form and take cares of the submit who send a JSON file to savedatabase.php file.

The savedatabase.php have the database connection string (that must be changed, of course) test the data, and do the job. If something go wrong it populates an array that will converted to JSON who is sended to the form component to show errors (or not errors... the user must be always informed of what happens).

Of course, a "big error" that must show that can't connect to database or something it's not showed. Only a small error will be show and the administrator must see the logs on the server side.

## The solution

This is a simple solution of the problem. It can be done with many many forms, many many frontend frameworks like angular, angularjs, vue, polymer... (or not, it can be done in vanilla mode), many many html frameworks (foundation, grid, flex...) and with many many php frameworks.

I have selected react as a frontend because it will be nice to rememeber how things are doing with this framework, and use on these way you can take all the web app as a packet for deploying in any server with PHP configurated. It can be done with "create-react-app" cli of node but testing will be "more complicated" until you build it (and you will not show the "real code"). So, the use of babel library I think it's more "elegant". The other frontend framework can be easy used is angularjs (that have the typical MVC) in the way I have use react but, well, some people considers it "old" (because angular) and with angular you can use version 16 in the same way.

The bootstrap framework was selected in order to complete it quick and because it have an slideshow inside but it can be done by creating an slideshow from scratch or using one of the many libraries that are there.

The "backend" or the PHP files can be done in several ways, from as I used (the basic) to create an object oriented way creating an object that relays all the stuff about connecting, inserting (updating, and deleting if needed), and disconnecting from the database to a more REST way or like a web service stuff that not only adds the data, it can be serve the slideshow data too. I thought that the more easy way in order to see and understand it it's what I have done, but I can be wrong. It depends on who are looking at the code. As a every computer related problem there's a lot of ways of having a solution, all valid but depends on what you are looking for and who will use it.

Ah! It's very nice that in the PSD file you have included how many columns everything are, thanks!.
