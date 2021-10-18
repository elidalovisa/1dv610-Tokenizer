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
import { Sentence } from './parser/sentence/sentence.js'
import { Sentences } from './parser/sentences/sentences.js'
import { Document } from './parser/document/document.js'
import { Question } from './parser/sentence/question.js'


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
    //const sentence = new Sentence(tokenizer)
    //const sentences = new Sentences()
    const document = new Document(tokenizer)
    //const question = new Question(tokenizer)
    //sentence.getSentence()
    //sentences.getOneSentence()
    document.parse()
    //question.getSentenceQuestion()
    //question.getSentenceQuestion()

    // const run = new Run(tokenizer)
    // run.runTokenizer()
  } catch (error) {
    console.error(error)
  }
}
main()
