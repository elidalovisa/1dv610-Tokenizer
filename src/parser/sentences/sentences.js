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

  constructor(tokenizer) {
    this.tokenizer = tokenizer
    this.sentencesArray = []
    this.sentencesArrayQuestion = []
    this.sentencesArrayDot = []
   // this.sentenceParser = new Sentence(this.tokenizer)
    this.sentenceParserDot = new Dot(this.tokenizer)
    this.sentenceParserQuestion = new Question(this.tokenizer)

  }

  getAllSentencesDot() {
    while (this.tokenizer.input !== '') {
      let fetchedSentenceDot = this.sentenceParserDot.getSentenceDot()
      if (fetchedSentenceDot !== undefined) {
        this.sentencesArrayDot.push(fetchedSentenceDot)
      }
    }
    return this.sentencesArrayDot
  }

  getAllSentencesQuestion() {
    while (this.tokenizer.input !== '') {
      let fetchedSentenceQuestion = this.sentenceParserQuestion.getSentenceQuestion()
      if (fetchedSentenceQuestion !== undefined) {
        this.sentencesArrayQuestion.push(fetchedSentenceQuestion)
      }
    }
    return this.sentencesArrayQuestion
  }

  getAllSentences() {
    while (this.tokenizer.input !== '') {
      let fetchedSentences = this.sentenceParserDot.getSentenceAllTypes()
      console.log(fetchedSentences )
      if (fetchedSentences !== undefined) {
        this.sentencesArray.push(fetchedSentences)
      }
    }
    return this.sentencesArray
  }
}