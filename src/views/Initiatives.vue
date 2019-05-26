<template>
    <div>
        <GmapMap
                :center="center != null ? center.position : {lat: 59.568456, lng: 30.124473}"
                :zoom="12"
                style="width: 100%; height: 70vh"
        >
            <google-marker v-for="(m, index) in markers"
                           :position="{
                               lat: m.geo.latitude,
                               lng: m.geo.longitude,
                           }"
                           :clickable="true"
                           :key="index"
                           @click="onMarker(m)">
            </google-marker>
        </GmapMap>
        <v-dialog v-model="dialog" width="500">
            <InitiativeItem v-bind="selected"></InitiativeItem>
        </v-dialog>
    </div>
</template>

<script>
    import axios from "axios";
    import InitiativeItem from "../components/InitiativeItem";

    export default {
        name: "Initiatives",
        components: {InitiativeItem},
        watch: {
            center: function (val) {
                console.log('val: ', val);
            }
        },
        data() {
            return {
                initiatives: [],
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
                    context.initiatives = response.data.content;
                    for (let d of context.initiatives) {
                        context.markers.push(d);
                    }
                    console.log(context.initiatives);
                });
        }
    }
</script>

<style scoped>

</style>
