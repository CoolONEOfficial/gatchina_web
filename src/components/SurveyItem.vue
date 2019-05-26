<template>
    <v-card class="pa-3 mb-3">
        <VuePoll showResults :question="title" :answers="answers.map((f, index) => {
            return {value: index + 1, text: f, votes: Math.floor(Math.random() * (80 - 20 + 1)) + 20};
        })"></VuePoll>
    </v-card>
</template>

<script>
    import VuePoll from 'vue-poll';

    export default {
        components: {
            VuePoll
        },
        name: "SurveyItem",
        props: ['title', 'answers', 'voicedUserIds', 'date', 'geo'],
    }
</script>

<style scoped>

</style>
