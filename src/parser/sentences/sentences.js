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
    this.sentencesArray = []
    this.sentenceParserDot = new Sentence(this.tokenizer)
    this.sentenceParserQuestion = new Question(this.tokenizer)
  }

  getAllSentencesDot() {
    while (this.tokenizer.input !== '') {
      let fetchedSentenceDot = this.sentenceParserDot.getSentenceDot()
      if(fetchedSentenceDot !== undefined) {
        this.sentencesArray.push(fetchedSentenceDot)
      }    }
    return this.sentencesArray
  }

  getAllSentencesQuestion() {
    while (this.tokenizer.input !== '') {
      let fetchedSentenceQuestion = this.sentenceParserQuestion.getSentenceQuestion()
      if(fetchedSentenceQuestion !== undefined) {
        this.sentencesArray.push(fetchedSentenceQuestion)
      }
    }
    return this.sentencesArray
  }

  getAllSentences() {
    while (this.tokenizer.input !== '') {
    let allSentences =  this.sentenceParserDot.getAllSentences()
this.sentenceArrayAll.push(allSentences)
//this.sentenceArrayAll.push(question)
    }
    console.log(this.sentenceArrayAll)
    return this.sentenceArrayAll
  }
}