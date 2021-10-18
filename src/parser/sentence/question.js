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
    while (token.tokenType !== 'Question') {
      token = this.tokenizer.getNextToken()
    if (!this.checkIfTokenIsValid(token)) {
        return
      } 
      this.addTokenToSentence(token)
    }
    this.removeSentence()
    console.log(this.oneSentence)
    return this.oneSentence
  }
}