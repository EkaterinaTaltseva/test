<template>
  <v-card class="mx-auto" max-width="600">
    <v-card-text>
      Автоизация пользователя.
      <p> Для продолжения работы введите логин и пароль <br> dsuser / 38e13639555d5bbfce09b959b6b982b4 </p>
    </v-card-text>
  <v-form @submit.prevent="auth" >
    <v-container >
      <v-row class="mx-auto" >
        <v-spacer></v-spacer>
        <v-col cols="12" >
          <v-text-field
              v-model.trim="login"
              label="login"
              required
          ></v-text-field>
        </v-col>
        <v-col cols="12" >
          <v-text-field
              v-model.trim="password"
              label="password"
              required
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="text-right" >
          <v-btn elevation="2"
                 type="submit"
          >Войти
          </v-btn>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
  </v-form>
    </v-card>
</template>
<script>
export default {
  data: () => ({
    login: '',
    password: '',
  }),
  methods: {
    async auth() {
      try {
        let resAuth = await fetch(`http://dsm.ds.do:8080/rest/auth/authenticate`, {
          method: 'POST',
          body: JSON.stringify({
            "username": this.login,
            "password": this.password
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => res.json())

        this.logIn(resAuth)

      } catch (e) {
        this.$store.commit('setError', e)
        throw e
      }
    },

    logIn(resAuth) {
      this.$store.commit('auth', resAuth)
      this.$router.push('/table')
    }
  }
}
</script>
<style scoped>
</style>
