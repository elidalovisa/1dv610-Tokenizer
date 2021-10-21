
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
    this._getDocumentToStyle()
    this._styleDocument()
  }

  _getDocumentToStyle() {
    this.documentToStyle = this.document.getParsedDocument()
    return this.documentToStyle
  }

  _styleDocument() {
    for (let i = 0; i < this.documentToStyle.length; i++) {
      this._colorDot(this.documentToStyle, i)
      this._colorQuestion(this.documentToStyle, i)
      this._colorExplanation(this.documentToStyle, i)
    }
  }

  _colorDot(document, i) {
    if (document[i].type === 'Dot') {
      console.log("\u001b[1;35m" + i + ' ' + document[i].sentence)
    }
  }

  _colorQuestion(document, i) {
    if (document[i].type === 'Question') {
      console.log("\u001b[1;32m" + i + ' ' + document[i].sentence)
    }
  }

  _colorExplanation(document, i) {
    if (document[i].type === 'Explanation') {
      console.log("\u001b[1;34m" + i + ' ' + document[i].sentence)
    }
  }

}
