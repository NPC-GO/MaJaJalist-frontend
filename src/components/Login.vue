<template>
  <v-app id="inspire">
    <v-content fixed>
      <v-container fill-height fluid class="disableScrollBarSideEffect">
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-9 ">
              <v-toolbar color="amber" short flat>
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form class="thinHeight">
                  <v-text-field
                    label="username"
                    prepend-icon="mdi-account"
                    v-model="username"
                    dense
                  ></v-text-field>
                  <v-text-field
                    label="password"
                    prepend-icon="mdi-key"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn dark color="teal" @click="submit">submit</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
export default {
  name: "login",
  data: () => ({
    username: "",
    password: ""
  }),
  methods: {
    submit() {
      alert("wow");
    }
  }
};
</script>
<style scoped>
.thinHeight {
  margin-bottom: -20px;
  margin-top: 10px;
}
.disableScrollBarSideEffect {
  padding-right: 0px;
  padding-left: 24px;
}
</style>
