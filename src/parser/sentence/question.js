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

  getFirstToken() {
    const firstToken = this.tokenizer.startTokenizer()
    if (this.checkIfTokenIsValid(firstToken)) {
      this.parseSentence(firstToken)
    }
    return firstToken
  }

  parseSentence(token) {
    this.checkIfTokenIsValid(token)
    this.sentenceStringArray.push(token.value)
    let createString = token.tokenType + '("' + token.value + '")' + ', '
    this.oneSentence += createString
    this.createSentenceObj(token)
    this.removeInput(token)
  }

  getSentenceQuestion() {
    this.oneSentence = ''
    this.sentenceStringArray = []
    this.getFirstToken()
    let token = {}
    while (token.tokenType !== 'Question') {
      token = this.tokenizer.getNextToken()
      if (!this.checkIfTokenIsValid(token)) {
        return
      }
      this.parseSentence(token)
    }
    this.removeSentence()
    return this.oneSentence
  }
}