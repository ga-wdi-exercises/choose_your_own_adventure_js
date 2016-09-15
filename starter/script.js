var userConsole = $('.console');
var deliver = function(content) {
  userConsole.append(content);
  userConsole.append('<br><br>');
}
var userSpecies;
var assignClass = function(x) {
  userSpecies = $(x).attr('id');
};
var userText = $('input');
var userSubmit = $('button');


var skyrimStory = {
  intro : function() {
    deliver(story.dialogue.intro.welcome);
    setTimeout(deliver(story.dialogue.intro.askName), 5000);
    userSubmit.on('click', function() {
      deliver(userText.val()+story.dialogue.intro.transition);
      setTimeout(story.species, 1000);
    });
  },
  species : function() {
    userConsole.html('');
    deliver(story.dialogue.species.askSpecies);
    $('#option1').append('Human'+'<br>'+'<div class="hide" id="human">'+story.dialogue.species.describe.human+'</div>');
    $('#option2').append('Elf'+'<br>'+'<div class="hide" id="elf">'+story.dialogue.species.describe.elf+'</div>');
    $('#option3').append('Dwarf'+'<br>'+'<div class="hide" id="dwarf">'+story.dialogue.species.describe.dwarf+'</div>');
    $('#option4').append('Druid'+'<br>'+'<div class="hide" id="druid">'+story.dialogue.species.describe.druid+'</div>');
    $('.option').hover(
      function() {
        $(this).children().removeClass('hide');
      },
      function() {
        $(this).children().addClass('hide');
      });
    $('.option > div').on('click', function() {
      assignClass(this);
      story.role();
    });
  },
  role : function() {
    console.log("arrived");
    userConsole.html('');
    deliver(story.dialogue.role.welcome);
  },
  specialization : function() {

  },
  finale : function() {

  },
  reset : function() {
  },
  attributes : {
    strength : 0,
    agility : 0,
    magic : 0
  },
  dialogue : {
    intro : {
      welcome : "You open your eyes and look around and find yourself in a magical world full of magical wonders and dangerous dragons. You are in Skyrim.",
      askName : "What is your name?",
      transition : " it is. Now it is time to decide which people you belong to"
    },
    species : {
      askSpecies : "What species would you like to be: Human, Elf, Dwarf, or Druid. Mouse over each species for more information about them",
      describe : {
        human : "Humans have the most well-rounded attributes of all species, posessing medium Strength, Agility, and Magic",
        elf : "Elfs are incredibly nimble, possessing amazing Agility, medium Magic, but little Strength",
        dwarf : "Dwarfs have honed their stamina from extensive work in the mines, posessing excellent Strength, medium Agility, but no Magic",
        druid : "Druids are the most mystical of Skyrim's inhabitants, possessing miraculous Magic, decent Strength, but terrible Agility"
      },
      transition : "Excellent choice! However, without any skills you won't make it far. Now you must choose a role to be trained in."
    },
    role : {
      welcome : "Skyrim's inhabitants make their living in many ways. Mouse over each role to learn more about it.",
      describe : {
        warrior : "Warriors train themselves in the arts of War. They spend their lives fighting for glory and honor.",
        thief : "Thieves care only for themselves. Through stealth and agility, they steal and plunder to grow their wealth.",
        mage : "Mages dedicate themselves to the arcane arts, learning to bend elements to their will and cast powerfull spells."
      },
      askRole : "Which role interests you the most?",
      transition : {
        warrior : "An honorable choice. The Imperial Legion in Solitude is always looking for new recruits. Time to visit the Blue Keep",
        thief : "Honor is for fools. Off to visit the Thieves Guild in Riften and begin building our fortune",
        mage : "A wise decision. The road to power is a difficult one. We should seek out the College of Mages in Winterhold"
      }
    },
    specialization : {
      welcome : {
        warrior : "While traveling on the road, you see a pack of wolves approaching. As they near closer you realize there is no escape; you must stand and fight.",
        thief : "You've arrived in Riften and see a group of drunk nobles wandering the street. As they enter the inn, you notice a large gold amulet hanging from one of their packs.",
        mage : "As you enter the ancient grounds of the College of Mages, you see three urns in front of you. One is burning bright and engulfed in flame. The second is covered in a thick sheet of ice. The third glows green with a mystical energy. A voice calls out directing you to drink from one of them."
      },
      askSpecialization : {
        warrior : "What weapon do you choose?",
        thief : "Should you follow the noble inside and attempt to pickpocket him or wait until nightfall and break in?",
        mage : "Which urn will you drink from?"
      },
      warriorOptions : {
        sword : "A few strong swings of my sword should fend these Wolves off.",
        bow : "I should use my bow to pick them off. I'll have to be quick though."
      },
      thiefOptions : {
        pickpocket : "Follow the noble in and stealthily steal his amulet",
        burglar : "Wait until nightfall and break in when everyone is sleeping"
      },
      mageOptions : {
        fire : "Drink from the flaming urn to choose the Path of the Fire Mage",
        ice : "Drink from the icy urn to choose the Path of the Ice Mage",
        spirit : "Drink from the glowing urn to choose the Path of the Mystic"
      },
      warriorResult : {
        bowSuccess : "You fire an arrow into the largest of the wolves, killing it immediately. The rest of the pack runs away.",
        swordSuccess : "You swing wildly, slicing through each wolf that nears you. The rest fun in fear",
        swordFail : "You swing your sword but due to your mediocre strength are only able to kill one wolf before being overrun. You die."
      },
      thiefResult : {
        burglarSuccess : "You wait until nightfall, pick the lock, and find all the nobles in a deep, drunken stupor. You successfully steal everything and walk out loaded with gold.",
        pickpocketSuccess : "You follow the noble inside and approach him from behind. Using your excellent agility, you sneakily reach into his pack and snatch the amulet. You exit the inn safely.",
        pickpocketFail : "You follow the noble inside and approach him from behind. As you reach into his pack, one of his bodyguards spots you and grabs you by the collar. You are publicly hung in the square the following day. You die."
      },
      mageResult : {
        iceSuccess : "You drink from the icy urn and immediately feel all warmth leave your body. Your eyes turn deep blue and you are imbued with the power to call down blizzards",
        spiritSuccess : "You drink from the glowing urn and see a portal open up around you as time tears itself apart. You are transported back in time to your birth.",
        fireSuccess : "You drink from the flaming urn and feel a burning sensation engulf your body. Your eyes glow red and you are imbued with the power to incinerate your foes",
        fireFail : "'Only the strongest of mages can wield the power of fire. You are too weak' the voice calls out. You are incinerated. You die."
      }
    },
    finale : {
      warriorEnd : {
        sword : "You arrive in Solitude and become the most famous swordsman in Skyrim. After many years of service in the Imperial Legion, you are made Jarl of Falkreath and given a Housecarl",
        bow : "You arrive in Solitude and are assigned to a special mission to assassinate Ulfric Stormcloak, leader of the rebellion. You infiltrate Windhelm and kill the Jarl in his sleep. You escape and are made Jarl of Whiterun as a reward."
      },
      thiefEnd : {
        burglar : "With all of the gold you stole from the drunken nobles you become a wealthy noble in Riften. You form a partnership with the Thieves Guild and create an underworld Empire that spreads throughout Tamriel",
        pickpocket : "The amulet you stole from the noble once belonged to Talos, the famous founder of Skyrim. You sell it to the Thieves Guild, buy a silver mine in Markarth, and live comfortably for the rest of your life"
      },
      mageEnd : {
        fire : "With your newfound power you wreek fiery revenge on all of your past rivals. You gather a horde of disciples and inhabit an ancient castle in the Reach",
        ice : "You continue to hone your power under the apprenticeship of Savos Aren, the head of the College of Mages. One day Savos dies and appoints you to succeed him in his will"
      }
    }
  }
}
var story = skyrimStory;
$('document').ready(skyrimStory.intro())
