<template>
    <div>
        <v-list-tile
                avatar
        >
            <v-list-tile-avatar>
                <img :src="userType === 'CITIZEN' ? 'http://138.68.108.198:8000/d88faa59-76f0-4e39-aa74-b7ebb66a54b7.jpeg'
                : userType === 'ADMINISTRATION' ? 'http://138.68.108.198:8000/7b3d033b-0cce-45fd-ab4b-8255e39d7849.jpeg'
                : 'http://138.68.108.198:8000/ea5367ee-1edb-4e6e-8ce6-41d05b4341f4.jpeg'"
                     alt="">
            </v-list-tile-avatar>
            <v-list-tile-content>
                <v-list-tile-title>{{ name }}</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>

        <v-divider
        ></v-divider>
    </div>
</template>

<script>
    export default {
        props: ['name', 'userType']
    }
</script>

<style scoped>

</style>
