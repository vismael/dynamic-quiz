import { QuizDeck } from "@interfaces/*";

export type QuizConfig = {
  quizDeck: QuizDeck[],
  name: string,
  originalName: string,
}

export type QuizType = {
  [key: string]: QuizConfig
}


export const hiragana: QuizDeck[] = [
  { type: "image", question: "あ", answer: { options: [], correct: "a" } },
  { type: "image", question: "い", answer: { options: [], correct: "i" } },
  { type: "image", question: "う", answer: { options: [], correct: "u" } },
  { type: "image", question: "え", answer: { options: [], correct: "e" } },
  { type: "image", question: "お", answer: { options: [], correct: "o" } },
  { type: "image", question: "か", answer: { options: [], correct: "ka" } },
  { type: "image", question: "き", answer: { options: [], correct: "ki" } },
  { type: "image", question: "く", answer: { options: [], correct: "ku" } },
  { type: "image", question: "け", answer: { options: [], correct: "ke" } },
  { type: "image", question: "こ", answer: { options: [], correct: "ko" } },
  { type: "image", question: "さ", answer: { options: [], correct: "sa" } },
  { type: "image", question: "し", answer: { options: [], correct: "shi" } },
  { type: "image", question: "す", answer: { options: [], correct: "su" } },
  { type: "image", question: "せ", answer: { options: [], correct: "se" } },
  { type: "image", question: "そ", answer: { options: [], correct: "so" } },
  { type: "image", question: "た", answer: { options: [], correct: "ta" } },
  { type: "image", question: "ち", answer: { options: [], correct: "chi" } },
  { type: "image", question: "つ", answer: { options: [], correct: "tsu" } },
  { type: "image", question: "て", answer: { options: [], correct: "te" } },
  { type: "image", question: "と", answer: { options: [], correct: "to" } },
  { type: "image", question: "な", answer: { options: [], correct: "na" } },
  { type: "image", question: "に", answer: { options: [], correct: "ni" } },
  { type: "image", question: "ぬ", answer: { options: [], correct: "nu" } },
  { type: "image", question: "ね", answer: { options: [], correct: "ne" } },
  { type: "image", question: "の", answer: { options: [], correct: "no" } },
  { type: "image", question: "は", answer: { options: [], correct: "ha" } },
  { type: "image", question: "ひ", answer: { options: [], correct: "hi" } },
  { type: "image", question: "へ", answer: { options: [], correct: "he" } },
  { type: "image", question: "ほ", answer: { options: [], correct: "ho" } },
  { type: "image", question: "ま", answer: { options: [], correct: "ma" } },
  { type: "image", question: "み", answer: { options: [], correct: "mi" } },
  { type: "image", question: "む", answer: { options: [], correct: "mu" } },
  { type: "image", question: "め", answer: { options: [], correct: "me" } },
  { type: "image", question: "も", answer: { options: [], correct: "mo" } },
  { type: "image", question: "や", answer: { options: [], correct: "ya" } },
  { type: "image", question: "ゆ", answer: { options: [], correct: "yu" } },
  { type: "image", question: "よ", answer: { options: [], correct: "yo" } },
  { type: "image", question: "ら", answer: { options: [], correct: "ra" } },
  { type: "image", question: "り", answer: { options: [], correct: "ri" } },
  { type: "image", question: "る", answer: { options: [], correct: "ru" } },
  { type: "image", question: "れ", answer: { options: [], correct: "re" } },
  { type: "image", question: "ろ", answer: { options: [], correct: "ro" } },
  { type: "image", question: "わ", answer: { options: [], correct: "wa" } },
  { type: "image", question: "を", answer: { options: [], correct: "wo" } },
  { type: "image", question: "ん", answer: { options: [], correct: "n" } },
];

/** 
 * ADD configuration here <---
 * just fill this and this should automatically add the quizz to the app */
export const quizzes: QuizType = {
  hiragana: {
    quizDeck: hiragana,
    name: 'hiragana',
    originalName: 'ひらがな'
  }
}

/** only used in router just in case */
export const quizzesDefault: QuizType = {
  ...quizzes,
  default: quizzes[0]
}

