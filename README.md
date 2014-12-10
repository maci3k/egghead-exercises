##Exercise 2 : Controller

The goal of this exercise is use **FruitCtrl** controller to connect data from text fields and display them.

###Before you start, please refer to:
* [angularjs-controller](https://egghead.io/lessons/angularjs-controller)

###Exercise

1. Create a new file **FruitCtrl.js**
2. Inside **FruitCtrl.js** create a function **FruitCtrl** accepting ```$scope```  argument 
3. In the controller, place **fruit** object with attribute **seller, name, count** - then initialize them (example values ``` seller: John Seller, the name "Apple", count: 5 ```)
4. In **index.html** file add ```<script src="FruitCtrl.js"></script>```
5. In ```<div class = "container">``` add  controller (**FruitCtrl**)
6. Use ```ng-model``` directive to connect inputs with data in the controller.
7. Update ***seller, name, count***  inside **<div class =" well "** so that displayed the data from the controller

Good luck!
