import { Tokenizer } from '../tokenizer/tokenizer/tokenizer.js'
import { TokenType } from '../tokenizer/grammar/tokenType.js'
import { Grammar } from '../tokenizer/grammar/grammar.js'
import { Sentence } from '../parser/sentence/sentence.js'
import { Dot } from '../parser/sentence/dot.js'
import { Question } from '../parser/sentence/question.js'
import { Explanation } from '../parser/sentence/explanation.js'
import { Sentences } from '../parser/sentences/sentences.js'
import { Document } from '../parser/document/document.js'
import { PrettyPrinter } from '../prettyPrinter/prettyPrinter.js'
import { Parser } from '../parser/parser.js'

const grammar = new Grammar('Word')
const tokenTypeWord = new TokenType('Word', /^[\w|åäöÅÄÖ]+/g)
const tokenTypeDot = new TokenType('Dot', /^\./g)
const tokenTypeQuestion = new TokenType('Question', (/^\?/g))
const tokenTypeExplanation = new TokenType('Explanation', (/^\!/g))
grammar.add(tokenTypeWord)
grammar.add(tokenTypeDot)
grammar.add(tokenTypeQuestion)
grammar.add(tokenTypeExplanation)

function getFirstExplanation() {
  const stringToParse = 'A! B. C!'
  const tokenizer = new Tokenizer(grammar, stringToParse)
  const sentenceParser = new Sentence(tokenizer)
  let getFirstSentence = sentenceParser.getSentenceAllTypes()
  if (getFirstSentence.type === 'Explanation' && getFirstSentence.sentence === 'A!') {
    console.log('Test TC1 pass!')
  } else {
    console.log('Test TC1 failed!')
  }
}


function getFirstDot() {
  const stringToParse = 'B. C!'
  const tokenizer = new Tokenizer(grammar, stringToParse)
  const sentenceParser = new Sentence(tokenizer)
  let getFirstSentence = sentenceParser.getSentenceAllTypes()
  if (getFirstSentence.type === 'Dot' && getFirstSentence.sentence === 'B.') {
    console.log('Test TC2 pass!')
  } else {
    console.log('Test TC2 failed!')
  }
}

function getFirstQuestion() {
  const stringToParse = 'A? B. C!'
  const tokenizer = new Tokenizer(grammar, stringToParse)
  const sentenceParser = new Sentence(tokenizer)
  let getFirstSentence = sentenceParser.getSentenceAllTypes()
  if (getFirstSentence.type === 'Question' && getFirstSentence.sentence === 'A?') {
    console.log('Test TC3 pass!')
  } else {
    console.log('Test TC3 failed!')
  }
}


function getFirstError() {
  try {
    const stringToParse = '&! B. C!'
    const tokenizer = new Tokenizer(grammar, stringToParse)
    const sentenceParser = new Sentence(tokenizer)
    sentenceParser.getSentenceAllTypes()
    console.log('Test TC4 failed!')
  } catch (error) {
    console.log('Test TC4 pass!')
  }
}

function getDotFirstSentence() {
  const stringToParse = 'B. C?'
  const tokenizer = new Tokenizer(grammar, stringToParse)
  const dotParser = new Dot(tokenizer)
  let getFirstSentence = dotParser.getSentenceDot()
  if (getFirstSentence.type === 'Dot' && getFirstSentence.sentence === 'B.') {
    console.log('Test TC5 pass!')
  } else {
    console.log('Test TC5 failed!')
  }
}

function getDotFirstError() {
  try {
    const stringToParse = '&B. C?'
    const tokenizer = new Tokenizer(grammar, stringToParse)
    const dotParser = new Dot(tokenizer)
    let getFirstSentence = dotParser.getSentenceDot()
    console.log('Test TC6 failed!')
  } catch (error) {
    console.log('Test TC6 pass!')
  }
}

