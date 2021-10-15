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

const tokenTypeNumber = new TokenType('Number', /^[0-9]+(\.([0-9])+)?/g)
const tokenTypeFloat = new TokenType('Float', /^[0-9]+\.[0-9]+/)
const tokenTypeInt = new TokenType('Int', /^[0-9]+/)
const tokenTypeAdd = new TokenType('Add', /^[+]/)
const tokenTypeMul = new TokenType('Mul', /^[*]/)

function TC12() {
  grammar.add(tokenTypeNumber)
  grammar.add(tokenTypeMul)
  grammar.add(tokenTypeAdd)
  const tokenizer = new Tokenizer(grammar, '3')
  tokenizer.startTokenizer()
  if (tokenizer.activeToken.value == '3' && tokenizer.activeToken.tokenType == 'Number') {
    console.log('Test TC12 pass!')
  } else {
    console.log('Test TC12 failed!')
  }
}

function TC13() {
  grammar.add(tokenTypeNumber)
  grammar.add(tokenTypeMul)
  grammar.add(tokenTypeAdd)
  const tokenizer = new Tokenizer(grammar, '3.14')
  tokenizer.startTokenizer()
  if (tokenizer.activeToken.value == '3.14' && tokenizer.activeToken.tokenType == 'Number') {
    console.log('Test TC13 pass!')
  } else {
    console.log('Test TC13 failed!')
  }
}


function TC14(){
  grammar.add(tokenTypeNumber)
  grammar.add(tokenTypeMul)
  grammar.add(tokenTypeAdd)
  const tokenizer = new Tokenizer(grammar, '3 + 54 * 4')
  tokenizer.startTokenizer()
  tokenizer.getNextToken()
  tokenizer.getNextToken()
  tokenizer.getNextToken()
  if (tokenizer.activeToken.value == '*' && tokenizer.activeToken.tokenType == 'Mul') {
    console.log('Test TC14 pass!')
  } else {
    console.log('Test TC14 failed!')
  }
}

function TC15() {
  try {
    grammar.add(tokenTypeNumber)
    grammar.add(tokenTypeMul)
    grammar.add(tokenTypeAdd)
    const tokenizer = new Tokenizer(grammar, '3 + 54 # 4')
    tokenizer.startTokenizer()
    tokenizer.getNextToken()
    tokenizer.getNextToken()
    tokenizer.getNextToken()
    console.log('Test TC15 failed!')
  } catch (error) {
    console.log('Test TC15 pass!')
  }
}

function TC16() {
  grammar.add(tokenTypeNumber)
  grammar.add(tokenTypeMul)
  grammar.add(tokenTypeAdd)
  const tokenizer = new Tokenizer(grammar, '3.0+54.1   +   4.2')
  tokenizer.startTokenizer()
  tokenizer.getNextToken()
  tokenizer.getPrevToken()
  tokenizer.getNextToken()
  tokenizer.getNextToken()
  tokenizer.getNextToken()
  if (tokenizer.activeToken.value == '+' && tokenizer.activeToken.tokenType == 'Add') {
    console.log('Test TC16 pass!')
  } else {
    console.log('Test TC16 failed!')
  }
}


//TC12()
//TC13()
//TC14()
//TC15()
//TC16()