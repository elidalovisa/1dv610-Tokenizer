import { Sentence } from './sentence.js'

/**
 * A sentence type Explanation.
 *
 * @author Elida Arrechea <es222vs@student.lnu.se>
 * @version 1.0.0
 */
export class Explanation extends Sentence {
  constructor(tokenizer) {
    super(tokenizer)
  }

  _getFirstToken() {
    const firstToken = this.tokenizer.startTokenizer()
    if (this._checkIfTokenIsValid(firstToken)) {
      this._parseSentence(firstToken)
    }
    return firstToken
  }


  _parseSentence(token) {
    this._checkIfTokenIsValid(token)
    this.sentenceStringArray.push(token.value)
    let createString = token.tokenType + '("' + token.value + '")' + ', '
    this.oneSentence += createString
    this._createSentenceObj(token)
    this._removeInput(token)
  }

  getSentenceExplanation() {
    this.oneSentence = ''
    this.sentenceStringArray = []
    this._getFirstToken()
    let token = {}
    while (token.tokenType !== 'Explanation') {
      token = this.tokenizer.getNextToken()
      if (!this._checkIfTokenIsValid(token)) {
        return
      }
      this._parseSentence(token)
    }
    this._removeSentence()
    return this.sentence
  }

  _checkIfTokenIsValid(token) {
    if (token.tokenType === 'Word' || token.tokenType === 'Explanation') {
      return true
    }
  }
}