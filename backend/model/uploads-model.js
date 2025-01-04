const mongoose = require("mongoose");

const TestimonialsSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    path: {
        type: String,
        require: true,
    },
    designation: {
        type: String,
        require: true,
    },
    filename: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    }

});

const FeaturedWorksSchema = new mongoose.Schema({
    heading: {
        type: String,
        require: true,
    },
    path: {
        type: String,
        require: true,
    },
    filename: {
        type: String,
        require: true,
    },
});

const collaborationsSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    path: {
        type: String,
        require: true,
    },
    filename: {
        type: String,
        require: true,
    },
});


const teamMembersSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    designation: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    Linkedin: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    path: {
        type: String,
        require: true,
    },
    filename: {
        type: String,
        require: true,
    },
    vertical: {
        type: String,
        require: true,
    },

});


const patroncardsSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    designation: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    path: {
        type: String,
        require: true,
    },
    filename: {
        type: String,
        require: true,
    },

});

const BlogSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    path: {
        type: String,
        require: true,
    },
    filename: {
        type: String,
        require: true,
    },

});

const EventSchema = new mongoose.Schema({
    date: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    path: {
        type: String,
        require: true,
    },
    filename: {
        type: String,
        require: true,
    },

});

const patroncardsModel = mongoose.model("patroncards", patroncardsSchema)
const teamMembersModel = mongoose.model("teamMembers", teamMembersSchema)
const collaborationsModel = mongoose.model("collaborations", collaborationsSchema)
const teamMembersModelV = mongoose.model("team", teamMembersSchema)
const FeaturedWorksModel = mongoose.model("FeaturedWorks", FeaturedWorksSchema)
const BlogModel = mongoose.model("Blog", BlogSchema)
const EventModel = mongoose.model("Event", EventSchema)
const TestimonialsModel = mongoose.model("Testimonials",TestimonialsSchema);
module.exports = {EventModel,collaborationsModel, teamMembersModelV,TestimonialsModel, BlogModel, teamMembersModel, FeaturedWorksModel, patroncardsModel };