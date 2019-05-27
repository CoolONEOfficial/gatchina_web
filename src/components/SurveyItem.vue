<template>
    <v-card class="pa-3 mb-3">
        <VuePoll showResults :question="title" :answers="Object.entries(answers).map((f, index) => {
            return {value: index + 1, text: f[0].toString(), votes:f[1] };
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
        props: ['title', 'answers', 'voicedUserIds', 'date', 'geo', 'votes'],
    }
</script>

<style scoped>

</style>
