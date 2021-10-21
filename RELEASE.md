# Mall för inlämning laboration 1, 1dv610

## Checklista
  - [x] Jag har skrivit all kod och reflektioner själv. Jag har inte använt mig av andras kod för att lösa uppgiften.
  - [ ] Mina testresultat är skrivna utifrån utförd testning ( och inte teoretiskt, "det bör fungera" :) )
  - [x] De enda statiska metoder eller funktioner utanför klasser som jag har är för att starta upp min testapplikation ex main(java).
  - [x] De enda bibliotek och färdiga klasser som används är sådana som måste användas (eller som används för att testa modulen).

## Egenskattning och mål
  - [ ] Jag är inte klar eftersom jag vet att jag saknar något. Då skall du inte lämna in!
  - [x] Jag eftersträvar med denna inlämning godkänt betyg (E-D)
    - [ ] De flesta testfall fungerar (enstaka testfall kan misslyckas, tydligt vilka)
    - [x] Koden är förberedd på återanvändning
    - [x] All kod samt historik finns i git 
    - [ ] Reflektionerna är skrivna
    - [x] Koden är läsbar
  - [ ] Jag eftersträvar med denna inlämning högre betyg (C) och anser mig uppfylla alla extra krav för detta. 
    - [ ] Jag är noga i min testning
    - [ ] En del av testfallen är automatiserade (Tokenizer/Parser/PP), viss del kan vara manuellt testad.
    - [ ] Det finns en tydlig beskrivning i hur mina moduler skall användas. 
    - [ ] Mina reflektioner visar tydligt att jag förstått bokens koncept.
  - [ ] Jag eftersträvar med denna inlämning högsta betyg (A-B) 
    - [ ] Sammanhängande reflektion som ger ett gott helhetsintryck och visar detaljerad förståelse för kodkvalitet.
    - [ ] Min kod är ... (pussar fingrar och gör smackljud)
    - [ ] Extrauppgift parser finns med som egen modul(er)


Förtydligande: Examinator kommer sätta betyg oberoende på vad ni anser. Att ha "saker" från högre betygsnivåer verkar positivt och kan väga upp brister i inlämningen.

## Komponenter och återanvändning
 * Länka in URL om du använder olika repositorier för dina olika komponenter. 
 
 * Beskriv komponenterna och hur de skall användas.
 Följande komponenter finns i min Laboration:

 **Document** - Denna komponent används för att parasa ett helt dokument, dvs fler än 1 mening. Dokumentet avslutas med ett "END"-token. Komponenten har privata metoder som hanterar parsningen samt publika metoder som går att nå utifrån för att kunna parsa ett dokument. Document tar en tokinizer och ett sentences objekt i konstruktorn (detta för att få tillgång till meningarna som ska parsas samt för att kunna skapa meningar -> detta görs i Sentences)

 **Sentence** - Denna komponent har ett interface med metoder som är gemensamma för samtliga sentence objekt. Jag har sedan skapat tre separata klasser som ärver dessa metoder, en klass för varje meningstyp. En Sentence tar en tokenizer i konstruktorn, detta för att få tillgång till meningen som ska parsas.

 **Sentences** - Denna komponent parsar meningar, den kan parsa samtliga meningar eller meningar som avslutas med punkt(.), frågetecken(?), utroppstecken(!). Sentences tar en tokenizer, samt tre olika sentence objekt (dot, question och explanation) i konstruktorn. Detta för att kunna skapa de olika meningarna.

 **Parser** - Denna komponent "binder samman" samtliga komponenter och används för att parsa ett dokument. Här skapas samtliga objekt som krävs för att applikationen ska fungera. Parsen har metoder som anropar metoder från Document klassen samt PrettyPrinter klassen. I Parsern skickar man in den text som man vill parsa.

 **PrettyPrinter** - Denna komponent tar ett dokument och ger meningar olika färger beroende på vilken typ av mening det är. PrettyPrinter tar det dokument som det ska behandla som en parameter i konstruktorn. Den består av privata metoder som implementerar funktionalliteten och en privat metod för att visa resultatet.

 **Tokenizer** - Denna komponent tar en grammat och en text och skapar tokens utav det. 

 Komponenterna sammanställs i Parser, och i app.js kör man koden, där skriver man in den text som ska parsas. Här kan man välja metoder från parser.js för att parsa texten. Konstruktorn i Parser skapar alla objekt som behövs för att samtliga komponenter ska fungera.

 * Beskriv hur du anpassat din kod och instruktioner för att någon annan programmerare skall kunna använda dina komponenter. Om du skrivit instruktioner för din användare länka till dessa. Om inte beskriv här hur någon skall göra. 

