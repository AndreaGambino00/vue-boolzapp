Vue.config.devtools = true;
const app = new Vue({
    el: '#root',
    data: {
        message: '',
        activeContact: "",
        contacts: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'img/avatar_3.jpg',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: 'img/avatar_4.jpg',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },
                ],
                
            }
        ],
        indice : 0,
        messaggio: '',
        input: ''
    }, 
    methods: {
        selezionaUtente(indice){
            this.indice = indice;
        },
        data(){
            return dayjs().format('DD/MM/YYYY') + ' ' + dayjs().format('HH:mm:ss');
        },
        messaggioAuto(){
            const ArrayMessage = this.contacts[this.indice].messages;
            ArrayMessage.push({
                date: this.data(),
                text: 'ok',
                status: 'received'
            });
        },
        aggiuntaMessaggio(){

            const ArrayMessage = this.contacts[this.indice].messages;
            let messaggio = this.messaggio;

            if(messaggio != ''){
                ArrayMessage.push({
                    date: this.data(),
                    text: messaggio,
                    status: 'sent'
                });
                setTimeout(this.messaggioAuto, 1000);
            }
            this.messaggio = '';
        }
    },
    computed:{
        cerca(){
            return this.contacts.filter(element => {
                return element.name.toLowerCase().includes(this.input.toLowerCase());
                });
        }
        
    }
    
});


    

    