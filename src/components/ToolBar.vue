<template>
  <v-app-bar app clipped-left color="deep-purple accent-4" dark>
    <v-app-bar-nav-icon @click.stop="onDrawerClicked" />
    <v-toolbar-title>
      <b>MaJaJaList</b>
    </v-toolbar-title>
    <v-spacer />
    <v-menu right bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="n in 5" :key="n" @click="() => {}">
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: "toolbar",
  methods: {
    onDrawerClicked() {
      this.$emit("onDrawerClicked");
    }
  }
};
</script>
