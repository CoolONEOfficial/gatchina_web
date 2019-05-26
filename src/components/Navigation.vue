<template>
    <v-card>
        <v-navigation-drawer permanent clipped>
            <v-list>
                <v-list-tile v-for="(i, index) in items" :to="{path: i.path}" :key="index">
                    <v-list-tile-action>
                        <v-icon>{{ i.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ i.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </v-card>

</template>

<script>
    export default {
        data: () => ({
            items: [
                {title: 'Новости', icon: 'list', path: '/news'},
                {title: 'Пользователи', icon: 'people', path: '/users'},
                {title: 'Инициативы', icon: 'message', path: '/initiatives'},
                {title: 'Руки помощи', icon: 'fas fa-hands-helping', path: '/helpme'},
                {title: 'Места', icon: 'fas fa-map-marker-alt', path: '/places'},
                {title: 'Опросы', icon: 'fas fa-poll', path: '/survey'},
            ],
        })
    }
</script>

<style>

</style>
