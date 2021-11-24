<template>
    <section class="px-6 py-8">
        <Nav />
        <main class="max-w-lg mx-auto mt-10 ">
            <div class="border border-gray-200 p-6 rounded-xl">
                <h1 class="text-center font-bold text-xl">Login!</h1>

                <form method="post" class="mt-10" @submit.prevent="submit">
                    <div class="mt-6">
                        <label for="email" class="block mb-2 uppercase font-bold text-xs text-gray-700">Email</label>
                        <input id="email" v-model="form.email" class="border border-gray-200 p-2 w-full rounded" name="email" type="email" autocomplete="email">
                        <error-field :errors="errors" field="email"/>
                    </div>

                    <div class="mt-6">
                        <label for="password" class="block mb-2 uppercase font-bold text-xs text-gray-700">Password</label>
                        <input id="password" v-model="form.password" class="border border-gray-200 p-2 w-full rounded" name="password" type="password" autocomplete="password">
                        <error-field :errors="errors" field="password"/>
                    </div>

                    <div class="mt-6">
                        <button type="submit" class="uppercase bg-blue-500 text-white font-semibold px-10 py-2 rounded-2xl hover:bg-blue-600">
                        Login
                        </button>
                    </div>

                </form>
            </div>
        </main>
    </section>
</template>

<script>
import ErrorField from '~/components/util/ErrorField'
import Nav from '~/components/layouts/Nav'
export default {
    components:{ErrorField,Nav},
    middleware:'guest',
    data(){
        return{
            form:{
                    email:'',
                    password:'',
                },
            errors:{}
        }
    },

    methods:{
        submit(){
            this.$axios.$post('user/login',this.form)
                .then((res) =>{
                    this.$cookies.set('token',res.access_token)
                    this.$axios.defaults.headers.common.authorization = `Bearer ${res.access_token}`
                    this.$axios.$get('user/profile').then((res)=>{
                        this.$store.commit('setLogin',res.data)
                        this.$router.push('/')
                    })
                })
                .catch((e) => (this.errors = e.response.data.errors))
        }
    }
}
</script>

<style>

</style>
