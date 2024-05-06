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
        assert.equal(convertHandler.getReturnUnit('gal'), 'L' , 'return unit');
        assert.equal(convertHandler.getReturnUnit('L'), 'gal' , 'return unit');
        assert.equal(convertHandler.getReturnUnit('lbs'), 'kg' , 'return unit');
        assert.equal(convertHandler.getReturnUnit('kg'), 'lbs' , 'return unit');
        assert.equal(convertHandler.getReturnUnit('mi'), 'km' , 'return unit');
        assert.equal(convertHandler.getReturnUnit('km'), 'mi' , 'return unit');
    });
    test('Return spelled-out string', () => {
        assert.equal(convertHandler.spellOutUnit('gal'), 'gallons', 'return spelled out string');
        assert.equal(convertHandler.spellOutUnit('L'), 'liters', 'return spelled out string');
        assert.equal(convertHandler.spellOutUnit('lbs'), 'pounds', 'return spelled out string');
        assert.equal(convertHandler.spellOutUnit('kg'), 'kilograms', 'return spelled out string');
        assert.equal(convertHandler.spellOutUnit('mi'), 'miles', 'return spelled out string');
        assert.equal(convertHandler.spellOutUnit('km'), 'kilometers', 'return spelled out string');
    });
    test('gal to L', () => {
        assert.equal(convertHandler.convert(1, 'gal'), 3.78541, 'convert');
    });
    test('L to gal', () => {
        assert.equal(convertHandler.convert(1, 'L'), 0.26417, 'convert');
    });
    test('lbs to kg', () => {
        assert.equal(convertHandler.convert(1, 'lbs'), 0.45359, 'convert');
    });
    test('kg to lbs', () => {
        assert.equal(convertHandler.convert(1, 'kg'), 2.20462, 'convert');
    });
    test('mi to km', () => {
        assert.equal(convertHandler.convert(1, 'mi'), 1.60934, 'convert');
    });
    test('km to mi', () => {
        assert.equal(convertHandler.convert(1, 'km'), 0.62137, 'convert');
    });
});