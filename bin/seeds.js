const mongoose    = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);


const Herb = require('../models/herbs');

// const dbName = 'qioptimizer';
// mongoose.connect(`mongodb://localhost/${dbName}`, {useMongoClient: true});

// Herb.collection.drop();

const herbs = [
  {name: 'Ginseng',
  description: 'The most famous of all the herbs, it has been used for thousands of years in TCM, nd has great health benefits and healing properties.', 
  image: 'https://www.medplants.net/wp-content/uploads/ginseng.jpg',
  symptoms:["Erectile Dysfunction", "Hepatitis", "Menopausal Problems", "High Blood Pressure",]
  },
  {name:'Angelica Sinesis or Dang Gui',
    description: 'It has amazing property to relax muscles, which helps in treatment of various diseases. ',
    image: 'https://www.medplants.net/wp-content/uploads/dang-gui.jpg',
    symptoms:["Infertility", "Heart Problems", "Irregular Heartbeat", "High Blood Pressure"]
    },
  {name: 'Mushroom',
    description:"Mushrooms are generally considered healthy as they are low on calories, yet high on nutritional values. The Chinese had discovered their medicinal properties, which they used to maintain good health of the people",
    image: 'https://www.medplants.net/wp-content/uploads/mushroom.jpg',
    symptoms:["Tumors","Insomnia","Female Sexual Dysfunction"]
  },
  {name: 'Goji or Wolfberry',
   description: "The herb has been used in preparation of food, in addition to its use as a medicinal herb in Chinese medicine for more than 2000 years.",
   image: 'https://www.medplants.net/wp-content/uploads/wolfberry.jpg',
   symptoms:["Cold","Flu","Low Energy","Diabetes","Obesity","Stroke","Anti-Cancer"]
     },
  {name:'Coptis Chinensis',
   description: "Coptis chinensis, also known as Chinese goldthread, is one of the bitterest herbs. It is acknowledged for effectiveness in healing diseases of digestive tract.",
   image: 'https://www.medplants.net/wp-content/uploads/coptis-chinensis-goldthread.jpg',
   symptoms: ["Stomachache", "Psoriasis", "Diarrhea", "High Blood Pressure","High Cholesterol", ]
      },
  {name:'Licorice Root',
        description: "Licorice root has been an essential ingredient in Chinese medicines, since it has great healing property and detoxification power. It is used in Chinese medicine to harmonize all the other medicinal herbs that goes into a formula.",
        image: 'https://www.medplants.net/wp-content/uploads/licorice-root.jpg',
        symptoms:["Hepatitis","Asthma","Depression","Flu", "Cold", "Cough", "Heartburn"]
      },
  {name:'Astragalus',
        description:"The herb has been used in Chinese medicine for 4000 years as a tonic for enhancing immunity of human body, metabolism rate and digestion. It also heals wounds and injuries quickly and prevent infections.",
        image: 'https://www.medplants.net/wp-content/uploads/astragalus-herb.jpg', 
        symptoms:["Anemia", "HIV/AIDS","Fatigue","Kidney Disease", "Diabetes", "High Blood Pressure"]
       },
   {name:'Ginger',
         description: "Ginger is an aromatic herb which is used as spice for its flavor and taste, as well as for its medicinal property for curing indigestion.",
         image:'https://www.medplants.net/wp-content/uploads/ginger2.jpg',
         symptoms: ["diarrhea", "cardiac problems","cough", "sore throat", "cold", "common cold"]
       },
  {name: 'Ephedra Sinica',
        description: "Ephera Sinica also known as Ma Huang is one of the oldest known herb of Chinese medicines, which has been used effectively to treat asthma, cold and hay fever.",
        image: 'https://www.medplants.net/wp-content/uploads/ephera-sinica-ma-huang.jpg',
        symptoms: ["Fever", "Cold", "Asthma"]
      },
  {name: 'Bupleurum',
      description:"The herb Bupleurum, one of the important herbs of Chinese medicine, is known to aid in treatment of liver diseases, arthritis, ulcers, mental disorders and many more.",
      image: 'https://www.medplants.net/wp-content/uploads/bupleurum-flowers.jpg',
      symptoms:["Cirrhosis", "Hepatitis C", "Liver Cancer", "PMS"]
    },
  {name: 'Ciwujia',
    description:'Research confirms that this herb is effective against aging, fights fatigue, and can invigorate the body. This herb can also help to regulate the endocrine system, the central nervous system, as well as the cardiovascular system. Ciwujia has strong anti-inflammatory compounds, which might be the active ingredient against aging.',
    image:'http://traditionalherb.org/wp-content/uploads/2015/05/download_opt-300x250.jpg',
    symptoms: ["Weight Loss", "Aging", "Fatigue", "Lack of Energy"]
  },
  {
    name:'Lotus Seed',
    description:'This is an invaluable Chinese herb that improves the function of the spleen and kidneys. It can also help to stop diarrhea. Lotus seeds stimulate the appetite and have a sweet taste that makes them easy to consume.',
    image:'http://www.onlyfoods.net/wp-content/uploads/2011/11/Lotus-Seeds-Pictures.jpg',
    symptoms:["Diarrhea", "Lack of Apetite", "High Blood Pressure", "Obesity","Anti-Ageing", "Insomnia", "Restlessness" ]
  },
  {
    name:'Lingzhi Mushroom',
    description:'Lingzhi (ganoderma) is known to nourish the liver and calm the nerves. This ancient book states that regular use of his herb can naturally reduce body weight and prolong the life. Research does show that this herb can help to regulate the central nervous system, the cardiovascular system, and the respiratory system. Lingzhi can also improve the immune system and helps to fight free radicals, which cause premature aging, and it also balances the metabolism.',
    image:'http://www.getalphay.com/wp-content/uploads/2016/05/lingzhi.jpg',
    symptoms:["High Blood Pressure", "Cough", "Asthma", "Allergies"]
  },
  {
    name:'Da Huang',
    description:'Da Huang (rhubarb root) is commonly used as a purgative for things the Chinese call “blood stagnation or excess heat.” It’s an excellent laxative and while it is considered to be generally safe, it can cause cramps, abdominal pain, and diarrhea. Rhubarb root does have some toxicity to it and it must be boiled for a minimum of one hour before it can be used.',
    image:'http://peonia.gr/wp-content/uploads/2016/10/da-huang-zhi-.jpg',
    symptoms:["Constipation", "Burn", "Skin Ulcer", "Endometriosis", "Jaundice" ]
  },
  {
    name:'Alisma',
    description:'This Chinese herb strengthens the metabolism of water in the body. This herb is often used to fight obesity, especially for those who carry excess water weight in the body. This herb is a great diuretic which helps those who have difficulty urinating and for diabetics as well.',
    image:'http://www.delawarewildflowers.org/images/alisma_subcordatum_2.jpg',
    symptoms:["Obesity", "Urinary Infection", "Difficulty Urinating", "Heartburn", "Bloating", "Diarrhea"]
  },
  {
    name: 'Albizia Flower and Bark',
    description: 'The flowers and bark of this tree have long been used by Chinese herbalists for those who are feeling emotionally unbalanced or distraught. The flowers and/or tree bark are thought to be excellent Shen stabilizers and have very powerful calming compounds.',
    image:'https://viola.bz/wp-content/uploads/2014/07/beautiful-tree-Albizia-julibrissin.jpg',
    symptoms:[]
  },
  {
    name: 'Prepared Aconite',
    description: 'This is a potent yang tonic; however, when used excessively, it can be toxic. This is also toxic in its raw form, so this herb should only be taken under a doctor or herbalists supervision. Overuse of this herb can also result in overheating. It is never used alone, only in combination with other herbs, to treat infertility, arthritis, rheumatism, and excess urination.',
    image:'https://ae01.alicdn.com/kf/HTB14PYYHVXXXXajXVXXq6xXFXXX7/Hot-Sale-Chinese-Herb-Fuzi-Prepared-Aconite-Root-To-warm-strengthen-kidney-yang-expel-cold-and.jpg',
    symptoms:["Infertility", "Arthritis", "Rheumatism", "Excess Urination"]
  },
  {
    name: 'Gingko Biloba',
    description: 'The most ancient of all herbs in the Chinese medicine cabinet. This herb has withstood the test of time for helping those with lung or heart ailments. Gingko biloba helps to fight cough, asthma, and chronic inflammation. This is one of the most popular and best herbal supplements around.',
    image:'https://amazingwellnessmag.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTUyNDE2NDE4NzI0NDU2NDI2/ginkgo-biloba.webp',
    symptoms:["Alzheimer's", "Asthma", "Allergies", "Bronchitis", "Lack of Concentration", "Fatigue", "Bad Circulation", "Anxiety", "Depression"]
  }
]

Herb.create(herbs, (err) =>{
  if(err) {throw(err)}
  console.log(`Created ${herbs.length} herbs`);
  mongoose.connection.close();
});