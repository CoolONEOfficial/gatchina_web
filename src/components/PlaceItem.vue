<template>
    <v-card >
        <v-img
                height="200px"
                :src="imageUrl != null ? imageUrl : ''"
        >
            <v-container fill-height fluid>
                <v-layout fill-height>
                    <v-flex class="text-xs-left" flexbox style="background: #ffffff55">
                        <a :href="url">Источник</a>
                    </v-flex>
                    <v-flex align-center flexbox style="background: #ffffff55">
                        <span class="headline">{{ title }}</span>
                    </v-flex>
                    <v-flex class="text-xs-right" flexbox style="background: #ffffff55">
                        <span>{{ date | moment("DD-MM-YYYY, h:mm") }}</span>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-img>
        <v-flex>
            <v-card-title>
                {{ description }}
            </v-card-title>
        </v-flex>

        <!--<v-card-actions>-->
        <!--<v-btn flat color="orange">Share</v-btn>-->
        <!--<v-btn flat color="orange">Explore</v-btn>-->
        <!--</v-card-actions>-->
    </v-card>
</template>

<script>
    export default {
        name: "PlaceItem",
        props: ['title', 'description', 'imageUrl', 'url', 'date'],
    }
</script>

<style scoped>

</style>
