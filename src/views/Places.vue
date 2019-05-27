<template>
    <div>
        <CreatePlaceDialog></CreatePlaceDialog>
        <v-progress-circular indeterminate v-if="places == null" class="ma-auto" style="position: relative">
        </v-progress-circular>
        <GmapMap
                :center="{lat: 59.568456, lng: 30.124473}"
                :zoom="12"
                style="width: 100%; height: 70vh"
        >
            <google-marker v-for="(m, index) in places"
                           :position="{
                               lat: m.geo.latitude,
                               lng: m.geo.longitude,
                           }"
                           :clickable="true"
                           :key="index"
                           @click="onMarker(m)">
            </google-marker>
        </GmapMap>
        <v-dialog v-model="placeDialog" width="500">
            <PlaceItem v-bind="selected"></PlaceItem>
        </v-dialog>
    </div>
</template>

<script>
    import CreatePlaceDialog from "../components/CreatePlaceDialog";
    import PlaceItem from "../components/PlaceItem";
    import axios from "axios";

    export default {
        components: {CreatePlaceDialog, PlaceItem},
        mounted() {
            this.reload();
        },
        methods: {
            reload() {
                let context = this;
                axios
                    .get('https://cors.io/?http://138.68.108.198:8081/places/all' +
                        '?direction=ASC' +
                        '&orderBy=title' +
                        '&page=0' +
                        '&size=20')
                    .then(function (response) {
                        console.log(response);
                        context.places = response.data.content;
                    });
            },
            onMarker(val) {
                console.log('val: ', val);
                this.selected = val;
                this.placeDialog = true;
            }
        },
        data: function () {
            return {
                places: null,
                selected: null,
                placeDialog: false,
            };
        }
    }
</script>

<style scoped>

</style>
