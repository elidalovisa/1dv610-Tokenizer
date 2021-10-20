import { Document } from '../parser/document/document.js'
import { PrettyPrinter } from '../prettyPrinter/prettyPrinter.js'
import { Sentences } from './sentences/sentences.js'
import { Tokenizer } from '../tokenizer/tokenizer/tokenizer.js'
import { Grammar } from '../tokenizer/grammar/grammar.js'
import { TokenType } from '../tokenizer/grammar/tokenType.js'
import { Question } from './sentence/question.js'
import { Explanation } from './sentence/explanation.js'
import { Dot } from './sentence/dot.js'

/**
 * A parser.
 *
 * @author Elida Arrechea <es222vs@student.lnu.se>
 * @version 1.0.0
 */

export class Parser {

constructor() {
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
  this.sentencesParser = new Sentences(this.tokenizer, this.dotParser, this.questionParser, this.explanationParser)


}

parse() {
this.document = new Document(this.tokenizer, this.sentencesParser)
this.document.parse('hej! jag heter. Vad heter du?')
this.prettyPrinter = new PrettyPrinter(this.document)

this.prettyPrinter.print()
}

}
