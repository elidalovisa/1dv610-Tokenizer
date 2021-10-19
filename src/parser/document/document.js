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
    this.getAllSentencesDot()
    //console.log("This is %cMy stylish message", "color: yellow; font-style: italic; background-color: blue;padding: 2px");
    //console.log('\x1b[43mHighlighted');
  //  console.log('\x1b[36m Hello \x1b[34m Colored \x1b[35m World!');
console.log('\x1B[31mHello\x1B[34m World');
console.log('%cHello World','color:blue');



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
  }
}