Denna applikation körs i app.js genom att skriva **npm start**. 

Samtliga objekt som krävs för applikationen skapas i Parser, här skapas Tokenizer med grammatik och TokenTypes. Här skapas även objekten för de olika Sentence, samt Sentences och Document objektet. 

Metoderna i Parse är publika och ska användas för att parsa ett dokument. Som parameter till metoderna skriver man in den text som ska parsas.


 * Beskriv hur du säkerhetställt att beroendena mellan komponenterna är som beskrivs i laborationen. 
  - Tokenizern är fortsatt oberoende av utomstående kod.
  - Parsern beror på Tokenizern, detta visas genom att de objekt som hanterar parsning tar tokenizern som parameter i konstruktorn. Funktionalliteten till parsen bygger på data som fås av Tokenizern.
  - PrettyPrinter beror på Parser, för att PrettyPrinter ska kunna fungera behövs ett Document som returneras från Parsern.

## Beskrivning av min kod
Beskriv din kod på en hög abstraktionsnivå. En kort beskrivning av dina viktigaste klasser och metoder i dina komponenter. Skapa gärna ett klassdiagram som bild. Beskriv relationerna mellan klasserna mellan komponenter.

Samtliga komponenter bortsett från PrettyPrinter är beronde av Tokenizer. Vad gäller de viktigaste klasserna så är det följande:
- Sentence
- Sentences
- Document
- Tokenizer
Då de bygger på varandra och krävs för att applikationen ska fungera.

Relationerna mellan klasserna är som följande:
- Sentence -> Dependency till Tokenizer
- Sentences -> Dependency till Tokenizer och Sentence (Dot, Question, Explanation)
- Document -> Dependency till Tokenizer och Sentences
- PrettyPrinter -> Dependency till Document
- Parser -> Association till Tokenizer, Sentence (Dot, Question, Explanation), Sentences, Document.

Viktiga metoder anser jag är följande:
- _parseSentence och _createSentenceObj, detta för att de utgör en grundpelare för resten av funktionalliteten i appliaktionen. Här skapas ett objekt som efterfågas i Sentences och Document.

- _getEndToken, är en metod som behövs för att kunna skapa ett Document.

- Samtliga metoder i Parser klassen, då de ger tillgång till de objekt som skapas i parsern.

## Hur jag testat
Beskriv hur du kommit fram till om din kod fungerar. Beskriv de olika delarna och hur de testats. Screenshots från manuell testning.

Jag har skrivit mina tester manuellt och testat dem manuellt.  Jag har försökt att täcka alla olika utfall inom samtliga klasser.

### Testfall
Lista de enskilda testfallen, eller länka in detta.

