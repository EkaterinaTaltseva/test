<template>
  <v-card max-width="1000" class="mx-auto" >

    <div class="pt-10 pl-5">
        <v-btn elevation="2"
               class="mr-2 mb-1"
               @click="addNewProject"
        > Создать проект </v-btn>
    </div>

    <v-simple-table>
      <template >
        <thead>
        <tr >
          <th class="text-left "
              v-for="head in headers"
              :key="head.value"
              >
                {{ head.text }}
          </th>
        </tr>
        </thead>

        <tbody>
        <tr v-for="item in dataTable"
            :key="item.number"
        >
          <td >{{ item.id }}</td>
          <td >{{ item.code }}</td>
          <td >{{ item.name }}</td>
          <td >  </td>
          <td > Статус </td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>

  </v-card>
</template>
<script>

export default {
  data: () => ({
    headers: [
      { text: '№', value: 'number'},
      { text: 'Код',  value: 'name'},
      { text: 'Название', value: 'date'},
      { text: 'Описание', value: 'description'},
      { text: 'Здоровье проекта', value: 'status'},
    ],
    dataTable : []
  }),
  async mounted() {
    try {
      let resDataTable = await fetch(`http://dsm.ds.do:8080/rest/projects`,
          {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
              Connection: 'keep-alive',
              'Authorization': 'Bearer ' + localStorage.getItem('TOKEN') ,
            }
          }
      ).then((res) => res.json())

      console.log(resDataTable)
      this.dataTable = resDataTable

    } catch (e) {
      throw e
    }
  },
  methods: {
    addNewProject() {

    },


  },
  components: {},
}
</script>
<style scoped>
td {
  word-wrap: break-word;
  max-width: 250px;
}
</style>
