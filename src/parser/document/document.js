/**
 * A document  class.
 *
 * @author Elida Arrechea <es222vs@student.lnu.se>
 * @version 1.0.0
 */

export class Document {

  constructor(tokenizer, sentencesParser) {
    this.tokenizer = tokenizer
    this.sentencesParser = sentencesParser
    this.document = []
  }

  parseAllDocument(stringToParse) {
    this.tokenizer.input = stringToParse
    this.parseAllSentences()
    return this.document
  }

  parseAllDot(stringToParse) {
    this.tokenizer.input = stringToParse
    this._getAllSentencesDot()
    return this.document
  }

  parseAllQuestion(stringToParse) {
    this.tokenizer.input = stringToParse
    this._getAllSentencesQuestion()
    return this.document
  }

  parseAllQuestion(stringToParse) {
    this.tokenizer.input = stringToParse
    this._getAllSentencesQuestion()
    return this.document
  }

  getParsedDocument() {
    return this.document
  }

  parseAllSentences() {
    this.document = this.sentencesParser.getAllSentences()
    this._getEndToken()
    return this.document
  }

  _getAllSentencesDot() {
    this.document = this.sentencesParser.getAllSentencesDot()
    this._getEndToken()
    return this.document
  }

  _getAllSentencesQuestion() {
    this.document = this.sentencesParser.getAllSentencesQuestion()
    this._getEndToken()
    return this.document
  }

 _getAllSentencesExplanation() {
    this.document = this.sentencesParser.getAllSentencesExplanation()
    this._getEndToken()
    return this.document
  }

  _getEndToken() {
    this.tokenizer.getEndToken()
    let endToken = this.tokenizer.getActiveToken()
    endToken = endToken.tokenType
    this.document.push(endToken)
  }
}
