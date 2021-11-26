<template>
    <section class="px-6 py-8">
        <Nav />
        <main class="max-w-lg mx-auto mt-10 ">
            <div class="border border-gray-200 p-6 rounded-xl">
                <h1 class="text-center font-bold text-xl">Profile!</h1>
                <div class="mt-10 mx-auto">
                    <div class="mt-6">
                        <p>
                            <span class="mb-2 uppercase font-bold text-xs text-gray-700">Name : </span>
                            {{user.name}}
                       </p>
                    </div>
                    <div class="mt-6">
                        <p>
                            <span class="mb-2 uppercase font-bold text-xs text-gray-700">Email : </span>
                            {{user.email}}
                       </p>
                    </div>
                </div>
            </div>
        </main>
    </section>
</template>

<script>
import Nav from '~/components/layouts/Nav'
export default {
    components:{Nav},
    computed:{
        user(){
            return this.$store.state.user
        }
    },
}
</script>

<style>

</style>
