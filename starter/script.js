var response = prompt ("Hey there! I'm sorry to bother you but I seem to have forgotten who I am. Would you mind helping me out by answering some questions? (y/n)");
while (response != "y") {
  response = prompt ("Come on man, please?");
}
response = prompt ("Am I a real person or a fictional character? (real/fictional)");
if (response === "real") {
  response = prompt ("Am I a U.S. President? (y/n)");
  if (response === "y") {
    response = prompt ("I wouldn't happen to be orange would I? (y/n)");
    if (response === "y") {
      response = prompt ("Oh dear, am I Donald Trump? (y/n)");
      if (response === "y") {
        console.log("This is an unfortunate turn of events.")
      }
      else if (response === "n") {
        console.log("Oh thank God.")
      }
      else {
        console.log("Come again?");
      }
    }
    else if (response === "n") {
      console.log("Oh good, for a second there I thought I might be Donald Trump.")
    }
    else {
      console.log("Come again?");
    }

  }
  else if (response === "n") {
    response = prompt ("Hmm, am I Betty White? (y/n)");
    if (response === "y") {
      console.log("Yay! I know who I am!");
    }
    else if (response === "n") {
      console.log("Are you sure? I'm pretty sure I feel like a golden girl.");
    }
    else {
      console.log("Come again?");
    }
  }
  else {
    console.log("Come again?");
  }
}
else if (response === "fictional") {
  response = prompt ("Am I from the Star Wars universe? (y/n)");
  if (response === "y") {
    response = prompt ("Am I 1. short and green? 2. A walking carpet? or 3. A scruffy looking Nerf Herder? (1/2/3)");
    switch(parseInt(response)) {
    case 1:
        console.log("I'm Yoda!");
        break;
    case 2:
        console.log("*Chewbacca growls at you*");
        break;
    case 3:
        console.log("I'm Han Solo!");
        break;
    default:
        console.log("Come again?");
    }
  }
  else if (response === "n") {
    response = prompt ("Am I Batman? (y/n)");
    if (response === "y") {
      console.log("I'm Batman!");
    }
    else if (response === "n") {
      console.log("Naw, I made up my mind, I'm Batman.");
    }
    else {
      console.log("Come again?");
    }
  }
  else {
    console.log("Come again?");
  }
}
else {
  console.log("Come again?");
}