function getQuestionFirstSentence() {
  const stringToParse = 'A? B. C!'
  const tokenizer = new Tokenizer(grammar, stringToParse)
  const questionParser = new Question(tokenizer)
  let getFirstSentence = questionParser.getSentenceQuestion()
  if (getFirstSentence.type === 'Question' && getFirstSentence.sentence === 'A?') {
    console.log('Test TC7 pass!')
  } else {
    console.log('Test TC7 failed!')
  }
}

function getQuestionFirstError() {
  try {
    const stringToParse = '&B. C?'
    const tokenizer = new Tokenizer(grammar, stringToParse)
    const questionParser = new Question(tokenizer)
    let getFirstSentence = questionParser.getSentenceQuestion()
    console.log('Test TC8 failed!')
  } catch (error) {
    console.log('Test TC8 pass!')
  }
}

function getExplanationFirstSentence() {
  const stringToParse = 'A! B. C!'
  const tokenizer = new Tokenizer(grammar, stringToParse)
  const explanationParser = new Explanation(tokenizer)
  let getFirstSentence = explanationParser.getSentenceExplanation()
  if (getFirstSentence.type === 'Explanation' && getFirstSentence.sentence === 'A!') {
    console.log('Test TC9 pass!')
  } else {
    console.log('Test TC9 failed!')
  }
}


function getExplanationFirstError() {
  try {
    const stringToParse = '&B. C?'
    const tokenizer = new Tokenizer(grammar, stringToParse)
    const explanationParser = new Explanation(tokenizer)
    let getFirstSentence = explanationParser.getSentenceExplanation()
    console.log('Test TC10 failed!')
  } catch (error) {
    console.log('Test TC10 pass!')
  }
}

function getAllQuestions() {
  const stringToParse = 'A! B. C? D?'
  const tokenizer = new Tokenizer(grammar, stringToParse)
  const explanationParser = new Explanation(tokenizer)
  const questionParser = new Question(tokenizer)
  const dotParser = new Dot(tokenizer)
  const sentencesParser = new Sentences(tokenizer, dotParser, questionParser, explanationParser)
  let allQuestions = sentencesParser.getAllSentencesQuestion()
  for (let i = 0; i < allQuestions.length; i++) {
    if (allQuestions[i].type === 'Question') {
      continue
    }
  } if (allQuestions.length === 2) {
    console.log('Test TC11 pass!')
  } else {
    console.log('Test TC11 failed!')
  }
}

/*
function noQuestions() {
  try {
  const stringToParse =  'B. C! B?'
  const tokenizer = new Tokenizer(grammar, stringToParse)
  const explanationParser = new Explanation(tokenizer)
  const questionParser = new Question(tokenizer)
  const dotParser = new Dot(tokenizer)
  const sentencesParser = new Sentences(tokenizer, dotParser, questionParser, explanationParser)
  let allQuestions = sentencesParser.getAllSentencesQuestion()
  console.log(allQuestions)
  } catch(error) {
    console.log('found an error')
    console.log(error)
}
} */


function getAllExplanations() {
  const stringToParse = 'A! B. C!'
  const tokenizer = new Tokenizer(grammar, stringToParse)
  const explanationParser = new Explanation(tokenizer)
  const questionParser = new Question(tokenizer)
  const dotParser = new Dot(tokenizer)
  const sentencesParser = new Sentences(tokenizer, dotParser, questionParser, explanationParser)
  let allExplanations = sentencesParser.getAllSentencesExplanation()
  for (let i = 0; i < allExplanations.length; i++) {
    if (allExplanations[i].type === 'Explanation') {
      continue
    }
  } if (allExplanations.length === 2) {
    console.log('Test TC12 pass!')
  } else {
    console.log('Test TC12 failed!')
  }
}

