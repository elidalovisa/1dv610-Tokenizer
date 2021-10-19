import { Sentence } from './sentence.js'

export class Explanation extends Sentence {
  constructor(tokenizer) {
    super(tokenizer)
  }

  checkIfTokenIsValid(token) {
    if (token.tokenType === 'Word' || token.tokenType === 'Explanation') {
      return true
    }
  }

  getSentenceExplanation() {
    this.oneSentence = ''
    this.getFirstToken()
    let token = {}
    while (token.tokenType !== 'Explanation') {
      token = this.tokenizer.getNextToken()
    if (!this.checkIfTokenIsValid(token)) {
        return
      } 
      this.parseSentence(token)
    }
    this.removeSentence()
    console.log(this.sentence)
    return this.oneSentence
  }
}