const app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        newMessage: "",
        textSearch:"",
        messageActive: {
            show: false,
            index: null,
        },
        
        contacts: [
            {
                name: "Michele",
                avatar: "_1",
                visible: true,
                messages: [
                    {
                        date: "10/01/2020 15:30:55",
                        text: "Hai portato a spasso il cane?",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 15:50:00",
                        text: "Ricordati di dargli da mangiare",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 16:15:22",
                        text: "Tutto fatto!",
                        status: "received",
                    },
                ],
            },
            {
                name: "Fabio",
                avatar: "_2",
                visible: true,
                messages: [
                    {
                        date: "20/03/2020 16:30:00",
                        text: "Ciao come stai?",
                        status: "sent",
                    },
                    {
                        date: "20/03/2020 16:30:55",
                        text: "Bene grazie! Stasera ci vediamo?",
                        status: "received",
                    },
                    {
                        date: "20/03/2020 16:35:00",
                        text: "Mi piacerebbe ma devo andare a fare la spesa.",
                        status: "sent",
                    },
                ],
            },

            {
                name: "Samuele",
                avatar: "_3",
                visible: true,
                messages: [
                    {
                        date: "28/03/2020 10:10:40",
                        text: "La Marianna va in campagna",
                        status: "received",
                    },
                    {
                        date: "28/03/2020 10:20:10",
                        text: "Sicuro di non aver sbagliato chat?",
                        status: "sent",
                    },
                    {
                        date: "28/03/2020 16:15:22",
                        text: "Ah scusa!",
                        status: "received",
                    },
                ],
            },
            {
                name: "Luisa",
                avatar: "_4",
                visible: true,
                messages: [
                    {
                        date: "10/01/2020 15:30:55",
                        text: "Lo sai che ha aperto una nuova pizzeria?",
                        status: "sent",
                    },
                    {
                        date: "10/01/2020 15:50:00",
                        text: "Si, ma preferirei andare al cinema",
                        status: "received",
                    },
                ],
            },
        ],
    },
    
    methods: {
        goToChat: function (index) {
            this.counter = index;
        },
        
        
        // aggiungo un messaggio se l'utente inserisce qualcosa 
        addMessage: function () {
            if (this.newMessage.length != 0) {
                
                let myObj = {
                    date: "22/12/2021 12:00:00",
                    text: this.newMessage,
                    status: "sent"
                }
                
                this.contacts[this.counter].messages.push(myObj);
                // svuoto l'input type='text'
                this.newMessage = '';
                
            } else {
            }
            // dopo un secondo ricevo un messaggio "ok"
            setTimeout(() => {
                let obj = {
                    date: "22/12/2021 12:00:01",
                    text: "ok",
                    status: "received"
                }
                
                this.contacts[this.counter].messages.push(obj);
                
            }, 1000);
            
        },
        
        searchName: function (){
            let text = this.textSearch.toLowerCase();
            this.contacts.forEach(element => {
                if (element.name.toLowerCase().includes(text)) {
                    element.visible = true;
                } else {
                    element.visible = false;
                }
            });
        },

        showMenu: function(index){
            if (this.messageActive.show && this.messageActive.index === index) {
                this.messageActive.show = false;
                this.messageActive.index = null;

            } else {
                this.messageActive.index = index;
                this.messageActive.show = true;
            }
        }
    },
    
    create(){
    }
})