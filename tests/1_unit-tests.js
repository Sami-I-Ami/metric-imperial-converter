const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('Reading Input', () => {
        // num
        assert.equal(convertHandler.getNum('3mi'), 3, 'whole number input');
        assert.equal(convertHandler.getNum('3.1mi'), 3.1, 'decimal number input');
        assert.equal(convertHandler.getNum('3/2mi'), 1.5, 'fractional input');
        assert.equal(convertHandler.getNum('3.2/2mi'), 1.6, 'fractional input with decimal');
        assert.equal(convertHandler.getNum('3/2/2mi'), 'invalid number', 'double fractional input');
        assert.equal(convertHandler.getNum('mi'), 1, 'no number inputed');

        // unit
        assert.equal(convertHandler.getUnit('3gal'), 'gal' , 'inputs');
        assert.equal(convertHandler.getUnit('3L'), 'L' , 'inputs');
        assert.equal(convertHandler.getUnit('3lbs'), 'lbs' , 'inputs');
        assert.equal(convertHandler.getUnit('3kg'), 'kg' , 'inputs');
        assert.equal(convertHandler.getUnit('3mi'), 'mi' , 'inputs');
        assert.equal(convertHandler.getUnit('3km'), 'km' , 'inputs');
        assert.equal(convertHandler.getUnit('notAUnit'), 'invalid unit', 'input not in list');
    })
});