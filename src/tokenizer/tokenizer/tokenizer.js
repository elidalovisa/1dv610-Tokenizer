
/**
 * The tokenizer module.
 *
 * @author Elida Arrechea <es222vs@student.lnu.se>
 * @version 1.0.0
 */

export class Tokenizer {
  constructor(Grammar, input) {
    this.grammarTokens = Grammar.tokens
    this.tokenTypes = []
    this.input = input
    this.number = 0
    this.activeToken = {}
    this.hasEndToken = false
    this.nextTokens = []
    this.prevTokens = []
    this.hasMatch = false
    this.matchArray = []
    this.MaxMunchArray = []
    this.countNull = 0
  }

  getTokenTypes() {
    for (let i = 0; i < this.grammarTokens.length; i++) {
      this.tokenTypes.push(this.grammarTokens[i])
    }
    this.number = this.tokenTypes.length
  }


  checkForEmptyString() {
    this.input.trim()
    if (this.input.length === 0) {
      this.activeToken = {
        value: '',
        regex: '',
        tokenType: 'END'
      }
      this.hasEndToken = true
      this.showActiveTokenForUser()
      return
    } else {
      return
    }
  }

  startTokenizer() {
    this.getTokenTypes()
    this.checkForEmptyString()
    this.handleUserInput()
    return this.activeToken
  }

  handleEndToken() {
    this.getEndToken()
    if (this.hasEndToken) {
      return
    }
  }

  getMaximalMunchArray(i) {
    this.maxMunchVariable = this.input.match(this.tokenTypes[i].regex)
    this.MaxMunchArray.push(this.maxMunchVariable)
  }

  handleMaximalMunch(i) {
    let maxMunchVariable
    if (this.matchArray.length >= 2) {
      maxMunchVariable = this.input.match(this.tokenTypes[i].regex)
      this.MaxMunchArray.push(maxMunchVariable)
    } if (this.MaxMunchArray.length >= 2) {
      for (let j = 0; j < this.MaxMunchArray.length; j++) {
        let first = this.MaxMunchArray[0]
        if (first.length < this.MaxMunchArray[i].toString().length) {
          this.MaxMunchArray[i] = first
        }
        this.activeToken = {
          value: first,
          regex: this.tokenTypes[i].regex,
          tokenType: this.tokenTypes[i].type
        }
      }
    }
  }

  setActiveToken(i) {
    this.activeToken = {
      value: this.input.match(this.tokenTypes[i].regex),
      regex: this.tokenTypes[i].regex,
      tokenType: this.tokenTypes[i].type
    }
    return this.activeToken
  //  console.log(this.activeToken)
   this.showActiveTokenForUser()
  }

  getActiveToken() {
    return this.activeToken
  }

  handleUserInput() {
    let countNull = 0
    let matchArray = []
    this.handleEndToken()
    for (let i = 0; i < this.number; i++) {
      let hasMatch = this.tokenTypes[i].regex.test(this.input)
      if (hasMatch) {
        matchArray.push(hasMatch)
        if (matchArray.length >= 2) {
          this.handleMaximalMunch(i)
        }
      } if (hasMatch && matchArray.length == 1) {
        this.setActiveToken(i)
      } if (!hasMatch) {
        countNull++
      } if (countNull === this.number && this.input.length >= 1) {
        throw 'No valid regex match.'
      }
    }
  }


  getNextToken() {
    if (this.activeToken.tokenType === 'END') {
      throw 'No more tokens'
    }
    this.prevTokens.push(this.activeToken)
    this.input = this.input.replace(this.activeToken.value, '')
    this.input = this.input.trim()
    this.handleUserInput()
    return this.activeToken
  }


  getPrevToken() {
    if (this.prevTokens.length == 0) {
      throw 'No more tokens'
    }
    if (this.prevTokens[this.prevTokens.length - 1] === 'END') {
      throw 'No more tokens'
    } else {
      this.activeToken = this.prevTokens[this.prevTokens.length - 1]
      this.nextTokens.unshift(this.activeToken)
      this.prevTokens.pop()
      this.showActiveTokenForUser()
    }
  }

  showActiveTokenForUser() {
    console.log('VALUE: ' + this.activeToken.value + '\n' + 'TYPE: ' + this.activeToken.tokenType + '\n' + 'REGEX: ' + this.activeToken.regex)
  }

  getEndToken() {
    if (this.input.length < 1) {
      this.activeToken = {
        value: '',
        regex: '',
        tokenType: 'END'
      }
      this.hasEndToken = true
  //    this.showActiveTokenForUser()
      return true
    } else {
      return
    }
  }
}