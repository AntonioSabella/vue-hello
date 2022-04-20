/* Vue Hello */

/* Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

const app = new Vue(
    {
        el: '#app',
        
        data: {
            saluto: 'Benvenuti su VueJS!!✨👨‍💻',
            description: 'Il framework che ti facilita la vita😎😎.',
            image: './assets/img/vue-JS.png',
            other_image: 'https://picsum.photos/1000/300'
        }
    }
)