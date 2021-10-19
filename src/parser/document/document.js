// Klass som anropar sentences, finns end är den klar?
// Array med objekt (sentences)

// get all sentences

// get sentencesQuestioMark

//getSentencesExplanationMark

import { Sentences } from '../sentences/sentences.js'
import { Tokenizer } from '../../tokenizer/tokenizer/tokenizer.js'
import { Grammar } from '../../tokenizer/grammar/grammar.js'
import { TokenType } from '../../tokenizer/grammar/tokenType.js'
import { Question } from '../sentence/question.js'
import { Explanation } from '../sentence/explanation.js'
import { Dot } from '../sentence/dot.js'

/**
 * A document  class.
 *
 * @author Elida Arrechea <es222vs@student.lnu.se>
 * @version 1.0.0
 */

export class Document {

  constructor(stringToParse) {
    this.stringToParse = stringToParse

    const grammar = new Grammar('Word')
    const tokenTypeWord = new TokenType('Word', /^[\w|åäöÅÄÖ]+/g)
    const tokenTypeDot = new TokenType('Dot', /^\./g)
    const tokenTypeQuestion = new TokenType('Question', (/^\?/g))
    const tokenTypeExplanation = new TokenType('Explanation', (/^\!/g))
    grammar.add(tokenTypeWord)
    grammar.add(tokenTypeDot)
    grammar.add(tokenTypeQuestion)
    grammar.add(tokenTypeExplanation)
    this.tokenizer =  new Tokenizer(grammar, this.stringToParse)

    const dotParser = new Dot(this.tokenizer)
    const questionParser = new Question(this.tokenizer)
    const explanationParser = new Explanation(this.tokenizer)
    this.sentences = new Sentences(this.tokenizer, dotParser, questionParser, explanationParser)
    
    this.document = []
  }

  parse() {
    this.getAllSentences()
    console.log('\x1B[31mHello\x1B[34m World')
    console.log('%cHello World', 'color:blue')
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
