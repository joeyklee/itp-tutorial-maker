const mongoose = require('mongoose');
const resourceSchema = require('./resource');


const sectionSchema = new mongoose.Schema({
      section:{
        type: Number,
        required: true
      },
      name: {
        type: String, 
        required: true
      },
      createdBy:{
        type: String, 
        required: false
      },
      description:{
        type: String, 
        required: false,
        default:"tutorial generated by magic tutorial tracks"
      },
      imageUrls:{
        type: Array, 
        required: false,
        default:["https://user-images.githubusercontent.com/3622055/42908563-4778bd04-8aaf-11e8-95c1-47e18c0643a4.png"]
      },
      resources:{
        type:[resourceSchema.Resource],
        ref: 'resourceSchema'
      },
      dateSubmitted:{
        type: Date, 
        required: true, 
        default: Date.now
      }
    });

const Section = mongoose.model("Section", sectionSchema);

module.exports = Section;

// {
//   section: 0,
//   name: "Section 0: Concepts",
//   description: "Concepts about x, y, z",
//   resources: [
//     {
//       name:"Arduino and Physical Computing Terms",
//       description: "terms for getting started with physical computing with arduino",
//       url: "https://github.com"
//     },
//     {
//       name:"Shop Safety",
//       description: "Shop safety course from ITP",
//       url: "https://github.com"
//     },
//     {
//       name:"How to use a volt meter",
//       description: "How to use a volt meter",
//       url: "https://github.com"
//     },
//   ]
// },