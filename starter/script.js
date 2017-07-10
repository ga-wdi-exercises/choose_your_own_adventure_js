console.log('running')

alert('Welcome to the Stadium')

var hit = prompt('Did you get a hit? (yes/no)')

if (hit == 'yes') {
  var homeRun = prompt('Did you get a Home Run? (yes/ no)')

  if(homeRun = 'yes') {
    var onBase = parseInt(prompt('How many people on base? (0-4)'))
      if(onBase >=0){
      alert('Nice RBIs!')
    }
      else{
      alert('Great Solo HR!')
    }
  }
    else {
    alert('Better Luck Next Time!')
  }
}
