# macroMe

## Contributors

* Chris Heckendorn -- https://github.com/wreckendorn
* Meg Stephens - https://www.linkedin.com/in/meg-stephens-ma-lpc-3a2bb37

## Presentation: https://prezi.com/view/FkbyF6yWBdAcmVnFvaQF/

## Overview
The macroMe app provides you with an easy way to find raw ingredients quickly that follow your diet restrictions while keeping a quick visual on the macronutrients. macroMe starts with me, not the ingredient. I set my diet guidelines and immediately begin choosing from a curated list of foods that fall within my preferences. That’s it. I choose a raw ingredient and see what the macronutrients are immediately. I can quickly figure out which foods I may want to add to my meal so it ends with a balanced meal. Or keto. Or vegetarian.


## Requirements and rough outline

* Full stack app using MVC architecture and the MERN stack. 

* Uses the USDA Food Composition Database to provide government-approved and vetted values for each macronutrient.

* Allows individual users to create accounts with practically zero personal information stored. Users are stored in a mongoDB database using Mongoose.

* Stores a curated list of ingredients handpicked by Meg Stephens MA, LPC in a mongoDB database using Mongoose

* Each ingredient chosen by the user requests the most up-to-date macronutrient information using the USDA Food Comp API

* Passwords are encrypted using bcrypt and sent to the client with a secret token using JWT.

* Paleo, dairy-free, gluten-free, and vegan can be chosen as a preference to filter ingredients available so the user only sees the ingredients they can eat.

* Keto, balanced, and plant-based macro ratios can be chosen to visually reference how much more/less of a macro needs to be added to their meal. These ratios can be seen in the outer donut pie chart using Rechart.js

* A user can view their total protein, carbs, and fats for their meal and watch it dynamically increase/decrease as ingredients are added or removed.

* A user can view their protein/carb/fat total ratio for their meal and watch it dynamically increase/decrease as ingredients are added or removed numberically in text. They can can also view their current ratios in the inner pie chart which uses Rechart.js

* The UI has purposefully been left minimal to allow the user to quickly construct their meal in less than a minute. It has also been optimized for mobile devices so the user can have quick access to the app when at the grocery store, in the salad bar line, or while looking over a menu at a restaurant.


# Additional Features planned for future development:

* save a meal so you can quickly recall it later

* send a meal to myFitnessPal using their API for easy tracking

* dividers in the pulldown menus that break up the ingredients into categories such as nuts, seeds, oils, and cheeses for fats

* add more diet restriction options and macro ratio options

* add the abiity to create your macro ratio combinations

* option to submit suggested ingredients to add to the database

* clone the USDA database for our chosen ingredients into our own database to avoid API call limitations and network speed issues.
