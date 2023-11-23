"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const questionSchema = new mongoose_1.Schema({
    heading: { type: String, required: true },
    questions: {
        type: [{
                text: String,
                isMandatory: Boolean,
                answer: String,
                options: [{
                        text: String
                    }]
            }]
    },
});
const Question = (0, mongoose_1.model)("Question", questionSchema);
exports.default = Question;
