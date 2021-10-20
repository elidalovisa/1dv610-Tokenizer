import { StyleDot } from './styleDot.js'

/**
 * A prettyPrinter class to make a document look nicer.
 *
 * @author Elida Arrechea <es222vs@student.lnu.se>
 * @version 1.0.0
 */

export class PrettyPrinter {

  constructor(document) {
    this.document = document
    this.documentToStyle = []
    this.styleDot = new StyleDot(this.documentToStyle)
  }

  print() {
    this.getDocumentToStyle()
    this.styleDocument()
  }

  getDocumentToStyle() {
    this.documentToStyle = this.document.getParsedDocument()
    return this.documentToStyle
  }

  styleDocument() {
    for (let i = 0; i < this.documentToStyle.length; i++) {
      this.colorDot(this.documentToStyle, i)
      this.colorQuestion(this.documentToStyle, i)
      this.colorExplanation(this.documentToStyle, i)
    }
  }

  colorDot(document, i) {
    if (document[i].type === 'Dot') {
      console.log("\u001b[1;35m" + i + ' ' + document[i].sentence)
    }
  }

  colorQuestion(document, i) {
    if (document[i].type === 'Question') {
      console.log("\u001b[1;32m" + i + ' ' + document[i].sentence)
    }
  }

  colorExplanation(document, i) {
    if (document[i].type === 'Explanation') {
      console.log("\u001b[1;34m" + i + ' ' + document[i].sentence)
    }
  }

}
