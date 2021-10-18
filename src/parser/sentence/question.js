import { Sentence } from './sentence.js'

export class Question extends Sentence {
  constructor(tokenizer) {
    super(tokenizer)
  }

  checkIfTokenIsValid(token) {
    if (token.tokenType === 'Word' || token.tokenType == 'Question') {
      return true
    }
  }

  getSentenceQuestion() {
    this.oneSentence = ''
    this.getFirstToken()
    let token = {}
   // if(token.tokenType === 'Question') {
   while (token.tokenType !== 'Question') {
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
    console.log(this.oneSentence)
    return this.oneSentence
  }


}