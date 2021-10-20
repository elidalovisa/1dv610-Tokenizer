
/**
 *
 * @author Elida Arrechea <es222vs@student.lnu.se>
 * @version 1.0.0
 */


/**
 * Creates token types for the Grammar class.
 */
 export class TokenType {
  /**
   * Initializes a new instance of the TokenType class.
   *
   */
  constructor(type, regex) {
    this.type = type; // What type of grammatics to be used
    this.regex = regex; // Array with regex.
  } 

}