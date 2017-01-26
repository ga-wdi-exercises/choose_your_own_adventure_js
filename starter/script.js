confirm("Lets help you get out there in the wild world of pokemon and have an have an adventure. You're ready right?");
confirm("Good, well lets start by helping you choose your first pokemon. It will be your partner for life so answer everything honestly.");

var hasChosen = false

while(hasChosen === false){
  var firstQ = prompt("Today I have assembled three of the rarest pokemon in the world.There is Cyndaquil the fire hedgehog pokemon. He is loyal and strong even though he looks like hes asleep. He will become a leader one day. Next there is Eevee. She may look plain right now but depending on how she grows she'll turn into something even rarer. Lastly we have Dratini. She is from a line of dragons that helped shape our world. She may be small now but she'll grow wings with love and care.");

  if (firstQ === "Cyndaquil"){
    var cyndaquil = prompt("Good Choice. Now lets see if Cyndaquil approves of you! How will you greet him? With a pat on the head, a smile and a hug or with a compliment?");
    hasChosen = !hasChosen
  }
  else if (firstQ === "Eevee"){
    var eevee = prompt("Good Choice. Now lets see if Eevee approves of you! How will you greet her? With a pat on the head, a smile and a hug or with a compliment?");
    hasChosen = !hasChosen
  }
  else if (firstQ === "Dratini"){
    var dratini = prompt("Good Choice. Now lets see if Dratini approves of you! How will you greet her? With a pat on the head, a smile and a hug or with a compliment?");
    hasChosen = !hasChosen
  }
  else {
    alert("Try again!");
  }
}

if (cyndaquil === "A pat on the head"){
  alert("Cyndaquil smiles and sounds happy when you pet him. He sounds like he is purring. Good job, he trusts you!")
}
else if (eevee === "A pat on the head"){
  alert("Eevee smiles and sounds happy when you pet her. She sounds like he is purring. Good job, she trusts you!")
}
else if (dratini === "A pat on the head"){
  alert("Dratini smiles and sounds happy when you pet her. She sounds like he is purring. Good job, she trusts you!")
}

if (cyndaquil === "A smile and a hug"){
  alert("Cyndaquil smiles and sounds happy when you hug him. He sounds like he is purring. Good job, he trusts you!")
}
else if (eevee === "A smile and a hug"){
  alert("Eevee smiles and sounds happy when you hug her. She sounds like he is purring. Good job, she trusts you!")
}
else if (dratini === "A smile and a hug"){
  alert("Dratini smiles and sounds happy when you hug her. She sounds like he is purring. Good job, she trusts you!")
}

if (cyndaquil === "A compliment"){
  alert("Cyndaquil smiles and sounds happy when you compliment him. He sounds like he is purring. Good job, he trusts you!")
}
else if (eevee === "A compliment"){
  alert("Eevee smiles and sounds happy when you compliment her. She sounds like he is purring. Good job, she trusts you!")
}
else if (dratini === "A compliment"){
  alert("Dratini smiles and sounds happy when you compliment her. She sounds like he is purring. Good job, she trusts you!")
}
