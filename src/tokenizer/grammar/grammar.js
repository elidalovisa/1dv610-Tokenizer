
/**
 *
 * @author Elida Arrechea <es222vs@student.lnu.se>
 * @version 1.0.0
 */

 export class Grammar {
  constructor(name) {
    this.name = name
    this.tokens = []
  }
  
  add(tokenType) {
    this.tokens.push(tokenType)
  }
}