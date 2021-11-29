<template>
    <section class="px-6 py-8">
        <main class="max-w-lg mx-auto mt-10">
            <div class="w-screen h-screen fixed inset-0 bg-gray-500 opacity-25" @click="$emit('close')"></div>
            <div class="absolute top-4 flex justify-center inset-x-0 ">
                <div class="border border-gray-200 bg-white p-6 rounded-xl z-30">
                    <div class="mt-2">
                        <h1 class="text-center font-semibold text-xl">Book Your Seat Now !</h1>
                    </div>
                    <div class="mt-6">
                        <input v-model="name" class="border border-gray-200 p-2 w-full rounded" type="text" placeholder="Enter Your Name">
                    </div>
                    <!-- Stripe Elements Placeholder -->
                    <div id="card-element" class="mt-6 border border-gray-200 p-3 w-full rounded"></div>
                    <div class="mt-6">
                        <input v-model="ticket_count" class="border border-gray-200 p-2 w-full rounded text-center" type="number" min="1" step="1" >
                    </div>
                    <div class="mt-6">
                        <button id="card-button" class="uppercase bg-blue-500 text-white font-semibold px-10 py-2 rounded-2xl hover:bg-blue-600 w-full" @click="proceed">
                            <div class="flex justify-center">

                                <div v-if="isLoading" class="flex justify-center items-center">
                                    <div class="animate-spin rounded-full h-4 w-4 border-b-2 "></div>
                                </div>

                                <p v-else>
                                    Pay ${{price}}
                                </p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </section>
</template>

<script>
export default {
    props:{
        amount:{type:Number,default:0},
        eventSlug:{type:String,default:''}
    },
    data(){
        return {
            name:'',
            ticket_count:1,
            cardElement:null,
            stripe:null,
            isLoading:false
        }
    },
    computed:{
        price(){
            return this.amount * this.ticket_count
        }
    },
    mounted(){
        this.stripe = window.Stripe(process.env.STRIPE_API_KEY);
        const elements = this.stripe.elements();
        this.cardElement = elements.create('card');
        this.cardElement.mount('#card-element');
    },
    methods:{
        async proceed(){
            if(this.isLoading) return
            await this.verifyCard()
        },
        async verifyCard(){
            this.isLoading = true
            const { paymentMethod, error } = await this.stripe.createPaymentMethod(
                'card', this.cardElement, {
                    billing_details: { name: this.name }
                }
            );

            if (error) {
                this.isLoading = false
            } else {
                await this.makeTransaction(paymentMethod)
                this.$emit('close')
                this.$router.push('/event')
                this.isLoading = false
            }
        },
        async makeTransaction(paymentMethod){
            await this.$axios.$post(`payment/${this.eventSlug}`,{
                paymentMethod,
                ticket_count:this.ticket_count,
            })
        }
    }
}
</script>

<style>

</style>
