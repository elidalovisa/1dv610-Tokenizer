
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

  getFirstToken() {
    const firstToken = this.tokenizer.startTokenizer()
    if (this.checkIfTokenIsValidAllTypes(firstToken)) {
      this.parseSentence(firstToken)
    }
  }

  checkIfTokenIsValidAllTypes(token) {
    if (token.tokenType === 'Word' || token.tokenType === 'Dot' || token.tokenType === 'Question' || token.tokenType === 'Explanation') {
      return true
    }
  }

  createSentenceObj(token){
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


  parseSentence(token) {
   this.checkIfTokenIsValidAllTypes(token)
    this.sentenceStringArray.push(token.value)
    let createString = token.tokenType + '("' + token.value + '")' + ', '
    this.oneSentence += createString
    this.createSentenceObj(token)
    this.removeInput(token)
  }

  removeInput(token) {
    let removeInput = token.value + ' '
    this.sentenceToRemove += removeInput
  }

  getSentenceAllTypes() {
    this.oneSentence = ''
    this.sentenceStringArray = []
    this.getFirstToken()
    let token = {}
    while (token.tokenType !== 'Dot' && token.tokenType !== 'Question' && token.tokenType !== 'Explanation') {
      token = this.tokenizer.getNextToken()
      if (!this.checkIfTokenIsValidAllTypes(token)) {
        return
      }
      this.parseSentence(token)
    }
    this.removeSentence()
    return this.sentence
  }

  removeSentence() {
    this.sentenceToRemove.toString()
    this.tokenizer.input = this.tokenizer.input.replace(this.sentenceToRemove, '')
    this.tokenizer.input = this.tokenizer.input.substring(2)
  }

  getEndType() {
    return this.sentence.type
  }

  getSentence() {
    return this.sentence
  }
}
