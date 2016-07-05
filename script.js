
var userName = prompt("enter your name");
var input = prompt("enter a number 1-10");

if (input >= 1 && input < 5) {
  input = prompt("enter 'A' or 'B' ");
  if (input == 'A') {
    input = prompt("enter 'AA' or 'AB' ");
    if (input == 'AA') {
      alert(userName + ' entered AA');
    };
    if (input == 'AB') {
      alert(userName + ' entered AB');
    };
  };
  if (input == 'B') {
    input = prompt("enter 'BA' or 'BB' ");
    if (input == 'BA') {
      alert(userName + ' entered BA');
    };
    if (input == 'BB') {
      alert(userName + ' entered BB');
    };
  };
};

if (input > 5 && input <= 10) {
  input = prompt("enter 'C', 'D', or 'E' ");
  if (input == 'C') {
    input = prompt("enter 'CA' or 'CB' ");
    if (input == 'CA') {
      alert(userName + ' entered CA');
    };
    if (input == 'CB') {
      alert(userName + ' entered CB');
    };
  };
  if (input =='D') {
    input = prompt("enter 'DA' or 'DB' ");
    if (input == 'DA') {
      alert(userName + ' entered DA');
    };
    if (input == 'DB') {
      alert(userName + ' entered DB');
    };
  };
  if (input =='E') {
    input = prompt("enter 'EA' or 'EB' ");
    if (input == 'EA') {
      alert(userName + ' entered EA');
    }
    if (input == 'EB') {
      alert(userName + ' entered EB');
    }
  }
};

if (input == 5) {
  var xCounter = null;
  while (xCounter<3) {
    input = prompt("enter 'X' three times");
    if (input == 'X') {
      xCounter++;
    }
  }
  alert(userName + " entered 'X' three times");
};
