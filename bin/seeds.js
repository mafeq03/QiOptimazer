const mongoose = require('mongoose');
const Herb = require('../models/herbs');

const dbtitle = 'QiLibrary';
mongoose.connect(`mongo://localhost/${dbtitle}`);
Herb.collection.drop();

// const herbs = [
//   {name:
//   description:
//   symptoms:
//   },
//   {name:
//     description:
//     symptoms:
//     },
//   {name:
//     description:
//     symptoms:
//   },
//   {name:
//       description:
//       symptoms:
//      },
//   {name:
//        description:
//         symptoms:
//       },
//   {name:
//         description:
//         symptoms:
//       },
// ]
