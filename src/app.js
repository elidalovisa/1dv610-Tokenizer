/**
 * The starting point of the application.
 *
 * @author Elida Arrechea <es222vs@student.lnu.se>
 * @version 1.0.0
 */

import { Parser } from './parser/parser.js'

/**
 * The main function of the application.
 */
const main = async () => {
  try {
    const parser = new Parser()
    parser.parsePrettyPrinter("Hej! Vad heter du? Hejdå.")
    parser.parseDocumentGetExplanation('Hejdå! Vi ses.')
  } catch (error) {
    console.error(error)
  }
}
main()
