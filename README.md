#Exercise 6: Angular ng-repeat and filtering data

##Summary
In this application, you are supposed to create `searchStudent` filter allowing user to search through the list of students by filtering the specified field.

##Goals
Your task is to make the `search` input field search through all categories. Each input field is responsible for its own column. Furthermore, you should be able
 to filter by using multiple fields at the same time.

 * write `Warner` in `First Name` field

| firstName | lastName |age |email|phone|
|--------|--------|--------|--------|--------|
| Warner  |Bridges| 18|warner.bridges@undefined.biz|+1 (914) 451-3055|

 * write `1` in `Age` field

| firstName | lastName |age |email|phone|
|--------|--------|--------|--------|--------|
| Warner  |Bridges| 18|warner.bridges@undefined.biz|+1 (914) 451-3055|
| Gray  |Rose| 21|gray.rose@undefined.io|+1 (807) 582-3992|

##Before you start, please refer to:
* [angularjs-ngrepeat-and-filtering-data](https://egghead.io/lessons/angularjs-ngrepeat-and-filtering-data)
* [angular filter](https://docs.angularjs.org/api/ng/filter/filter)

##Setup
 You should have `npm`, `bower`, `grunt-cli`  packages installed to run this example.
 
###To resolve dependencies run:

```
npm install
```

```
bower install
```

###To run the application:

```
grunt serve
```

###To test the application:

You must install protractor as an admin: 

```
npm install -g protractor
```

```
webdriver-manager update --standalone
```
        
In order to test the application you must have `webdriver-manager` running in background.

```
webdriver-manager start
```

To run protractor tests:

```
npm run protractor
```

Good luck!
