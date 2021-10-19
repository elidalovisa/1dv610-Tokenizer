import { Sentence } from '../sentence/sentence.js'
import { Question } from '../sentence/question.js'
import { Dot } from '../sentence/dot.js'

/**
 * A class that collect sentences.
 *
 * @author Elida Arrechea <es222vs@student.lnu.se>
 * @version 1.0.0
 */

export class Sentences {

  constructor(tokenizer, dotParser, questionParser, explanationParser) {
    this.tokenizer = tokenizer
    this.sentencesArray = []
    this.sentencesArrayQuestion = []
    this.sentencesArrayExplanation = []
    this.sentencesArrayDot = []
    this.dotParser = dotParser
    this.questionParser = questionParser
    this.explanationParser = explanationParser

  }

  getAllSentencesDot() {
    while (this.tokenizer.input !== '') {
      let fetchedSentenceDot = this.dotParser.getSentenceDot()
      if (fetchedSentenceDot !== undefined) {
        this.sentencesArrayDot.push(fetchedSentenceDot)
      }
    }
    return this.sentencesArrayDot
  }

  getAllSentencesQuestion() {
    while (this.tokenizer.input !== '') {
      let fetchedSentenceQuestion = this.questionParser.getSentenceQuestion()
      if (fetchedSentenceQuestion !== undefined) {
        this.sentencesArrayQuestion.push(fetchedSentenceQuestion)
      }
    }
    return this.sentencesArrayQuestion
  }

  
  getAllSentencesExplanation() {
    while (this.tokenizer.input !== '') {
      let fetchedSentenceExplanation = this.explanationParser.getSentenceExplanation()
      if (fetchedSentenceExplanation !== undefined) {
        this.sentencesArrayExplanation.push(fetchedSentenceExplanation)
      }
    }
    return this.sentencesArrayExplanation
  }


  getAllSentences() {
    const sentenceParser = new Sentence(this.tokenizer)
    while (this.tokenizer.input !== '') {
      let fetchedSentences = sentenceParser.getSentenceAllTypes()
      if (fetchedSentences !== undefined) {
        this.sentencesArray.push(fetchedSentences)
      }
    }
    return this.sentencesArray
  }
}