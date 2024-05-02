const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('Reading Input', () => {
        assert.isDefined(convertHandler.getNum('3mi'), 'whole number input');
    })
});