| Namn      | Indata | Förväntat Utfall | PASS/FAIL |
| --------- | ------ | ---------------- | --------- |
**Test av klassen Sentence**
|       getFirstExplanation |   A! B. C!     |       Objekt av typ "Explanation" med Sentence "A!"        |     PASS      |
|       getFirstDot | B. C!     |      Objekt av typ "Dot" med Sentence "B."  |     PASS      |
|       getFirstQuestion | A? B. C!     |      Objekt av typ "Question" med Sentence "A?"  |     PASS      |
|       getFirstError | &! B. C!     |       Error "No valid regex match"         |     PASS      |
**Test av klassen Dot**
|       getDotFirstSentence | B. C!     |       Objekt av typ "Dot" med Sentence "B."        |     PASS      |
|       getDotFirstError | &B. C!     |        Error "No valid regex match"           |     PASS      |
**Test av klassen Question**
|       getQuestionFirstSentence | A? B. C!     |          Objekt av typ "Question" med Sentence "A?"         |     PASS      |
|       getQuestionFirstError | &B. C!     |           Error "No valid regex match"        |     PASS      |
**Test av klassen Explanation**
|       getExplanationFirstSentence | A! B. C!     |          Objekt av typ "Explanation" med Sentence "A!"         |     PASS      |
|       getExplanationFirstError | &B. C!     |           Error "No valid regex match"        |     PASS      |
**Test av klassen Sentences**
|       getAllQuestions | A! B. C? D?     |           Två objekt av typen "Question"      |     PASS      |
|       getAllExplanations | A! B. C!    |         Två objekt av typen "Explanation"          |     PASS      |
|       getAllDots | A. B. C!    |         Två objekt av typen "Dot"          |     PASS      |
|       getAllSentences | A. B. D? D!  |         Fyra objekt av samtliga meningstyper         |     PASS      |
|       checkSecondSentence | A. BCD!  |         Ett objekt av typen "Explanation" med sentence "BCD!"        |     PASS      |
|       checkWordSecondSentence | A. B CD!  |         En sträng "CD!"       |     PASS      |
|       checkSentencesError | &. B CD!  |         Error "No valid regex match"      |     PASS      |
**Test av klassen Document**
|       getDocument | A. B CD!  |         Ett dokument med end token       |     PASS      |
|       getDocumententError | &A. B CD!  |          Error "No valid regex match"        |     PASS      |
|       getDocumentSecondSentence() | A. B? C? D!  |          Objekt av typen "Question" med sentence "B?"        |     PASS      |
**Test av klassen PrettyPrinter & Parse**
|       prettyPrintDot() | A. |     Strängen "0 A." i färgen rosa.            |     PASS      |
|       prettyPrintQuestion() | B?  |     Strängen "1 B?" i färgen grön.            |     PASS      |
|       prettyPrintExplanation() | C!  |     Strängen "2 C!" i färgen blå.            |     PASS      |


Screenshots från automatisk testning.

## Kapitelreflektioner för kapitel 2-11
Gå igenom all kod inklusive kod från laboration 1 och uppdatera enligt bokens clean code kapitel 2-11 och det vi diskuterat på föreläsningar och workshops. Skriv en kort (4-6 meningar) reflektion för varje kapitel om hur just det kapitlet har påverkat eller inte påverkat din kod. Använd bokens termer. Ge exempel med läsbara screenshots från er kod till varje reflektion. 

Fokusera på tydlighet, variation, ärlighet och vad som är intressant. Exempelvis om du har icke självklara överväganden med olika kvalitetsregler som står i konflikt med varandra så är dessa extra intressanta.


**Kapitel 2**
_Pick one word per concept_ Boken pratar om att välja ett ord per koncept, exemplet boken ger är get och fetch för en metod som ska hämta data. Jag har ett exempel i min kod där jag inte följt detta. Jag väljer att inte ändra det i min kod för att visa på att jag uppmärksammat och tagit lärdom av detta.

Gemensamt för metoder som hämtar data i min kod är att namnet börjar på "get". Här har jag dock namngivit en variabel med fetch, vilket innebär att jag använt två olika ord för samma koncept.


` getAllSentencesDot() {
    while (this.tokenizer.input !== '') {
      let fetchedSentenceDot = this.dotParser.getSentenceDot()
      if (fetchedSentenceDot !== undefined) {
        this.sentencesArrayDot.push(fetchedSentenceDot)
      }
    }
    return this.sentencesArrayDot
  }`



**Kapitel 3**

**Kapitel 4**

**Kapitel 4**

**Kapitel 6**

**Kapitel 7**

**Kapitel 8**

**Kapitel 9**

**Kapitel 10**

**Kapitel 11**

### Kodkvalitetskrav för högre betyg
Samma som för för lägre betyg men baka in de 10 reflektionerna från de olika kapitlen till en sammanhängande text som spänner över båda uppgifterna. Du har alltså en enda reflektion fast för både koden i uppgift 1 och uppgift 2. Ca två sidor max. Använd varierade uttryck från boken. 

## Laborationsreflektion
Reflektera över uppgiften utifrån din utveckling som programmerare. 
Vad har du lärt dig och vad ser du fram emot att lära dig?
Jag tycker att jag ser en stor skillnad i min kod från föregående laboration och det är roligt att se hur man kan utvecklas på så kort tid. Jag har lärt mig att det inte alltid är lätt hur man ska tänak när det gäller beroenden och jag har flera gånger fått omstrukturera min kod tills jag hittat den lösning som kännts bäst,
