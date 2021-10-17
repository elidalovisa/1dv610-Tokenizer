// Klass som anropas för att kolla efter meningar, när inga fler meningar kommer tillbaka är meningen klar END token

import { Sentence } from '../sentence/sentence.js'
/**
 * A class that collect sentences.
 *
 * @author Elida Arrechea <es222vs@student.lnu.se>
 * @version 1.0.0
 */

export class Sentences {

  constructor() {
    this.sentencesArray = []
    this.sentenseParser = new Sentence()
  }

  getOneSentence(){
    let test1 = this.sentenseParser.getSentence()
      test1 = this.sentenseParser.getSentence()
      this.sentencesArray.push(test1)
    

   //let test2 = this.sentenseParser.getSentence()
    this.sentencesArray.push(test1)
    this.sentencesArray.push(test2)

  }

 
}