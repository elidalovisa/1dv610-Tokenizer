// Klass som anropas för att kolla efter meningar, när inga fler meningar kommer tillbaka är meningen klar END token

import { Sentence } from '../sentence/sentence.js'
import { Question } from '../sentence/question.js'
/**
 * A class that collect sentences.
 *
 * @author Elida Arrechea <es222vs@student.lnu.se>
 * @version 1.0.0
 */

export class Sentences {

  constructor(tokenizer) {
    this.tokenizer = tokenizer
    this.sentenceArrayAll = []
    this.sentencesArrayQuestion = []
    this.sentencesArrayDot = []
    this.test3 = []
    this.sentenceParserDot = new Sentence(this.tokenizer)
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
      let fetchedSentenceQuestion = this.sentenceParserDot.getSentenceAllTypes()
      if (fetchedSentenceQuestion !== undefined) {
        this.sentencesArrayQuestion.push(fetchedSentenceQuestion)
      }
    }
    console.log(this.sentencesArrayQuestion)
    return this.sentencesArrayQuestion
  }
}