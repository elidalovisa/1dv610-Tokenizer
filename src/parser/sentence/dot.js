import { Sentence } from './sentence.js'

export class Dot extends Sentence {
  constructor(tokenizer) {
    super(tokenizer)
  }

  checkIfTokenIsValid(token) {
    if (token.tokenType === 'Word' || token.tokenType == 'Dot') {
      return true
    }
  }

  getSentenceQuestion() {
    this.oneSentence = ''
    this.getFirstToken()
    let token = {}
    while (token.tokenType !== 'Dot') {
      token = this.tokenizer.getNextToken()
    if (!this.checkIfTokenIsValid(token)) {
        return
      } 
      this.addTokenToSentence(token)
    }
    this.removeSentence()
    return this.oneSentence
  }
}