<template>
    <v-card>
        <v-layout row>
            <v-flex xs12>
                <v-card-title class="headline">{{ description }}</v-card-title>
            </v-flex>
            <v-flex class="pa-3">
                <span>{{(date != null ? date : '') }}</span>
            </v-flex>
        </v-layout>

        <v-card-actions>
            <v-flex xs12></v-flex>

            <v-flex>
                <a href="http://138.68.108.198:8000/template.pdf"><v-icon class="ma-3" @click="window.open('http://138.68.108.198:8000/template.pdf', '_blank')" large>fas fa-file-pdf</v-icon></a>
            </v-flex>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "RequestItem",
        props: ['date', 'likeUserIds', 'dislikeUserIds', 'description'],
        mounted() {
            console.log("desc: ", this.description);
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>
