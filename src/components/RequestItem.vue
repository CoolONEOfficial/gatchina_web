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
                <a><v-icon class="ma-3" @click="openPdf" large>fas fa-file-pdf</v-icon></a>
            </v-flex>
        </v-card-actions>
    </v-card>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "RequestItem",
        props: ['id', 'date', 'likeUserIds', 'dislikeUserIds', 'description'],
        mounted() {
            console.log("desc: ", this.description);
        },
        methods: {
            async openPdf() {
                this.$parent.pdfDialog = true;
                let resp = await axios.get('http://138.68.108.198:8081/pdf/generate');
                this.$parent.pdfDialog = false;
                window.open(resp.data.link, '_blank');
            }
        }
    }
</script>

<style scoped>

</style>
