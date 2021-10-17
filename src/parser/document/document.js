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
  }



  parse(string) {
    const grammar = new Grammar('Word')
    const tokenTypeWord = new TokenType('Word', /^[\w|åäöÅÄÖ]+/g)
    const tokenTypeDot = new TokenType('Dot', /^\./g)
    grammar.add(tokenTypeWord)
    grammar.add(tokenTypeDot)    
    this.tokenizer = new Tokenizer(grammar, string)
    this.getOneSentence()
    this.getOneSentence()
  }

getAllSentences() {
  let sentence = new Sentence(this.tokenizer)
  let test = sentence.getSentence()
  console.log(test)
  let test2 = sentence.getSentence()
  console.log(test2)
  while(!test) {
    test = sentence.getSentence()
    console.log(test)
  }
}

  getOneSentence() {
    let sentence = new Sentence(this.tokenizer)
    sentence = new Sentence(this.tokenizer)
    let test = sentence.getSentence()
    console.log(test)
    if(test === false) {
      console.log('false')
    }
  }

  

  // call get sentences?
  // -> that call sentence?
}