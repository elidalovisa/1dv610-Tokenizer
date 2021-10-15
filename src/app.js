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
import { Sentence } from './parser/sentence.js'


/**
 * The main function of the application.
 */
const main = async () => {
  try {
    const grammar = new Grammar('Word')
    const tokenTypeWord = new TokenType('Word', /^[\w|åäöÅÄÖ]+/g)
    const tokenTypeDot = new TokenType('Dot', /^\./g)

    grammar.add(tokenTypeWord)
    grammar.add(tokenTypeDot)

    const tokenizer = new Tokenizer(grammar, 'Hej jag.')
    const sentence = new Sentence(tokenizer)
sentence.getTokenToSentence()
    // const run = new Run(tokenizer)
    // run.runTokenizer()
  } catch (error) {
    console.error(error)
  }
}
main()
