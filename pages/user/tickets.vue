<template>
  <section class="px-6 py-8">
        <Nav/>
        <header class="max-w-4xl mt-20 mx-auto text-center">
            <div class="max-w-xl mx-auto">
                <h1 class="text-4xl text-gray-900">
                    Tickets Purchase History
                </h1>
            </div>
        </header>

        <main class="max-w-6xl mx-auto mt-10">
           <div class="flex flex-col">
              <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                      <thead class="bg-gray-50">
                        <tr>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                          </th>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            No of tickets
                          </th>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                        </tr>
                      </thead>
                      <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="(ticket,i) in tickets" :key="i">
                          <td class="px-6 py-4 ">
                            <div class="text-gray-600">
                            {{ticket.event.name}}
                            </div>
                          </td>
                          <td class="px-6 py-4 ">
                                <div class="text-sm text-gray-500">
                                {{ticket.ticket_count}}
                                </div>
                          </td>
                          <td class="px-6 py-4">
                              <div class="text-gray-600">
                                {{ticket.created_at}}
                              </div>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
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
    middleware:'auth',
    
    async asyncData({$axios}){
        const tickets = await $axios.$get('/user/tickets')
        return{tickets: tickets.data}
    }
}
</script>

<style>

</style>
