/**
 * The starting point of the application.
 *
 * @author Elida Arrechea <es222vs@student.lnu.se>
 * @version 1.0.0
 */


import { Document } from './parser/document/document.js'


/**
 * The main function of the application.
 */
const main = async () => {
  try {
 
    const document = new Document('hej! Vad heter du? Jag heter Elida. Det är kallt idag. Hejdå!')
    document.parse()
  
    // const run = new Run(tokenizer)
    // run.runTokenizer()
  } catch (error) {
    console.error(error)
  }
}
main()
