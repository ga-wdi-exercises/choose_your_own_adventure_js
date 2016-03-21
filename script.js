name  = prompt("Hey, what's your name?")
age = prompt("How old are you?") 



for(var i = age; i <= 17; i++) {
name = "Young person";
}



if (name !== null) {
  var entryPath = prompt(name + ", You have just won 2 billion dollars from playing the lottery. Now that you are filthy rich, what will you do first? Here are your options: 1. Pay off your debt, the debt of your immediate family, and set up some savings accounts 2. Go to Vegas and make it rain for a few days while staying in a penthouse suite. Please enter '1' or '2'")

  if (entryPath == "1") {
    var paidOffDebts = prompt("You and your immediate family members are officially debt free. Other random far-away family members (cousins of cousins twice removed) are now all asking for a handout. Not really a handout but pretty much demanding money or else they will hire a contract killer to harm you or put your personal info on the internet (racy old facebook pictures and credit card information) Will you 1. Decide to pay off these mean semi-family members? or 2. Say F*ck them and keep it moving- buy yourself a nice house, cool cars, and hire a great security team? Please enter '1' or '2'")
        if (paidOffDebts == '1') {
          console.log ("This cycle never ended and people kept asking you for money. You eventually gave away all of your 2 billion dollar fortune. Unfortunately, you are now struggling to survive.")
        }
        else if (paidOffDebts == '2') {
          console.log("The security team you hired paid off and no one has threatened you or tried to harm you since. You also hired a great lawyer who has your back no matter what. You are still very rich and occassionally go on a shopping spree or two but you have kept a majority of your wealth. You are happy!")
        }
    }


else if (entryPath == "2") {
  var gonetoVegas = prompt("You have been partying hardcore in Vegas for 4 days now. You have spent over 50 million bucks so far at casinos, clubs, expensive restaurants and department stores. You have established yourself as a high roller in Vegas over these few days! You are a bit worn out but you are enjoying your new lavish lifestyle. Now that everyone knows of your wealth, young attrative people you could have never met before are interested in seriously dating you. Will you 1. Choose the nicest hottie and settle down and live as high rollers together (this hottie expects you to provide them with only the finest things in life) or 2. Realize that Vegas is just Vegas and go home to figure out your next steps. Please enter '1' or '2'")

    if (gonetoVegas == '1') {
      console.log ("You married the hottie! But divorced 23 days later. You eventually ended up marrying 3 superficial hotties in your lifetime.")
    }
    else if (gonetoVegas == '2') {
      console.log("On your way back home your plane crashed! However, a lovely flight attendant helped you during the accident and you both fell in love. You have been happily married for 20 years now.")
    }
}
}
