
var quotes=[{quote:'"No matter what happens, even if you become the world’s enemy, I’ll be your knight."', author: "- Squall Leonhart, Final Fantasy VIII"},
        {quote:'"Hard to see the big picture behind pile of corpses."', author: "- Mordin Solus, Mass Effect 2"},
        {quote:'"I see myself the way you remember me, and you see yourself the way I remember you."', author:"- Roxas, Kingdom Hearts 2"},
        {quote:'"Good men mean well. We just don’t always end up doing well."', author:"- Issac Clark, Dead Space 3"},
        {quote:'"You can’t give up now! There ain’t no gettin’ off of this train we on!"', author:"- Barret Walace, Final Fantasy 7"},
        {quote:'"You’re nothing but a collection of 0’s and 1’s."', author:"- Luther Lansfeld, Star Ocean: Till the End of Time"},
        {quote:'"You were almost a Jill sandwich!"', author:"- Barry Burton, Resident Evil"},
        {quote:'"SORRY, I'+'M DEAD."', author:"- Boss #2, Monster Party"},
        {quote:'"Finish Him!"', author:"- Shao Kahn, Mortal Kombat"},
        {quote:'"The cake is a lie."', author:"- GLaDOS, Portal"},
        {quote:'"Who needs a medical license when you got style?"', author:"- Dr.Zed, Borderlands 2"},
        {quote:'"For a brick, he flys pretty good!"', author:"- Sargent Johnson, Halo 2"},
        {quote:'"You don'+'t just end it cause it'+'s hard. You stick it out, and you help the folks you care about."', author:"- Kenny, The Walking Dead (Video Game)"},
        {quote:'"If only i could be so grossly incandescent."', author:"- Solaire of Astora, Dark Souls II"},
        {quote:'"Wake up, Mr. Freeman. Wake up and smell the ashes."', author:"- G-Man, Half-Life 2"},
        {quote:'"All we had to do is follow the damn train, CJ."', author:"- Big Smoke, Grand Theft Auto: San Andreas"},
        {quote:'"Don'+'t make a girl a promise... if you know you can'+'t keep it."', author:"- Cortana, Halo 2"},
        {quote:'"It'+'s a-me! Mario!"', author:"- Mario, Super Mario Bros."},
        {quote:'"We now have a dog, and Alistair is still the dumbest one in the party."', author:"- Morrigan, Dragon Age"},
        {quote:'"What is better - to be born good, or to overcome your evil nature through great effort?"', author:"- Paarthurnax, The Elder Scrolls V: Skyrim"}
        ]
      

function quoteGenerator() {
  
  var randomIndex = Math.floor(Math.random() * quotes.length);
  
  var randomQuote = quotes[randomIndex];

  
  $("#quoteText").text(randomQuote.quote);
  $("#authorText").text(randomQuote.author);

  var URL = "https://twitter.com/intent/tweet?text="+ randomQuote.quote + "%20" + randomQuote.author;

  $("#twitter").attr('href', URL);

}

$(document).ready(function() {
  $('#btn').on('click', quoteGenerator);
});
