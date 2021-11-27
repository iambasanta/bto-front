<template>
    <section class="px-6 py-8">
        <Nav />
        <main class="max-w-lg lg:max-w-4xl mx-auto mt-10 ">
            <div class="border border-gray-200 p-6 rounded-xl">
                <h1 class="text-center font-bold text-xl">Create Event !</h1>

                <form method="post" class="mt-10" @submit.prevent="submit" >
                    <div class="mt-6">
                        <label for="image" class="block mb-2 uppercase font-bold text-xs text-gray-700">Image</label>
                        <input id="image" class="border border-gray-200 p-2 w-full rounded" name="image" type="file" autocomplete="image" @change="handleFile">
                        <error-field :errors="errors" field="image"/>
                    </div>

                    <div class="mt-6">
                        <label for="name" class="block mb-2 uppercase font-bold text-xs text-gray-700">Name</label>
                        <input id="name" v-model="form.name" class="border border-gray-200 p-2 w-full rounded" name="name" type="text" autocomplete="name">
                        <error-field :errors="errors" field="name"/>
                    </div>

                    <div class="mt-6 flex flex-col md:flex-row">
                        <div class="w-md w-full md:mr-2">
                            <label for="description" class="block mb-2 uppercase font-bold text-xs text-gray-700">Event Description</label>
                            <textarea id="description" v-model="form.description" class="border border-gray-200 p-2 w-full rounded" name="description" type="text" cols="30" rows="5"></textarea>
                            <error-field :errors="errors" field="description"/>
                        </div>
                        <div class="w-md w-full md:ml-2">
                            <label for="address" class="block mb-2 uppercase font-bold text-xs text-gray-700">Event Venue</label>
                            <textarea id="address" v-model="form.address" class="border border-gray-200 p-2 w-full rounded" name="address" type="text" cols="30" rows="5"></textarea>
                            <error-field :errors="errors" field="address"/>
                        </div>
                    </div>

                    <div class="mt-6 flex flex-col md:flex-row">
                        <div class="w-full mb-2 md:mr-2">
                            <label for="ticket_price" class="block mb-2 uppercase font-bold text-xs text-gray-700">Event Price</label>
                            <input id="ticket_price" v-model="form.ticket_price" class="border border-gray-200 p-2 w-full rounded" name="ticket_price" type="number" autocomplete="ticket_price">
                            <error-field :errors="errors" field="ticket_price"/>
                        </div>
                        <div class="w-md w-full md:ml-2">
                            <label for="total_tickets" class="block mb-2 uppercase font-bold text-xs text-gray-700">Total No of Tickets</label>
                            <input id="total_tickets" v-model="form.total_tickets" class="border border-gray-200 p-2 w-full rounded" name="total_tickets" type="number" autocomplete="total_tickets">
                            <error-field :errors="errors" field="total_tickets"/>
                        </div>
                    </div>

                    <div class="mt-6 flex flex-col md:flex-row">
                        <div class="w-full mb-2 md:mr-2">
                            <label for="published_at" class="block mb-2 uppercase font-bold text-xs text-gray-700">Publish At</label>
                            <input id="published_at" v-model="form.published_at" class="border border-gray-200 p-2 w-full rounded" name="published_at" type="date" autocomplete="published_at">
                        </div>
                        <div class="w-full mb-2 md:ml-2">
                            <label for="date" class="block mb-2 uppercase font-bold text-xs text-gray-700">Event Date</label>
                            <input id="date" v-model="form.date" class="border border-gray-200 p-2 w-full rounded" name="date" type="date" autocomplete="date">
                            <error-field :errors="errors" field="date"/>
                        </div>
                    </div>

                    <div class="mt-6">
                        <button type="submit" class="uppercase bg-blue-500 text-white font-semibold px-10 py-2 rounded-2xl hover:bg-blue-600">
                        Create
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
    components:{Nav,ErrorField},
    middleware:'admin',
    data(){
        return{
            form:{
               name:'',
               description:'',
               address:'',
               image:'',
               ticket_price:'',
               total_tickets:'',
               published_at:'',
               date:''
            },
            errors:{}
        }
    },
    methods:{
        handleFile(e){
            this.form.image = e.target.files[0]
        },
        submit(){
            const newEvent = new FormData()
            Object.keys(this.form).forEach((key)=>{
                newEvent.set(key,this.form[key])
            })
            this.$axios.$post('event',newEvent,{
                headers:{
                    'content-type':'multipart/form-data'
                }
            })
            .then((res)=>{
                this.$router.push('/event/all')
            })
            .catch((e)=>(this.errors = e.response.data.errors))
        }
    }
}
</script>

<style>

</style>
