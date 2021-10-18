/**
 * The starting point of the application.
 *
 * @author Elida Arrechea <es222vs@student.lnu.se>
 * @version 1.0.0
 */

import { Run } from './ui/run.js'
import { Tokenizer } from './tokenizer/tokenizer/tokenizer.js'
import { Grammar } from './tokenizer/grammar/grammar.js'
import { TokenType } from './tokenizer/grammar/tokenType.js'
import { Sentences } from './parser/sentences/sentences.js'
import { Document } from './parser/document/document.js'
import { Question } from './parser/sentence/question.js'
import { Dot } from './parser/sentence/dot.js'


/**
 * The main function of the application.
 */
const main = async () => {
  try {
    const grammar = new Grammar('Word')
    const tokenTypeWord = new TokenType('Word', /^[\w|åäöÅÄÖ]+/g)
    const tokenTypeDot = new TokenType('Dot', /^\./g)
    const tokenTypeQuestion = new TokenType('Question', (/^\?/g))

    grammar.add(tokenTypeWord)
    grammar.add(tokenTypeDot)
    grammar.add(tokenTypeQuestion)

    const tokenizer = new Tokenizer(grammar, 'Hej jag. vad heter du? hej då. Hej? Hejsan.')
    const dotParser = new Dot(tokenizer)
    const questionParser = new Question(tokenizer)
    const sentences = new Sentences(tokenizer, dotParser, questionParser )
   
    const document = new Document(tokenizer, sentences)

    document.parse()
  
    // const run = new Run(tokenizer)
    // run.runTokenizer()
  } catch (error) {
    console.error(error)
  }
}
main()
