import { Document } from '../parser/document/document.js'

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
  }

  print() {
    this.getDocumentToStyle()
    this.styleDocument()
  }

  getDocumentToStyle() {
    this.documentToStyle = this.document.parse()
    return this.documentToStyle
  }

  styleDocument() {
    let document = this.getDocumentToStyle()
    for (let i = 0; i < document.length; i++) {
      this.colorDot(document, i)
      this.colorQuestion(document, i)
      this.colorExplanation(document, i)
    }
  }

  colorDot(document, i) {
    if (document[i].type === 'Dot') {
      console.log("\u001b[1;35m" + document[i].sentence)
    }
  }

  colorQuestion(document, i) {
    if (document[i].type === 'Question') {
      console.log("\u001b[1;32m" + document[i].sentence)
    }
  }

  colorExplanation(document, i) {
    if (document[i].type === 'Explanation') {
      console.log("\u001b[1;34m" + document[i].sentence)
    }
  }

}
