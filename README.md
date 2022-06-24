This project is aimed at the intention of adding several instances of a page in one.
In this one specifically, adds three games to a single interface or page. The games are
meant to be simple to play:

1. Rock paper scissors - The all too familiar game which from the name is self-explanatory. In case it isn't, on loading the game there's a description at the bottom of the page. The game is user vs AI only and implements an API from rapidapi.com to bring about an AI's decision making (or decision guessing) process. Some commented out part of the code did the same thing but using a randomisation of values by the local machine. I left the codes undeleted for future references and as a fall back in case the api fails to execute its said functionality

Summary:
What's working: 
> AI that takes the opponent's place as the computer to make valid guesses
> Functionality
> API where the AI is coming from
> The reviews and description work perfectly

What's not working:
> Player vs player 
> Coupled with a few minor (some miscellaneous) bugs like the tallying of scores which forced an update every time a post request was sent regardless of preventDefault()

2. Tic tac toe - Incase the game is unfamiliar, it's description is also at the bottom of the page after loading the game. Player vs computer game play was a bit tricky to implement using Javascript (at the time of writing) due to AJAX vs SJAX issues that I do not know how to hack through (yet). But the player vs player part is fine, not perfect but working.

Summary:
What's working:
> Player vs player
> Functionality
> Reviews and description
> Scores tally

What's not working:
> Player vs computer/AI
> A few minor bugs

3. Air hockey - This was supposed to be a game whereby one player moves their dodger/plate using the letters 'a' and 'd' while the other moves theirs using arrowleft key and arrowright key and prevent the ball from hitting the surface below their dodger/plate which would count as a win for the opponent and a loss to the other. I am not taking it out so that it can act as a reference on how to implement it better in the future.

Summary:
> This is a work in progress