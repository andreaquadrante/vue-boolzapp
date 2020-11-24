const app = new Vue ({

  el: '#root',

  data: {

    user: {
      avatar: 'img/avatar_io.jpg',
      name: 'Andrea Quadrante',
    },

    contacts: [
      {
        id: 0,
        avatar: 'img/avatar_1.jpg',
        name: 'Christian',
        lastSeen: '',
        chat: [
          {
            text: "Ciao Andre",
            status: 'received'
          },
          {
            text: "Possiamo vederci?",
            status: 'received'
          },
          {
            text: "Certo, quando vuoi!",
            status: 'sent'
          },
        ]
      },
      {
        id: 1,
        avatar: 'img/avatar_2.jpg',
        name: 'Eleonora',
        lastSeen: '',
        chat: [
          {
            text: "Ehi, che fai?",
            status: 'received'
          },
          {
            text: "Sto svolgendo l'esercizio di oggi, tu?",
            status: 'sent'
          },
          {
            text: "Studio per l'esame di domani...",
            status: 'received'
          },
          {
            text: "Andrà tutto bene. Chiamami quando ti va",
            status: 'sent'
          },
        ]
      },
      {
        id: 2,
        avatar: 'img/avatar_3.jpg',
        name: 'Davide',
        lastSeen: '',
        chat: [
          {
            text: "Ehi bro, come procede?",
            status: 'sent'
          },
          {
            text: "Molto bene! Ci sentiamo così ne parliamo?",
            status: 'received'
          },
          {
            text: "Intanto se puoi mandami il testo del contratto così lo rivedo",
            status: 'received'
          },
          {
            text: "Sì, certo",
            status: 'sent'
          },
          {
            text: "Ci sentiamo stasera dopo cena. Ti scrivo io",
            status: 'sent'
          },
          {
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            status: 'sent'
          },
          {
            text: "Grazie. A stasera bro!",
            status: 'received'
          },
        ]
      },
      {
        id: 3,
        avatar: 'img/avatar_4.jpg',
        name: 'Gabriele',
        lastSeen: '',
        chat: [
          {
            text: "Come stai?",
            status: 'received'
          },
          {
            text: "Bene. Tu stai meglio?",
            status: 'sent'
          },
          {
            text: "Possiamo vederci quando vuoi",
            status: 'sent'
          },
        ]
      },
      {
        id: 4,
        avatar: 'img/avatar_5.jpg',
        name: 'Salvo',
        lastSeen: '',
        chat: [
          {
            text: "Domani sera si gioca",
            status: 'received'
          },
          {
            text: "21:00-22:00",
            status: 'received'
          },
          {
            text: "Non vedo l'ora",
            status: 'sent'
          },
        ]
      },
      {
        id: 5,
        avatar: 'img/avatar_6.jpg',
        name: 'Sara',
        lastSeen: '',
        chat: [
          {
            text: "Cosa mangiamo stasera?",
            status: 'sent'
          },
          {
            text: "Non ho voglia di cucinare... pizza?",
            status: 'received'
          },
        ]
      },
      {
        id: 6,
        avatar: 'img/avatar_7.jpg',
        name: 'Claudio',
        lastSeen: '',
        chat: [
          {
            text: "Domani sera vieni alla riunione?",
            status: 'received'
          },
          {
            text: "A che ora?",
            status: 'sent'
          },
          {
            text: "Perché prima ho una partita, vi raggiungo appena finisco",
            status: 'sent'
          },
          {
            text: "Alle 21:30 noi siamo in sede",
            status: 'received'
          },
          {
            text: "Perfetto, io finisco alle 22:00 e arrivo!",
            status: 'sent'
          },
        ]
      },
      {
        id: 7,
        avatar: 'img/avatar_8.jpg',
        name: 'Emanuele',
        lastSeen: '',
        chat: [
          {
            text: "Sabato che facciamo?",
            status: 'received'
          },
          {
            text: "Io ho voglia di mangiare un bel panino",
            status: 'sent'
          },
          {
            text: "E poi magari andiamo al bowling... che ne dici?",
            status: 'sent'
          },
          {
            text: "Va bene. Avviso anche gli altri",
            status: 'received'
          },
        ]
      },
    ],

    activeChatIndex: 0,

  },

  methods: {
    selectChat: function (index) {
      this.activeChatIndex = index
    },
  },

})
