<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <template v-slot:activator="{ on }">
                <v-btn color="primary" dark v-on="on"
                       @click="dialog = true"
                       style="position: fixed; z-index: 99; right: 10px;">
                    Создать место
                </v-btn>
            </template>
            <v-card>
                <v-toolbar dark color="primary">
                    <v-btn icon dark @click="dialog = false">
                        <v-icon>close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Создание места</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark flat @click="send">Отправить</v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-layout row wrap>
                    <v-flex md12 lg4>
                        <v-text-field
                                label="Название"
                                prepend-icon="title"
                                v-model="title"
                                class="pa-3 pt-4"
                        ></v-text-field>
                    </v-flex>
                    <v-flex md12 lg4>
                        <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
                            <img :src="imageUrl" height="150" v-if="imageUrl" alt=""/>
                            <v-text-field label="Select Image" class="pa-3 pt-4" @click='pickFile' v-model='imageName'
                                          prepend-icon='attach_file'></v-text-field>
                            <input
                                    type="file"
                                    style="display: none"
                                    ref="image"
                                    accept="image/*"
                                    @change="onFilePicked"
                            >
                        </v-flex>
                    </v-flex>
                    <v-flex md12 lg4>
                        <v-text-field
                                label="Источник"
                                prepend-icon="link"
                                v-model="url"
                                class="pa-3 pt-4"
                        ></v-text-field>
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
                    Загружаем место
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

    export default {
        components: {
            LocationPicker,
        },
        name: "CreatePlaceDialog",
        data() {
            return {
                dialog: false,
                sending: false,
                description: null,
                title: null,
                url: null,
                location: {lat: 59.568456, lng: 30.124473},
                imagePicker: false,
                imageName: '',
                imageUrl: '',
                imageFile: ''
            }
        },
        methods: {
            pickFile() {
                this.$refs.image.click()
            },
            onFilePicked(e) {
                const files = e.target.files
                if (files[0] !== undefined) {
                    this.imageName = files[0].name
                    if (this.imageName.lastIndexOf('.') <= 0) {
                        return
                    }
                    const fr = new FileReader()
                    fr.readAsDataURL(files[0])
                    fr.addEventListener('load', () => {
                        this.imageUrl = fr.result
                        this.imageFile = files[0] // this is an image file that can be sent to server...
                    })
                } else {
                    this.imageName = ''
                    this.imageFile = ''
                    this.imageUrl = ''
                }
                console.log('imageName: ' + this.imageName);
                console.log('imageUrl: ' + this.imageUrl);
                console.log('imageFile: ' + this.imageFile);
            },
            async send() {
                this.sending = true;
                console.log('imageName: ' + this.imageName);
                console.log('imageUrl: ' + this.imageUrl);
                console.log('imageFile: ' + this.imageFile.name);

                const formData = new FormData();
                formData.append('file', this.imageFile, this.imageFile.name);

                // let context = this;
                let imageUrl = (await axios.post("http://138.68.108.198:8081/file/upload",
                    formData, {
                        headers: {
                            'content-type': 'multipart/form-data',
                            'Access-Control-Allow-Origin': '*',
                        }
                    })).data.link;

                console.log("image url", imageUrl);
                let context = this;
                let resp = await axios.post(
                    "http://138.68.108.198:8081/places/create", {
                        description: context.description,
                        title: context.title,
                        imageUrl: imageUrl,
                        url: context.url,
                        placeType: context.placeType,
                        geo: {
                            latitude: context.location.lat,
                            longitude: context.location.lng,
                        }
                    },
                    {
                        'Access-Control-Allow-Origin': '*',
                    }
                );

                console.log("add new resp: ", resp);

                this.$parent.reload();

                this.sending = false;

                this.dialog = false;
            }
        },
    }
</script>

<style scoped>

</style>
