const app = new Vue ({

  el: '#root',

  data: {

    // app user
    user: {
      avatar: 'img/avatar_io.jpg',
      name: 'Andrea Quadrante',
    },

    // list (array) of contacts (objects)
    contacts: [
      {
        avatar: 'img/avatar_1.jpg',
        name: 'Christian'
      },
      {
        avatar: 'img/avatar_2.jpg',
        name: 'Eleonora'
      },
      {
        avatar: 'img/avatar_3.jpg',
        name: 'Davide'
      },
      {
        avatar: 'img/avatar_4.jpg',
        name: 'Gabriele'
      },
      {
        avatar: 'img/avatar_5.jpg',
        name: 'Salvo'
      },
      {
        avatar: 'img/avatar_6.jpg',
        name: 'Sara'
      },
      {
        avatar: 'img/avatar_7.jpg',
        name: 'Claudio'
      },
      {
        avatar: 'img/avatar_8.jpg',
        name: 'Emanuele'
      },
    ],

    // contact displayed in chat header
    activeContact: {
      // has to be selected by user
    },

  },

  mounted() {
    // when app runs, the displayed contact will be the first one of the list
    this.activeContact = this.contacts[0];
  }

})