function getAllDots() {
  const stringToParse = 'A. B. C!'
  const tokenizer = new Tokenizer(grammar, stringToParse)
  const explanationParser = new Explanation(tokenizer)
  const questionParser = new Question(tokenizer)
  const dotParser = new Dot(tokenizer)
  const sentencesParser = new Sentences(tokenizer, dotParser, questionParser, explanationParser)
  let allDots = sentencesParser.getAllSentencesDot()
  for (let i = 0; i < allDots.length; i++) {
    if (allDots[i].type === 'Dot') {
      continue
    }
  } if (allDots.length === 2) {
    console.log('Test TC13 pass!')
  } else {
    console.log('Test TC13 failed!')
  }
}

function getAllSentences() {
  const stringToParse = 'A. B. D? D!'
  const tokenizer = new Tokenizer(grammar, stringToParse)
  const explanationParser = new Explanation(tokenizer)
  const questionParser = new Question(tokenizer)
  const dotParser = new Dot(tokenizer)
  const sentencesParser = new Sentences(tokenizer, dotParser, questionParser, explanationParser)
  let allSentences = sentencesParser.getAllSentences()
  for (let i = 0; i < allSentences.length; i++) {
    if (allSentences[i].type === 'Explanation' && 'Question' && 'Dot') {
      continue
    }
  }
  if (allSentences.length === 4) {
    console.log('Test TC14 pass!')
  } else {
    console.log('Test TC14 failed!')
  }
}

function checkSecondSentence() {
  const stringToParse = 'A. BCD!'
  const tokenizer = new Tokenizer(grammar, stringToParse)
  const explanationParser = new Explanation(tokenizer)
  const questionParser = new Question(tokenizer)
  const dotParser = new Dot(tokenizer)
  const sentencesParser = new Sentences(tokenizer, dotParser, questionParser, explanationParser)
  let allSentences = sentencesParser.getAllSentences()
  if (allSentences[1].type === 'Explanation' && allSentences[1].sentence === 'BCD!') {
    console.log('Test TC15 pass!')
  } else {
    console.log('Test TC15 failed!')
  }
}

function checkWordSecondSentence() {
  const stringToParse = 'A. B CD!'
  const tokenizer = new Tokenizer(grammar, stringToParse)
  const explanationParser = new Explanation(tokenizer)
  const questionParser = new Question(tokenizer)
  const dotParser = new Dot(tokenizer)
  const sentencesParser = new Sentences(tokenizer, dotParser, questionParser, explanationParser)
  let allSentences = sentencesParser.getAllSentences()
  let lastWord = allSentences[1].sentence.substr(allSentences[1].sentence.length - 3)
  if (allSentences[1].type === 'Explanation' && lastWord === 'CD!') {
    console.log('Test TC16 pass!')
  } else {
    console.log('Test TC16 failed!')
  }
}

function checkSentencesError() {
  try {
    const stringToParse = '&. B CD!'
    const tokenizer = new Tokenizer(grammar, stringToParse)
    const explanationParser = new Explanation(tokenizer)
    const questionParser = new Question(tokenizer)
    const dotParser = new Dot(tokenizer)
    const sentencesParser = new Sentences(tokenizer, dotParser, questionParser, explanationParser)
    let allSentences = sentencesParser.getAllSentences()
    console.log('Test TC17 fail!')
  } catch (error) {
    console.log('Test TC17 pass!')
  }
}

function getDocument() {
  const stringToParse = 'A. B CD!'
  const tokenizer = new Tokenizer(grammar, stringToParse)
  const explanationParser = new Explanation(tokenizer)
  const questionParser = new Question(tokenizer)
  const dotParser = new Dot(tokenizer)
  const sentencesParser = new Sentences(tokenizer, dotParser, questionParser, explanationParser)
  const documentParser = new Document(tokenizer, sentencesParser)
  let parsedDocument = documentParser.parseAllDocument(stringToParse)
  let lastToken = parsedDocument.pop()
  if (parsedDocument.length === 2 && lastToken === 'END') {
    console.log('Test TC18 pass!')
  } else {
    console.log('Test TC18 fail!')
  }
}

