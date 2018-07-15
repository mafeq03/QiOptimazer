const mongoose = require('mongoose');
const Herb = require('../models/herbs');

const dbtitle = 'QiLibrary';
mongoose.connect(`mongo://localhost/${dbtitle}`);
Herb.collection.drop();

const herbs = [
  {name: 'Ginseng',
  description: 'The most famous of all the herbs, it has been used for thousands of years in TCM, nd has great health benefits and healing properties.', 
  image: 'https://www.medplants.net/wp-content/uploads/ginseng.jpg',
  symptoms:["erectile dysfunction", "hepatitis", "menopausal problems", "high blood pressure",]
  },
  {name:'Angelica Sinesis or Dang Gui',
    description: 'It has amazing property to relax muscles, which helps in treatment of various diseases. ',
    image: 'https://www.medplants.net/wp-content/uploads/dang-gui.jpg',
    symptoms:["infertility", "heart problems", "irregular heartbeat", "high blood pressure"]
    },
  {name: 'Mushroom',
    description:"Mushrooms are generally considered healthy as they are low on calories, yet high on nutritional values. The Chinese had discovered their medicinal properties, which they used to maintain good health of the people",
    image: 'https://www.medplants.net/wp-content/uploads/mushroom.jpg',
    symptoms:["tumors","insomnia","female sexual dysfunction"]
  },
  {name: 'Goji or Wolfberry',
   description: "The herb has been used in preparation of food, in addition to its use as a medicinal herb in Chinese medicine for more than 2000 years.",
   image: 'https://www.medplants.net/wp-content/uploads/wolfberry.jpg',
   symptoms:["cold","flu","low energy","diabetes","obesity","stroke","anti-cancer"]
     },
  {name:'Coptis Chinensis',
   description: "Coptis chinensis, also known as Chinese goldthread, is one of the bitterest herbs. It is acknowledged for effectiveness in healing diseases of digestive tract.",
   image: 'https://www.medplants.net/wp-content/uploads/coptis-chinensis-goldthread.jpg',
   symptoms: ["stomachache", "Psoriasis", "diarrhea", "high blood pressure","high cholesterol", ]
      },
  {name:'Licorice Root',
        description: "Licorice root has been an essential ingredient in Chinese medicines, since it has great healing property and detoxification power. It is used in Chinese medicine to harmonize all the other medicinal herbs that goes into a formula.",
        image: 'https://www.medplants.net/wp-content/uploads/licorice-root.jpg',
        symptoms:["hepatitis","asthma","depression","flu", "cold", "cough", "heartburn"]
      },
  {name:'Astragalus',
        description:"The herb has been used in Chinese medicine for 4000 years as a tonic for enhancing immunity of human body, metabolism rate and digestion. It also heals wounds and injuries quickly and prevent infections.",
        image: 'https://www.medplants.net/wp-content/uploads/astragalus-herb.jpg', 
        symptoms:["anemia", "HIV/AIDS","fatigue","kidney disease", "diabetes", "high blood pressure"]
       },
   {name:'Ginger',
         description: "Ginger is an aromatic herb which is used as spice for its flavor and taste, as well as for its medicinal property for curing indigestion.",
         image:'https://www.medplants.net/wp-content/uploads/ginger2.jpg',
         symptoms: ["diarrhea", "cardiac problems","cough", "sore throat", "cold", "common cold"]
       },
  {name: 'Ephedra Sinica',
        description: "Ephera Sinica also known as Ma Huang is one of the oldest known herb of Chinese medicines, which has been used effectively to treat asthma, cold and hay fever.",
        image: 'https://www.medplants.net/wp-content/uploads/ephera-sinica-ma-huang.jpg',
        symptoms: ["fever", "cold", "asthma"]
      },
  {name: 'Bupleurum',
      description:"The herb Bupleurum, one of the important herbs of Chinese medicine, is known to aid in treatment of liver diseases, arthritis, ulcers, mental disorders and many more.",
      image: 'https://www.medplants.net/wp-content/uploads/bupleurum-flowers.jpg',
      symptoms:["cirrhosis", "hepatitis C", "liver cancer", "pms"]
    }
]

Herb.create(herbs, (err) =>{
  if(err) {throw(err)}
  console.log(`Created ${herbs.length} herbs`)
  mongoose.connection.close();
});