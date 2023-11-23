import { Router } from "express";
import bodyParser from "body-parser";
import Question, { IQuestion } from "../../models/Question";
const router = Router();
// create application/json parser
const jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/", async (req, res, next) => {
  const records = await Question.find({}).exec()


  res.status(200).send({
    message: "success",
    data: records
  });
});

router.post("/create", jsonParser, async (req, res, next) => {

  console.log(req.body, '<><><');
  let body: IQuestion = req.body;

  const question = new Question({
    heading: body.heading,
    questions: body.questions,
  });

  await question.save();

  res.status(201).send({
    message: "success",
    question: question,
  });

});

export default router;
