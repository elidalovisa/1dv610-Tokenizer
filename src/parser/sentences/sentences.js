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
    this.sentencesArrayDot = []
    this.sentenceParserDot = new Sentence(this.tokenizer)
    this.sentenceParserQuestion = new Question(this.tokenizer)
  }

  getAllSentences() {
if(this.sentenceParserDot === 1) { // If not a dot
console.log('question')
}

  /*  while (this.tokenizer.input !== '') {

      if (token.tokenType === 'Word' || token.tokenType == 'Dot') {
        let fetchedSentenceDot = this.sentenceParserDot.getSentenceDot()
        this.sentencesArrayAll.push(fetchedSentenceDot)
      }
      if (token.tokenType === 'Word' || token.tokenType === 'Question') {
        let fetchedSentenceQuestion = this.sentenceParserQuestion.getSentenceQuestion()
        this.sentencesArrayAll.push(fetchedSentenceQuestion)
     }
    } */
  }

  getAllSentencesDot() {
    while (this.tokenizer.input !== '') {
      let fetchedSentenceDot = this.sentenceParserDot.getSentenceDot()
      this.sentencesArrayDot.push(fetchedSentenceDot)
    }
    return this.sentencesArrayDot
  }
}