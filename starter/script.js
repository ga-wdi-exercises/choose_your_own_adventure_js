// put code here!
var name = prompt("Welcome to 'Choose your own adventure'! What's your name?")

console.log("Ok " + name + "! Time to plan a trip..");

  var budget = prompt("What is your maximum budget?");
    if (budget <= 300) {
      console.log("With " + budget + " it looks like you'll have to stick locally in the city");
      var cheapTrip = prompt("Do you want to see (select letter): a. Sports?" + " b. Museums?" + " c. Theater/arts?");
        if (cheapTrip === "a") {
          var cheapSport = prompt("Ok, do you like (select letter): a. Baseball?" + " b. Basketball?" + " c. Hockey?");
            if( cheapSport === "a") {
              console.log("You've received tickets to the Washington Nationals!")
            } else if ( cheapSport === "b") {
              console.log("You've received tickets to the Washington Wizards!")
            } else if ( cheapSport === "c") {
              console.log("You've received tickets to the Washington Capitals!")
            } else {
              console.log("Sorry, that was not an option, please start over");
            };
        } else if (cheapTrip === "b") {
          var cheapMuseum = prompt("Ok, do you like (select letter): a. Art?" + " b. Science?" + " c. History?");
            if( cheapMuseum === "a") {
              console.log("You've been sent to the National Gallery!")
            } else if ( cheapMuseum === "b") {
              console.log("You've been sent to the Air and Space Museum!")
            } else if ( cheapMuseum === "c") {
              console.log("You've been sent to the National Museum of American History!")
            } else {
              console.log("Sorry, that was not an option, please start over");
            };
        } else if (cheapTrip === "c") {
          var cheapTheater = prompt("Ok, do you like (select letter): a. Comedy?" + " b. Music?" + " c. Drama?");
            if( cheapTheater === "a") {
              console.log("You've been booked a ticket for Avenue Q the next time it comes to town")
            } else if ( cheapTheater === "b") {
              console.log("You've been booked a ticket for The Roots Picnic next June")
            } else if ( cheapTheater === "c") {
              console.log("Collect your tickets for Les Mis next time it's in town!")
            } else {
              console.log("Sorry, that was not an option, please start over");
            };
        }
    } else if (budget > 300 && budget <= 4000) {
      console.log("With a budget of " + budget + " you get to take a fun trip!");
      var niceTrip = prompt("Are you ok to go abroad (y/n)?");
        if (niceTrip === "y") {
          console.log("You chose to go abroad. The options are Europe, or South America")
            var niceCont = prompt("Choose your location (select letter)? a. Europe" + " b. South America");
              if(niceCont === "a") {
                  console.log("You will be sent to Paris first for the beginning of a 2 week excursion");
                  var niceHotel = prompt ("What kind of hotel would you like? a. Three star?" + "b. Four star?" + "c. Five star?");
                    if(niceHotel === "c") {
                      console.log("This is Paris, you barely made it 3 days before you had to go home broke..");
                    } else if(niceHotel === "b") {
                      console.log("You had a great week in Paris, but you were also kidnapped and Liam Neeson didn't save you.");
                    } else if(niceHotel === "a") {
                      console.log("A 3 star 'hotel' in Paris means hostel, and sadly, all of your luggage was stolen. You were also kidnapped and Liam Neeson didn't save you.");
                    }
                } else if(niceCont === "b") {
                    console.log("You will be sent to Brazil!");
                    var niceHotel = prompt ("What kind of area would you like to stay? a. Party spots?" + "b. Rain forest?" + "c. Small coastal towns?");
                      if(niceHotel === "c") {
                        console.log("Welcome to Natal, a great town in Northeast Brazil");
                          var natal = prompt("Does Natal seem ok (y/n)?");
                            if (natal === "y"){
                              console.log("You had a great stay and made it home happy");
                            } else {
                              console.log("That's crazy, Natal is the best, and you're just wrong.");
                            }
                      } else if(niceHotel === "b") {
                        console.log("You head to Manaus, a small town in the Amazon");
                          var water = prompt("Do you drink the water (y/n)?");
                            if(water=== "y") {
                              console.log("Yikes, your stomach was not prepared for that.. trip cut short!");
                            } else {
                              console.log("You have a great time in Manaus");
                            }
                      } else {
                        console.log("You head to Rio! Copacabana here you come");
                          var water = prompt("Do you drink the water (y/n)?");
                            if(water=== "y") {
                              console.log("Yikes, your stomach was not prepared for that.. trip cut short!");
                            } {
                              console.log("You drank too much, passed out on the beach, and woke up without your passport.. good luck!");
                            }
                          }
                        }
                    } else {
                      var scared = prompt ("Are you afraid to go abroad (y/n)?");
                        if(scared === "y") {
                          console.log("Well that's too bad, you're missing out. You've been booked a ticket to Napa");
                        } else {
                          console.log("Hmm, your life choices seem weird, try starting over");
                        }
                    }
                  } else {
                    console.log("With a budget that high you can go anywhere");
                    var richTrip = prompt("Are you ok to go abroad (y/n)?");
                      if (richTrip === "y") {
                        console.log("You chose to go abroad. The options are Asia, or Australia")
                          var richCont = prompt("Choose your location (select letter)? a. Asia" + " b. Australia");
                            if(richCont === "a") {
                                console.log("You will be sent to Japan first for the beginning of a 2 week excursion");
                                var richHotel = prompt ("What kind of hotel would you like? a. Three star?" + "b. Four star?" + "c. Five star?");
                                  if(richHotel === "c") {
                                    console.log("This is Japan, you barely made it 3 days before you had to go home broke..");
                                  } else if(richHotel === "b") {
                                    console.log("You had a great week in Japan!");
                                  } else if(richHotel === "a") {
                                    console.log("You saved a decent amount of money with this option!");
                                    var food = prompt("Do you want to splurge on meals now?");
                                      if( food === "y") {
                                        console.log("This was your best trip. Amazing food, location, and the hotel was great.")
                                      } else {
                                        console.log("Too bad, you ended up with food poisoning, but powered through to the end anyways.")
                                      }
                                  }
                              } else if(richCont === "b") {
                                  console.log("You will be sent to Australia!");
                                  var richHotel = prompt ("What kind of area would you like to stay? a. Party spots?" + " b. desert?" + " c. Sydney?");
                                    if(richHotel === "c") {
                                      console.log("Welcome to Sydney!");
                                        var natal = prompt("Does Sydney seem ok (y/n)?");
                                          if (natal === "y"){
                                            var tallAussies = prompt("You weren't intimidated by all the tall Aussies (y/n)?");
                                              if(tallAussies === "y") {
                                                console.log("Aren't we all? good thing you still had a great time.");
                                              } else {
                                                console.log("Impressive! Have fun.");
                                              }
                                          } else {
                                            console.log("That's crazy, Sydney is amazing, and you're just wrong.");
                                          }
                                    } else if(richHotel === "b") {
                                      console.log("You head to the desert, where a Kangaroo beats you up and leaves you..");
                                    } else {
                                      console.log("You head to Melbourne!");
                                        var water = prompt("How's the Fosters? (good/bad)?");
                                          if(water=== "good") {
                                            console.log("Glad you enjoyed it! Hope the price wasn't too bad");
                                          } else {
                                            console.log("That's unfortunate to hear, you've clearly not done your research ahead of time.");
                                          }
                                        }
                                      }
                                  } else {
                                    var scared = prompt ("Are you afraid to go abroad (y/n)?");
                                      if(scared === "y") {
                                        console.log("Well that's too bad, you're missing out. You've been booked a ticket to Napa");
                                      } else {
                                        console.log("Hmm, your life choices seem weird, try starting over");
                                      }
                                  }
                                }
