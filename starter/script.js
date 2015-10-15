var space = function(){
  console.log("*******************************")
}

space()
console.log("YOU ARE ABOUT TO GET GAS. You get out of the car and approach the screen...")

var firstPath = prompt("Credit or Cash or Ask People For Money (Ask)").toLowerCase();
	if(firstPath === "credit"){
		space()
		console.log("You slide in the card and the screen says...")
			var paymentType = prompt("Debit or Credit").toLowerCase();
			if(paymentType === "debit"){
				space()
				console.log("Put in your pin number...")
					var debitNumber = prompt("Type in your 4 digit pin number")
					while (debitNumber >= 9999){
						debitNumber = prompt("Please enter the correct 4 digit pin number")
					}
						space()
						console.log("Your card has been authorized...")
			}
			else if(paymentType === "credit"){
				space()
				console.log("Card authorized")
			}
			var gasOctane = prompt("Regular (87), Plus (89), Supreme (93)").toLowerCase();
				if(gasOctane === "regular"){
					space()
					console.log("Cheap gas, must be a cheap car.")
				}
				else if(gasOctane === "plus"){
					space()
					console.log("Pretending to have money, but probably still a cheap car.")
				}
				else if(gasOctane === "supreme"){
					space()
					console.log("You must be a baller... with an expensive car. Probably a lambo.")
				}
	}
	//done
	else if (firstPath === "cash") {
		space()
		console.log("Go inside to the cashier")
	}

	else if (firstPath === "ask") { 
		space() 
		console.log("The person you asked was actually a creepy guy and you got kidnapped... TO BE CONTINUED!")
	}