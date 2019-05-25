<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on" @click="send">Создать новость</v-btn>
        </template>
        <v-card>
            <v-toolbar dark color="primary">
                <v-btn icon dark @click="dialog = false">
                    <v-icon>close</v-icon>
                </v-btn>
                <v-toolbar-title>Создание новости</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn dark flat @click="dialog = false">Отправить</v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-layout row>
                <v-text-field
                        label="Название"
                        prepend-icon="title"
                        v-model="title"
                        class="pa-3"
                ></v-text-field>
                <v-menu
                        v-model="datePicker"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        lazy
                        transition="scale-transition"
                        offset-y
                        full-width
                        min-width="290px"
                >
                    <template v-slot:activator="{ on }">
                        <v-text-field
                                class="pa-3"
                                v-model="date"
                                label="Дата события"
                                prepend-icon="event"
                                readonly
                                v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" @input="datePicker = false"></v-date-picker>
                </v-menu>
            </v-layout>
            <vue-editor v-model="content"></vue-editor>
            <!--TODO: images-->
        </v-card>
    </v-dialog>
</template>

<script>
    import {VueEditor} from 'vue2-editor'
    import axios from 'axios';

    export default {
        components: {
            VueEditor
        },
        name: "CreateNewsDialog",
        data() {
            return {
                dialog: false,
                content: '<h1>Здесь текст</h1>',
                title: null,
                date: null,
                datePicker: false,
            }
        },
        methods: {
            async send() {
                let resp = await axios.post(
                    "http://138.68.108.198:8081/news/create",
                    {
                        html: this.content,
                        title: this.title,
                        date: this.date,
                    }
                );

                console.log("add new resp: " + resp);

                // this.dialog = false;
            }
        },
    }
</script>

<style scoped>

</style>