function getDocumentError() {
  try {
    const stringToParse = '&A. B CD!'
    const tokenizer = new Tokenizer(grammar, stringToParse)
    const explanationParser = new Explanation(tokenizer)
    const questionParser = new Question(tokenizer)
    const dotParser = new Dot(tokenizer)
    const sentencesParser = new Sentences(tokenizer, dotParser, questionParser, explanationParser)
    const documentParser = new Document(tokenizer, sentencesParser)
    let parsedDocument = documentParser.parseAllDocument(stringToParse)
    console.log('Test TC18 fail!')
  } catch (error) {
    console.log('Test TC18 pass!')
  }
}

function getDocumentSecondSentence() {
  const stringToParse = 'A. B? C? D!'
  const tokenizer = new Tokenizer(grammar, stringToParse)
  const explanationParser = new Explanation(tokenizer)
  const questionParser = new Question(tokenizer)
  const dotParser = new Dot(tokenizer)
  const sentencesParser = new Sentences(tokenizer, dotParser, questionParser, explanationParser)
  const documentParser = new Document(tokenizer, sentencesParser)
  let parsedDocument = documentParser.parseAllDocument(stringToParse)
  if (parsedDocument[1].type === 'Question' && parsedDocument[1].sentence === 'B?') {
    console.log('Test TC19 pass!')
  } else {
    console.log('Test TC19 fail!')
  }
}

function prettyPrintDot() {
  const stringToParse = 'A.'
  const tokenizer = new Tokenizer(grammar, stringToParse)
  const explanationParser = new Explanation(tokenizer)
  const questionParser = new Question(tokenizer)
  const dotParser = new Dot(tokenizer)
  const sentencesParser = new Sentences(tokenizer, dotParser, questionParser, explanationParser)
  const documentParser = new Document(tokenizer, sentencesParser)
  const parser = new Parser()
  const prettyPrintDot = new PrettyPrinter(documentParser)
  parser.parse(stringToParse)
  prettyPrintDot.print()
}

function prettyPrintQuestion() {
  const stringToParse = 'B?'
  const tokenizer = new Tokenizer(grammar, stringToParse)
  const explanationParser = new Explanation(tokenizer)
  const questionParser = new Question(tokenizer)
  const dotParser = new Dot(tokenizer)
  const sentencesParser = new Sentences(tokenizer, dotParser, questionParser, explanationParser)
  const documentParser = new Document(tokenizer, sentencesParser)
  const parser = new Parser()
  const prettyPrintDot = new PrettyPrinter(documentParser)
  parser.parse(stringToParse)
  prettyPrintDot.print()
}

function prettyPrintExplanation() {
  const stringToParse = 'C!'
  const tokenizer = new Tokenizer(grammar, stringToParse)
  const explanationParser = new Explanation(tokenizer)
  const questionParser = new Question(tokenizer)
  const dotParser = new Dot(tokenizer)
  const sentencesParser = new Sentences(tokenizer, dotParser, questionParser, explanationParser)
  const documentParser = new Document(tokenizer, sentencesParser)
  const parser = new Parser()
  const prettyPrintDot = new PrettyPrinter(documentParser)
  parser.parse(stringToParse)
  prettyPrintDot.print()
}

getFirstExplanation()
getFirstDot()
getFirstQuestion()
getFirstError()
getDotFirstSentence()
getDotFirstError()
getQuestionFirstSentence()
getQuestionFirstError()
getExplanationFirstSentence()
getExplanationFirstError()
getAllQuestions()
//noQuestions()
getAllExplanations()
getAllDots()
getAllSentences()
checkSecondSentence()
checkWordSecondSentence()
checkSentencesError()
getDocument()
getDocumentError()
getDocumentSecondSentence()
prettyPrintDot()
prettyPrintQuestion()
prettyPrintExplanation()

