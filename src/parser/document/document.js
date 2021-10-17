// Klass som anropar sentences, finns end är den klar?
// Array med objekt (sentences)

// get all sentences

// get sentencesQuestioMark

//getSentencesExplanationMark

import { Grammar } from '../../tokenizer/grammar/grammar.js'
import { TokenType } from '../../tokenizer/grammar/tokenType.js'
import { Tokenizer } from '../../tokenizer/tokenizer/tokenizer.js'
import { Sentence } from '../sentence/sentence.js'
import { Sentences } from '../sentences/sentences.js'
/**
 * A document  class.
 *
 * @author Elida Arrechea <es222vs@student.lnu.se>
 * @version 1.0.0
 */

export class Document {

  constructor() {
    this.tokenizer = {}
    this.document = []
  }

  parse(string) {
    const grammar = new Grammar('Word')
    const tokenTypeWord = new TokenType('Word', /^[\w|åäöÅÄÖ]+/g)
    const tokenTypeDot = new TokenType('Dot', /^\./g)
    grammar.add(tokenTypeWord)
    grammar.add(tokenTypeDot)
    this.tokenizer = new Tokenizer(grammar, string)
    this.getSentences()
  }

  getSentences() {
    const sentences = new Sentences(this.tokenizer)
    this.document = sentences.getAllSentences()
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


  // call get sentences?
  // -> that call sentence?
}