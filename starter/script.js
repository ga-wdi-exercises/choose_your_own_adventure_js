var warStory = {
  intro : function()
  {
    var name = prompt("Hello, what is your name?");
    var job = prompt("Nice to meet you " + name + ". What would you like to be - Infantryman, Fighter Pilot, or Tank Commander?");

    switch(job)
    {
      case "Infantryman":
        var ocean = prompt(this.dialogue.infantryMan.question)

        if (ocean == "Atlantic")
        {
          alert(this.dialogue.infantryMan.responseAtlantic)
        }
        else if (ocean == "Pacific")
        {
          alert(this.dialogue.infantryMan.responsePacific)
        }
        else
        {
          alert("Please select an ocean")
        }
        break;
      case "Fighter Pilot":
        var ocean = prompt(this.dialogue.fighterPilot.question)

        if (ocean == "Atlantic")
        {
          alert(this.dialogue.fighterPilot.responseAtlantic)
        }
        else if (ocean == "Pacific")
        {
          alert(this.dialague.fighterPilot.responsePacific)
        }
        else
        {
          alert("Please select an ocean")
        }
        break;
      case "Tank Commander":
        var ocean = prompt(this.dialogue.tankCommander.question)

        if (ocean == "Atlantic")
        {
          alert(this.dialogue.tankCommander.responseAtlantic)
        }
        else if (ocean == "Pacific")
        {
          alert(this.dialague.tankCommander.responsePacific)
        }
        else
        {
          alert("Please select an ocean")
        }
        break;
      default:
        alert("Please make a valid choice")

    }

  },
  dialogue : {
    infantryMan : {
      question : "You're a brave soul! Would you rather be deployed to the Atlantic or Pacific theater?",
      responseAtlantic: "You were assigned to the 82nd Airborne Division during the Battle of the Bulge.  After fighting valiantly you were sadly seriously wounded and succombed to your injuries.  You were posthumously awarded the Bronze Star.",
      responsePacific: "You were assigned to the 3rd Marine Division during the Battle for Iwo Jima.  Despite a few close calls you fought bravely and survived the grueling combat, earning yourself the Silver Star."
    },
    fighterPilot : {
      question: "You're a man of action ready for the blue skies! Would you rather be deployed to the Atlantic or Pacific theater?",
      responseAtlantic: "You provided aerial support to the troops on D-Day in your P-51 Mustang.  After shooting down three enemy Luftwaffe including a bomber you safely returned to base.",
      responsePacific: "You fought along with your squadron based on the USS Enterprise during the Battle of Midway.  After shooting down four enemy Zeros your F6F Hellcat was struck by enemy fire and you were forced to ditch in the ocean.  Thankfully you were picked up shortly thereafter by a nearby ship and hailed as a hero."
    },
    tankCommander : {
      question: "Fancy danger? You've got it! Would you rather be deployed to the Atlantic or Pacific theater?",
      responseAtlantic: "As part of the 741st Tank Battlion, you participated in the Battle of the Ardennes.  You pushed through the German lines like a hot knife through butter until your Sherman was hit by the deadly German 88.  Only two of your crew survived, sadly you were not one of the lucky ones.  You were posthumously awarded the Distinguished Service Cross.",
      responsePacific:  "You were assigned to the 1st Marine Division during the Battle of Okinawa."
    }
  }
}
