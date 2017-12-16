## TuneHunt Application

This application is a social website for music community.


## Requirements

This application requires installation of NodeJS and MongoDB prior to running.

## Description

This application was created for bringing all the music people together. Music Stakeholders such as Student, Teacher, Organizer, etc can collaborate closely through this platforme. This MEAN Stack App is based on a RESTful API and MVC framework. 
 
## Installation

- Install all dependencies in package.json file. This can be done by navigating to the root directory in the command prompt/terminal/console and running the following command:
 
```
$ npm install
$ npm install -g bower
$ bower install
$ bower install angular-route
$ bower install angularjs-geolocation
$ bower install bootstrap
$ bower install modernizr
$ npm install jquery
$ npm install mongodb

```

- You must enter your own MongoDB configuration settings in the server.js file:

```
mongoose.connect('mongodb://adbmsdemo:adbmsdemo@ds133876.mlab.com:33876/tunehunt_demo', function(err) {
    if (err) {
        console.log('Not connected to the database: ' + err);
    } else {
        console.log('Successfully connected to MongoDB');
    }
});
```

- You must enter your own Facebook, Twitter, and Google passport.js configuration settings in /app/passport/passport.js:

``` 
passport.use(new FacebookStrategy({
        clientID: '', // Replace with your Facebook Developer App client ID
        clientSecret: '', // Replace with your Facebook Developer client secret
        callbackURL: "", // Replace with your Facebook Developer App callback URL
        profileFields: ['id', 'displayName', 'photos', 'email']
    }
```

```
passport.use(new TwitterStrategy({
        consumerKey: '', // Replace with your Twitter Developer App consumer key
        consumerSecret: '', // Replace with your Twitter Developer App consumer secret
        callbackURL: "", // Replace with your Twitter Developer App callback URL
        userProfileURL: "https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true"
    }
```

```
passport.use(new GoogleStrategy({
        clientID: '', // Replace with your Google Developer App client ID
        clientSecret: '', // Replace with your Google Developer App client ID
        callbackURL: "" // Replace with your Google Developer App callback URL
    }
```


- Installation is complete. Navigate to folder where server.js file is located and enter the following into command prompt:
Running the Web Application

$ mongod
$ node server.js
open http://localhost:3000 in browser


```

