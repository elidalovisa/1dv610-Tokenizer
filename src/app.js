/**
 * The starting point of the application.
 *
 * @author Elida Arrechea <es222vs@student.lnu.se>
 * @version 1.0.0
 */


import { Document } from './parser/document/document.js'
import { PrettyPrinter } from './prettyPrinter/prettyPrinter.js'
import { Parser } from './parser/parser.js'


/**
 * The main function of the application.
 */
const main = async () => {
  try {
    const parser = new Parser()
    parser.parse()
   // const document = new Document()

   // document.parse('hejsan. Jag heter!')
   // const prettyPrinter = new PrettyPrinter(document)
   // prettyPrinter.print()
  
    // const run = new Run(tokenizer)
    // run.runTokenizer()
  } catch (error) {
    console.error(error)
  }
}
main()
