
/**
 * A interface for a sentence.
 *
 * @author Elida Arrechea <es222vs@student.lnu.se>
 * @version 1.0.0
 */

export class Sentence {

  constructor(tokenizer) {
    this.tokenizer = tokenizer
    this.sentenceString = []
    this.oneSentence = ''
    this.sentenceToRemove = ''
    this.sentence = {
      type: '',
      tokens: '',
      sentence: '',
    }
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
    this.sentenceString.push(token.value)
    let createString = token.tokenType + '("' + token.value + '")' + ', '
    this.oneSentence += createString
    let flatArray = this.sentenceString.flat()
    let join = this.sentenceString.join(' ')
    let regex = /\s+([.,!?":])/g
    let finalString = join.replace(regex, '$1')
  
    this.sentence = {
      type: token.tokenType,
      tokens: this.oneSentence,
      sentence: flatArray,
      test: finalString
    }
    this.removeInput(token)
  }

  removeInput(token) {
    let removeInput = token.value + ' '
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

  getSentence() {
    return this.sentence
  }
}
