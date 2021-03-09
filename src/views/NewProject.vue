<template>

    <v-form>
      <v-container>
        <v-row>
          <v-col
              cols="12"
              sm="6"
              md="3"
          >
            <v-text-field
                label="Regular"
            ></v-text-field>
          </v-col>

          <v-col
              cols="12"
              sm="6"
              md="3"
          >
            <v-text-field
                label="Regular"
                placeholder="Placeholder"
            ></v-text-field>
          </v-col>

          <v-col
              cols="12"
              sm="6"
              md="3"
          >
            <v-text-field
                label="Solo"
                solo
            ></v-text-field>
          </v-col>

          <v-col
              cols="12"
              sm="6"
              md="3"
          >
            <v-text-field
                label="Solo"
                placeholder="Placeholder"
                solo
            ></v-text-field>
          </v-col>

          <v-col
              cols="12"
              sm="6"
              md="3"
          >
            <v-text-field
                label="Filled"
                filled
            ></v-text-field>
          </v-col>

          <v-col
              cols="12"
              sm="6"
              md="3"
          >
            <v-text-field
                label="Filled"
                placeholder="Placeholder"
                filled
            ></v-text-field>
          </v-col>

          <v-col
              cols="12"
              sm="6"
              md="3"
          >
            <v-text-field
                label="Outlined"
                outlined
            ></v-text-field>
          </v-col>

          <v-col
              cols="12"
              sm="6"
              md="3"
          >
            <v-text-field
                label="Outlined"
                placeholder="Placeholder"
                outlined
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

</template>

<script>
export default {
  data: () => ({
    item: {}
  }),
  methods: {
    async add() {
      this.item = {
        "id": 55,
        "code": "10022456",
        "name": "Московская 55",
        "description": null,
        "opened": false,
        "deleted": false,
        "bimUser": {
          "id": null,
          "firstName": null,
          "lastName": null,
          "middleName": null,
          "username": "user_12",
          "password": null,
          "enabled": false,
          "email": null,
          "projectIds": null,
          "authorities": null,
          "invitationIds": null,
          "myInvitation": null,
          "date": null },
        "fileModelDtos": [
            {
              "id": 336,
              "path":
                  "\\\\DSSTOR\\03_PROJECTS2\\10056_RBI_КИЕВСКАЯ 5\\08_СТАДИЯ РД\\03_АР\\01_МОДЕЛИНГ\\10056_К01_АР.RVT",
              "projectId": 55,
              "coordinationFileModelDto": null,
              "isCoordinationFile": false,
              "isTranslator": null,
              "filename": "10056_К01_АР",
              "deleted": null,
              "projectcode": "10022456",
              "projectname": "Московская 55",
              "lasttrans": 1596556578941,
              "isArchive": null,
              "isDataProcessing": null,
              "address": null,
              "author": null,
              "buildingName": null,
              "clientName": null,
              "issueDate": null,
              "number": null,
              "organizationDesription": null,
              "organizationName": null,
              "status": null,
              "corpusNumber": null,
              "fileModelTypes": []
            },
          {
            "id": 344,
            "path": "\\\\DSSTOR\\03_PROJECTS2\\10056_RBI_КИЕВСКАЯ 5\\08_СТАДИЯ РД\\04_КР\\01_MODELING\\10056_К01_КЖ.RVT",
            "projectId": 55,
            "coordinationFileModelDto": null,
            "isCoordinationFile": false,
            "isTranslator": null,
            "filename": "10056_К01_КЖ",
            "deleted": null,
            "projectcode": "10022456",
            "projectname": "Московская 55",
            "lasttrans": 1596534528584409194,
            "isArchive": null,
            "isDataProcessing": null,
            "address": null,
            "author": null,
            "buildingName": null,
            "clientName": null,
            "issueDate": null,
            "number": null,
            "organizationDesription": null,
            "organizationName": null,
            "status": null,
            "corpusNumber": null,
            "fileModelTypes": []
          }
        ],
        "anonymous": false
      }

      await fetch(`http://dsm.ds.do:8080/rest/projects/add`,
          {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
              Connection: 'keep-alive',
              'Authorization': 'Bearer ' + localStorage.getItem('TOKEN'),
            },
            body: JSON.stringify(this.item)
          }
      ).then((res) => res.json())
    }
  }

}
</script>
<style scoped>
</style>