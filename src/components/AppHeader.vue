<template>
    <section class="navbar-section">
        <b-container>
            <b-navbar toggleable="md" type="dark">

                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

                <b-navbar-brand href="#"></b-navbar-brand>

                <b-collapse is-nav id="nav_collapse">

                    <b-navbar-nav>
                        <b-nav-item to="/about">About me</b-nav-item>
                        <b-nav-item to="/portfolio">Portfolio</b-nav-item>
                        <b-nav-item to="/contact">Contact</b-nav-item>
                    </b-navbar-nav>

                </b-collapse>
            </b-navbar>

        </b-container>
    </section>
</template>

<script>
    export default {
        name: 'AppHeader'
    }
</script>