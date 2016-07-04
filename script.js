var char = prompt("You're at your usual lunch spot. What do you order? Choose 'c' for chicken salad, 'b' for big salad, or 't' for tuna on toast.");

if(char === "c")
{
  alert("Of course you do, Jerry, because of the thing with the dolphins in the tuna.");

    var gf = prompt("Who are you dating right now, Jerry? Is it Jane, with the flinty voice? Or is it the girl from down the hall? Choose 'jane' or 'neighbor'.");

    if (gf === "jane")
    {
      alert("About that voice...someone recognizes it from somewhere.");

      var jane = prompt("Which of your friends thinks they have heard her before? Choose 'e' for Elaine, or 'k' for Kramer.");

      if (jane === "e")
      {
        alert("Elaine knows it's that woman from the bathroom who couldn't spare a square! Elaine is sure to exact revenge, and your relationship with Jane will be over.");
      }
      if (jane === "k")
      {
        alert("Kramer recognizes her voice from that 900 number he's been calling! You'll never live this down.");
      }
    }
    if (gf === "neighbor")
    {
      alert("She invites you over. You excuse yourself to the bathroom, and her medicine cabinet is ajar.");

      var snoop = prompt("Do you snoop in the cabinet? Choose 'yes' or 'no'.");

      if (snoop === "yes")
      {
        alert("What's this? Why does she have fungicide? Quick, make something up - you've got to get out of here.");
      }
      if (snoop === "no")
      {
        alert("Come on, you know you'd snoop around. After all, you're Jerry Seinfeld.");
      }
    }
}
if(char === "b")
{
  alert("Ok, Elaine.");

    var socks = prompt("How are things going with Mr. Pitt? How many pairs of socks did you buy him?");

    if (socks > 1)
    {
      alert("It'll take hours for him to choose the perfect pair! You'll have to cancel all your plans.");
    }
    if (socks === "1")
    {
      alert("They were perfect, nice work!");
    }
}
if (char === "t")
{
    alert("Right, George. You always have tuna on toast.");

    var job = prompt("What have you been up to lately? Are you still living with your parents? Or are you working for the Yankees? Choose 'parents' or 'yankees'.");

    if (job === "parents")
    {
      var vacation = prompt("Have they been out of town recently? Choose 'yes' or 'no'.");

        if (vacation === "no")
        {
          alert("No? Living in close quarters means your mother catches you...alone...with one of her Glamour magazines. You're lucky the embarassment didn't kill you both!");
        }
        if (vacation === "yes")
        {
          alert("Just your luck George - you had your friends over, Kramer used the guest soaps and Jerry made a water mark on the coffee table. Good going! They're not going to leave you alone for a while.");
        }
    }

    if (job === "yankees")
    {
      var trend = prompt("You've been pretty successful as the Assistant to the Traveling Secretary. What new trend have you started recently? Was it updating the player uniforms, or was it introducing your boss to calzones? Choose 'uniforms' or 'lunch'.");

      if (trend === "uniforms")
      {
        alert("Switching the Yankee uniforms to cotton fabric was a great idea, but the new outfit shrunk dramatically in the wash! You've embarassed the franchise, George.");
      }
      if (trend === "lunch")
      {
        alert("You got your boss hooked on calzones from Paisano's - delicous, but you shouldn't have relied on Kramer and Newman to get them for you. Now you've got to contend with a hangry Mr. Steinbrenner.");
      }
    }
}
