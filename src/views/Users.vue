<template>
    <div>
        <v-progress-circular indeterminate v-if="users == null" class="ma-auto loadprogress" style="position: relative">
        </v-progress-circular>
        <v-list two-line>
            <UserItem v-for="(item, index) in users"
                      v-bind="item"
                      :key="index"></UserItem>
        </v-list>
    </div>
</template>

<script>
    import axios from "axios";
    import UserItem from "../components/UserItem";

    export default {
        data: function () {
            return {
                users: []
            };
        },
        components: {UserItem},
        mounted() {
            let context = this;
            axios
                .get('https://cors.io/?http://138.68.108.198:8081/user/all')
                .then(function (response) {
                    console.log(response);
                    context.users = response.data;
                    if (typeof context.users === Object) context.users = [context.users];
                });
        }
    }
</script>

<style scoped>

</style>
