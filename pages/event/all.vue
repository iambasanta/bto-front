<template>
    <section class="px-6 py-8">
        <Nav/>

        <header class="max-w-4xl mt-20 mx-auto text-center">
            <div class="max-w-xl mx-auto">
                <h1 class="text-4xl mb-4">
                    <span class="text-blue-500">All Events </span>
                </h1>
                <nuxt-link to="/event/create" class="block text-xs py-3 px-3 rounded-xl font-semibold bg-green-400 hover:bg-green-500 text-white uppercase">Add Event</nuxt-link>
            </div>
        </header>
        <main v-if="events.length > 0" class="max-w-6xl mx-auto mt-12">
            <article v-for="(event,i) in events" :key="i" class="mt-6 hover:bg-gray-100 rounded-xl border border-gray-100 shadow-sm transition delay-150 ease-in-out">
                <nuxt-link :to="`/event/${event.slug}`">
                    <div class="p-8 px-5 flex flex-row justify-between">
                        <div class="flex-1 flex flex-col justify-between">
                            <header>
                                <div class="mt-4">
                                    <h1 class="text-3xl"> {{event.name}} </h1>
                                    <span class="mt-2 block text-gray-700 text-md">
                                        Date: <time>{{event.date}}</time>
                                    </span>
                                    <span class="mt-2 block text-gray-500 text-xs">
                                        Venue: {{event.address}}
                                    </span>
                                </div>
                            </header>
                        </div>
                        <img :src="event.image" alt="event image" class="rounded-xl border border-gray-100 w-40 h-28">
                    </div>
                </nuxt-link>
            </article>
        </main>
        <div v-else class="mt-4 text-center text-sm">Nothing to show.</div>
    </section>   
</template>

<script>
import Nav from '~/components/layouts/Nav'
export default {
    components:{Nav},
    middleware:'admin',
    async asyncData({$axios}){
        const {data} = await $axios.$get('event/all')   
        return {events:data}
    } 
}
</script>

<style>

</style>
