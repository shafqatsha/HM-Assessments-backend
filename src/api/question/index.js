"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const Question_1 = __importDefault(require("../../models/Question"));
const router = (0, express_1.Router)();
// create application/json parser
const jsonParser = body_parser_1.default.json();
// create application/x-www-form-urlencoded parser
const urlencodedParser = body_parser_1.default.urlencoded({ extended: false });
router.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const records = yield Question_1.default.find({}).exec();
    res.status(200).send({
        message: "success",
        data: records
    });
}));
router.post("/create", jsonParser, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body, '<><><');
    let body = req.body;
    const question = new Question_1.default({
        heading: body.heading,
        questions: body.questions,
    });
    yield question.save();
    res.status(201).send({
        message: "success",
        question: question,
    });
}));
exports.default = router;
