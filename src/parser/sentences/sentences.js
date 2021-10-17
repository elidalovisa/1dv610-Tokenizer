// Klass som anropas för att kolla efter meningar, när inga fler meningar kommer tillbaka är meningen klar END token

import { Sentence } from '../sentence/sentence.js'
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
    this.sentenceParser = new Sentence(this.tokenizer)
  }

  getAllSentences() {
    while (this.tokenizer.input !== '') {
      let fetchedSentence = this.sentenceParser.getSentence()
      this.sentencesArray.push(fetchedSentence)
    }
    
    return this.sentencesArray
  }
}