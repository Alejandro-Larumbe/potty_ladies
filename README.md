
<!-- 
  TOD Add photos, resume, cover letter, any other files.
-->


<!-- HEADER -->
<div align="center">

  <!-- SHIELDS -->
  <!-- For how-to notes on shield badges, see docs: https://shields.io/ -->
  ADD: JavaScript, TypeScript, PrismaJS, Jest, FireBase, React, Redux React-Router, SASS, Tailwind, Stripe
  ![Express](https://img.shields.io/badge/-Shield_Badge_Example-black?style=flat-square&logo=github&logoColor=ff00ff)


  <img 
    src="docs/images/logo.svg" 
    alt="Logo" 
    title="" 
    width="100%">

  # Potty Ladies
  ## Floral E-commerce Site

  <!-- TOC -->
  **TOC**  
  [About](#about) ● [Features](#features) ● [How It Works](#how-it-works) ● [Installation](#installation) ● [Development](#development) ● [Contact](#contact)

  <!-- SUMMARY -->
  This WIP project is a small-business e-commerce site selling plants.
  
  <!-- SPLASHY IMAGE -->
  <img 
    src="docs/images/splash.png" 
    alt="Splashy 100%-width image" 
    title="" 
    width="100%">

  <!-- WEBSITE LINK -->
  ### No Demo Yet, Sorry :C
  <!-- ### Try the Demo! -->
  <!-- <a href="">[Live Website]</a> -->
  <!-- OPTIONAL Use an image button for extra fancy points. -->
  <!-- <a href=""><img src="" alt="Button image to go to app site" title="Click to see the live site!"></a> -->

</div>

---

<!-- ABOUT -->
<div align="center">

  ## About

  <!-- [● See Website ●]()   -->

</div>

<img src="" 
  alt="Animated gif example of app in action, or interesting detail, etc." 
  title=""
  width="50%"
  align="left">

  This WIP project is a small-business e-commerce site selling plants. It will utilize Firebase for authentication/authorization, a React/Redux frontend and Express/PrismaJS backend, Jest for automated testing, and the Stripe library to handle monetary transactions. Plants are grouped by category and are able to be tagged. Promotional codes can be activated and validated in checkout. Admin accounts can perform CRUD operations to add, edit, and delete products, categories, and tags.

<br clear="both">

<!-- OPTIONAL EXTRA IMAGE(S) -->
<!-- Option 1: A single, centered 100%-width image. Can narrow, like to 80%, too if desired. A screenshot with many details or a narrow row image may be good. -->
<div align="center">
  <img 
    src="" 
    alt="Full-width image" 
    title="" 
    width="100%">
</div>

<!-- Option 2: Multiple images in a row, 'width' attribute set to evenly split the x-axis space. Ensure matching canvas ratios for the best appearance. Two rows combined can make a nice 'square' collage. May be food for a 'full-screen screenshots' gallery. -->
<div align="center">
  <img 
    src="" 
    alt="Image 1" 
    title="" 
    width="48%">
  <img 
    src="" 
    alt="Image 2" 
    title="" 
    width="48%">
</div>

<!-- Option 3: Multiple images in a row, 'height' attribute set to hard values to ensure matching heights. Good for images with different aspect ratios. -->
<div align="center">
  <img 
    src="" 
    alt="Image 1" 
    title="" 
    height="500px">
  <img 
    src="" 
    alt="Image 2" 
    title="" 
    height="500px">
</div>


<!-- FEATURES -->
<div align="center">

  ## Features

</div>

* Customer account signup and login using Firebase
* Customer can save address and payment information
* Purchase transactions through Stripe library
* About us and contact page
* Pages for shop categories
* Product pages with title, description, image gallery, quantity counter, add to cart
* Cart that retains state between sessions
* User purchase history
* Automated testing with Jest 


### For the Future

Potential not-set-in-stone stretch goals or ideas include:

* Admin ability to create expiring promo codes
* Tags to assign products (ex. 'low-maintenance', 'flowering', 'succulent'...)
* 'Recently viewed' mini-gallery
* 'See more like this' mini-gallery
* Purchase without account?
* Contact form
* Mailing list signup
* Admin CRUD capabilities to customize website theme (images, colors, etc.)


<!-- INSTRUCTIONS -->
<div align="center">

  ## How It Works

  [Creating an account](#1)  
  [Navigating categories and products](#)  
  [Making an Order](#)  
  [Contact and Mailing List](#)  
  [User Settings: Adding Address & Form of Payment](#)
  [Viewing Order History](#)
  [Admin: Adding, Editing, and Deleting Products](#)

</div>

### 1. Step One

<img 
  src="" 
  alt="Screenshot, animated gif, diagram, etc illustrating this step" 
  title="" 
  width="50%"
  align="right">

* To **do a thing**, follow this step.
* ***TIP** This is a helpful tip.*
* ***NOTE** This is note about something.*
* ***WARNING!** This is a warning!*

<br clear="both">

> **Optional Special Section!**  
> For any additional asides. Maybe illustrating a specific example, a table of information, a code snippet, or 'fun facts' or quotes!  
>
> 1. A list
> 1. could be
> 1. nice too
>
> | Header A | Header B |
> |----------|----------|
> | A        | B        |
>

<div align="center">
  <img 
    src="" 
    alt="Optional extra image(s)" 
    title="" 
    width="100%">
</div>

<div align="center">

  ## Installation

</div>

1. Create a new postgres database and owner.
2. Create a `.env` file matching the `.env.example` file and your new postgres information.
3. Migrate the database with `npx prismajs ??? tba`.
4. Seed the migration with `tba`.
5. Run locally with `npm start`.

### Get started on Heroku - Account, Database, Config Vars 
1. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli), if you haven't done so already.
2. Create a [free Heroku account](https://signup.heroku.com/dc).
3. Login and [create a new Heroku app](https://dashboard.heroku.com/new-app).
4. Navigate to the *Resources* tab an set up a 'Heroku Postgres' database for the app.
5. Select the 'Hobby Dev - Free' plan.
6. Navigate to the *Settings* tab. Click 'Reveal Config Vars'. Set the environment variables needed to run the app. 
- **NOTE** NEVER check in `.env` files or any private keys. Environment variables set in an `.env` file won't work in Heroku anyway.
- **NOTE** See the `DATABASE_URL` is already set. This is done when the Heroku Postgres database was set up. Therefore, `DB_USERNAME`, `DB_PASSWORD`, and `DB_DATABASE` arent' required.

### Configure the app to use the Heroku Postgres database
Instructions with PrismaJS TBA
<!-- There are two ways to configure the `production` environment: 
  1. With *dotenv* and a `.sequelizerc` file that points to a `config/database.js` file.
  2. The Sequelize CLI's auto-generated `config.json` file.

**With .sequelizerc and dotenv**
Update the `config/database.js` file with a `production` key like so. -->

<!-- ``` js
// config/database.js
// ...
module.exports = {
  development: {
    // ...
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {ssl: true},
    seederStorage: 'sequelize',
  }
}
```

**With Sequelize CLI's config.json**
Change the `production` entry to look like this:
``` json
"production": {
  "dialect": "postgres",
  "seederStorage": "sequelize",
  "use_env_variable": "DATABASE_URL"
}
``` -->

### Push to Heroku
1. In the root of the app's repo directory, log into Heroku with `heroku login`.
2. Add a new remote to GitHub configuration with `heroku git:remote -a <<app-name-here>>`.
3. Add all changes with `git add .`.
4. Commit changes with `git commit -m "<<Add message here>>"`. (Optionally, `git commit -am` Adds and commits in one command.)
5. Push changes to Heroku with `git push Heroku`.
6. You should see a successful build image.
``` bash
# ...
remote: -----> Launching...
remote:        Released v5
remote:        https://«your-app-name».herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy... done.
To https://git.heroku.com/«app-name-here».git
```

### Run migrations on Heroku
1. To migrate your Heroku Postgres database, run the migration command prefaced with `heroku run` inside the repo. 

<!-- ``` bash
heroku run npx sequelize-cli db:migrate
``` -->

2. To seed, preface the seed command with `heroku run` as well.
<!-- 
``` bash
heroku run npx sequelize-cli db:seed:all
``` -->

3. To roll back, instead of dropping the database, first try to migrate down and up (shown below). If this doesn't work, reset the entire database by removing and adding the 'Heroku Postgres' add-on again, then migrating and seeding as the first time.

<!-- ``` bash
heroku run npx sequelize-cli db:seed:undo:all
heroku run npx sequelize-cli db:migrate:undo:all
heroku run npx sequelize-cli db:migrate
heroku run npx sequelize-cli db:seed:all
``` -->


<div align="center">

  ## Development

  **DEV TOC**  
  [Technologies](docs/development.md#technologies) ● [Concept](docs/development.md#concept) ● [Models](docs/development.md#models) ● [Routes](docs/development.md#routes) ● [Wireframes](docs/development.md#wireframes) ● [Code Highlights](#code-highlights) ● [Dev Snapshots](docs/development.md#development-snapshots)

  [[ See full dev notes HERE ]](docs/development.md)  
  The full notes on this project's development are kept in a separate document linked above.  
  It details the technical aspects of this project's development.  
  A few sample snapshots are below from the development process.  

  <img 
    src="" 
    alt="Snapshot 1"
    title=""
    height="250px">
  <img 
    src="" 
    alt="Snapshot 2"
    title=""
    height="250px">
  <img 
    src="" 
    alt="Snapshot 3"
    title=""
    height="250px">

</div>

---


<!-- CONTACT -->
<div align="center">

## Contact

Thank you for your interest in Potty Ladies.  
Feel free to reach out to provide feedback, bug reports, or anything else :) .  

<!-- CONTRIBUTOR PROFILE -->
<!-- Include: Name, title, job/search status, (opt) photo, (opt) summary of contributions, (opt) a few words or a quote, socials badges (github follow, linkedin, angellist, email, resume, portfolio, twitter, etc.), (opt) team/contact page from app's site -->

</div>

  <img 
    src="docs/images/alejandro-portrait.png" 
    alt="Alejandro Larumbe" 
    height="100px"
    style="border-radius: 50%; margin: 1rem;"
    align="left">

### Alejandro Larumbe
*(Full-stack software developer, open to work)*  

[![Portfolio](https://img.shields.io/badge/-❤_Portfolio-f58?style=flat-square&logo=a&logoColor=white&link=https://alejandro-larumbe.github.io/)](https://alejandro-larumbe.github.io/) 
<a href="docs/Larumbe-Alejandro_Resume.pdf" download>![Resume PDF](https://img.shields.io/badge/-Resume-f00?style=flat-square&logo=adobe-acrobat-reader&logoColor=white)</a> 
[![Alejandro's email](https://img.shields.io/badge/alicia.mira.kim@gmail.com-f4b400?style=flat-square&logo=gmail&logoColor=black&link=mailto:)]() 
[![Linkedin](https://img.shields.io/badge/-LinkedIn-0077b5?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/alejandro-larumbe-54b265a6/)](https://www.linkedin.com/in/alejandro-larumbe-54b265a6/) 
[![GitHub Alejandro-Larumbe](https://img.shields.io/github/followers/Alejandro-Larumbe?label=follow&style=social)](https://github.com/Alejandro-Larumbe) 

  <img 
    src="docs/images/yuka-portrait.png" 
    alt="Yuka Moribe" 
    height="100px"
    style="border-radius: 50%; margin: 1rem;"
    align="left">

### Yuka Moribe
*(Full-stack software developer, open to work)*  

[![Portfolio](https://img.shields.io/badge/-❤_Portfolio-f58?style=flat-square&logo=a&logoColor=white&link=https://yukamoribe.com/)](https://yukamoribe.com/) 
<a href="docs/Moribe-Yuka_Resume.pdf" download>![Resume PDF](https://img.shields.io/badge/-Resume-f00?style=flat-square&logo=adobe-acrobat-reader&logoColor=white)</a> 
[![Yuka's email](https://img.shields.io/badge/yukamoribe@gmail.com-f4b400?style=flat-square&logo=gmail&logoColor=black&link=mailto:yukamoribe@gmail.com)](mailto:yukamoribe@gmail.com) 
[![Linkedin](https://img.shields.io/badge/-LinkedIn-0077b5?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/yuka-moribe-485962157/)](https://www.linkedin.com/in/yuka-moribe-485962157/) 
[![GitHub smilelk4](https://img.shields.io/github/followers/smilelk4?label=follow&style=social)](https://github.com/smilelk4) 

  <img 
    src="docs/images/peter-portrait.png" 
    alt="Peter Kang" 
    height="100px"
    style="border-radius: 50%; margin: 1rem;"
    align="left">
    
### Peter Kang
*(Full-stack software developer, open to work)*  

[![Portfolio](https://img.shields.io/badge/-❤_Portfolio-f58?style=flat-square&logo=a&logoColor=white&link=https://kangpeter.com/)](https://kangpeter.com/) 
<a href="docs/Kang-Peter_Resume.pdf" download>![Resume PDF](https://img.shields.io/badge/-Resume-f00?style=flat-square&logo=adobe-acrobat-reader&logoColor=white)</a> 
[![Peter's email](https://img.shields.io/badge/alicia.mira.kim@gmail.com-f4b400?style=flat-square&logo=gmail&logoColor=black&link=mailto:https://www.linkedin.com/in/peter-kang-129184166/)](mailto:https://www.linkedin.com/in/peter-kang-129184166/) 
[![Linkedin](https://img.shields.io/badge/-LinkedIn-0077b5?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/peter-kang-129184166/)](https://www.linkedin.com/in/peter-kang-129184166/) 
[![AngelList](https://img.shields.io/badge/-AngelList-black?style=flat-square&logo=AngelList&logoColor=white&link=https://angel.co/u/peter-kang-2)](https://angel.co/u/peter-kang-2) 
[![GitHub southpeter77](https://img.shields.io/github/followers/southpeter77?label=follow&style=social)](https://github.com/southpeter77) 

  <img 
    src="docs/images/alicia-portrait.jpg" 
    alt="Alicia Mira Kim" 
    height="100px"
    style="border-radius: 50%; margin: 1rem;"
    align="left">
    
### Alicia Mira Kim
*(Full-stack software developer, open to work)*  

[![Portfolio](https://img.shields.io/badge/-❤_Portfolio-f58?style=flat-square&logo=a&logoColor=white&link=https://alimirakim.github.io/)](https://alimirakim.github.io) 
<a href="docs/Kim-Mira-Alicia_Resume.pdf" download>![Resume PDF](https://img.shields.io/badge/-Resume-f00?style=flat-square&logo=adobe-acrobat-reader&logoColor=white)</a> 
[![Alicia's email](https://img.shields.io/badge/alicia.mira.kim@gmail.com-f4b400?style=flat-square&logo=gmail&logoColor=black&link=mailto:alicia.mira.kim@gmail.com)](mailto:alicia.mira.kim@gmail.com) 
[![Blog](https://img.shields.io/badge/-Blog-21759b?style=flat-square&logo=WordPress&logoColor=white&link=https://aliciamirakim.com/)](https://aliciamirakim.com) 
[![Linkedin](https://img.shields.io/badge/-LinkedIn-0077b5?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/alicia-mira-kim-416a0a41)](https://www.linkedin.com/in/alicia-mira-kim-416a0a41) 
[![Twitter](https://img.shields.io/badge/-Twitter-1da1f2?style=flat-square&logo=Twitter&logoColor=white&link=https://twitter.com/alimirakim)](https://twitter.com/alimirakim) 
[![AngelList](https://img.shields.io/badge/-AngelList-black?style=flat-square&logo=AngelList&logoColor=white&link=https://angel.co/u/alicia-mira-kim)](https://angel.co/u/alicia-mira-kim) 
[![GitHub alimirakim](https://img.shields.io/github/followers/alimirakim?label=follow&style=social)](https://github.com/alimirakim) 

</div>

<br clear="both">

---

<div align="center">

<!-- **💖 THANK YOU (ATTRIBUTIONS) 💖**  
[Attribution 1 by Person A]() | [Attribution 2 by Person B]() | [Attribution 3 by Person C]() -->

</div>