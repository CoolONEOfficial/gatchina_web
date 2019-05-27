<template>
    <div>
        <v-progress-circular indeterminate v-if="markers.length === 0" class="ma-auto loadprogress loadprogress" style="position: absolute; z-index: 99"> </v-progress-circular>
        <GmapMap
                :center="center != null ? center.position : {lat: 59.568456, lng: 30.124473}"
                :zoom="13"
                style="width: 100%; height: 70vh"
        >
            <google-marker v-for="(m, index) in markers"
                           :position="{
                               lat: m.geo.latitude + Math.random() / 200 - 0.5 / 200,
                               lng: m.geo.longitude + Math.random() / 200 - 0.5 / 200,
                           }"
                           :clickable="true"
                           :key="index"
                           @click="onMarker(m)">
            </google-marker>
        </GmapMap>
        <v-dialog v-model="dialog" width="500">
            <RequestItem v-bind="selected"></RequestItem>
        </v-dialog>
    </div>
</template>

<script>
    import axios from "axios";
    import RequestItem from "../components/RequestItem";

    export default {
        name: "Requests",
        components: {RequestItem},
        watch: {
            center: function (val) {
                console.log('val: ', val);
            }
        },
        data() {
            return {
                Requests: [],
                center: null,
                markers: [],
                dialog: false,
                selected: {},
            };
        },
        methods: {
            onMarker(val) {
                console.log('val: ', val);
                this.selected = val;
                this.dialog = true;
            }
        },
        mounted() {
            let context = this;
            axios
                .get('https://cors.io/?http://138.68.108.198:8081/initiative/all' +
                    '?direction=ASC' +
                    '&orderBy=date' +
                    '&page=0' +
                    '&size=20')
                .then(function (response) {
                    console.log(response);
                    context.Requests = response.data.content;
                    for (let d of context.Requests) {
                        context.markers.push(d);
                    }
                    console.log(context.Requests);
                });
        }
    }
</script>

<style scoped>

</style>
