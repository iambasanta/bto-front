<template>
    <section class="px-6 py-8">
        <Nav/>

        <main class="max-w-lg mx-auto mt-10 ">
            <div class="border border-gray-200 p-6 rounded-xl">
                <h1 class="text-center font-bold text-xl">Register!</h1>

                <form class="mt-10" method="POST" @submit.prevent="submit">
                    <div class="mt-6">
                        <label for="name" class="block mb-2 uppercase font-bold text-xs text-gray-700">Name</label>
                        <input id="name" v-model="form.name" class="border border-gray-200 p-2 w-full rounded" name="name" type="text" autocomplete="name">
                        <error-field :errors="errors" field="name"/>
                    </div>
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
                        <label for="confirm_password" class="block mb-2 uppercase font-bold text-xs text-gray-700">Confirm Password</label>
                        <input id="confirm_password" v-model="form.password_confirmation" class="border border-gray-200 p-2 w-full rounded" name="password_confirmation" type="password" autocomplete="password">
                    </div>

                    <div class="mt-6">
                        <nuxt-link to="/user/login" class="text-xs font-semibold text-gray-700 hover:text-blue-500">Already registered ?</nuxt-link>
                    </div>

                    <div class="mt-6">
                        <button type="submit" class="uppercase bg-blue-500 text-white font-semibold px-10 py-2 rounded-2xl hover:bg-blue-600">
                        Register
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
    data() {
        return {
            form: {
                    email:'',
                    name:'',
                    password:'',
                    password_confirmation:'',
                },
            errors: {}
        }
    },

    methods:{
        submit() {
            this.$axios.$post('user/register',this.form)
                this.$router.push('/user/login')
                .catch((e) => (this.errors = e.response.data.errors))
        }
    }
}
</script>

<style>

</style>
