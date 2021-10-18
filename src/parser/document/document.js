// Klass som anropar sentences, finns end är den klar?
// Array med objekt (sentences)

// get all sentences

// get sentencesQuestioMark

//getSentencesExplanationMark

import { Sentences } from '../sentences/sentences.js'
/**
 * A document  class.
 *
 * @author Elida Arrechea <es222vs@student.lnu.se>
 * @version 1.0.0
 */

export class Document {

  constructor(tokenizer, sentences) {
    this.tokenizer = tokenizer
    this.sentences = sentences
    this.document = []
  }

  parse() {
    this.getAllSentences()
  }

  getAllSentences() {
    this.document = this.sentences.getAllSentences()
    console.log(this.document)
    this.getEndToken()
  }

  getEndToken() {
    this.tokenizer.getEndToken()
    let endToken = this.tokenizer.getActiveToken()
    endToken = endToken.tokenType
    this.document.push(endToken)
    console.log(this.document)
  }
}
