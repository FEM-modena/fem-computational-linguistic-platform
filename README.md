# FEM Computational Linguistic Platform
Questo repository contiene i documenti che compongono il sito che ospita le attività del team dei Linguisti Computazionali di FEM - Future Education Modena.

## Come funziona
Questo sito è generato usando [Eleventy](https://www.11ty.dev/), uno dei tanti *static site generator*, ma l'unico che non sposa un particolare framework Javascript e che consente quindi di partire facilmente. I documenti sono organizzati nel seguente modo.

Ogni file `md` ha un riferimento ad un `layout` che Eleventy recupera dalla cartella `_includes/`, viene renderizzato come html e salvato in un percorso secondo questo schema: `nomefile.md` -> `nomefile/index.html`.

A questa regola fanno eccezione:
- Il file di root `index.md` che diventa `index.html`.
- I file di root di sottocartelle: `sottocartella/index.md` diventa `sottocartella/index.html`.
- I file indicati in `.eleventyignore` (come il `README.md` che state leggendo) **non** vengono processati.

Altre configurazioni:
- In `.eleventy.js` è specificata la cartella che contiene gli asset statici (immagini e css) e che viene semplicemente copiata durante la costruzione del sito.
- In `.eleventy.js` viene creata una *collezione* ad hoc che seleziona le prime tre attività in evidenza per il mese corrente.
- Nei file come `activity/activity.json` si trovano i valori di default attribuiti ai documenti della stessa sottocartella. É un modo per evitare di ripetere le stesse informazioni in tutti i documenti dello stesso tipo.
- In `.node-version` viene specificata la versione di node usata (vedi [Nodenv](https://github.com/nodenv/nodenv)).
- Il file `package.json` contiene i metadati necessari per far funzionare il tool di generazione del sito statico.
- Il file `package-lock.json` contiene i numeri di versione previsi di ogni pacchetto installato. Serve per aiutare la riproducibilità del pacchetto.

Il sito generato secondo documenti, layout e configurazioni viene scritto nella cartella `_site`.

## Generale
I contenuti di questo sito andranno creati aggiungendo file come spiegato poco prima. Questi documenti potranno essere in diversi formati (`md`, `html`, `njk`...) ma ciascun file dovrà cominciare con una intestazione (chiamata *front matter*) come questa:
```
---
layout: page.njk
title: "Questo sarà il mio titolo: bello."
tags: 
 - collezioneXY
 - collezioneZW
attributo1: Ciao
attributo2: "Testo breve di spiegazione della pagina"
---

Il contenuto della pagina va qui.
```
Tendenzialmente ogni documento dovrebbe avere gli attributi di `layout`, `title` e `tags`. Con il *layout* si indica il file (html o di un template engine) che Eleventy userà per generare il documento html; mentre *title* è di facile comprensione, l'indicazione dei tag aiuta ad indentificare certi documenti entro certe collezioni.

Questo sito gestirà come "collezioni" le attività e i webinar; per semplicità i documenti di queste collezioni sono raggruppati nelle relative sottocartelle in cui si trovano dei file JSON con gli attributi da applicare di default a ogni documento.

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

## Come contribuire

Questo progetto segue i canoni generici dei pacchetti `node.js`. Come contribuire? La seguente microguida a step è solo un riassunto che assume la conoscenza di `git`, [Github](https://www.github.com). Ci sono tante altre guide, scritte per vari livelli di conoscenza, [là fuori](https://duckduckgo.com/?q=how+to+contribute+on+a+git+project).
- **Fork**. Usando l'interfaccia di Github, crea il tuo fork personale del progetto.
- **Clone**. Crea un clone del repository sul tuo computer usando un client Git.
- **Branch**. Se stai lavorando ad una caratteristica particolare, crea un *ramo* nello sviluppo del progetto e dagli un nome indicativo, ad esempio `feature/trova-attivita`.
- **Sviluppo**. Inizializza gli strumenti a supporto del progetto. Per questo segui la prossima parte della guida per poter svolgere l'effettivo lavoro!
- **Commit**. Ogni volta che pensi di essere arrivato ad un punto fermo, come se fossi in un videogioco, salva questo stato dei documenti con una *consegna* (*commit* in italiano). Usa una descrizione che possa aiutare a capire le modifiche che hai appena fatto (prediligi il perché e non il cosa, es.: "Chiarito un passaggio del documento" invece che "Aggiunto un paragrafo".)
- **Pull request**. Quando pensi che il tuo lavoro sia pronto per essere riunito al ramo di sviluppo principale, fai in modo che il repository su Github sia allineato a quello del tuo computer e infine chiedi che il lavoro che hai fatto (meglio se identificato da un ramo particolare, vedi *Branch*) venga riunito al ramo di sviluppo principale con un Pull Request.

### Sviluppo locale
Dopo che avrai creato la tua copia del repository sul tuo computer, dovrai attivare gli strumenti per generare la versione di sviluppo del sito.

Dovrai avere installato [Node.js](https://nodejs.org/) nella versione indicata dal file `.node-version`. Ti consiglio di usare [Nodenv](https://github.com/nodenv/nodenv), così da poter gestire più versioni di Node.js allo stesso tempo e accomodare le richieste di altri progetti oltre a questo.

Sarà necessario installare le dipendenze del progetto, per cui dovrai eseguire (dalla cartella il cui hai creato la tua copia):
```bash
$ npm install
```

Questo installarà Eleventy e le sue dipendenze. Una volta completato questo task, potrai lanciare uno dei seguenti comandi.
- `npm run build`: verrà generato il sito statico a partire dallo stato attuale dei documenti, dei layout e delle configurazioni.
- `npm run watch`: i file di progetto verranno monitorati, e ogni volta che un file verrà modificato verrà eseguito `build`.
- `npm run serve`: come `watch`, ma il sito viene reso disponibile attraverso un server locale e visualizzabile da indirizzo locale (es.: `http://localhost:8080`). Inoltre le pagine web mostrate verranno automaticamente aggiornate ogni volta che verrà modificato un file.


