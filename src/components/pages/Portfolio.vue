<template>
    <b-container>
        <b-row>
            <b-col cols="12">
                <b-card-group deck>
                    <b-card class="portfolio"
                            img-src="./assets/img/bootstrap-stack.png"
                            img-alt="Card image"
                            img-top>
                        <p class="card-text">
                            Bootstrap. I love to work with this powerful tool.
                        </p>
                    </b-card>
                    <b-card class="portfolio"
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
                <swiper :options="swiperOption" ref="mySwiper">
                    <!-- slides -->
                    <swiper-slide v-for="item in days" :key="item.dt">
                        <b-card>
                            <b-card-text class="small">
                                {{ formatDate(item.dt) }}
                                <br/>
                                <br/>
                                <img :src="'http://openweathermap.org/img/wn/' + item.weather[0].icon + '@2x.png'"/>
                                {{ formatTemp(item.main.temp) }}
                                <br/>
                                {{ formatWind(item.wind.speed) }}
                            </b-card-text>
                        </b-card>
                    </swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
                <br/>
                <br/>
                <br/>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import axios from 'axios';
    import moment from 'moment';
    import 'swiper/dist/css/swiper.css'

    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    const WEATHER_API_KEY = 'ae8ee99e35ae9032198e50d17c3a303e';

    export default {
        name: 'Portfolio',
        components: {
            swiper,
            swiperSlide
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            },
            days() {
                return this.foreCast === undefined ? '' : this.foreCast.filter((ts) => ts.dt_txt.endsWith('12:00:00'))
            }
        },
        data() {
            return {
                msg: 'portfolio',
                loading: false,
                foreCast: undefined,
                swiperOption: {}
            }
        },
        created() {
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
            formatDate(ts) {
                moment.locale('nl');
                let day = moment(ts * 1000).format('dddd');
                day = day.charAt(0).toUpperCase() + day.slice(1);
                return day + ' ' + moment(ts * 1000).format('ll');
            },
            formatTemp: (degrees) => {
                return Math.floor(degrees) + '°C'
            },
            formatWind: (bftValue) => {
                // s = k × (1 + 0,14 × k)
                return 'Windkracht: ' + bftValue + ' Bft'
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

