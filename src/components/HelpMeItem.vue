<template>
    <v-card class="mb-4" color="difficulty == 'EASY' ? 'green' : difficulty == 'MEDIUM' ? 'yellow' : 'red'">
        <v-container fill-height fluid>
            <v-layout fill-height>
                <v-flex xs12 align-center flexbox style="background: #ffffff55">
                    <span class="headline">{{ title }}</span>
                </v-flex>
                <v-flex flexbox style="background: #ffffff55">
                    <span>{{ date | moment("DD-MM-YYYY, h:mm") }}</span>
                </v-flex>
            </v-layout>
        </v-container>
        <v-card-text>{{ description }}</v-card-text>

        <!--<v-card-actions>-->
        <!--<v-btn flat color="orange">Share</v-btn>-->
        <!--<v-btn flat color="orange">Explore</v-btn>-->
        <!--</v-card-actions>-->
    </v-card>
</template>

<script>
    export default {
        name: "HelpMeItem",
        props: ['title', 'difficulty', 'description', 'date', 'geo', 'userId'],
    }
</script>

<style scoped>

</style>
