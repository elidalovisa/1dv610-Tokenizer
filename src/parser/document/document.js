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

  constructor(tokenizer, sentencesParser) {
    this.tokenizer = tokenizer
    this.sentencesParser = sentencesParser

    /*
    this.grammar = new Grammar('Word')
    this.tokenTypeWord = new TokenType('Word', /^[\w|åäöÅÄÖ]+/g)
    this.tokenTypeDot = new TokenType('Dot', /^\./g)
    this.tokenTypeQuestion = new TokenType('Question', (/^\?/g))
    this.tokenTypeExplanation = new TokenType('Explanation', (/^\!/g))
    this.grammar.add(this.tokenTypeWord)
    this.grammar.add(this.tokenTypeDot)
    this.grammar.add(this.tokenTypeQuestion)
    this.grammar.add(this.tokenTypeExplanation)
    this.tokenizer = new Tokenizer(this.grammar, this.stringToParse)

    this.dotParser = new Dot(this.tokenizer)
    this.questionParser = new Question(this.tokenizer)
    this.explanationParser = new Explanation(this.tokenizer)
    this.sentences = new Sentences(this.tokenizer, this.dotParser, this.questionParser, this.explanationParser) */

    this.document = []
  }

  parse(stringToParse) {
    this.tokenizer.input = stringToParse
    this.document = this.sentencesParser.getAllSentences()
    return this.document

  }

  getParsedDocument() {
    return this.document

  }

  getAllSentences() {
    this.document = this.sentences.getAllSentences()
    this.getEndToken()
    return this.document
  }

  getAllSentencesDot() {
    this.document = this.sentences.getAllSentencesDot()
    this.getEndToken()
    return this.document
  }

  getAllSentencesQuestion() {
    this.document = this.sentences.getAllSentencesQuestion()
    this.getEndToken()
    return this.document
  }

  getAllSentencesExplanation() {
    this.document = this.sentences.getAllSentencesExplanation()
    this.getEndToken()
    return this.document
  }

  getEndToken() {
    this.tokenizer.getEndToken()
    let endToken = this.tokenizer.getActiveToken()
    endToken = endToken.tokenType
    this.document.push(endToken)
  }
}
