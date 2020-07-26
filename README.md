# Blackjack

*Blackjack game built with Javascript*

## Explanations of the technologies used

For this game, I used Javascript, HTML, CSS

## Approach taken

This is a card game, and in a card game, luck means a lot. I tried to impersonate the real game experience by creating the cards randomly. Player and the dealers cards are dealt randomly. I accomplish that by, creating a cards object array and randomly, getting a card from the deck. Then I dealt it to the player or the dealer. 

To validate the winner, I have a few functions that I placed in the code. Each time the player hits a card, it checks whether or not it is a Blackjack or if the player lost it.

Same thing applies to the dealer except, the dealer has to hit until they reach to number value of 17. That's the rule of the game.

The betting works before the cards are dealt. I am wrapping the function in a if statement and checking a value from the gameObject that I have in the js file. If it is not, then the player can not bet.

To avoid undefineds or NaNs, I have a function that by default, player bets $10. In the future, I would like player to have the decrease the bet if they want to - that is placed in the pot, however that is not an option for now.

Used animations in order to catch the player's attention when there is a change in the bet or in the money field.

To give a nice effect for dealing cards one by one or running all the code at once, I placed Promises with a settimeout so that I can put the game into small sleeps. This gives a more realistic look of the game.


## User stories

As a developer, I would like my players to be able to browse and play this game without any difficulty.


## Wireframes

I have 2 hand drawn wireframes:
- ![](https://github.com/nisozakuto/Blackjack/blob/master/IMG_20200720_092449.jpg | width=300)
- ![](https://github.com/nisozakuto/Blackjack/blob/master/IMG_20200720_092452.jpg | width=300)


## How-to-use instructions

This is a classic Blackjack without some features in it. Player plays against the dealer, there are not any other players in the game - you've got some private time with the dealer.

1. First you need to let the game know that you are starting the game
1. Each game, initally, player puts $10 in order to play. Player has to bet before the cards are dealt. It is not possible to bet once you hit a card
1. Which takes us to Hit / Stand stage: 
  1. Hit will give you another random card from the deck.
  2. Will change the turn to the dealer.
1. Dealer has to hit as long as, they have less than 16 in number values. 

### Winning / Loosing

1. Player can win/loose autamatically:
  1. Players turn
    1. If at the time of dealing, player gets a Blackjack --> Player wins
    1. If when hitting, player reaches to 21 --> Player wins
    1. If when hittinh, player goes over 21 --> Player looses
  1. Dealers turn
    1. If the dealer has less than 17 in number, and player has more than 17 --> Player wins    
    1. If the dealer has more than 17 in number, and player has less than 17 --> Dealer wins
    1. If the dealer and the player has less than 17 or they both have more than 17, whoever has more value in their hand --> Wins
    1. If dealer reaches 21 --> Dealer wins
    1. If dealer goes over 21 --> Player wins
    
After the game is over, player will get a screen letting them know, either won or lost. 
Then player will have the chance of playing a new round.

#### In Casino Niso, we have following rules: 
* If Player gets a blackjack, regardless what the Dealer has, player wins.
* You can only bet before your cards are dealt

## Unsolved problems
* Choosing the amount of decks on the table
* Splitting cards 
* doubling
* insurance
* A better way of handling chips
* Decrease the bet


#### Notes

While developing this game, one of the challange I faced is: if different Aces can have different values. 
After reading multiple articles and rules from different sources I found the below information and formed my logic around with it
```
The hand is always scored to give the best possible value for the player, such that they have the highest score they can get without going bust. The player never chooses the values or the score; it is decided by the rule and the cards on the table.
A+A+X will always be valued as 12+X, unless this would bust, in which case it must be valued as 12 (since the only such X is a ten-value card, and therefore the only non-bust score is for both aces to be one-value).
Source: professional experience dealing in a regulated casino.
```
Link: https://boardgames.stackexchange.com/questions/31423/can-different-aces-have-different-values
