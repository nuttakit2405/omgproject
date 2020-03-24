<template>
    <section>
        <navigation></navigation>
        <h5 class="center-align">Profile</h5>

        <div class="card horizontal" style="max-width:400px;margin:0 auto;" v-if="user">
            <div class="card-image" style="margin-top:25px;margin-left:10px;">
                <router-link to="/">
                <img
                    :src="user.photoURL"
                    style="width:75px;height:75px;border-radius:10%;border:1px solid #333"
                />
                </router-link>
            </div>
            <div class="card-stacked">
                <div class="card-content">
                    <p>
                        name:
                        <strong>{{user.displayName}}</strong>
                        <br />email:
                        <strong>{{user.email}}</strong>
                        <button @click="signoutButtonPressed" class="button is-danger">Logout</button>
                        <!-- <br />uid:
                        <strong>{{user.uid}}</strong>
                        <br />provider:
                        <strong class="teal-text">{{user.providerData[0].providerId}}</strong> -->
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import navigation from "@/components/NavBar.vue"
import firebase from "firebase"

export default {
    data() {
        return {
            user: null
        };
    },
    components: {
        navigation
    },
    created() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.user = user
            }
        });
    },
    methods: {
        signoutButtonPressed(e) {
            e.stopPropagation()
            firebase.auth().signOut()
            this.$router.push({ name: "Login" })
        }
    }
};
</script>
