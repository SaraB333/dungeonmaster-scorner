# DungeonMaster Scorner

DungeonMaster Scorner is a quiz website that will test the knowledge of dungeonmasters using Volo's Guide to Monsters. This will be for DnD 5th edition. There will be a Monster Facts page to test the users general knowledge on Monsters, a Monster Match page for matching monsters images to their names and a Signup page so users can create a login, and a Feedback page that will show after users fill in the sign up form.

![Responsice Mockup](assets/images/responsive-design-check.png)

## Features 
### Existing Features

- __The DungeonMaster Scorner Logo__

  - Featured at the top of the games and sign up page, the DungeonMaster Scorner logo and heading is easy to see for the user. Upon viewing the page, the user will be able to see the name of the website.

![Logo](assets/images/logo.png)

- __Home Page__

  - This is a page with links to both games, and the sign up page. This is a safe place for users to relax and choose what they would like to do.

![Home](assets/images/home-page.png)

- __The Game Area (Monster Facts)__

  - This Page hosts the first game, where users can test their general knowledge from Volo's Guide to Monsters. It has a home button to go back to the home page, and a restart quiz button to take the user back to the beginning of the quiz.  

![Game (Facts)](assets/images/monster-facts-page.png)

- __The Game Area (Monster Match)__

  - This Page hosts the second game, where users can test their monster visuals knowledge from Volo's Guide to Monsters. It has a home button to go back to the home page, and a restart quiz button to take the user back to the beginning of the quiz. 

![Game (Match)](assets/images/monster-match-page.png)

- __The Tally Area__

  - This section will allow the user to see exactly how many correct answers they have provided. 

![Tally](assets/images/tally-section.png)

### Features Left to Implement

- I would have liked to have alerts for when the game is over, but time restrictions means that for now, the user will have a slightly less interactive experience

## Testing 



In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your project’s features and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.


### Validator Testing 

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-maths%2F)
- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-maths%252F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JavaScript
    - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
      - The following metrics were returned: 
      - There are 11 functions in this file.
      - Function with the largest signature takes 2 arguments, while the median is 0.
      - Largest function has 10 statements in it, while the median is 3.
      - The most complex function has a cyclomatic complexity value of 4 while the median is 2.

### Unfixed Bugs

You will need to mention unfixed bugs and why they were not fixed. This section should include shortcomings of the frameworks or technologies used. Although time can be a big variable to consider, paucity of time and difficulty understanding implementation is not a valid reason to leave bugs unfixed. 

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://code-institute-org.github.io/love-maths/


## Credits 

In this section you need to reference where you got your content, media and extra help from. It is common practice to use code from other repositories and tutorials, however, it is important to be very specific about these sources to avoid plagiarism. 

You can break the credits section up into Content and Media, depending on what you have included in your project. 

### Content 

- Asterisk wildcard selector in css copied from love running project
- Monster Facts taken from Volo's Guide to Monsters (a book I own)
- sign up form copied from [code institute lesson](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LMR101+1/courseware/0a4bf408d10c4149bb686457ac11edf6/16d62f1111064f5cb6a64582da96a41b/) (please see below code that was copied and altered for this project)
- ><body>
  >    <h3>Register your account:</h3>
  >  <p id="errors"></p>
  >  <form id="registration-form" method="POST" action="https://formdump.codeinstitute.net/">
  >      <div class="username">
  >          <label for="username">Username:</label>
  >          <input id="username" name="username" type="text" required>
  >      </div>
  >      <div class="password">
  >          <label for="password">Password:</label>
  >          <input id="password" name="password" type="password" required>
  >      </div>
  >      <input type="submit">
  >      
  >  </form>
  >  <script src="https://code.jquery.com/jquery-3.5.1.slim.js" integrity="sha256-DrT5NfxfbHvMHux31Lkhxg42LY6of8TaYyK50jnxRnM=" crossorigin="anonymous"></script>
  >  <script src="index.js"></script>
  ></body>
  >let usernames = ["Harry", "Daisy", "Michael", "Sarah", "Sally"];

  >// Write your code here
  >let form = document.getElementById('registration-form');
  >form.addEventListener('submit', handleSubmit);
  >let errorMsg = document.getElementById('errors');
  >function handleSubmit(event) {
  >  event.preventDefault;
  >  let usernameInput = document.getElementById('username').value;
  >  if (usernames.includes(usernameInput)) {
  >      errorMsg.innerHTML = `Sorry, the username ${usernameInput} is already in use. Please choose another username.`;
  >  } else {
  >      usernames.push(usernameInput);
  >      form.submit();
  >      console.log(usernames);
  >  }
  >}


- The text for the Home page was taken from Wikipedia Article A
- Instructions on how to implement form validation on the Sign Up page was taken from [Specific YouTube Tutorial](https://www.youtube.com/)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Media

- favicon taken from [icons8](https://icons8.com/icon/104704/dungeons-and-dragons)
- background image taken from [Forgotten Realms](https://forgottenrealms.fandom.com/wiki/Volo%27s_Guide_to_Monsters_(in-universe))
- all images for Monster match game taken from [Forgotten Realms](https://forgottenrealms.fandom.com/wiki/Main_Page)


- The photos used on the home and sign up page are from This Open Source site
- The images used for the gallery page were taken from this other open source site


Congratulations on completing your Readme, you have made another big stride in the direction of being a developer! 

## Other General Project Advice

Below you will find a couple of extra tips that may be helpful when completing your project. Remember that each of these projects will become part of your final portfolio so it’s important to allow enough time to showcase your best work! 

- One of the most basic elements of keeping a healthy commit history is with the commit message. When getting started with your project, read through [this article](https://chris.beams.io/posts/git-commit/) by Chris Beams on How to Write  a Git Commit Message 
  - Make sure to keep the messages in the imperative mood 

- When naming the files in your project directory, make sure to consider meaningful naming of files, point to specific names and sections of content.
  - For example, instead of naming an image used ‘image1.png’ consider naming it ‘landing_page_img.png’. This will ensure that there are clear file paths kept. 

- Do some extra research on good and bad coding practices, there are a handful of useful articles to read, consider reviewing the following list when getting started:
  - [Writing Your Best Code](https://learn.shayhowe.com/html-css/writing-your-best-code/)
  - [HTML & CSS Coding Best Practices](https://medium.com/@inceptiondj.info/html-css-coding-best-practice-fadb9870a00f)
  - [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#General)

Getting started with your Portfolio Projects can be daunting, planning your project can make it a lot easier to tackle, take small steps to reach the final outcome and enjoy the process! 