
/**
 * A interface for a sentence.
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

  checkIfTokenIsValidAllTypes(token) {
    if (token.tokenType === 'Word' || token.tokenType === 'Dot' || token.tokenType === 'Question' || token.tokenType === 'Explanation') {
      return true
    }
  }

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

  getSentenceAllTypes() {
    this.oneSentence = ''
    this.getFirstToken()
    let token = {}
    while (token.tokenType !== 'Dot' && token.tokenType !== 'Question' && token.tokenType !== 'Explanation') {
      token = this.tokenizer.getNextToken()
      if (!this.checkIfTokenIsValidAllTypes(token)) {
        return
      }
      this.addTokenToSentence(token)
    }
    this.removeSentence()
    return this.oneSentence
  }

  removeSentence() {
    this.sentenceToRemove.toString()
    this.tokenizer.input = this.tokenizer.input.replace(this.sentenceToRemove, '')
    this.tokenizer.input = this.tokenizer.input.substring(2)
  }
}
