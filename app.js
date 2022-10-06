const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'main',
          
        },1
      
      ],
    };
  },
});

app.component('friend-contact', {
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails()">
      {{ detailsAreVisible ? 'Svi' : 'Svi' }} diveloperi
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Samir Talovic:</strong> {{ friend.text1 }}</li>
      <li><strong>Elon Musk:</strong> {{ friend.text2 }}</li>
      <li><strong>Bill Gates:</strong> {{ friend.text3 }}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 'main',
        text1:  'Autor sajta. Zaduzen za dizajn sajta, html i css. E-mail:steamzamenabycomi@gmail.com. Broj telefona: +381 63 17 47 820.',
        text2:  'Zaduzen za javascript i njegovu implementaciju. E-mail:microsoftauthor@hotmail.com. Broj telefona: +1 999 888 777',
        text3:  'Zaduzen za framework(vue.js).E-mail:tesla@teslaco.com. Broj telefona: +1 111 222 333 444',
      },
   
    };
  },
  

  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount('#app');