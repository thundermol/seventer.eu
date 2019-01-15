<template>
    <section>
        <b-container>
            <b-row>
                <b-col cols="12">
                    <p class="text-center">This website was created with
                        <a target="_blank"
                           href="http://bootstrap-vue.js.org">bootstrap-vue</a>
                        and <a target="_blank" href="https://cli.vuejs.org/">vue-cli</a>.
                    </p>
                </b-col>
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
<style scoped lang="scss">
    section {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: .5rem 0;
        background-color: #eee;
        font-size: .7rem;
        p {
            margin:0;
        }
    }
</style>
