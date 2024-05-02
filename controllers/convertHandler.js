function ConvertHandler() {

  const regex = /([\d.]+)?(\w+)/;
  
  this.getNum = function(input) {
    return input.match(regex)[1];
  };
  
  this.getUnit = function(input) {
    return input.match(regex)[2];
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
        return (initNum * galToL).toFixed(5);
      case 'L':
        return (initNum / galToL).toFixed(5);
      case 'lbs':
        return (initNum * lbsToKg).toFixed(5);
      case 'kg':
        return (initNum / lbsToKg).toFixed(5);
      case 'mi':
        return (initNum * miToKm).toFixed(5);
      case 'km':
        return (initNum / miToKm).toFixed(5);
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
  
}

module.exports = ConvertHandler;
