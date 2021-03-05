<div align="center">

# Development of App

**DEV TOC**  
[Technologies](docs/development.md#technologies) ● [Concept](docs/development.md#concept) ● [Models](docs/development.md#models) ● [Routes](docs/development.md#routes) ● [Wireframes](docs/development.md#wireframes) ● [Code Highlights](#code-highlights) ● [Dev Snapshots](docs/development.md#development-snapshots)

This section details the technical aspects of this project's development. To see what Persistamp is, its features, and how to use it, see the [[ README ]](../README.md).

<!-- Describe potential formal approaches or philosophies in development. Ex. mobile-first, test-driven-development, BEM-style naming conventions, AGILE, collaborative style. -->

</div>


<div align="center">

## Technologies

<img src="docs/icons/express.svg" alt="Express icon" title="Express">
<img src="docs/icons/javascript.svg" alt="JavaScript icon" title="JavaScript">
<img src="docs/icons/typescript.svg" alt="TypeScript icon" title="TypeScript">
<img src="docs/icons/react.svg" alt="React icon" title="React">
<img src="docs/icons/redux.svg" alt="Redux icon" title="Redux">
<img src="docs/icons/react-router.svg" alt="React-Router icon" title="React-Router">
<img src="docs/icons/prisma.svg" alt="Prisma icon" title="Prisma">
<img src="docs/icons/jest.svg" alt="Jest icon" title="Jest">
<img src="docs/icons/firebase.svg" alt="Firebase icon" title="Firebase">
<img src="docs/icons/.svg" alt=" icon" title="">
<img src="docs/icons/.svg" alt=" icon" title="">

</div>

**LANGUAGES**
![JavaScript](https://img.shields.io/badge/-JavaScript-f7df1e?style=flat-square&logo=JavaScript&logoColor=black)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178c6?style=flat-square&logo=TypeScript&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572b6?style=flat-square&logo=CSS3&logoColor=white)
![SASS](https://img.shields.io/badge/-SASS-c69?style=flat-square&logo=SASS&logoColor=white)
  
**FRONTEND** 
![React](https://img.shields.io/badge/-React-61dafb?style=flat-square&logo=React&logoColor=black)
![Redux](https://img.shields.io/badge/-Redux-764abc?style=flat-square&logo=Redux&logoColor=white)
![React Router](https://img.shields.io/badge/-React_Router-ca4245?style=flat-square&logo=React-Router&logoColor=white)
![Material-UI](https://img.shields.io/badge/-Material_UI-0081cb?style=flat-square&logo=Material-UI&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38b2ac?style=flat-square&logo=Tailwind-CSS&logoColor=white)
  

**BACKEND**
![Express](https://img.shields.io/badge/-Express-000?style=flat-square&logo=Express&logoColor=white)
![Prisma](https://img.shields.io/badge/-Prisma-000?style=flat-square&logo=Prisma&logoColor=white)
![Node.js](https://img.shields.io/badge/-Node.js-393?style=flat-square&logo=Node.js&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=PostgreSQL&logoColor=white)

**LIBRARIES, TOOLS, & SERVICES**
![Firebase](https://img.shields.io/badge/-Firebase-ffca28?style=flat-square&logo=firebase&logoColor=black)
![Heroku](https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=Heroku&logoColor=white)
![Amazon AWS](https://img.shields.io/badge/-Amazon_AWS-232f3e?style=flat-square&logo=Amazon-AWS&logoColor=white)
![Docker](https://img.shields.io/badge/-Docker-2496ed?style=flat-square&logo=Docker&logoColor=white)
![Jest](https://img.shields.io/badge/-Jest-c21325?style=flat-square&logo=Jest&logoColor=white)


<div align="center">

## Concept

</div>

**KEYWORDS**  
???

**FONTS**  
- Fancy Font Foo *(logo, h1s/decorative labels)*
- Calibri (sans serif) *(body, p)*
- Cambria (serif) *(h2-h4, subheaders, small labels)*

**COLORS**  
- ![PRIMARY #FFFFFF Color Badge](https://img.shields.io/badge/-primary_hex_FFF-fff?style=flat-square)
- color badge 2
- color badge 3
<!-- Color ideas: Primary, secondary, accent, highlight, warning, error, shadow, screen, logo -->

**REFERENCES & INSPIRATION**  
- [Puriri Lane](https://puririlane.co.nz/) - E-commerce flower shop

<!-- Option 3: Multiple images in a row, 'height' attribute set to hard values to ensure matching heights. Good for images with different aspect ratios. -->
<div align="center">
  <img 
    src="" 
    alt="Image 1" 
    title="" 
    height="250px">
  <img 
    src="" 
    alt="Image 2" 
    title="" 
    height="250px">
</div>


<div align="center">

  ## Models

  Created using Prisma.

  **TABLES**  
  [User](#User) | [Order](#Order) | [OrderItem](#OrderItem) | [PromoCode](#PromoCode) | [Plant](#Plant) | [PlantType](#PlantType) | [Image](#Image) | [Tag](#Tag) | [PlantTag](#PlantTag)
 
  [[ See Diagram ]](link-to-dbdiagram-or-similar)
  
  <img 
    src="" 
    alt="Schema diagram" 
    title="">
    
</div>


### `User`
| Columns | Constraints |
|---------|-------------|
| id      | serial, pk  |
| createdAt      | datetime, not null, default=now() |
| updatedAt      | datetime, not null, default=not() |
| firstName      | string(50), not null |
| lastName       | string(50), not null |
| email          | string(320), not null, unique |
| phone          | int |
| hashedPassword | string, not null |
| addressStreet1 | string() |
| addressStreet2 | string() |
| addressCity    | string() |
| addressRegion  | string() |
| addressZip     | int |

### `Order`
| Columns | Constraints |
|---------|-------------|
| id      | serial, pk  |
| createdAt      | datetime, not null, default=now() |
| updatedAt      | datetime, not null, default=not() |
| userId         | fk(users.id), not null |
| total          | decimal, not null |
| dateTime       | datetime, not null, default=now() |
| promoCodeId    | int |
| addressStreet1 | string(), not null | 
| addressStreet2 | string() |
| addressCity    | string(), not null |
| addressRegion  | string(), not null |
| addressZip     | int |
| status         | string() NOTE: enum? |


### `OrderItem`
| Columns | Constraints |
|---------|-------------|
| id      | serial, pk  |
| createdAt      | datetime, not null, default=now() |
| updatedAt      | datetime, not null, default=not() |
| orderId   | fk(orders.id), not null |
| plantId   | fk(plants.id), not null |
| quantity  | int |

### `PromoCode`
| Columns | Constraints |
|---------|-------------|
| id      | serial, pk  |
| name           | string(), not null, unique |
| startDate      | datetime, not null, default=now() |
| expirationDate | datetime, not null |

### `Plant`
| Columns | Constraints |
|---------|-------------|
| id      | serial, pk  |
| name        | string(), unique, not null |
| typeId      | fk(plantTypes.id), not null |
| description | string(), not null |
| dimensions  | string(), not null |
| price       | decimal, not null |
| stock       | int, not null |
| potSize     | string(), not null |


### `PlantType`
| Columns | Constraints |
|---------|-------------|
| id      | serial, pk  |
| name | string(), not null, unique |

### `Image`
| Columns | Constraints |
|---------|-------------|
| id      | serial, pk  |
| plantId  | fk(plants.id), not null |
| sequence | int, not null, default=autoincrement |
| url      | string(2048), not null, unique |

### `Tag`
| Columns | Constraints |
|---------|-------------|
| id      | serial, pk  |
| name | string(), not null, unique |

### `PlantTag`
| Columns | Constraints |
|---------|-------------|
| id      | serial, pk  |
| plantId | fk(plants.id), not null |
| tagId   | fk(tags.id), not null |


<div align="center">

## Routes

</div>

### Frontend

#### `/`
| Route Path | Purpose |
|------------|---------|
| `/`        | Home page |
| `/about` |  |
| `/contact` |  |
| `/login` | Simple login form |
| `/signup` | Almost identical to login form |
| `/not-found` |  |
| `/faq` | Including refund policy, TOS, privacy policy, delivery terms, location... |

#### `/account`
| Route Path | Purpose |
|------------|---------|
| `/` |  |
| `/order-history` |  |
| `/addresses` |  |
| `/payment-forms` |  |

#### `/shop`
| Route Path | Purpose |
|------------|---------|
| `/` |  |
| `/categories/:category` |  |
| `/categories/:category/products/:product` |  |

#### `/order`
| Route Path | Purpose |
|------------|---------|
| `/cart` |  |
| `/checkout` |  |
| `/checkout/complete` |  |



### Backend

**ROOT** `/users`
| METHOD | Route Path | Purpose |
|--------|------------|---------|
| POST   | `/login`   | Log in a user |
| POST   | `/signup` | Sign up a user |
| GET    | `/:id` | Get a user's profile. show info ex. current order, order history |
| GET    | `/:id/orders` | Get all the orders belong to the user |

**ROOT** `/plants`
| METHOD | Route Path | Purpose |
|--------|------------|---------|
| POST   | `/`        | Add plant for admin |
| POST   | `/types`   | Create a type for plants |
| POST   | `/tags`    | Create a type for plants |
| GET    | `/`        | Get all the plants |
| GET    | `/:id`     | Get the plant by id |
| GET    | `/tags/:id/plants` | Get all plants by tag id |
| GET    | `/types/:id/plants` | Get all plants by type |
| PUT    | `/`        | Edit plant for admin |
| DELETE | `/:id`     | Delete plant for admin |

**ROOT** `/images`
| METHOD | Route Path | Purpose |
|--------|------------|---------|
| POST   | `/`        | Add plant's image |
| DELETE | `/:id`     | Delete plant's image |

**ROOT** `/orders`
| METHOD | Route Path | Purpose |
|--------|------------|---------|
| POST   | `/`        | Create an order for the user - NOTE May need user id in body |
| GET    | `/`        | Get all the orders for admin |
| GET    | `/finished` | Get all completed orders for admin |
| GET    | `/open`    | Get all open orders for admin |

**ROOT** `/orderItems`
| METHOD | Route Path | Purpose |
|--------|------------|---------|
| POST   | `/`        | Create orderItem |
| GET    | `/:id`     | Get orderitem by id |
| PUT    | `/:id`     | Update order items |
| DELETE | `/:id`     | Delete order items |

**ROOT** `/promoCodes`
| METHOD | Route Path | Purpose |
|--------|------------|---------|
| GET    | `/`        | Get all promocode for admin |
| GET    | `/:id`     | Get certain Promocode |
| POST   | `/`        | Create a promocode for admin |
| PUT    | `/:id`     | Edit a promocode for admin |
| DELETE | `/:id`     | Delete a promocode for admin |


<div align="center">

## Wireframes

  <img 
    src="images/pot-2.png" 
    alt="Sketches, diagrams, screengrabs from similar sites for inspiration, mockups in devices like phone frames etc." 
    title="Wireframes">
  <img 
    src="images/pot-1.png" 
    alt="Sketches, diagrams, screengrabs from similar sites for inspiration, mockups in devices like phone frames etc." 
    title="Wireframes">
</div>


<div align="center">

## Development Snapshots

Link to blog post(s) (dev blog, postmortems, etc), gallery of screenshots, code snippets, thoughts and writing from during dev process.

</div>

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
    height="250px">
  <img 
    src="" 
    alt="Image 2" 
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
    src="images/alejandro-portrait.png" 
    alt="Alejandro Larumbe" 
    height="100px"
    style="border-radius: 50%; margin: 1rem;"
    align="left">

### Alejandro Larumbe
*(Full-stack software developer, open to work)*  

[![Portfolio](https://img.shields.io/badge/-❤_Portfolio-f58?style=flat-square&logo=a&logoColor=white&link=https://alejandro-larumbe.github.io/)](https://alejandro-larumbe.github.io/) 
<a href="Larumbe-Alejandro_Resume.pdf" download>![Resume PDF](https://img.shields.io/badge/-Resume-f00?style=flat-square&logo=adobe-acrobat-reader&logoColor=white)</a> 
[![Alejandro's email](https://img.shields.io/badge/tba-f4b400?style=flat-square&logo=gmail&logoColor=black&link=mailto:)]() 
[![Linkedin](https://img.shields.io/badge/-LinkedIn-0077b5?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/alejandro-larumbe-54b265a6/)](https://www.linkedin.com/in/alejandro-larumbe-54b265a6/) 
[![GitHub Alejandro-Larumbe](https://img.shields.io/github/followers/Alejandro-Larumbe?label=follow&style=social)](https://github.com/Alejandro-Larumbe) 

  <img 
    src="images/yuka-portrait.png" 
    alt="Yuka Moribe" 
    height="100px"
    style="border-radius: 50%; margin: 1rem;"
    align="left">

### Yuka Moribe
*(Full-stack software developer, open to work)*  

[![Portfolio](https://img.shields.io/badge/-❤_Portfolio-f58?style=flat-square&logo=a&logoColor=white&link=https://yukamoribe.com/)](https://yukamoribe.com/) 
<a href="Moribe-Yuka_Resume.pdf" download>![Resume PDF](https://img.shields.io/badge/-Resume-f00?style=flat-square&logo=adobe-acrobat-reader&logoColor=white)</a> 
[![Yuka's email](https://img.shields.io/badge/yukamoribe@gmail.com-f4b400?style=flat-square&logo=gmail&logoColor=black&link=mailto:yukamoribe@gmail.com)](mailto:yukamoribe@gmail.com) 
[![Linkedin](https://img.shields.io/badge/-LinkedIn-0077b5?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/yuka-moribe-485962157/)](https://www.linkedin.com/in/yuka-moribe-485962157/) 
[![GitHub smilelk4](https://img.shields.io/github/followers/smilelk4?label=follow&style=social)](https://github.com/smilelk4) 

  <img 
    src="images/peter-portrait.png" 
    alt="Peter Kang" 
    height="100px"
    style="border-radius: 50%; margin: 1rem;"
    align="left">
    
### Peter Kang
*(Full-stack software developer, open to work)*  

[![Portfolio](https://img.shields.io/badge/-❤_Portfolio-f58?style=flat-square&logo=a&logoColor=white&link=https://kangpeter.com/)](https://kangpeter.com/) 
<a href="Kang-Peter_Resume.pdf" download>![Resume PDF](https://img.shields.io/badge/-Resume-f00?style=flat-square&logo=adobe-acrobat-reader&logoColor=white)</a> 
[![Peter's email](https://img.shields.io/badge/southpeter77@gmail.com-f4b400?style=flat-square&logo=gmail&logoColor=black&link=mailto:southpeter77@gmail.com)](mailto:southpeter77@gmail.com) 
[![Linkedin](https://img.shields.io/badge/-LinkedIn-0077b5?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/peter-kang-129184166/)](https://www.linkedin.com/in/peter-kang-129184166/) 
[![AngelList](https://img.shields.io/badge/-AngelList-black?style=flat-square&logo=AngelList&logoColor=white&link=https://angel.co/u/peter-kang-2)](https://angel.co/u/peter-kang-2) 
[![GitHub southpeter77](https://img.shields.io/github/followers/southpeter77?label=follow&style=social)](https://github.com/southpeter77) 

  <img 
    src="images/alicia-portrait.jpg" 
    alt="Alicia Mira Kim" 
    height="100px"
    style="border-radius: 50%; margin: 1rem;"
    align="left">
    
### Alicia Mira Kim
*(Full-stack software developer, open to work)*  

[![Portfolio](https://img.shields.io/badge/-❤_Portfolio-f58?style=flat-square&logo=a&logoColor=white&link=https://alimirakim.github.io/)](https://alimirakim.github.io) 
<a href="Kim-Mira-Alicia_Resume.pdf" download>![Resume PDF](https://img.shields.io/badge/-Resume-f00?style=flat-square&logo=adobe-acrobat-reader&logoColor=white)</a> 
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