<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <b-card-group deck>
          <b-card
            img-src="./assets/img/bootstrap-stack.png"
            img-alt="Card image"
            img-top>
            <p class="card-text">
              Bootstrap. I love to work with this powerful tool.
            </p>
          </b-card>
          <b-card
            img-src="./assets/img/vue-logo.png"
            img-alt="Card image"
            img-bottom>
            <p class="card-text">
              Some quick example text to build on the card and make up the bulk of the card's content.
            </p>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
    <br/>
    <b-row>
      <b-col>
        <p>
          Het weer voor de komende dagen in Arnhem, Gelderland :-)
        </p>
        <b-card-group deck>
          <b-card v-for="item in days" :key="item.dt">
            {{ formatDate(item.dt) }}
            <b-card-text>
            {{ item.main.temp }} &#x2103;
            </b-card-text>
          </b-card>
        </b-card-group>
        <br/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios';
// import moment from 'moment';

const WEATHER_API_KEY = 'ae8ee99e35ae9032198e50d17c3a303e';

export default {
  name: 'Portfolio',
  computed: {
    days () {
      return this.foreCast===undefined?'':this.foreCast.filter((ts) => ts.dt_txt.endsWith('12:00:00'))
    }
  },
  data () {
    return {
      msg: 'portfolio',
      loading: false,
      foreCast: undefined
    }
  },
  created () {
    axios
      .get('https://api.openweathermap.org/data/2.5/forecast?q=Arnhem,nl&units=metric&APPID=' + WEATHER_API_KEY + '&mode=json')
      .then(response => {
        this.foreCast = response.data.list
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error)
        // this.errored = true
      })
      .finally(() => this.loading = false)
  },
  methods: {
    formatDate(ts){
      // eslint-disable-next-line no-console
      console.log(ts)
      return new Date(ts*1000)
    }
  }
}
</script>

<style scoped lang="scss">
  .card {
    max-width: 20rem;
    padding: 1em 0;
    margin: 0 auto;
  }
</style>

