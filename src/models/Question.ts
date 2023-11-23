import { Schema, model } from "mongoose";

type question = {
  text: string,
  isMandatory: boolean,
  answer: string,
  options: Array<{
    text: string
  }>,
}

export interface IQuestion {
  heading: string,
  questions: Array<question>
}

const questionSchema = new Schema<IQuestion>({
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

const Question = model<IQuestion>("Question", questionSchema);

export default Question;
