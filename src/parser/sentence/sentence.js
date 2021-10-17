
/**
 * A sentence class.
 *
 * @author Elida Arrechea <es222vs@student.lnu.se>
 * @version 1.0.0
 */



export class Sentence {

  constructor(tokenizer) {
    this.tokenizer = tokenizer
    this.oneSentence = ''
    this.sentenceToRemove = ''
  }

  getFirstToken() {
    const firstToken = this.tokenizer.startTokenizer()
    if (this.checkIfTokenIsValid(firstToken)) {
      this.addTokenToSentence(firstToken)
    }
  }

  // Check if token is WORD or DOT return true
  checkIfTokenIsValid(token) {
    if (token.tokenType === 'Word' || token.tokenType == 'Dot') {
      return true
    }
  }

  //check that token is word or dot and add to string
  addTokenToSentence(token) {
    this.checkIfTokenIsValid(token)
    let createString = token.tokenType + '("' + token.value + '")' + ', '
    this.oneSentence += createString
    this.removeInput(token)
  }

  removeInput(token) {
    let removeInput = token.value + ''
    this.sentenceToRemove += removeInput
  }

  getSentence() {
    this.oneSentence = ''
    this.getFirstToken()
    let token = {}
    while (token.tokenType !== 'Dot') {
      token = this.tokenizer.getNextToken()
      if (!this.checkIfTokenIsValid(token)) {
        //Throw error
        console.log('Error: not valid token.')
      }
      this.addTokenToSentence(token)
    }
    //Check for word and dot = a sentence
    //Throw error if END or other
    this.removeSentence()
    return this.oneSentence
  }

  removeSentence() {
    this.sentenceToRemove.toString()
    this.tokenizer.input = this.tokenizer.input.replace(this.sentenceToRemove, '')
    this.tokenizer.input = this.tokenizer.input.substring(2) //remove dot and whitespace first in string
  }
}