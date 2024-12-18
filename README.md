# Tumi Mondo 
Tumi Mondo is een platform waar kinderen van 6 maanden t/m een jaar hun taalontwikkeling kunnen verbeteren en stimuleren. Dit geeft voordelen voor het leerproces, vermindering van geestelijke ziektes en het vergroten van sociale vaardigheden.

Tumi Mondo heeft zelf onderzoek gedaan om te kunnen kijken of er platform zijn die kinderen helpt bij de taalontwikkeling. Ze zijn tot de conclusie gekomen dat er momenteel nog geen ontwikkelingen-of leermethodes voor zijn.

Daarom hebben zij als opdracht gegeven: Maak een gedeelte van de app die je op alle apparaten kan gebruiken. Je mag het originele design aanhouden, maar het mag ook worden veranderd.

## Inhoudsgave
  * [Werking](#werking)
  * [Kenmerken](#kenmerken)
  * [Licentie](#licentie)

## Beschrijving
De [homepagina](https://nadiachaja.github.io/fix-the-flow-interactive-website/) en de [all stories pagina](https://nadiachaja.github.io/fix-the-flow-interactive-website/lessons/lessons.html). <br>
Ik heb deze sprint mij vooral gefocust op de lessons pagina en het filteren tussen de stories.

### Werking 
In de all stories pagina heb ik de gezamelijke styleguide gebruikt met daarbij een paar kleine aanpassingen. <br>
Ik heb een zoekbalk met daaronder tekst met dat je de filter kan gebruiken en knoppen met de filters dat je kan kiezen wat je zoekt. Daaronder zie je de tekst aantal gevonden stories en de gevonden stories met het verhaal. 
<br>

De filter interactie. <br>
Op de all stories pagina kan je een story zoeken door te filteren. Ik heb 4 selects gemaakt met daarin de filter opties die je kan kiezen. Ik heb daarbij ook stories gemaakt met elke keer met wat anders bijvoorbeeld een story met een pinguïn in het Spaans met het seizoen winter en de story duurt minder dan 5 minuten. <br>
Zo kan je filteren naar de story die je wilt luisteren. Met de filter interactie kan je sneller de story vinden die je zoekt. 

**Filter interactie**
<video src="https://github.com/user-attachments/assets/ae9f7c7d-1c52-46d1-92f6-dbeec88cce6e" controls muted autoplay playsinline></video>


### Responsive 

Ik heb de all stories pagina responsive gemaakt zodat je op je telefoon, tablet en laptop de stories kan luisteren. <br>
Wat ik verandert heb is dat per beeldscherm de stories in 1, 2 of 3 rijen staan. 

**Laptop** <br>
<img width="540" alt="laptop" src="https://github.com/user-attachments/assets/288ab528-7214-491c-a5cc-be2eec159508" /> <br>

**Tablet** <br>
<img width="229" alt="tablet" src="https://github.com/user-attachments/assets/8839b32d-5421-4fbf-9619-f4723cbefa58" /> <br>

**Telefoon** <br>
<img width="136" alt="telefoon" src="https://github.com/user-attachments/assets/dc687a69-d8b6-460d-844c-738d1e6e5c52" />


## Kenmerken
**HTML structuur**
- header (nav, ul, li, svg, a en een p) (menu die op elke pagina is)
- main (article, label, p, div, h2, div, div,button)
- article (h1)
- label (input)(zoekbalk)
- p (uitleg dat je de filter kan gebruiken)
- div (selects) (alle filter opties)
- h2 
- div (hoeveel stories er zijn gevonden)
- div (35 sections)(in de section zit een h3, p, div met button en en p, 2 img, svg)(de stories)
- button (svg)

 Elke story heeft een andere class van de filters die geactiveerd moet worden. 
<br>
<br>
**Belangrijke dingen in CSS** 
- Om de story kaartje te maken heb ik grid gebruikt. Ik heb grid-template-columns en grid-template-rows gebruikt ik heb toen met procenten gewerkt zodat de kaartje de goede grote hadden.
- Ik heb bij de zoekbalk een vergrootglas erin gezet en die op de goede plek neergezet en dat je ernaast kan typen.  
<br>
<br>
De JS
        - 

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

