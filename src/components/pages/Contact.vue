<template>
    <b-container>
        <b-row>
            <b-col>
               {{ text }}
              <br/>
                <b-link target="_blank" href="https://www.linkedin.com/in/robvanseventer/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BuVOUONRNRoOUEXsSC1Q%2FeA%3D%3D">
                    My LinkedIn profile
                </b-link>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    const text = 'Here you can contact me if you want.'
    export default {
        name: 'Contact',
        data() {
            return {
                text: text
            }
        }
    }
</script>
