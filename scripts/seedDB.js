const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Macros collection and inserts the macros below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/macandme"
);

const macroSeed = [
    {
        food: "Avocado",
        macro: "fat",
        foodGroup: "",
        ndbid: "090937",
        date: new Date(Date.now())
    },
    {
        food: "Avocado Oil",
        macro: "fat",
        foodGroup: "",
        ndbid: "04581",
        date: new Date(Date.now())
    },
    {
        food: "Olive Oil",
        macro: "fat",
        foodGroup: "",
        ndbid: "04053",
        date: new Date(Date.now())
    },
    {
        food: "Olives",
        macro: "fat",
        foodGroup: "",
        ndbid: "09193",
        date: new Date(Date.now())
    },
    {
        food: "Coconut Oil",
        macro: "fat",
        foodGroup: "",
        ndbid: "04047",
        date: new Date(Date.now())
    },
    {
        food: "Flaxseed Oil",
        macro: "fat",
        foodGroup: "",
        ndbid: "42231",
        date: new Date(Date.now())
    },
    {
        food: "Grapeseed Oil",
        macro: "fat",
        foodGroup: "",
        ndbid: "04517",
        date: new Date(Date.now())
    },
    {
        food: "Sesame Oil",
        macro: "fat",
        foodGroup: "",
        ndbid: "04058",
        date: new Date(Date.now())
    },
    {
        food: "Tahini",
        macro: "fat",
        foodGroup: "",
        ndbid: "12166",
        date: new Date(Date.now())
    },
    {
        food: "Sunflower seed butter",
        macro: "fat",
        foodGroup: "",
        ndbid: "12540",
        date: new Date(Date.now())
    },
    {
        food: "Flax seeds",
        macro: "fat",
        foodGroup: "",
        ndbid: "12220",
        date: new Date(Date.now())
    },
    {
        food: "Sunflower seeds",
        macro: "fat",
        foodGroup: "",
        ndbid: "12537",
        date: new Date(Date.now())
    },
    {
        food: "Pumpkin seeds",
        macro: "fat",
        foodGroup: "",
        ndbid: "12516",
        date: new Date(Date.now())
    },
    {
        food: "Sesame seeds",
        macro: "fat",
        foodGroup: "",
        ndbid: "12023",
        date: new Date(Date.now())
    },
    {
        food: "Butter, unsalted",
        macro: "fat",
        foodGroup: "",
        ndbid: "01145",
        date: new Date(Date.now())
    },
    {
        food: "Ghee",
        macro: "fat",
        foodGroup: "",
        ndbid: "01323",
        date: new Date(Date.now())
    },
    {
        food: "Mayonaise",
        macro: "fat",
        foodGroup: "",
        ndbid: "04025",
        date: new Date(Date.now())
    },
    {
        food: "Cream cheese",
        macro: "fat",
        foodGroup: "",
        ndbid: "01017",
        date: new Date(Date.now())
    },

    {
        food: "Cheddar cheese",
        macro: "protein",
        foodGroup: "",
        ndbid: "01270",
        date: new Date(Date.now())
    },
    {
        food: "Colby cheese",
        macro: "fat",
        foodGroup: "",
        ndbid: "01270",
        date: new Date(Date.now())
    },
    {
        food: "Blue cheese",
        macro: "fat",
        foodGroup: "",
        ndbid: "01004",
        date: new Date(Date.now())
    },
    {
        food: "Brie cheese",
        macro: "fat",
        foodGroup: "",
        ndbid: "01006",
        date: new Date(Date.now())
    },
    {
        food: "Feta cheese",
        macro: "fat",
        foodGroup: "",
        ndbid: "01019",
        date: new Date(Date.now())
    },
    {
        food: "Goat cheese",
        macro: "fat",
        foodGroup: "",
        ndbid: "01057",
        date: new Date(Date.now())
    },
    {
        food: "Gouda cheese",
        macro: "fat",
        foodGroup: "",
        ndbid: "01022",
        date: new Date(Date.now())
    },
    {
        food: "Gruyere cheese",
        macro: "fat",
        foodGroup: "",
        ndbid: "01023",
        date: new Date(Date.now())
    },
    {
        food: "Muenster",
        macro: "fat",
        foodGroup: "",
        ndbid: "01030",
        date: new Date(Date.now())
    },
    {
        food: "Provolone",
        macro: "fat",
        foodGroup: "",
        ndbid: "01035",
        date: new Date(Date.now())
    },
    {
        food: "Swiss cheese",
        macro: "fat",
        foodGroup: "",
        ndbid: "01040",
        date: new Date(Date.now())
    },
    {
        food: "Ricotta",
        macro: "fat",
        foodGroup: "",
        ndbid: "01019",
        date: new Date(Date.now())
    },
    {
        food: "Sour cream",
        macro: "fat",
        foodGroup: "",
        ndbid: "01056",
        date: new Date(Date.now())
    },
    {
        food: "Heavy cream",
        macro: "fat",
        foodGroup: "",
        ndbid: "01053",
        date: new Date(Date.now())
    },
    {
        food: "Half & Half",
        macro: "fat",
        foodGroup: "",
        ndbid: "01049",
        date: new Date(Date.now())
    },
    {
        food: "Almonds",
        macro: "fat",
        foodGroup: "",
        ndbid: "12061",
        date: new Date(Date.now())
    },
    {
        food: "Cashews",
        macro: "fat",
        foodGroup: "",
        ndbid: "12087",
        date: new Date(Date.now())
    },
    {
        food: "Pistachios",
        macro: "fat",
        foodGroup: "",
        ndbid: "12161",
        date: new Date(Date.now())
    },
    {
        food: "Peanuts",
        macro: "fat",
        foodGroup: "",
        ndbid: "16090",
        date: new Date(Date.now())
    },
    {
        food: "Walnuts",
        macro: "fat",
        foodGroup: "",
        ndbid: "12154",
        date: new Date(Date.now())
    },
    {
        food: "Pecans",
        macro: "fat",
        foodGroup: "",
        ndbid: "12142",
        date: new Date(Date.now())
    },
    {
        food: "Pine nuts",
        macro: "fat",
        foodGroup: "",
        ndbid: "12147",
        date: new Date(Date.now())
    },
    {
        food: "Macadamia nuts",
        macro: "fat",
        foodGroup: "",
        ndbid: "12131",
        date: new Date(Date.now())
    },
    {
        food: "Peanut butter",
        macro: "fat",
        foodGroup: "",
        ndbid: "16097",
        date: new Date(Date.now())
    },
    {
        food: "Almond butter",
        macro: "fat",
        foodGroup: "",
        ndbid: "12695",
        date: new Date(Date.now())
    },
    {
        food: "Cashew butter",
        macro: "fat",
        foodGroup: "",
        ndbid: "12588",
        date: new Date(Date.now())
    },
    {
        food: "Eggs",
        macro: "protein",
        foodGroup: "",
        ndbid: "01123",
        date: new Date(Date.now())
    },
    {
        food: "Egg Whites",
        macro: "protein",
        foodGroup: "",
        ndbid: "01124",
        date: new Date(Date.now())
    },
    {
        food: "Tofu firm",
        macro: "protein",
        foodGroup: "",
        ndbid: "16426",
        date: new Date(Date.now())
    },
    {
        food: "Tempeh",
        macro: "protein",
        foodGroup: "",
        ndbid: "16174",
        date: new Date(Date.now())
    },
    {
        food: "Edamame",
        macro: "protein",
        foodGroup: "",
        ndbid: "11211",
        date: new Date(Date.now())
    },
    {
        food: "Tuna canned",
        macro: "protein",
        foodGroup: "",
        ndbid: "15126",
        date: new Date(Date.now())
    },
    {
        food: "Tuna Steak (3oz)",
        macro: "protein",
        foodGroup: "",
        ndbid: "15221",
        date: new Date(Date.now())
    },
    {
        food: "Mahi Mahi",
        macro: "protein",
        foodGroup: "",
        ndbid: "15194",
        date: new Date(Date.now())
    },
    {
        food: "Tilapia",
        macro: "protein",
        foodGroup: "",
        ndbid: "15262",
        date: new Date(Date.now())
    },
    {
        food: "Flounder/Sole",
        macro: "protein",
        foodGroup: "",
        ndbid: "15029",
        date: new Date(Date.now())
    },
    {
        food: "Cod",
        macro: "protein",
        foodGroup: "",
        ndbid: "15016",
        date: new Date(Date.now())
    },
    {
        food: "Salmon (3oz)",
        macro: "protein",
        foodGroup: "",
        ndbid: "15209",
        date: new Date(Date.now())
    },
    {
        food: "Sea Bass/Barramundi",
        macro: "protein",
        foodGroup: "",
        ndbid: "15092",
        date: new Date(Date.now())
    },
    {
        food: "Snapper",
        macro: "protein",
        foodGroup: "",
        ndbid: "15102",
        date: new Date(Date.now())
    },
    {
        food: "Trout",
        macro: "protein",
        foodGroup: "",
        ndbid: "15116",
        date: new Date(Date.now())
    },
    {
        food: "Halibut",
        macro: "protein",
        foodGroup: "",
        ndbid: "15037",
        date: new Date(Date.now())
    },
    {
        food: "Mackerel",
        macro: "protein",
        foodGroup: "",
        ndbid: "15047",
        date: new Date(Date.now())
    },
    {
        food: "Swordfish",
        macro: "protein",
        foodGroup: "",
        ndbid: "15111",
        date: new Date(Date.now())
    },
    {
        food: "Catfish",
        macro: "protein",
        foodGroup: "",
        ndbid: "15235",
        date: new Date(Date.now())
    },
    {
        food: "Chicken breast grilled",
        macro: "protein",
        foodGroup: "",
        ndbid: "05064",
        date: new Date(Date.now())
    },
    {
        food: "Shrimp",
        macro: "protein",
        foodGroup: "",
        ndbid: "15271",
        date: new Date(Date.now())
    },
    {
        food: "Blue Crab",
        macro: "protein",
        foodGroup: "",
        ndbid: "15140",
        date: new Date(Date.now())
    },
    {
        food: "Crawfish",
        macro: "protein",
        foodGroup: "",
        ndbid: "15243",
        date: new Date(Date.now())
    },
    {
        food: "Ground turkey",
        macro: "protein",
        foodGroup: "",
        ndbid: "05305",
        date: new Date(Date.now())
    },
    {
        food: "Ground Bison",
        macro: "protein",
        foodGroup: "",
        ndbid: "17148",
        date: new Date(Date.now())
    },
    {
        food: "Cottage Cheese",
        macro: "protein",
        foodGroup: "",
        ndbid: "01015",
        date: new Date(Date.now())
    },
    {
        food: "Asparagus",
        macro: "carbs",
        foodGroup: "",
        ndbid: "11012",
        date: new Date(Date.now())
    },
    {
        food: "Brussels sprouts",
        macro: "carbs",
        foodGroup: "",
        ndbid: "11099",
        date: new Date(Date.now())
    },
];

const userSeed = [
    {
        username: "Hecky",
        temporaryIngredientHold: [
            {
                food: "TestFood",
                protein: 0,
                carb: 0,
                fat: 0
            }
        ],
        date: new Date(Date.now())
    }
];


db.Macro
    .remove({}) 
    .then(() => db.Macro.collection.insertMany(macroSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + "users inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });