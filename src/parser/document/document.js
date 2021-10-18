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
    this.getEndToken()
    console.log(this.document)
  }

  getAllSentencesDot() {
    this.document = this.sentences.getAllSentencesDot()
    this.getEndToken()
    console.log(this.document)
  }

  getAllSentencesQuestion() {
    this.document = this.sentences.getAllSentencesQuestion()
    this.getEndToken()
    console.log(this.document)
  }

  getAllSentencesExplanation() {
    this.document = this.sentences.getAllSentencesExplanation()
    this.getEndToken()
    console.log(this.document)
  }

  getEndToken() {
    this.tokenizer.getEndToken()
    let endToken = this.tokenizer.getActiveToken()
    endToken = endToken.tokenType
    this.document.push(endToken)
    console.log(this.document)
  }
}
