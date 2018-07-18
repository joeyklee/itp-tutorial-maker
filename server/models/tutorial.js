const mongoose = require('mongoose');
const sectionSchema = require("./section")

const tutorialSchema = new mongoose.Schema({
      name: {
        type: String, 
        required: true
      },
      repoName:{
        type: String, 
        required: true
      },
      createdBy:{
        type: String, 
        required: true
      },
      description:{
        type: String, 
        required: false,
        default:"tutorial generated by magic tutorial tracks"
      },
      collaborators:{
        type: Array, 
        required: false
      },
      imageUrls:{
        type: Array, 
        required: false,
        default:["https://user-images.githubusercontent.com/3622055/42908563-4778bd04-8aaf-11e8-95c1-47e18c0643a4.png"]
      },
      tutorial:{
        type:[sectionSchema.Section],
        ref: 'sectionSchema'
      },
      dateSubmitted:{
        type: Date, 
        required: true, 
        default: Date.now
      }
    });

const Tutorial = mongoose.model("Tutorial", tutorialSchema);

module.exports = Tutorial;