import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Srikar:FOlKGYH97w1XNB6l@cluster0.prvpyv8.mongodb.net/summer")

const RegistrationIdSchema = new mongoose.Schema({
    registrationid: String
})

const ContentSchema = new mongoose.Schema({
    registrationid: String,

    teamname: String,
    participantname: String,
    teamleadername: String,
    teamleaderemail: String,
    college: String,
    studyyear: { type: Number },
    trackpreference: String,
    teammembersname: String,
    submissionstatus: String,
    submittedat: { type: Date },


}, {
    collection: "test"
})


export const ContentModel = mongoose.model("content", ContentSchema);