# Setup Web App React (collegato alla repo webapp-react)

## giorno 2

### MILESTONE 1
Creare nuovo progetto React aiutandoci con Vite  
Ripulire l’app da file e codice di esempio non necessari  
Installiamo il necessario: 
- React Router, 
- Axios,
- Bootstrap  
### MILESTONE 2
Creare un layout di base per la nostra applicazione ed impostare le rotte per le diverse pagine.  
Creare 2 pagine:
- La home, in cui mostreremo la lista dei film
- La pagina di dettaglio di un singolo film

### MILESTONE 3
- Configurare l’app di backend (repo webapp-express) a ricevere chiamate dall applicazione React, installando e impostando il middleware CORS.  
- Provare quindi ad effettuare una chiamata Ajax dalla home del progetto React, per ottenere la lista dei film.

### Bonus
- Impostare la struttura del lavoro in maniera da sfruttare la riutailizzabilità dei componenti React e le loro props
- Aggiungere, nella pagina dei film, un campo per cercare su tutti i campi utili del db (es. titolo, abstract)
- Curare l’aspetto estetico 
---

## giorno 3


### MILESTONE 1
- Collegare la lista dei movies a una pagina di dettaglio movie.  
- Effettuare una chiamata AJAX dalla pagina di dettaglio per ottenere il dettaglio di un singolo film, comprese le sue recensioni
### MILESTONE 2
- Rappresentare le informazioni del movie
### MILESTONE 3
- Creare un componente ReviewCard per rappresentare le informazioni delle recensioni
### BONUS
- Rappresentare tutti i voti delle recensioni con un componente StarRating
### BONUS BONUS
- Sul backend, inizare a realizzare una rotta /movies/:id/reviews per aggiungere una nuova recensione.
Può restituire un semplice testo "Rotta per aggiungere una recensione";
---

## giorno 4

### MILESTONE 1 (BACKEND)
- Predisporre un’API per salvare nel database una nuova recensione legata ad un film
- Testarla su postman e verificare che nel DB venga effettivamente inserita una nuova recensione

### MILESTONE 2 (FRONTEND)
- Creare un componente che contenga il form per le recensioni
- Inserire questo componente nella pagina di dettaglio del film  

 All’invio del form, la nuova recensione viene salvata sul database e visualizzata nella pagina, in fondo alle altre

###  BONUS:
- Provare a creare un nuovo film con upload immagine (multer)!  
---

## giorno 5

### MILESTONE:

Concludere migliorando l’esperienza sulla SPA, inserendo un loader.

- Creare un componente loader  (Questo componente deve poter apparire su qualunque pagina dell app.)

- Creare e sfruttare un Context per dare la possibilità ad ogni componente di attivare o disattivare il loader sulla propria pagina

### BONUS:
- Personalizzare l’aspetto dell app col CSS
