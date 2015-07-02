
console.log("You are walking home from school when you see a taco...");
var tacoWhatDo = prompt("You are walking home from school when all of a sudden you notice a lone taco on the ground in front of you, just inches from your feet. Do you pick it up and EAT it, STOMP on it and crush it, or RUN as fast as you can?")

if (tacoWhatDo == "EAT") {
  console.log("You just ate a taco off the ground, ew germs.");

  var coughMeds = prompt("You just ate a dirty taco and you're probably gonna die soon. You continue your walk home, and it's not long before you come across a bottle of cough syrup. You've had a nasty cough ever since you ate that taco. The cough syrup will surely help with that, but you hate the taste of medicine. Do you CHUG it, or IGNORE it and come to terms with your death?")
  if (coughMeds == "CHUG") {
    console.log("You just chugged a bottle of cough syrup, you maniac.");

    var isThisRealLife = prompt("You just drank a little too much cough syrup... You notice a police officer in your peripheral right before you start seeing weird shapes and colors. Do you attempt to FLEE from the officer, or WALK toward the pretty multi-colored geometric outline?")
    if (isThisRealLife == "FLEE") {
      console.log("The officer begins chasing you. The officer shoots you. Blood everywhere.");

      var woundedDruggie = prompt("You attempt to flee and the officer shoots you, you are going to die soon, there's blood everywhere. Do you SQUIRM, or say a CURSE word with your dying breath?")
      if (woundedDruggie == "SQUIRM" || woundedDruggie == "CURSE") {
          console.log("You're dead now!");
        }
      }

  else if (coughMeds == "IGNORE") {
    console.log("You didn't take the medicine and you're dead now.")
  }

    else if (isThisRealLife == "WALK") {
        console.log("You fell off a cliff.");

        var pitFall = prompt("You walked right off the edge of a cliff. You're falling to your death. Do you say AHHH or NOOO?")
        if (pitFall == "AHHH" || pitFall == "NOOO") {
          console.log("You're dead now!");
        }
      }
    }
  }
else if (tacoWhatDo == "STOMP") {
  console.log("You just stomped on a taco. But wait...that's not a taco at all!");

  var whatHaveIDone = prompt("You just stomped on the taco only to realize that it was actually a small baby bird stuck between a hard-shelled tortilla. You didn't notice at first, probably because you're on drugs or something. It's too late. You're a monster. You're now being chased by a flock of angry birds and the police. Do you stand and count the number of birds coming after you (384), or do you run toward the POLICE in hopes that they will save you from the birds?")
  if(whatHaveIDone == "384") {
    console.log("The birds are pecking your face off.");

    var facePeck = prompt("You just stood there and counted the birds, and now they are pecking your face off now. Do you FLAIL your arms helplessly, or do SOMETHING WEIRD 'cause you're probably on drugs?")
    if(facePeck == "FLAIL" || facePeck == "SOMETHING WEIRD") {
      console.log("You're dead now!");
    }
  }

  else if(whatHaveIDone == "POLICE") {
    console.log("The police don't have your back... this is bad.")

      var angryCop = prompt("You run towards the police hoping they'll save you from the birds, but instead one of them picks you up and throws you off a cliff in a fit of rage. Do you PRAY, or do you say WEE 'cause you're on drugs probably?")
  }
}
else if (tacoWhatDo == "RUN") {
  console.log("You're running, you're running, you're running as fast as you can, you're running.")

    var tacoExplosion = prompt("As soon as you turn around and start running, the taco explodes. You can't run very fast. You've been feeling sluggish since lunchtime, and you suspect that it may be because someone slipped something in your chocolate milk, because you're paranoid. You get hit with a stray chunk of beef and are severely wounded. Do you TAKE IT like a champ, or do you scream OW?")
    if(tacoExplosion == "TAKE IT" || tacoExplosion == "OW") {
      console.log("You did not survive the explosion.")

    }
}

else {
  console.log("Please pick one of the UPPERCASE words.")
  tacoWhatDo;
}
alert("You're dead now. Don't do drugs.")
