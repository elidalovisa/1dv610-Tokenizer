import { Document } from '../parser/document/document.js'

/**
 * Style for sentence that end with a dot,
 *
 * @author Elida Arrechea <es222vs@student.lnu.se>
 * @version 1.0.0
 */

export class StyleDot {

  constructor(documentToStyle) {
    this.documentToStyle = documentToStyle
  }

  colorDot() {
    console.log('hej')
    for (let i = 0; i < this.documentToStyle.length; i++) {
    if (this.documentToStyle[i].type === 'Dot') {
      console.log("\u001b[1;35m" + i + ' ' + this.documentToStyle[i].sentence)
    }
  }
  }
}
