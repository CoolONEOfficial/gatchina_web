<template>
    <v-app>
        <v-toolbar color="primary" app>
            <v-toolbar-title class="headline text-uppercase" style="color: white">
                <span>TEAM</span>
                <span class="font-weight-light">13</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-layout row>
            <Navigation v-show="this.$store.getters.AUTH != null"
                        style="padding-top: 64px; position: fixed; bottom: 0; top: 0;"></Navigation>
            <v-content style="padding-left: 300px;">
                <v-container align-center justify-center fluid style="height: 100%">
                    <v-fade-transition mode="out-in">
                        <router-view></router-view>
                    </v-fade-transition>
                </v-container>
            </v-content>
        </v-layout>
    </v-app>
</template>

<script>
    import Navigation from './components/Navigation'

    export default {
        name: 'App',
        components: {
            Navigation
        },
        data() {
            return {
                //
            }
        }
    }
</script>

<style lang="scss">
    .loader {
        z-index: 99;
        position: absolute !important;
        top: 50vh;
        left: 50vw;
        transform: translateX(-50%) translateY(-50%);
    }
</style>
