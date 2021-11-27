<template>
    <section class="px-6 py-8">
        <Nav/>
        <main class="max-w-6xl mx-auto mt-20">
            <article class="mt-2 bg-gray-100 rounded-xl shadow-sm">
                <div class="p-8 px-5 flex">
                    <div class="flex-1 mr-8">
                        <img :src="event.image" alt="event image" class="rounded-xl">
                    </div>
                    <div class="flex-1 flex flex-col justify-between">
                        <header>
                            <div class="mt-4">
                                <h1 class="text-3xl font-semibold text-gray-800">{{event.name}}</h1>
                                <p class=" mt-2 text-md ">
                                {{event.description}}
                                </p>
                            </div>
                        </header>

                        <div class="mt-2">
                            <div class="flex flex-row mt-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round">
                                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                  <line x1="16" y1="2" x2="16" y2="6" />
                                  <line x1="8" y1="2" x2="8" y2="6" />
                                  <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                                <span class="ml-2 block text-gray-600 text-sm">
                                    <time>{{event.date}}</time>
                                </span>
                            </div>

                            <div class="flex flex-row mt-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round">
                                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                  <circle cx="12" cy="10" r="3" />
                                </svg>
                                <span class="ml-2 block text-gray-600 text-sm">
                                    {{event.address}}
                                </span>
                            </div>

                            <div class="flex flex-row mt-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round">
                                  <line x1="12" y1="1" x2="12" y2="23" />
                                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                                <span class="ml-2 block text-gray-600 text-sm">
                                    {{event.ticket_price}}
                                </span>
                            </div>

                            <div class="flex flex-row mt-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round">
                                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                                  <line x1="7" y1="7" x2="7.01" y2="7" />
                                </svg>
                                <span class="ml-2 block text-gray-600 text-sm">
                                    {{event.total_tickets}}
                                </span>
                            </div>
                        </div>

                        <footer class=" flex justify-between items-center mt-8">
                            <div >
                                <a href="#" class="bg-blue-500 ml-3 rounded-full text-xs font-semibold text-white uppercase py-2 px-3">Buy Now</a>
                            </div>
                            <div class="flex justify-between">
                                <div v-if="isAdmin" class="text-green-500 cursor-pointer" @click="editEvent">
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round">
                                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                    </svg>
                                </div>

                                <div v-if="isAdmin" class="ml-4 text-red-500 cursor-pointer" @click="deleteEvent">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <polyline points="3 6 5 6 21 6" />
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    </svg>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </article>
        </main>
    </section>   
</template>

<script>
import Nav from '~/components/layouts/Nav'
export default {
    components:{Nav},
    async asyncData({$axios,params}){
        const {data} = await $axios.$get(`event/${params.show}`)   
        return {event:data}
    } ,
    computed:{
        isAdmin(){
            return this.$store.state.user.is_admin
        }
    },
    methods:{
        editEvent(){
            this.$router.push(`/event/${this.$route.params.show}/edit`)
        },
        deleteEvent(){
            this.$axios.$delete(`/event/${this.$route.params.show}`)
            this.$router.push('/event/all')
        }
    }
}
</script>

<style>

</style>
