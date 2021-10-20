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

 * Beskriv hur du anpassat din kod och instruktioner för att någon annan programmerare skall kunna använda dina komponenter. Om du skrivit instruktioner för din användare länka till dessa. Om inte beskriv här hur någon skall göra. 

 * Beskriv hur du säkerhetställt att beroendena mellan komponenterna är som beskrivs i laborationen. 

## Beskrivning av min kod
Beskriv din kod på en hög abstraktionsnivå. En kort beskrivning av dina viktigaste klasser och metoder i dina komponenter. Skapa gärna ett klassdiagram som bild. Beskriv relationerna mellan klasserna mellan komponenter.

## Hur jag testat
Beskriv hur du kommit fram till om din kod fungerar. Beskriv de olika delarna och hur de testats. Screenshots från manuell testning.

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

### Kodkvalitetskrav för högre betyg
Samma som för för lägre betyg men baka in de 10 reflektionerna från de olika kapitlen till en sammanhängande text som spänner över båda uppgifterna. Du har alltså en enda reflektion fast för både koden i uppgift 1 och uppgift 2. Ca två sidor max. Använd varierade uttryck från boken. 

## Laborationsreflektion
Reflektera över uppgiften utifrån din utveckling som programmerare. 
Vad har du lärt dig och vad ser du fram emot att lära dig?