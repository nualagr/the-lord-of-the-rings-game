<h1 align="center">The Lord of the Rings Memory Game</h1>

![alt text](documentation/readme-images/amiresponsive-mockup.png "Mockup of The Lord of the Rings Memory Game index.html page when viewed on a desktop, tablet and mobile device.")
<sub>*Created using* [Am I Responsive](http://ami.responsivedesign.is/)</sub>
<br>

The Lord of the Rings Memory Game is a themed card-matching game. The game objective is to find the matching pairs of cards 
within a minimum number of mouse clicks in a set timeframe. The game, while being fun to play, can also be used as a brain training tool to improve recall as well
as to improve hand-eye coordination and reaction times.

The game is geared towards fans of *The Lord of the Rings Trilogy* by J. R. R. Tolkien.  It incorportes 
The Lord of the Rings themed images and facts with the intention of making the playing 
experience more enjoyable for the user.

The Lord of the Rings Memory Game website consists of one webpage and seven modals created using [HTML5](http://en.wikipedia.org/wiki/HTML5), 
[CSS3](http://en.wikipedia.org/wiki/CSS), [JavaScript](https://en.wikipedia.org/wiki/JavaScript), 
the JavaScript library [jQuery](https://jquery.com/) and [The One API](https://the-one-api.dev/).  It was
created in order to fulfil the requirements of the Interactive Frontend Development Milestone Project 2, 
part of the Full Stack Web Development Program at the [Code Institue](https://codeinstitute.net/). 
The main requirements were to create a dynamic, interactive and responsive website that should provide relevant
responses to the users' actions. Users should be able to actively engage with the data, alter the way the site 
displays the information in order achieve their goals. 

Click <a href="https://nualagr.github.io/the-lord-of-the-rings-game/">here</a> to play the game online.
<br>

## **Table of Contents**
1. [**User Experience (UX)**](#ux)
    - [User Stories](#user-stories)
        - [New User](#new-user)
        - [General User](#general-user)
        - [The Lord of the Rings Fan](#the-lord-of-the-rings-fan)
        - [Site Owner](#site-owner)
2. [**User Centered Design**](#user-centered-design)
    - [1) The Strategy Plane](#1-strategy-plane)
    - [2) The Scope Plane](#2-scope-plane)
    - [3) The Structure Plane](#3-structure-plane)
         - [Features](#features)
    - [4) The Skeleton Plane](#4-skeleton-plane)
        - [Wireframes](#wireframes)
    - [5) The Surface Plane](#5-surface-plane) 
        - [Design](#design)
        - [Colour Scheme](#colour-scheme)
        - [Icons](#icons)
        - [Typography](#typography)
3. [**Development**](#development)
4. [**Technologies Used**](#technologies-used)
5. [**Testing**](#testing)
    - [Performance](#performance)
    - [Responsiveness](#responsiveness)
    - [Tested User Stories](#tested-user-stories)
    - [Bugs](#bugs)
6. [**Deployment**](#deployment)
7. [**Credits**](#credits)
    - [Content](#content)
    - [Media](#media)
    - [Acknowledgements](#acknowledgements)
    - [References](#references)

<br>

---

## UX

### User Stories

#### New User

As a new user I would like to be able to:

- play a card-matching game presented in a visually appealing format.
- play a game which increases in complexity/challenge.
- read the rules of the game.
- navigate through the site with ease.
- modify settings to suit my game-play requirements with regard to 
  - whether to play in-game audio
  - whether to play with the Fellowship Card Pack or the Mordor Card Pack.
- receive regular, up-to-date feedback about how I am progressing in the game.
- enjoy the experience of playing the game.
- receive a visual reward for completing the game.
- learn some interesting facts about The Lord of the Rings characters.
- read some interesting quotes by the different Lord of the Rings characters.
- improve my cognitive function.
- improve my reaction times.

#### General User

As a returning user I would like to be able to:

- play a simple card-matching game presented in a visually appealing format.
- play a game which increases in complexity/challenge.
- receive different visual rewards for completing the game on subsequent attempts.
- view and match themed images of The Lord of the Rings characters.
- navigate through the site with ease.
- modify settings to suit my game-play requirements with regard to 
  - whether I want in-game sound effect
  - whether I want to play with the Fellowship Card Pack or the Mordor Card Pack.
- receive regular, up-to-date feedback about how I am progressing in the game.
- enjoy the experience of playing the game.
- be exposed to interesting facts about The Lord of the Rings characters.
- read some interesting quotes by The Lord of the Rings characters.
- improve my cognitive function.
- improve my reaction times.

#### The Lord of the Rings Fan

As a Lord of the Rings fan I would like to be able to:

- view and match themed images of The Lord of the Rings characters.
- enjoy the experience of playing the game.
- receive a visual reward for completing the game.
- be exposed to interesting facts about different Lord of the Rings characters.
- read some interesting quotes by The Lord of the Rings characters.

#### Site Owner
As the owner of The Lord of the Rings Memory Game site I would like:

- to be able to enjoy the experience of playing the game myself.
- to provide site users with an enjoyable playing experience.
- to provide site users with a visually appealing game. 
- to provide site users with a game that is intuitive to play.
- to provide site users with a game which increases in difficulty.
- to provide new users with game rules that are concise and easy to read. 
- to provide site users with a website that is easy to navigate.
- to provide site users with the ability to tailor their game experience by including the ability to turn the audio component off if desired
and to choose to play with either the Fellowship Card Pack or the Mordor Card Pack. 
- to expose site users to interesting facts and quotes from The Lord of the Rings 
books with a view to sharing my love of the Trilogy and instilling a curiosity in those who 
have not yet read the books. 
- to provide users with links to other websites, social media sites and *The One Wiki to Rule them All* where they can access further information
about *The Lord of the Rings* trilogy and connect with other fans of the books and films.

<br>

##### back to [top](#table-of-contents)
---

## User Centered Design
### 1 Strategy Plane
The User Centered Design process started with the creation of the User Stories.  These influenced subsequent feature, layout and design decisions.

The main  goal of the website is to provide users with an engaging game. 
The perceived audience of this site are fans of The Lord of the Rings Trilogy, teenagers and younger children who want to play a fun game or compete against 
each other or people who want to improve their memory and/or reaction times.

The site has been designed to provide minimal, but relevant, content that is easy to comprehend and that satisfies the needs of both the users and the site owner. 

<br>

##### back to [top](#table-of-contents)
---

### 2 Scope Plane
The key features of the website were developed based on the user needs. 

Users should be able to do the following on the website:
- Choose a card pack
- Start a game
- Read the rules of the game
- Mute the sound effects
- Turn over two cards at a time
- Match cards
- See how much time is left in the current level
- Advance to levels of increasing difficulty
- Read interesting facts about *The Lord of the Rings* characters
- Easily access dedicated *The Lord of the Rings* social media channels

<br>

##### back to [top](#table-of-contents)
---

### 3 Structure Plane

After identifying the needs of the site's users and after visiting pairs card matching websites the following website design and features were chosen

For ease of navigation it was decided to opt for a single page with pop-up modals 
- to start the game
- to provide the user with the rules of the game
- to provide a 'game over' message when the user runs out of time
- to show an 'advance to the next level' message for each round
- to congratulate winners
- to provide winners with a visual prize modal which displays character information.

<br>

### Features

The game is designed to be as intuitive as possible.

### Existing Features

A ring **favicon**, displayed on the web brower's tab, allows the user to identify the website by sight.

The **Title**, displayed on the web browser's tab at all times, clearly identifies the site as a *Lord of the Rings* themed memory game.

**Opening Modal** - Provides the user with a choice of themed playing cards.

**Playing Cards** - The playing cards, 8 (round one), 12 (round two) or 16 (round three) are displayed face down in a grid formation.  A uniform
back-of-card image makes it obvious to the user that the cards are face down.

The Lord of the Rings **themed character images** created in [SP-Studio](https://www.sp-studio.de/) are displayed once the card is clicked.
They provide the user with visually pleasing and easily differentiated images to match.

**Sound effects** - provide aural feedback to the user 
- when the game starts, 
- when they click on a card, 
- when a match is successful, 
- when a match is not successful and the cards flip back over,
- when a level has successfully been completed,
- when the player has successfully completed the game,
- if the player runs out of time and the game is over.

**Pairs Counter** - provides the user with a visual score of the number of pairs they have matched within a given round.

**Moves Counter** - provides the user with a visual score of the number of clicks they have used so far within a given round.

**Count Down Timer** - provides the user with a visual representation of the game-play time left in the current round.

**Mute sound effects button** - allows the user to turn off in-game sound effects.

**Home button** - allows the user to navigate back to the home page and restart their game experience.

**Help button** - brings up a modal of the game rules.

**Game Over Modal** - alerts the user to the fact that they did no complete the round in the given timeframe.  A **Restart** button allows them to start a new game immediately.

**Completion Modal** - pop up window congratulates the user at the end of Round Three and provides them with a **Prize Button** which opens a visual prize modal.

**Character Information Modal** - Modal which contains a random character image and information (gender, place of birth, etc.) about the character.

A **footer** contains **social media** links to:

- the official [Facebook](https://www.facebook.com/lordoftheringsbook/) page for The Lord of the Rings Books.
- The Lord of the Rings [Twitter](https://twitter.com/lotr) page.
- a Lord of the Rings [Istagram](https://www.instagram.com/lordoftherings_official/?hl=en) fan page.

<br> 

### Features Left to Implement
**Further levels** of increasing difficulty.

A **highest score board** would allow players to compete with other users in an asynchronous fashion.

A **themed playing environment**. Expand the range of characters. Change the font, colour-scheme and add different in-game background music accordingly. 

<br>

##### back to [top](#table-of-contents)
---

### 4 Skeleton Plane

The UI wireframing tool, [Balsamiq](https://balsamiq.com/), was used to create wireframes for each site page as it would appear on desktop, tablet and mobile devices.

The main content area was expressed similarly on each of the three levels to create consistency across the game as a whole.  

In Round One 8 of the 16 divs on the page display cards.

In Round Two 12 of the 16 divs on the page display cards.

In Round Three all 16 divs are displayed on the page.

A Moves Counter is visible above the top right-hand corner of the card-deck area displaying the number of moves taken so far.

A Pairs Counter is visible above the card-deck-area showing the number of pairs successfully matched so far.

A Count Down Timer is visible above the left-hand corner of the card-deck area displaying the number of seconds left to complete the current round.

The Mute button, Home button and Help button, expressed visually using intuitive icons, are centrally aligned under the playing cards in each round.

A footer, which contains links to Lord of the Rings social media sites was included at the bottom of every page.

![alt text](documentation/wireframes/desktop-round-three-with-modal.png "Desktop Round Three with Modal congratulating the winner.")


<br>

#### Wireframes

##### Desktop
- [Desktop Opening Modal](https://github.com/nualagr/the-lord-of-the-rings-game/blob/master/documentation/wireframes/desktop-opening-modal.png)

- [Desktop Round One with Advance to Level 2 Modal](https://github.com/nualagr/the-lord-of-the-rings-game/blob/master/documentation/wireframes/desktop-round-one-with-modal.png)

- [Desktop Round Two with Game Over Modal](https://github.com/nualagr/the-lord-of-the-rings-game/blob/master/documentation/wireframes/desktop-round-two-with-modal.png)

- [Desktop Round Three with Winning Modal](https://github.com/nualagr/the-lord-of-the-rings-game/blob/master/documentation/wireframes/desktop-round-three-with-modal.png)

- [Desktop Prize Modal](https://github.com/nualagr/the-lord-of-the-rings-game/blob/master/documentation/wireframes/prize.png)

##### Tablet
- [Tablet Round One](https://github.com/nualagr/the-lord-of-the-rings-game/blob/master/documentation/wireframes/ipad-round-one.png)

- [Tablet Round Two](https://github.com/nualagr/the-lord-of-the-rings-game/blob/master/documentation/wireframes/ipad-round-two.png)

- [Tablet Round Three](https://github.com/nualagr/the-lord-of-the-rings-game/blob/master/documentation/wireframes/ipad-round-three.png)

##### Mobile
- [Mobile Round One](https://github.com/nualagr/the-lord-of-the-rings-game/blob/master/documentation/wireframes/phone-round-one.png)

- [Mobile Round Two](https://github.com/nualagr/the-lord-of-the-rings-game/blob/master/documentation/wireframes/phone-round-one.png)

- [Mobile Round Three](https://github.com/nualagr/the-lord-of-the-rings-game/blob/master/documentation/wireframes/phone-round-one.png)

<br>

##### back to [top](#table-of-contents)
---

### 5 Surface Plane

#### Design

#### Colour Scheme
![alt text](documentation/readme-images/lotr-movie-poster.jpg "The Lord of the Rings film poster.")

<br>

The initial colour scheme was chosen by uploading The Lord of the Rings film poster to 
[coolors.co](https://coolors.co/ffbe0b-fb5607-ff006e-8338ec-3a86ff).  Using the colour picker
 the hexidecimal equivalent of the prevailing colours used within the poster were identified. 

<br>

![alt text](documentation/readme-images/lord-of-the-rings-colour-palette.png "The Lord of the Rings Memory Game colour palette.")
<sub>*Colour palette created at* [coolors.co](https://coolors.co/ffbe0b-fb5607-ff006e-8338ec-3a86ff).</sub>

During development it became necessary to expand the colour palette in order to provide visual contrast when the Mordor themed playing cards were chosen.
*Bistre Brown*, #8B720E with white text was chosen for the Mordor playing cards when face up and black and gold were chosen for the back of the card design.

![alt text](documentation/readme-images/mordor-playing-cards-palette.png "The colour palette used for the Mordor playing cards pack.")

<sub>*Colour palette created at* [coolors.co](https://coolors.co/ffbe0b-fb5607-ff006e-8338ec-3a86ff).</sub>

#### Cards
[SP-Studio](https://www.sp-studio.de/) was used to create the Lord of the Rings themed character images.

![alt text](documentation/readme-images/samwise-gamgee.jpg "Samwise Gamgee")

![alt text](documentation/readme-images/denethor.jpg "Denethor II")

#### Icons
Icons were used alongside the text within the site in order to help the user to understand the content at a glance. 
They were taken from [Font Awesome](https://fontawesome.com/) and chosen to be self explanatory, for example the image of 
a house was chosen for the Home button.

#### Typography
*Uncial Antiqua* was initially chosen as the main heading font.  
<br>

![alt text](documentation/readme-images/uncial-antiqua-title.png "Uncial Antiqua font example.")

The complimentary font *Roboto Slab*, which was recommended by [Google Fonts](https://fonts.google.com/), 
was chosen for the text used within the body of the site.  

![alt text](documentation/readme-images/roboto-slab-example.png "Roboto Slab font example.")


When it came to creating the playing cards it was decided that a fan-made version of the actual font used for the Lord of the Rings film titles, *Ringbearer Medium* designed by Peter Klassen, was to be used for 
the character names on the cards.  

![alt text](documentation/readme-images/frodo.png "Frodo character card showing his name in Ringbearer Medium font.")

Therefore in order to create visual unity that font was also used for titles within the site instead of *Uncial Antiqua*.  The font file was uploaded 
to [Font Squirrel](https://www.fontsquirrel.com/tools/webfont-generator)'s webfont generator and the webfont styles were stored in the assets folder along with the style.css file. 

![alt text](documentation/readme-images/ringbearer-medium-example.png "Ringbearer Medium font example")

<br>

The *one-ring-font* by [Gaut Fonts](https://www.fontspace.com/gaut-fonts) was used to create the ring design on the back of the Mordor Card Pack cards.

![alt text](documentation/readme-images/the-one-ring-font-example.png "Mordor Card back showing ring from One Ring Font")

<br>

##### back to [top](#table-of-contents)
---

## Development
Google Chrome Developer Tools were used extensively throughout the development process in order to test whether elements were responsive when 
viewed on mobile and tablet devices. When problems were encountered the Device Selector was used to target the element. Using the Elements Panel in Developer Tools the code in question was altered in order to achieve the desired result. Working code snippets were then replicated in the style.css file in Gitpod. 
Other solutions for errors were found in the Code Institute Slack channels, on Stack Overflow and on W3Schools.

<br>

##### back to [top](#table-of-contents)
---

## Technologies Used

- Languages: 

  * [HTML5](http://en.wikipedia.org/wiki/HTML5). Used to create the structure of the website.
  * [CSS3](http://en.wikipedia.org/wiki/CSS). Used to style the site. 
  * [JavaScript](https://en.wikipedia.org/wiki/JavaScript). Used to create the dynamic, interactive elements of the website.

- Websites
  * [Am I Responsive](http://ami.responsivedesign.is/). Used to create the mock-up image at the top of this document which shows the site as it would behave when viewed on desktop, mobile and tablet devices. 
  * [Code Institute](https://codeinstitute.net/). Used to review concepts covered in preceding modules and walk-through projects. 
  * [Coolors](https://coolors.co/ffbe0b-fb5607-ff006e-8338ec-3a86ff). Used to choose a colour scheme.
  * [Font Awesome](https://fontawesome.com/). Used to source the free icons that were used for the social media links in the footer and for the mute icon.
  * [Font Space](https://fontspace.com/).  Used to source the One Ring Font used to create the design on the back of the Mordor pack playing cards.
  * [Font Squirrel](https://www.fontsquirrel.com/tools/webfont-generator). Used to create the Web Font Kit for the Ringbearer font.
  * [Google Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools). Used extensively throughout the project to test the responsiveness of elements, to target and apply CSS styles during the design phase and to test the site's performance once built. 
  * [Google Fonts](https://fonts.google.com/). Used to choose and source the fonts used throughout the site.
  * [Github](https://github.com/). Used to host the deployed site and used as a respository for all previous versions of the build.
  * [Gitpod](https://www.gitpod.io/). Online IDE used to build and develop the website.
  * [jQuery](https://jquery.com/). The JavaScript library was used to traverse the DOM tree, event handling and CSS animation.
  * [Optimizilla](https://imagecompressor.com/). Used to compress the images to improve site loading times.
  * [Slack](code-institute-room.slack.com). Used during all phases of development and testing to find the answers to questions and the solutions to problems enountered.
  * [SP-Studio](https://www.sp-studio.de/).  Used to create the Lord of the Rings themed character images.
  * [Stack Overflow](https://stackoverflow.com/). Used to search for the answers to problems encountered during the development and testing of the website.
  * [TinyPNG](https://tinypng.com/). Used to compress the images to improve site loading times.
  * [Vectorstock](https://www.vectorstock.com/). Used to source the White Tree of Gondor image used for the back of the game cards.
  * [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/validator). Used to validate the CSS file.
  * [W3C HTML Validation Service](https://validator.w3.org/). Used to validate the HTML files.

- Frameworks
  * [Bootstrap Framework](https://getbootstrap.com/). Used to structure the website layout and ensure that it was responsive on all devices.
  * [Jasmine](https://en.wikipedia.org/wiki/Jasmine_(JavaScript_testing_framework)). JavaScript testing framework used to create the testing suite.

- APIs
  * [The Lord of the Rings API](https://the-one-api.dev/). Used to source the character information displayed as a prize upon completion of level three.

- Apps:
  * [Balsamiq](https://balsamiq.com/). Used to create the project wireframes.
  * [Inkscape](https://inkscape.org/). Used to edit the FontAwesome ring icon that was used as the Favicon.

##### back to [top](#table-of-contents)
---

## JQuery
The project uses JQuery to simplify DOM manipulation.

## Testing
To ensure that the site contains valid HTML, the HTML code was checked by direct input using the [W3C Markup Validation Service](https://validator.w3.org/).
The site has no errors.

![alt text](documentation/readme-images/html-validator-no-errors.png "HTML Validator No Errors Returned")
<br>


To check that the CSS file contained valid code it was inputted directly into the [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/).  
The style.css file returned no errors.

![alt text](documentation/readme-images/css-validator-no-errors.png "CSS Validator No Errors Returned")
<br>


To test the validity of the JavaScript [Espirima](https://esprima.org/demo/validate.html) was used to check for syntactical errors.

![alt text](documentation/readme-images/javascript-validator-no-errors.png "JavaScript Validator No Errors Returned")
<br>

### Performance
Once completed the website was tested using the Google Chrome Developer Tools Lighthouse test. Initially the site received a 75% rating on performance, 
largely due to the size of the images.

![alt text](documentation/readme-images/lighthouse-mobile-performance-1.png "Lighthouse Performance Results")
<br>
The images were then compressed using an online image compressor site, [Optimizilla](https://imagecompressor.com) and the new smaller images were then uploaded to the site. 
The subsequent test results showed marked improvement.

![alt text](documentation/readme-images/lighthouse-mobile-performance-2.png "Lighthouse Performance Improved Results")
<br>

The site performed well when tested for desktop viewing.
![alt text](documentation/readme-images/lighthouse-desktop-performance-3.png "Lighthouse Performance Desktop Results")
<br>

### Responsiveness
Web developer tools in each of the following browsers were used to ensure responsiveness and functionality of the site:

- Google Chrome
- Microsoft Edge
- Microsoft Opera
- Mozilla Firefox

Each website feature including, but not exclusive to, modals, buttons, game responses, mute, external links, hover effects etc. were manually checked within the 
aforementioned browsers.

Within each browser the site was checked for responsiveness and functionality when viewed on the following: 

**Mobile Devices**
- Android 7.0
- Galaxy S5
- Galaxy S9
- iPhone 5/SE
- iPhone 6/7/8
- iPhone 6/7/8 plus
- iPhone X / XS
- Moto G4
- Pixel 2
- Pixel 2XL
- Surface Duo

**Tablet Devices**
- iPad
- iPad Pro
- Kindle Fire HDX

**Laptop dimensions:**

- 15" Laptop (1024 x 800)
- 13" Laptop (1024 x 800)

**Desktop dimensions:**

- 24" Desktop (1920 x 1200)
- 22" Desktop (1680 x 1050)
- 20" Desktop (1600 x 900)

In addition to checking the game's functionality using browser developer tools, 
the site has been manually checked and found to function as desired on the following devices:

- Dell XPS 13
- Samsung S7

### Tested User Stories

#### New User

As a new user I can:

&#9745; play a card-matching game presented in a visually appealing format.
![alt text](documentation/readme-images/visually-appealing-screenshot.png "Screenshot of game in progress, showing cute character images.")

<br>
&#9745;  play a game which increases in complexity/challenge.

![alt text](documentation/readme-images/round-two-completed-on-ipad.png "Screenshot of round two of game completed on ipad.")

<br>
&#9745; read the rules of the game.

![alt text](documentation/readme-images/instructions-modal-on-iphone.png "Screenshot of Instructions Modal on iphone.")

<br>

&#9745; navigate through the site with ease.
![alt text](documentation/readme-images/home-screen-showing-intuitive-icons.png "Home screen showing intuitive icons such as a house for the home button.")

<br>

&#9745; modify settings to suit my game-play requirements with regard to 
  - whether to play in-game audio
  - whether to play with the Fellowship Card Pack or the Mordor Card Pack.
![alt text](documentation/readme-images/opening-modal-showing-cardpack-choice.png "Opening modal showing cardpack choice.")

<br>

&#9745; receive regular, up-to-date feedback about how I am progressing in the game.
![alt text](documentation/readme-images/screenshot-showing-counters-and-timer.png "Screenshot showing counters and timer.")

<br>

&#9745; enjoy the experience of playing the game.

&#9745; receive a visual reward for completing the game.
![alt text](documentation/readme-images/screenshot-prize-modal.png "Screenshot showing the prize modal with information about the character of Gimli the dwarf.")

<br>

&#9745; learn some interesting facts about The Lord of the Rings characters.

&#9745; read some interesting quotes by the different Lord of the Rings characters.
![alt text](documentation/readme-images/opening-modal-on-iphone.png "Screenshot showing the opening modal with a quote by Gandalf.")

<br>

&#9745; improve my cognitive function.

&#9745; improve my reaction times.

<br>


#### General User

As a returning user I am able to:

&#9745; play a simple card-matching game presented in a visually appealing format.

&#9745; play a game which increases in complexity/challenge.

&#9745; receive different visual rewards for completing the game on subsequent attempts.

&#9745; view and match themed images of The Lord of the Rings characters.

&#9745; navigate through the site with ease.

&#9745; modify settings to suit my game-play requirements with regard to 
  - whether I want in-game sound effect
  - whether I want to play with the Fellowship Card Pack or the Mordor Card Pack.

&#9745; receive regular, up-to-date feedback about how I am progressing in the game.

&#9745; enjoy the experience of playing the game.

&#9745; be exposed to interesting facts about The Lord of the Rings characters.

&#9745; read some interesting quotes by The Lord of the Rings characters.

&#9745; improve my cognitive function.

&#9745; improve my reaction times.

<br>

#### The Lord of the Rings Fan

As a Lord of the Rings fan I am able to:

&#9745; view and match themed images of The Lord of the Rings characters.

&#9745; enjoy the experience of playing the game.

&#9745; receive a visual reward for completing the game.

&#9745; be exposed to interesting facts about different Lord of the Rings characters.

&#9745; read some interesting quotes by The Lord of the Rings characters.

<br>

#### Site Owner
As the owner of The Lord of the Rings Memory Game site I am able to:

&#9745; enjoy the experience of playing the game myself.

&#9745; provide site users with an enjoyable playing experience.

&#9745; provide site users with a visually appealing game. 

&#9745; provide site users with a game that is intuitive to play.

&#9745; provide site users with a game which increases in difficulty.

&#9745; provide new users with game rules that are concise and easy to read. 

&#9745; provide site users with a website that is easy to navigate.

&#9745; provide site users with the ability to tailor their game experience by including the ability to turn the audio component off if desired
and to choose to play with either the Fellowship Card Pack or the Mordor Card Pack. 

&#9745; expose site users to interesting facts and quotes from The Lord of the Rings 
books with a view to sharing my love of the Trilogy and instilling a curiosity in those who 
have not yet read the books. 

&#9745; provide users with links to other websites, social media sites and *The One Wiki to Rule them All* where they can access further information
about *The Lord of the Rings* trilogy and connect with other fans of the books and films.

![alt text](documentation/readme-images/social-media-links.png "Screenshot showing the social media links to Facebook, Instagram and Twitter.")

<br>

### Bugs

- Upon first loading the site when the user chooses the Mordor pack the character images can often be seen before the card back images are written to screen.
- The 'cards-match.mp3' sound plays before the 'card-flip.mp3' sound.
- The second card 'card-flip.mp3' sound will not play if the user clicks on card 2 too quickly after card 1 and the first sound has not finished playing.

##### back to [top](#table-of-contents)
---

## Deployment

This project is hosted on [GitHub Pages](https://pages.github.com/)

### Deployment Procedure Followed:

1) When logged in to the [Github](https://github.com/) website the *The Lord of the Rings Memory Game* repository was selected from the repositories list in the top left-hand corner of the screen.

2) When in the selected respository, **Settings** was chosen from the navigation bar below the repository title.

3) Scrolling down the **Settings** page revealed the **GitHub Pages** heading.  Under the **Source** subheading, the dropdown menu, whose default value is 'None', was clicked.  'Master' was selected from the dropdown list.

4) The **Save** button to the right of the newly selected 'Branch: master' was then clicked to deploy the site.

<br>

### To find the link to the newly deployed site:

1) When logged in to the [Github](https://github.com/) website, navigate to the desired repository.

2) In the navigation pane on the right of the screen, under the heading **Environments** click on the 'github-pages' link.

3) Under the heading **Deployments/Activity Log** click on the 'View deployment' button to the right of the screen. 
The website will open in a separate browser window.

<br>

### To clone the repository:

1) Log in to [Github](https://github.com/).

2) Navigate to the main page of the repository.

3) Select the green **Code** button from the navigation bar below the repository title.

4) Under the heading **Clone** select 'HTTPS'

5) Click the image of a clipboard to the right of the URL in order to copy the address. 

6) Open Git Bash.

7) Navigate to the desired directory in which you wish to place the cloned directory.

8) Type git clone, space, and then paste the copied URL.  

9) Press 'Enter' to create the clone.

##### back to [top](#table-of-contents)
---

## Credits
### Content
The [Boostrap Modal component](https://getbootstrap.com/docs/4.0/components/modal/) was used and modified for each of the modals on the site.


### Media

### Images
- Grey forest and mountain from [Vecteezy](https://www.vecteezy.com/vector-art/229817-vector-beautiful-landscape-illustration) was used for the 404.html page background.
- White Tree of Gondor [Vectorstock](https://www.vectorstock.com/royalty-free-vector/white-tree-gondor-isolated-black-and-white-eps-vector-27150646) was used for the back of the Fellowship playing cards.
- The character images on each of the playing cards were created using [SP-Studio](https://www.sp-studio.de/).
<br>

### Sounds
- Game Monopoly game card pack place down on playing board 2, used for unmatched cards turning from [ZapSplat](https://www.zapsplat.com/page/3/?s=playing+card&post_type=music&sound-effect-category-id).
- Playing card on top of deck turn over, used for card flipping sound [ZapSplat](https://www.zapsplat.com/page/4/?s=playing+card&post_type=music&sound-effect-category-id).
- Cartoon success fanfare, used for Congratulations Modal opening from [ZapSplat](https://www.zapsplat.com/?s=success&post_type=music&sound-effect-category-id=).
- Cartoon musical accent clarinet oboe fail descending, used for Game Over Modal [ZapSplat](https://www.zapsplat.com/?s=failure&post_type=music&sound-effect-category-id=).
- Multimedia game musical success complete orchestral horns 001, used for Advance Level Modals [ZapSplat](https://www.zapsplat.com/my_list/milikansama-list-1594971790/).
##### back to [top](#table-of-contents)
---

### Acknowledgements
- [Code Institue](https://codeinstitute.net/) and the very helpful tutors.
- A special thank you to my project mentor [Reuben Ferrante](https://uk.linkedin.com/in/reuben-ferrante) for his wisdom and guidance during the project. 
- The [Code Institue](https://codeinstitute.net/) community on [Slack](code-institute-room.slack.com) for their support.
- I received inspiration for this project from:
  - https://zahur76.github.io/MilestoneProject2/
  - https://nickbell123.github.io/Marvel-Memory-Game/
  - [8-bitEarth](https://www.deviantart.com/8-bitearth/art/The-Lord-of-the-Rings-South-Park-version-363629107)'s Lord of the Rings character images created using [SP-Studio](https://www.sp-studio.de/).

<br>

##### back to [top](#table-of-contents)
---
