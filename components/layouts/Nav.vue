<template>
    <nav class="flex justify-between items-center">
        <div class="ml-8">
            <a href="/">
                <h3 class="text-3xl font-bold">bto</h3>
            </a>
        </div>
        <div>
            <div v-if="isLoggedIn" class="mr-8">
                <button class="block h-12 w-12 rounded-full overflow-hidden border-2 border-gray-100" @click="isOpen = ! isOpen">
                    <img class="h-full w-full object-cover" src="~assets/images/avatar.png" alt="">
                </button>
                <div v-if="isOpen" class="mr-2 py-2 absolute bg-gray-100 mt-2 rounded-xl w-18 z-50" >
                    <nuxt-link to="/user/profile" class="block text-xs py-2 px-3 font-semibold hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white uppercase">Profile</nuxt-link>
                    <nuxt-link to="/user/tickets" class="block text-xs py-2 px-3 font-semibold hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white uppercase">Tickets</nuxt-link>
                    <nuxt-link to="/user/payments" class="block text-xs py-2 px-3 font-semibold hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white uppercase">Payments</nuxt-link>
                    <a class="block text-left px-3 text-xs hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white uppercase" href="" @click.prevent="logout">
                        logout
                    </a>
                </div>
            </div>
            <div v-else>
                <nuxt-link to="/user/login" class="text-xs font-semibold uppercase">Login</nuxt-link>
                <nuxt-link to="/user/register" class="bg-blue-500 ml-3 rounded-full text-xs font-semibold text-white uppercase py-3 px-4">Register</nuxt-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isOpen:false,
        }
    },
    computed:{
        isLoggedIn(){
                return this.$store.state.isLoggedIn
        },
        user(){
            return this.$store.state.user
        }
    },
    methods:{
        logout(){
            this.$axios.$get('/user/logout')
                .then((res)=>{
                        this.$cookies.remove('token')
                        this.$store.commit('setLogout')
                        this.$router.push('/user/login')
                    })
        },
    }
}
</script>

<style>

</style>
