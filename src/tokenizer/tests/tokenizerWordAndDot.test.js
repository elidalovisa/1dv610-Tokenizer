import { Tokenizer } from '../tokenizer/tokenizer.js'
import { Grammar } from '../grammar/grammar.js'
import { TokenType } from '../grammar/tokenType.js'

/**
 *
 * @author Elida Arrechea <es222vs@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Used to tell the Tokenizer what grammar to use.
 */
const grammar = new Grammar('Grammar')
const tokenTypeWord = new TokenType('Word', /^[\w|åäöÅÄÖ]+/g)
const tokenTypeDot = new TokenType('Dot', /^\./g)

function TC1() {
  grammar.add(tokenTypeWord)
  grammar.add(tokenTypeDot)
  const tokenizer = new Tokenizer(grammar, 'a aa')
  tokenizer.startTokenizer()
  if (tokenizer.activeToken.value == 'a' && tokenizer.activeToken.tokenType == 'Word') {
    console.log('Test TC1 pass!')
  } else {
    console.log('Test TC1 failed!')
  }
}

function TC2() {
  grammar.add(tokenTypeWord)
  grammar.add(tokenTypeDot)
  const tokenizer = new Tokenizer(grammar, 'a aa')
  tokenizer.startTokenizer()
  tokenizer.getNextToken()
  if (tokenizer.activeToken.value == 'aa' && tokenizer.activeToken.tokenType == 'Word') {
    console.log('Test TC2 pass!')
  } else {
    console.log('Test TC2 failed!')
  }
}


function TC3() {
  grammar.add(tokenTypeWord)
  grammar.add(tokenTypeDot)
  const tokenizer = new Tokenizer(grammar, 'a.b')
  tokenizer.startTokenizer()
  tokenizer.getNextToken()
  if (tokenizer.activeToken.value == '.' && tokenizer.activeToken.tokenType == 'Dot') {
    console.log('Test TC3 pass!')
  } else {
    console.log('Test TC3 failed!')
  }
}

function TC4() {
  grammar.add(tokenTypeWord)
  grammar.add(tokenTypeDot)
  const tokenizer = new Tokenizer(grammar, 'a.b')
  tokenizer.startTokenizer()
  tokenizer.getNextToken()
  tokenizer.getNextToken()
  if (tokenizer.activeToken.value == 'b' && tokenizer.activeToken.tokenType == 'Word') {
    console.log('Test TC4 pass!')
  } else {
    console.log('Test TC failed!')
  }
}

function TC5() {
  grammar.add(tokenTypeWord)
  grammar.add(tokenTypeDot)
  const tokenizer = new Tokenizer(grammar, 'aa.b')
  tokenizer.startTokenizer()
  tokenizer.getNextToken()
  tokenizer.getNextToken()
  if (tokenizer.activeToken.value == 'b' && tokenizer.activeToken.tokenType == 'Word') {
    console.log('Test TC5 pass!')
  } else {
    console.log('Test TC5 failed!')
  }
}

function TC6() {
  grammar.add(tokenTypeWord)
  grammar.add(tokenTypeDot)
  const tokenizer = new Tokenizer(grammar, 'a .b')
  tokenizer.startTokenizer()
  tokenizer.getNextToken()
  tokenizer.getNextToken()
  tokenizer.getPrevToken()
  if (tokenizer.activeToken.value == '.' && tokenizer.activeToken.tokenType == 'Dot') {
    console.log('Test TC6 pass!')
  } else {
    console.log('Test TC6 failed!')
  }
}

function TC7() {
  grammar.add(tokenTypeWord)
  grammar.add(tokenTypeDot)
  const tokenizer = new Tokenizer(grammar, '')
  tokenizer.startTokenizer()
  if (tokenizer.activeToken.value == '' && tokenizer.activeToken.tokenType == 'END') {
    console.log('Test TC7 pass!')
  } else {
    console.log('Test TC7 failed!')
  }
}

function TC8() {
  try {
    grammar.add(tokenTypeWord)
    grammar.add(tokenTypeDot)
    const tokenizer = new Tokenizer(grammar, ' ')
    tokenizer.startTokenizer()
    console.log('Test TC8 failed!')
  } catch (error) {
    console.log('Test TC8 pass!')
  }
}

function TC9() {
  grammar.add(tokenTypeWord)
  grammar.add(tokenTypeDot)
  const tokenizer = new Tokenizer(grammar, 'a')
  tokenizer.startTokenizer()
  tokenizer.getNextToken()
  if (tokenizer.activeToken.value == '' && tokenizer.activeToken.tokenType == 'END') {
    console.log('Test TC9 pass!')
  } else {
    console.log('Test TC9 failed!')
  }
}

function TC10() {
  try {
    grammar.add(tokenTypeWord)
    grammar.add(tokenTypeDot)
    const tokenizer = new Tokenizer(grammar, 'a')
    tokenizer.startTokenizer()
    tokenizer.getPrevToken()
    console.log('Test TC10 failed!')
  } catch (error) {
    console.log('Test TC10 pass!')
  }
}


function TC11() {
  try {
    grammar.add(tokenTypeWord)
    grammar.add(tokenTypeDot)
    const tokenizer = new Tokenizer(grammar, '!')
    tokenizer.startTokenizer()
    console.log('Test TC11 failed!')
  } catch (error) {
    console.log('Test TC11 pass!')
  }
}




//TC1()
//TC2()
//TC3()
//TC4()
//TC5()
//TC6()
//TC7()
//TC8()
//TC9()
//TC10()
//TC11()

