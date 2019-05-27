<template>
    <div>
        <CreateNewsDialog></CreateNewsDialog>
        <v-progress-circular indeterminate v-if="news == null" class="ma-auto loadprogress" style="position: relative">
        </v-progress-circular>
        <v-list class="text-xs-center" v-else>
            <NewsItem v-for="(newItem, index) in news" v-bind="newItem" :key="index"></NewsItem>
        </v-list>
    </div>
</template>

<script>
    import axios from "axios";
    import NewsItem from "../components/NewsItem";
    import CreateNewsDialog from "../components/CreateNewsDialog";

    export default {
        components: {CreateNewsDialog, NewsItem},
        mounted() {
            this.reload();
        },
        methods: {
            reload() {
                let context = this;
                axios
                    .get('https://cors.io/?http://138.68.108.198:8081/news/all' +
                        '?direction=DESC' +
                        '&orderBy=date' +
                        '&page=0' +
                        '&size=20')
                    .then(function (response) {
                        console.log(response);
                        context.news = response.data.content;
                    });
            }
        },
        data: function () {
            return {
                news: null,
            };
        }
    }
</script>

<style scoped>

</style>
