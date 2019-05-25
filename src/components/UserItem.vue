<template>
    <div>
        <v-list-tile
                :key="title"
                avatar
        >
            <v-list-tile-avatar>
                <img :src="userType === 'CITIZEN' ? 'citizen' : userType === 'ADMIN' ? 'admin' : 'tourist'"
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
