/*global element,by*/
var byString = function (object, fragmentName) {
    'use strict';
    if (!fragmentName || !fragmentName.replace) {
        return null;
    }
    fragmentName = fragmentName.replace(/\[(\w+)\]/g, '($1)');
    fragmentName = fragmentName.replace(/^\./, '');
    var a = fragmentName.split('.');
    while (a.length) {
        var n = a.shift();
        var arrayExpr = n.match(/(\w+)\(([^)]*)\)/);
        if (arrayExpr) {
            object = object[arrayExpr[1]](arrayExpr[2]);
        } else if (n in object) {
            object = object[n];
        } else {
            throw new Error('Undefined fragment "' + n + '" in "' + fragmentName + '"');
        }
    }
    return object;
};

var fragments = function (text) {
    'use strict';

    var mapping = {

        greenSquare: element.bind(null, by.id('greenSquare')),
        redSquare: element.bind(null, by.id('redSquare')),
        petals: element.all.bind(null, by.repeater('s in snow')),
        title: element.bind(null, by.tagName('h1')),
        star: element.all.bind(null, by.id('petal'))

    };

    return byString(mapping, text);
};

module.exports = fragments;
