<template>
    <v-card class="mb-4">
        <v-img
                height="200px"
                :src="imageUrl != null ? imageUrl : ''"
        >
            <v-container style="padding: 0">
                <v-layout style="background: #ffffff55" class="align-center px-3 pt-1">
                    <v-flex class="text-xs-left" flexbox>
                        <a :href="url">Источник</a>
                    </v-flex>
                    <v-flex align-center flexbox>
                        <span class="headline">{{ title }}</span>
                    </v-flex>
                    <v-flex class="text-xs-right" flexbox>
                        <span>{{ date | moment("DD-MM-YYYY, h:mm") }}</span>
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
        props: ['title', 'html', 'imageUrl', 'url', 'date'],
    }
</script>

<style scoped>

</style>
