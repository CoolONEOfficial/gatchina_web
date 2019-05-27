<template>
    <div>
        <CreateSurveyDialog></CreateSurveyDialog>
        <v-progress-circular indeterminate v-if="survey == null" class="ma-auto loadprogress" style="position: relative">
        </v-progress-circular>
        <v-list class="text-xs-center" v-else>
            <SurveyItem v-for="(newItem, index) in survey" v-bind="newItem" :key="index"></SurveyItem>
        </v-list>
    </div>
</template>

<script>
    import axios from "axios";
    import SurveyItem from "../components/SurveyItem";
    import CreateSurveyDialog from "../components/CreateSurveyDialog";

    export default {
        name: "Survey",
        components: {CreateSurveyDialog, SurveyItem},
        mounted() {
            this.reload();
        },
        methods: {
            reload() {
                let context = this;
                axios
                    .get('http://138.68.108.198:8081/survey/all' +
                        '?direction=ASC' +
                        '&orderBy=date' +
                        '&page=0' +
                        '&size=20')
                    .then(function (response) {
                        console.log(response);
                        context.survey = response.data.content;
                    });
            }
        },
        data: function () {
            return {
                survey: null,
            };
        }
    }
</script>

<style scoped>

</style>
