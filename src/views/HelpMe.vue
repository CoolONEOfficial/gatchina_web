<template>
    <div>
        <v-progress-circular indeterminate v-if="helpMes == null" class="ma-auto loadprogress" style="position: relative">
        </v-progress-circular>
        <v-list class="text-xs-center" v-else>
            <HelpMeItem v-for="(newItem, index) in helpMes" v-bind="newItem" :key="index"></HelpMeItem>
        </v-list>
    </div>
</template>

<script>
    import axios from 'axios';
    import HelpMeItem from "../components/HelpMeItem";

    export default {
        components: {HelpMeItem},
        mounted() {
            let context = this;
            axios
                .get('https://cors.io/?http://138.68.108.198:8081/helpme/all' +
                    '?direction=ASC' +
                    '&orderBy=date' +
                    '&page=0' +
                    '&size=20')
                .then(function (response) {
                    console.log(response);
                    context.helpMes = response.data.content;
                });
        },
        data: function () {
            return {
                helpMes: null,
            };
        },
    }
</script>

<style scoped>

</style>
