import { Sentence } from './sentence.js'

export class Dot extends Sentence {
  constructor(tokenizer) {
    super(tokenizer)
  }

  checkIfTokenIsValid(token) {
    if (token.tokenType == 'Dot' || token.tokenType == 'Word') {
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


  getSentenceDot() {
    this.oneSentence = ''
    this.sentenceStringArray = []
    this.getFirstToken()
    let token = {}
    while (token.tokenType !== 'Dot') {
      token = this.tokenizer.getNextToken()
      if (!this.checkIfTokenIsValid(token)) {
        return
      }
      this.parseSentence(token)
    }
    this.removeSentence()
    return this.sentence
  }


}
