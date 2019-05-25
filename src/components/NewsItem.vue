<template>
    <v-card>
        <v-img
                height="200px"
                :src="imageUrl"
        >
            <v-container fill-height fluid>
                <v-layout fill-height>
                    <v-flex xs12 align-end flexbox style="background: #ffffff55">
                        <span class="headline">{{ title }}</span>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-img>
        <v-card-title v-html="html">
        </v-card-title>
        <!--<v-card-actions>-->
            <!--<v-btn flat color="orange">Share</v-btn>-->
            <!--<v-btn flat color="orange">Explore</v-btn>-->
        <!--</v-card-actions>-->
    </v-card>
</template>

<script>
    export default {
        props: ['title', 'html', 'imageUrl'],
    }
</script>

<style scoped>

</style>
