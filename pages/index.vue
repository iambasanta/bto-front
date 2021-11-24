<template>
  <section class="px-6 py-8">
        <Nav/>

        <header class="max-w-4xl mt-20 mx-auto text-center">
            <div class="max-w-xl mx-auto">
                <h1 class="text-4xl">
                    Buy <span class="text-blue-500">Event Tickets</span> Online
                </h1>
                <p class="text-xm mt-14">
                    Hurry up and get the Early Bird tickets while they are availables
                </p>
            </div>
        </header>

        <main class="max-w-6xl mx-auto mt-20">
            <article class="mt-2 hover:bg-gray-100 rounded-xl transition delay-150 ease-in-out">
                <div class="p-8 px-5 flex">
                    <div class="flex-1 mr-8">
                        <img src="~assets/images/illustration-1.png" alt="event image" class="rounded-xl">
                    </div>
                    <div class="flex-1 flex flex-col justify-between">
                        <header>
                            <div class="mt-4">
                                <h1 class="text-3xl"> This is a big title and it will look great in two or three lines. woohoo!</h1>
                                <span class="mt-2 block text-gray-400 text-xs">
                                    Date: <time>18 November 2021</time>
                                </span>
                            </div>
                        </header>

                        <div class="text-sm mt-2">
                            <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, illum aliquid hic perferendis quis accusantium cum consectetur aspernatur vitae illo odit, maxime veniam nam aliquam corrupti, provident ullam similique sit!
                            </p>
                            <p class="mt-4">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, illum aliquid hic perferendis quis accusantium cum consectetur aspernatur vitae illo odit, maxime veniam nam aliquam corrupti, provident ullam similique sit!
                            </p>
                        </div>

                        <footer class=" flex justify-between items-center mt-8">
                            <div >
                                <a href="#" class="bg-blue-500 ml-3 rounded-full text-xs font-semibold text-white uppercase py-2 px-3">Book Now</a>
                            </div>

                            <div >
                                <a href="#" class="bg-gray-200 font-semibold rounded-full py-2 px-6">Read More</a>
                            </div>
                        </footer>
                    </div>
                </div>
            </article>
            <article class="mt-2 hover:bg-gray-100 rounded-xl transition delay-150 ease-in-out">
                <div class="p-8 px-5 flex">
                    <div class="flex-1 mr-8">
                        <img src="~assets/images/illustration-1.png" alt="event image" class="rounded-xl">
                    </div>
                    <div class="flex-1 flex flex-col justify-between">
                        <header>
                            <div class="mt-4">
                                <h1 class="text-3xl"> This is a big title and it will look great in two or three lines. woohoo!</h1>
                                <span class="mt-2 block text-gray-400 text-xs">
                                    Date: <time>18 November 2021</time>
                                </span>
                            </div>
                        </header>

                        <div class="text-sm mt-2">
                            <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, illum aliquid hic perferendis quis accusantium cum consectetur aspernatur vitae illo odit, maxime veniam nam aliquam corrupti, provident ullam similique sit!
                            </p>
                            <p class="mt-4">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, illum aliquid hic perferendis quis accusantium cum consectetur aspernatur vitae illo odit, maxime veniam nam aliquam corrupti, provident ullam similique sit!
                            </p>
                        </div>

                        <footer class=" flex justify-between items-center mt-8">
                            <div >
                                <a href="#" class="bg-blue-500 ml-3 rounded-full text-xs font-semibold text-white uppercase py-2 px-3">Book Now</a>
                            </div>

                            <div >
                                <a href="#" class="bg-gray-200 font-semibold rounded-full py-2 px-6">Read More</a>
                            </div>
                        </footer>
                    </div>
                </div>
            </article>
        </main>

        <footer></footer>
    </section>   
</template>

<script>
import Nav from '~/components/layouts/Nav'
export default {
    components:{Nav},
    middleware:'auth',
}
</script>

<style>

</style>
