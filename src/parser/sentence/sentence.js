
/**
 * A interface for a sentence.
 *
 * @author Elida Arrechea <es222vs@student.lnu.se>
 * @version 1.0.0
 */
export class Sentence {

  constructor(tokenizer) {
    this.tokenizer = tokenizer
    this.sentenceStringArray = []
    this.flatArray = []
    this.finalString = ''
    this.oneSentence = ''
    this.sentenceToRemove = ''
    this.sentence = {
      type: '',
      tokens: '',
      sentence: '',
    }
  }

  _parseSentence(token) {
    this._checkIfTokenIsValidAllTypes(token)
     this.sentenceStringArray.push(token.value)
     let createString = token.tokenType + '("' + token.value + '")' + ', '
     this.oneSentence += createString
     this._createSentenceObj(token)
     this._removeInput(token)
   }

  _createSentenceObj(token){
    this.flatArray = this.sentenceStringArray.flat()
    let join = this.sentenceStringArray.join(' ')
    let regex = /\s+([.,!?":])/g
    this.finalString = join.replace(regex, '$1')
    this.sentence = {
      type: token.tokenType,
      tokens: this.oneSentence,
      words: this.flatArray,
      sentence: this.finalString    
    }
  }

  _removeInput(token) {
    let removeInput = token.value + ' '
    this.sentenceToRemove += removeInput
  }

  getSentenceAllTypes() {
    this.oneSentence = ''
    this.sentenceStringArray = []
    this._getFirstToken()
    let token = {}
    while (token.tokenType !== 'Dot' && token.tokenType !== 'Question' && token.tokenType !== 'Explanation') {
      token = this.tokenizer.getNextToken()
      if (!this._checkIfTokenIsValidAllTypes(token)) {
        return
      }
      this._parseSentence(token)
    }
    this._removeSentence()
    return this.sentence
  }

  _getFirstToken() {
    const firstToken = this.tokenizer.startTokenizer()
    if (this._checkIfTokenIsValidAllTypes(firstToken)) {
      this._parseSentence(firstToken)
    }
  }
  
  _checkIfTokenIsValidAllTypes(token) {
    if (token.tokenType === 'Word' || token.tokenType === 'Dot' || token.tokenType === 'Question' || token.tokenType === 'Explanation') {
      return true
    }
  }


  _removeSentence() {
    this.sentenceToRemove.toString()
    this.tokenizer.input = this.tokenizer.input.replace(this.sentenceToRemove, '')
    this.tokenizer.input = this.tokenizer.input.substring(2)
  }

  _getEndType() {
    return this.sentence.type
  }
}
