function ConvertHandler() {

  const regex = /([\d.\/]+)?(\w+)/;
  
  this.getNum = function(input) {
    num = input.match(regex)[1];
    if (num == undefined) {
      num = '1';
    }
    if (num.includes('/')){
      nums = num.split('/');
      if (nums.length > 2) {
        return 'invalid number';
      }
      num = (nums[0] / nums[1]).toPrecision(6);
    }
    return parseFloat(num);
  };
  
  this.getUnit = function(input) {
    acceptableUnits = ['gal', 'l', 'lbs', 'kg', 'mi', 'km'];
    unit = input.match(regex)[2].toLowerCase();
    if (acceptableUnits.includes(unit)){
      if (unit === "l") {
        unit = unit.toUpperCase();
      }
      return unit;
    } else {
      return 'invalid unit';
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    switch (initUnit) {
      case 'gal':
        return 'L';
      case 'L':
        return 'gal';
      case 'lbs':
        return 'kg';
      case 'kg':
        return 'lbs';
      case 'mi':
        return 'km';
      case 'km':
        return 'mi';
    }
  };

  this.spellOutUnit = function(unit) {
    switch (unit) {
      case 'gal':
        return 'gallons';
      case 'L':
        return 'liters';
      case 'lbs':
        return 'pounds';
      case 'kg':
        return 'kilograms';
      case 'mi':
        return 'miles';
      case 'km':
        return 'kilometers';
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    switch (initUnit) {
      case 'gal':
        return parseFloat((initNum * galToL).toFixed(5));
      case 'L':
        return parseFloat((initNum / galToL).toFixed(5));
      case 'lbs':
        return parseFloat((initNum * lbsToKg).toFixed(5));
      case 'kg':
        return parseFloat((initNum / lbsToKg).toFixed(5));
      case 'mi':
        return parseFloat((initNum * miToKm).toFixed(5));
      case 'km':
        return parseFloat((initNum / miToKm).toFixed(5));
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
  
}

module.exports = ConvertHandler;
