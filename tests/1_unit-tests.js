const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    // num
    test('Whole number input', () => {
        assert.equal(convertHandler.getNum('3mi'), 3, 'whole number input');
    });
    test('Decimal number input', () => {
        assert.equal(convertHandler.getNum('3.1mi'), 3.1, 'decimal number input');
    });
    test('Fractional input', () => {
        assert.equal(convertHandler.getNum('3/2mi'), 1.5, 'fractional input');
    });
    test('Fractional input with decimal', () => {
        assert.equal(convertHandler.getNum('3.2/2mi'), 1.6, 'fractional input with decimal');
    });
    test('Double fractional input', () => {
        assert.equal(convertHandler.getNum('3/2/2mi'), 'invalid number', 'double fractional input');
    });
    test('No number inputted', () => {
        assert.equal(convertHandler.getNum('mi'), 1, 'no number inputed');
    });
    
    // unit   
    test('Read valid inputs', () => {
        assert.equal(convertHandler.getUnit('3gal'), 'gal' , 'inputs');
        assert.equal(convertHandler.getUnit('3L'), 'L' , 'inputs');
        assert.equal(convertHandler.getUnit('3lbs'), 'lbs' , 'inputs');
        assert.equal(convertHandler.getUnit('3kg'), 'kg' , 'inputs');
        assert.equal(convertHandler.getUnit('3mi'), 'mi' , 'inputs');
        assert.equal(convertHandler.getUnit('3km'), 'km' , 'inputs');
    });  
    test('Read invalid inputs', () => {
        assert.equal(convertHandler.getUnit('notAUnit'), 'invalid unit', 'input not in list');
    });
    test('Return units', () => {
        assert.equal(convertHandler.getReturnUnit('3gal'), 'L' , 'return unit');
        assert.equal(convertHandler.getReturnUnit('3L'), 'gal' , 'return unit');
        assert.equal(convertHandler.getReturnUnit('3lbs'), 'kg' , 'return unit');
        assert.equal(convertHandler.getReturnUnit('3kg'), 'lbs' , 'return unit');
        assert.equal(convertHandler.getReturnUnit('3mi'), 'km' , 'return unit');
        assert.equal(convertHandler.getReturnUnit('3km'), 'mi' , 'return unit');
    });
        
});