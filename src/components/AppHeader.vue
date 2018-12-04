<template>
    <section>
        <b-container>
            <b-row>
                <b-col cols="12">
                    <b-nav pills>
                        <b-nav-item to="/about">About me</b-nav-item>
                        <b-nav-item to="/portfolio">Portfolio</b-nav-item>
                        <b-nav-item to="/contact">Contact</b-nav-item>
                    </b-nav>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
    export default {
        name: 'AppHeader'
    }
</script>
<style scoped>
    section {
        background-color: #a2a2a2
    }

    .nav-link {
        border-radius: 0
    }
</style>
