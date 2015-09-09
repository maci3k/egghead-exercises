#Exercise 12 : Isolate Scope "@", "&"

##Summary
Application that you are provided with is used for handling simple orders from the customers. It includes a simple list of products available for ordering
as well as basic functions. 

The main problem is that all products from different categories are now stacked in one select component and the newest requirements
specify that you should have multiple components for different categories. Being smart you decide that you should create only one directive
and use it multiple times. 


##Goals
Pass custom order function(that accepts product as a parameter) and list of custom products(category).
Create ***orderComponent*** directive with an isolated scope and use it to allow the user to order from **sweets** and **cakes** categories.

* Edit **orderComponent** directive so that it would have **products** field and **buy** function passed as attributes in correct 
format(directive should have isolate scope)
* Restrict order component to the element
* In **orderComponent** template:
    * ```<select>``` element(check comment) should be instantiated from **products** array(as options)
    * ```<select>``` element model should be available only on the directive scope and be set to first element of the **products** array as default
    * the bottom div element(check comment) should have **buy** function invocation bound on click (with ```<select>``` element model passed as argument)
* **index.html** must contain two separate order components for **cakes** and **sweets** products(they are already included on **appCtrl** scope, 
check comments to place them correctly)
* Both **orderComponent** instances in **index.html** should use **buyProduct** function(already included on **appCtrl** scope, expects product as argument)

##Before you start, please refer to:
* [angularjs-isolate-scope-expression-binding](https://egghead.io/lessons/angularjs-isolate-scope-expression-binding)
* [ngularjs-isolate-scope-two-way-binding](https://egghead.io/lessons/angularjs-isolate-scope-two-way-binding)
* [ngOptions example](https://docs.angularjs.org/api/ng/directive/ngOptions/#example)

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
