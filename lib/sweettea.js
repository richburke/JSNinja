
// Put this into an object SweetTea
// output types
//  console
//  alert
//  html
//  log
//  string
//  custom output function
// allow synchronous and asynchronous tests
(function() {
  var time = Date.now();
  this.assert = function(exp, desc) {
    output(desc, exp);
    return this;
  };
  this.assertTrue = function(exp, desc) {
    output(desc, exp);
    return this;
  };
  this.assertFalse = function(exp, desc) {
    output(desc, !exp);
    return this;
  };
  this.assertEqual = function(p1, p2, desc) {
    return assertTrue(p1 === p2, desc);
  };
  this.assertNotEqual = function(exp, desc) {
    return assertTrue(p1 !== p2, desc);
  };

  this.now = function() {
    return Date.now() - time;
  };

  // Be able to specify levels
  this.label = function(lbl) {
    output(lbl);
    return this;
  };
  this.report = function(statement, props) {
    var p;
    for (p in props) {
      if (!props.hasOwnProperty(p))  continue;
      statement = statement.replace(new RegExp(p, 'g'), props[p]);
    }
    return output(statement);
  };

  // take a function for output
  var output = function(desc, success) {
    if (typeof success !== 'undefined') {
      console.log(desc + ' [' + (success ? 'PASSED' : 'FAILED') + ']');
    }
    else {
      console.log(desc);
    }
  }
})();
