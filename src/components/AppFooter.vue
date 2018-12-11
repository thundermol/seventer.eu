<template>
    <section>
        <b-container>
            <b-row class="justify-content-center">
                <p class="small">This website was created with <a target="_blank" href="http://bootstrap-vue.js.org">bootstrap-vue</a> and <a target="_blank" href="https://cli.vuejs.org/">vue-cli</a>.
                </p>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    export default {
        name: 'AppFooter',
        data() {
            return {
                msg: 'about'
            }
        }
    }
</script>
<style scoped>
    section {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 1em 0;
        background-color: #eee;
    }
</style>
