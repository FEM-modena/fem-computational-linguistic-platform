# Piattaforma linguisti
Come gestire e aggiungere contenuti a questo sito.
## Generale
I contenuti di questo sito andranno creati aggiungendo file a questo repository. Questi file potranno essere in diversi formati (`md`, `html`, `njk`...) ma ciascuna pagina dovrà cominciare con una intestazione (chiamata *front matter*) come questa (esempio in markdown):
```md
---
layout: page.njk
title: "Questo sarà il mio titolo: bello."
attributo1: Ciao
attributo2: "Testo breve di spiegazione della pagina"
---

Il contenuto della pagina va qui.
```
Questo sito gestirà come "collezioni" le attività e i webinar; per distinguere le due collezioni, gli elementi di ciascuna ricevono il tag corrispondente solo per il fatto di essere nella cartella in cui c'è un file JSON-data con i default del front matter di ciascun elemento.

## Attività
Per aggiungere una attività si dovrà creare un file nella cartella activity, seguendo l'esempio di `activity/costruire-immagine.md`. Nella parte iniziale aggiungere il tag che consentirà di mostrare questa attività tra quelle "featured" di un certo mese:
```yaml
tag: featured202010
```
Questa attività comparirà nel mese di ottobre 2020: il tag ha questo formato `featuredYYYYMM`. 

Nota di attenzione: il mese corrente è calcolato dinamicamente ma *solo nel momento in cui il sito viene costruito*. Questo significa che all'inizio di ogni mese si dovrà generare una nuova build per consentire la "rotazione" delle attività nella prima pagina.

## Webinar
La gestione dei webinar è molto simile a quella già descritta per le attività, ma il *front matter* aggiunge alcuni dettagli in più.
```yaml
title: "Linguistica, apprendimento e didattica digitale consigli, suggerimenti e buone pratiche"
summary: "Che cos’è la linguistica e come può essere utilizzata per favorire l’apprendimento? Durante questa chiacchierata con i linguisti del FEM, Matteo Di Cristofaro, Giulia Berardinelli e Francesca Mangialardo, scopriremo come teorie, metodi e strumenti propri della linguistica (computazionale) possano risolvere problemi reali e fornire supporto in ambito didattico."
youtubeID: xFZ56V3U4SQ
date: 2020-04-01
```
Nel dettaglio:
 - `youtubeID` è il codice del video su Youtube. Si può determinare guardando il link del video, es.: https://www.youtube.com/watch?v=**xFZ56V3U4SQ**.
 - `date` è la data in formato AAAA-MM-GG che serve per ordinare gli elementi nella pagina di indice dei webinar.

## Altre pagine
Le pagine che non corrispono a collezioni sono gestite o come singolo file (es.: `documenti-teorici.md`) o come cartelle con un file `index` (es.: `trova-attivita/index.md`). 