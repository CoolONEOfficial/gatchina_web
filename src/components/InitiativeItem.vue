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
                <v-layout column>
                    <v-icon class="text-xs-center pa-3">fas fa-thumbs-up</v-icon>

                    <span class="text-xs-center pt-0 pb-3">{{ likeUserIds != null ? likeUserIds.length : 0 }}</span>
                </v-layout>
            </v-flex>

            <v-flex>
                <v-layout column>
                    <v-icon class="text-xs-center pa-3">fas fa-thumbs-down</v-icon>
                    <span class="text-xs-center pt-0 pb-3">{{ dislikeUserIds != null ? dislikeUserIds.length : 0 }}</span>
                </v-layout>
            </v-flex>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "InitiativeItem",
        props: ['date', 'likeUserIds', 'dislikeUserIds', 'description'],
        mounted() {
            console.log("desc: ", this.description);
        }
    }
</script>

<style scoped>

</style>
