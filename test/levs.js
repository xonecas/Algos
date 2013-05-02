'use strict';

var algos = require('../algos.js');

console.log('Levenshtein distance');
console.log('git and got: ' + algos.fuzzy('git', 'got'));
console.log('sean and naes: ' + algos.fuzzy('sean', 'naes'));
console.log('Algotrithms and algorithms: ' + algos.fuzzy('Algorithms', 'algorithms'));
console.log('xonecas and xonecas: ' + algos.fuzzy('xonecas', 'xonecas'));

