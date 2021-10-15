
/**
 * 
 *
 * @author Elida Arrechea <es222vs@student.lnu.se>
 * @version 1.0.0
 */

import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const prompt = require('prompt-sync')


export class Run {
  constructor(tokenizer) {
    this.tokenizer = tokenizer
  }

  runTokenizer() {
    let active = true
    this.tokenizer.startTokenizer()
    const prompt = require('prompt-sync')()

    while (active) {
      const answer = prompt('For next token press 1, for previous token press 0. Press x to exit')
      if (answer === '1') {
        this.tokenizer.getNextToken()
      } if (answer === '0') {

        this.tokenizer.getPrevToken()
      }
      if (answer === 'x') {
        active = false
      }
    }
  }
}