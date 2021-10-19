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

 

  createSentenceObj(token) {
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
    return this.sentence
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
    console.log(this.oneSentence)
    console.log(this.sentence)
    return this.sentence
  }


}
