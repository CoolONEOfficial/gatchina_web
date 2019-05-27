<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <template v-slot:activator="{ on }">
                <v-btn color="primary" dark v-on="on"
                       @click="dialog = true"
                       style="position: fixed; z-index: 99; right: 10px;">
                    Создать опрос
                </v-btn>
            </template>
            <v-card>
                <v-toolbar dark color="primary">
                    <v-btn icon dark @click="dialog = false">
                        <v-icon>close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Создание опроса</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark flat @click="send">Отправить</v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-layout row wrap>
                    <v-flex md12 lg6>
                        <v-text-field
                                label="Название"
                                prepend-icon="title"
                                v-model="title"
                                class="pa-3 pt-4"
                        ></v-text-field>
                    </v-flex>
                    <v-flex md12 lg6>
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
                                        class="pa-3 pt-4"
                                        v-model="date"
                                        label="Дата события"
                                        prepend-icon="event"
                                        readonly
                                        v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker v-model="date" @input="datePicker = false"></v-date-picker>
                        </v-menu>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12 sm12 md12 lg8 class="px-3">
                        <v-text-field v-model="description"
                                      label="Описание"
                                      multi-line
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm12 md12 lg4>
                        <location-picker
                                v-model="location">
                        </location-picker>
                    </v-flex>
                </v-layout>
                <v-layout column>
                    <v-card v-for="(i, index) in answers" :key="index">
                        <v-layout>
                            <v-text-field
                                    :label="'Вариант ответа ' + (index + 1)"
                                    prepend-icon="title"
                                    v-model="i.value"
                                    class="pa-3 pt-4"
                            ></v-text-field>
                            <v-btn class="pa-0 ma-3" @click="answers.insert(index + 1, {value: ''},)">
                                +
                            </v-btn>
                        </v-layout>
                    </v-card>
                </v-layout>
            </v-card>
        </v-dialog>
        <v-dialog
                v-model="sending"
                persistent
                width="300"
        >
            <v-card
                    color="primary"
                    dark
            >
                <v-card-text>
                    Загружаем опрос
                    <v-progress-linear
                            indeterminate
                            color="white"
                            class="mb-0"
                    ></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import axios from 'axios';
    import {LocationPicker} from 'vue2-location-picker'

    Array.prototype.insert = function (index, item) {
        this.splice(index, 0, item);
    };

    export default {
        components: {
            LocationPicker,
        },
        name: "CreateSurveyDialog",
        data() {
            return {
                dialog: false,
                sending: false,
                description: null,
                title: null,
                date: null,
                datePicker: false,
                answers: [{value: "Первый вариант ответа"},
                    {value: "Второй вариант ответа"},
                    {value: "Третий вариант ответа"}],
                location: {lat: 59.568456, lng: 30.124473},
            }
        },
        methods: {
            async send() {
                this.sending = true;

                let o = {};
                this.answers.forEach(
                    val => {
                        o[val.value] = 0;
                    }
                );

                let context = this;
                await axios.post(
                    "http://138.68.108.198:8081/survey/create", {
                        html: context.content,
                        title: context.title,
                        date: new Date(Date.parse(this.date)).toISOString(),
                        answers: o
                    }
                );

                this.$parent.reload();
                this.sending = false;
                this.dialog = false;
            }
        },
    }
</script>

<style scoped>

</style>
