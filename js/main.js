let date = new Date();
let currentDay = date.toLocaleDateString();
let currentTime = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

const app = new Vue ({

  el: '#root',

  data: {

    user: {
      avatar: 'img/avatar_io.jpg',
      name: 'Andrea Quadrante',
    },

    contacts: [
      {
        avatar: 'img/avatar_1.jpg',
        name: 'Christian',
        lastSeen: currentDay + ' ' + currentTime,
        chat: [
          {
            text: "Ciao Qua",
            time: currentTime,
            status: 'received'
          },
          {
            text: "Possiamo vederci?",
            time: currentTime,
            status: 'received'
          },
          {
            text: "Certo, quando vuoi!",
            time: currentTime,
            status: 'sent'
          },
        ]
      },
      {
        avatar: 'img/avatar_2.jpg',
        name: 'Eleonora',
        lastSeen: currentDay + ' ' + currentTime,
        chat: [
          {
            text: "Ehi, che fai?",
            time: currentTime,
            status: 'received'
          },
          {
            text: "Sto svolgendo l'esercizio di oggi, tu?",
            time: currentTime,
            status: 'sent'
          },
          {
            text: "Studio per l'esame di domani...",
            time: currentTime,
            status: 'received'
          },
          {
            text: "Andrà tutto bene. Chiamami quando ti va",
            status: 'sent'
          },
        ]
      },
      {
        avatar: 'img/avatar_3.jpg',
        name: 'Davide',
        lastSeen: currentDay + ' ' + currentTime,
        chat: [
          {
            text: "Ehi bro, come procede?",
            time: currentTime,
            status: 'sent'
          },
          {
            text: "Molto bene! Ci sentiamo così ne parliamo?",
            time: currentTime,
            status: 'received'
          },
          {
            text: "Intanto se puoi mandami il testo del contratto così lo rivedo",
            time: currentTime,
            status: 'received'
          },
          {
            text: "Sì, certo",
            time: currentTime,
            status: 'sent'
          },
          {
            text: "Ci sentiamo stasera dopo cena. Ti scrivo io",
            time: currentTime,
            status: 'sent'
          },
          {
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            time: currentTime,
            status: 'sent'
          },
          {
            text: "Grazie. A stasera bro!",
            time: currentTime,
            status: 'received'
          },
        ]
      },
      {
        avatar: 'img/avatar_4.jpg',
        name: 'Gabriele',
        lastSeen: currentDay + ' ' + currentTime,
        chat: [
          {
            text: "Come stai?",
            time: currentTime,
            status: 'received'
          },
          {
            text: "Bene. Tu stai meglio?",
            time: currentTime,
            status: 'sent'
          },
          {
            text: "Possiamo vederci quando vuoi",
            time: currentTime,
            status: 'sent'
          },
        ]
      },
      {
        avatar: 'img/avatar_5.jpg',
        name: 'Salvo',
        lastSeen: currentDay + ' ' + currentTime,
        chat: [
          {
            text: "Domani sera si gioca",
            time: currentTime,
            status: 'received'
          },
          {
            text: "21:00-22:00",
            time: currentTime,
            status: 'received'
          },
          {
            text: "Non vedo l'ora",
            time: currentTime,
            status: 'sent'
          },
        ]
      },
      {
        avatar: 'img/avatar_6.jpg',
        name: 'Sara',
        lastSeen: currentDay + ' ' + currentTime,
        chat: [
          {
            text: "Cosa mangiamo stasera?",
            time: currentTime,
            status: 'sent'
          },
          {
            text: "Non ho voglia di cucinare... pizza?",
            time: currentTime,
            status: 'received'
          },
        ]
      },
      {
        avatar: 'img/avatar_7.jpg',
        name: 'Claudio',
        lastSeen: currentDay + ' ' + currentTime,
        chat: [
          {
            text: "Domani sera vieni alla riunione?",
            time: currentTime,
            status: 'received'
          },
          {
            text: "A che ora?",
            status: 'sent'
          },
          {
            text: "Perché prima ho una partita, vi raggiungo appena finisco",
            time: currentTime,
            status: 'sent'
          },
          {
            text: "Alle 21:30 noi siamo in sede",
            time: currentTime,
            status: 'received'
          },
          {
            text: "Perfetto, io finisco alle 22:00 e arrivo!",
            time: currentTime,
            status: 'sent'
          },
        ]
      },
      {
        avatar: 'img/avatar_8.jpg',
        name: 'Emanuele',
        lastSeen: currentDay + ' ' + currentTime,
        chat: [
          {
            text: "Sabato che facciamo?",
            time: currentTime,
            status: 'received'
          },
          {
            text: "Io ho voglia di mangiare un bel panino",
            time: currentTime,
            status: 'sent'
          },
          {
            text: "E poi magari andiamo al bowling... che ne dici?",
            time: currentTime,
            status: 'sent'
          },
          {
            text: "Va bene. Avviso anche gli altri",
            time: currentTime,
            status: 'received'
          },
        ]
      },
    ],

    activeChatIndex: 0,
    inputText: "",

  },

  methods: {
    selectChat: function (index) {
      this.activeChatIndex = index
    },
    randomAnswer: function () {
      const randomText = ["Scusami, adesso non posso parlare. A dopo", "Va bene Andre", "Ti scrivo dopo, scusa", "È un piacere sentirti!", "Okay", "Ciao Andre!"];
      const randomTextIndex = Math.floor (Math.random () * 6);
      this.contacts[this.activeChatIndex].chat.push ({
        text: randomText[randomTextIndex],
        status: "received",
        time: currentTime,
      })
    },
    submitMessage: function () {
      this.contacts[this.activeChatIndex].chat.push ({
        text: this.inputText,
        time: currentTime,
        status: 'sent',
      })
        setTimeout (this.randomAnswer, 3000);
        this.inputText = ""
    },
  },

})
