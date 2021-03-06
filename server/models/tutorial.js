const mongoose = require('mongoose');
// const sectionSchema = require("./section")

const tutorialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  repoName: {
    type: String,
    required: true
  },
  createdBy: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false,
    default: "tutorial generated by magic tutorial tracks"
  },
  collaborators: {
    type: Array,
    required: false
  },
  imageUrls: {
    type: Array,
    required: false,
    default: ["https://user-images.githubusercontent.com/3622055/42908563-4778bd04-8aaf-11e8-95c1-47e18c0643a4.png"]
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  sections: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Section"
  }],
  resources: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Resource"
  }]
}, {
  timestamps: true
});


/**
@ If a tutorial is removed
+ remove any reference to:
- the user who created it
- any sections that were linked to it
- any resources that were referenced
@*/

tutorialSchema.pre("remove", async function(next) {
  try {
    let user = await User.findById(this.user)
    // let sections = await Section.findById(this.sections)
    // let resources = await Resource.findById(this.resources)

    user.tutorials.remove(this.id)

    await user.save();
    // await sections.save();
    // await resources.save();


  } catch (err) {
    return next(err);
  }
})

const Tutorial = mongoose.model("Tutorial", tutorialSchema);

module.exports = Tutorial;