<template>
    <v-layout column>
        <v-card-title primary-title>Аудентификация</v-card-title>
        <v-form>
            <v-text-field prepend-icon="person" name="Username" label="Username"></v-text-field>
            <v-text-field prepend-icon="lock" name="Password" label="Password" type="password"></v-text-field>
            <v-card-actions>
                <v-btn primary @click="login">Войти</v-btn>
            </v-card-actions>
        </v-form>

    </v-layout>

</template>

<script>
    import router from 'vue-router'

    export default {
        name: "Auth",
        methods: {
            login: function () {
                localStorage.setItem('auth', "ok");
                this.$store.commit('SET_AUTH', "ok");
                router.push('/news');
            },
        },
    }
</script>

<style scoped>

</style>
