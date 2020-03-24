<template>
    <nav style="background-color: #DBC1C1;">
        <div class="container">
            <router-link to="/" class="brand-logo" tag="a">Home</router-link>
            <ul id="nav-mobile" class="right">
                <li v-show="!user">
                    <router-link to="/login">Login</router-link>
                </li>
                <li v-show="user" >
                    <router-link to="/profile">
                      <div style="display:flex;align-items: center;">
                        <img :src="user.photoURL" style="width:45px;height:45px;border-radius:50%;border:1px solid #333;margin-right:5px;"/>
                        <p>{{user.displayName}}</p>
                      </div>
                    </router-link>
                </li>
                <li v-show="user">
                    <a @click="signoutButtonPressed">Logout</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import firebase from "firebase"
export default {
    data() {
        return {
            user: null
        }
    },
    created() {
        firebase.auth().onAuthStateChanged(user => {
            this.user = user
        })
    },
    methods: {
        signoutButtonPressed(e) {
            e.stopPropagation()
            firebase.auth().signOut()
            this.$router.push({ name: "Login" })
        }
    }
}
</script>
