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
        lastSeen: ''
      },
      {
        id: 1,
        avatar: 'img/avatar_2.jpg',
        name: 'Eleonora',
        lastSeen: ''
      },
      {
        id: 2,
        avatar: 'img/avatar_3.jpg',
        name: 'Davide',
        lastSeen: ''
      },
      {
        id: 3,
        avatar: 'img/avatar_4.jpg',
        name: 'Gabriele',
        lastSeen: ''
      },
      {
        id: 4,
        avatar: 'img/avatar_5.jpg',
        name: 'Salvo',
        lastSeen: ''
      },
      {
        id: 5,
        avatar: 'img/avatar_6.jpg',
        name: 'Sara',
        lastSeen: ''
      },
      {
        id: 6,
        avatar: 'img/avatar_7.jpg',
        name: 'Claudio',
        lastSeen: ''
      },
      {
        id: 7,
        avatar: 'img/avatar_8.jpg',
        name: 'Emanuele',
        lastSeen: ''
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
