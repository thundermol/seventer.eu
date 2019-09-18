<template>
    <main>
        <router-view/>
    </main>
</template>

<script>
    export default {
        name: 'AppContent',
        data() {
            return {
                msg: 'about'
            }
        }
    }
</script>
