
/**
 * A sentence class.
 *
 * @author Elida Arrechea <es222vs@student.lnu.se>
 * @version 1.0.0
 */

export class Sentence {

  constructor(tokenizer) {
    this.tokenizer = tokenizer
  }

  getFirstToken() {
    return this.tokenizer.startTokenizer()
  }

  //check that token is word or dot and add to array
    addTokenToSentence(){

    }


  checkSentence() {
    const oneSentenceArray = []
    const firstToken = this.getFirstToken()
    oneSentenceArray.push(firstToken)
    let test1 = this.tokenizer.startTokenizer()
    console.log(test1.value + 'test1')
    console.log(this.tokenizer.activeToken)
    let test2 = this.tokenizer.getNextToken()
    let test3 = this.tokenizer.getNextToken()
    let test4 = this.tokenizer.getNextToken()
    let test5 = this.tokenizer.getNextToken()
    // console.log(hej)
    //console.log(test2.value)
    // console.log(test3)
    //console.log(test4)
    //  console.log(test5)
  }

  //Check for word and dot = a sentence
  //Throw error if END or other
}