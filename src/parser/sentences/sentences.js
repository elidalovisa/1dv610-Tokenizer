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

  constructor(tokenizer, dotParser, questionParser) { // add all objects in constructor?
    this.tokenizer = tokenizer
    this.sentencesArray = []
    this.sentencesArrayQuestion = []
    this.sentencesArrayDot = []
    this.dotParser = dotParser
    this.questionParser = questionParser

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

  getAllSentences() {
    while (this.tokenizer.input !== '') {
      let fetchedSentences = this.dotParser.getSentenceAllTypes()
      console.log(fetchedSentences )
      if (fetchedSentences !== undefined) {
        this.sentencesArray.push(fetchedSentences)
      }
    }
    return this.sentencesArray
  }
}