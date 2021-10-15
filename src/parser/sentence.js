
/**
 * A sentence class.
 *
 * @author Elida Arrechea <es222vs@student.lnu.se>
 * @version 1.0.0
 */

export class Sentence {


  constructor(tokenizer) {
    this.tokenizer = tokenizer
    this.oneSentenceArray = []
  }

  getFirstToken() {
    const firstToken = this.tokenizer.startTokenizer()
    if (this.checkIfTokenIsValid(firstToken)) {
      this.addTokenToSentence(firstToken)
    }
  }

  // Check if token is WORD or DOT or END, return true
  checkIfTokenIsValid(token) {
    if (token.tokenType === 'Word' || token.tokenType == 'Dot') {
      return true
    }
  }

  //check that token is word or dot and add to array
  addTokenToSentence(token) {
    this.checkIfTokenIsValid(token)
    this.oneSentenceArray.push(token)
  }

  getTokenToSentence() {
    this.getFirstToken()
    let token = {}
    while (token.tokenType !== 'END') {
      token = this.tokenizer.getNextToken()
      if(!this.checkIfTokenIsValid(token)) {
        //Throw error
        console.log('Error: not valid token.')
      }

      this.addTokenToSentence(token)
    }
    //Check for word and dot = a sentence
    //Throw error if END or other
    console.log(this.oneSentenceArray)

  }

}