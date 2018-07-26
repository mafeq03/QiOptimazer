const mongoose    = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGOLAB_GOLD_URI, {useMongoClient: true});

const Other = require('../models/other');

const others = [
 { name: 'Acupuncture',
   description:'The practice of inserting needles into the superficial skin, subcutaneous tissue, and muscles at particular acupuncture points and manipulating them. Acupuncture is believed to keep the balance between Yin and Yang, thus allowing for the normal flow of “Qi” throughout the body and restoring health to the mind and body.' ,
   image: 'https://www.practicalpainmanagement.com/sites/default/files/imagecache/lightbox-large/images/2015/09/14/16548137_XL.jpg', 
   symptoms: ["pms", "nerve pain", "headache", "anxiety", "infertility", "insomnia", "depression", "nausea", "knee pain"] 
 },
 { name: 'Moxibustion',
 description:'Therapy that involves burning moxa (mugwort root) made from dried Artimesia vulgaris (spongy herb) to facilitate healing. The purpose of moxibustion is to warm and invigorate the blood, stimulate the flow of Qi' ,
 image: 'https://www.practicalpainmanagement.com/sites/default/files/imagecache/lightbox-large/images/2015/09/14/18593722_XL.jpg', 
 symptoms: ["menstrual pain", "cold", "common cold", "cough", "constipation", ""], 
},
{ name: 'Tui Na Massage',
description:'A combination of massage, acupressure, and other forms of body manipulation. The type of massage delivered by a tui na practitioner can be quite vigorous at times. Practitioners may use herbal compresses, ointments, and heat to enhance these techniques.' ,
image: 'https://www.practicalpainmanagement.com/sites/default/files/imagecache/lightbox-large/images/2015/09/10/Screen%20Shot%202015-09-08%20at%203.24.30%20PM.png', 
symptoms: ["trauma", "muscular pain", "back pain", "lower back pain"], 
},
{ name: 'Cupping',
description:'Cupping is a type of Chinese massage, consisting of placing several glass or plastic “cups” (open spheres) on the body.TCM practitioners warm the cups using a cotton ball or other flammable substance, which is then placed inside the cup to remove all the oxygen. The practitioner then removes the substance and places the cup against the skin. The air in the cup then cools, creating lower pressure inside the cup, creating a vacuum and allowing the cup to stick to the skin. Fleshy sites on the body, such as the back and stomach, are the preferred sites for treatment. Scraping, or “Gua Sha,” is a folk medicine technique that uses pieces of smooth jade, bone, animal tusks, horns, or smooth stones to scrape along the skin to release obstruction and toxins that are trapped at the surface of the skin. The scraping is done until red spots then bruising cover the treatment area.',
image: 'http://3jgjuaf2v6w27m6we2v44l91.wpengine.netdna-cdn.com/wp-content/uploads/2017/11/cupping-technique.jpg', 
symptoms: ["high blood pressure", "back pain", "neck pain", "shoulder pain", "stiff muscles", "anxiety", "fatigue", "migraines", "cellulite", "rheumatism"], 
},
{ name: 'Chinese Herbs',
description:'The substances TCM practitioners most commonly use can come from different leaves, roots, stems, flowers, and seeds of plants such as cinnamon bark, ginger, ginseng, licorice, and rhubarb. Ginseng is the most broadly used substance for the broadest set of treatments. If a practitioner recommends Chinese herbology as a treatment, the herbs are combined into a formula that is dispensed in the form of a traditional tea, capsule, liquid extract, granule, or powder. ' ,
image: 'http://chineseherbscom.ipower.com/wp-content/uploads/2016/03/chinese-herbal-medicine-chm-new-york-city-chinatown.jpg', 
symptoms: ["multiple"] 
},
{ name: 'Chinese Nutrition',
description:'A mode of dieting rooted in Chinese understandings of the effects of food on the human organism. In Chinese nutrition, a balanced diet is one that includes all 5 tastes—spicy (warming), sour (cooling), bitter (cooling), sweet (strengthening), and salty (cooling). Foods that have a particular taste tend to have particular properties. There are no forbidden foods or “one size fits all” diets in Chinese nutrition' ,
image: 'https://i0.wp.com/yourchiro.ca/wp-content/uploads/2018/02/Blog-4.jpg', 
symptoms: ["preventive", "anxiety", "depression", "bipolarity","cold", "asthma","allergies","indigestion" ], 
}
]

Other.create(others, (err) =>{
  if(err) {throw(err)}
  console.log(`Created ${others.length} others`);
  mongoose.connection.close();
});
