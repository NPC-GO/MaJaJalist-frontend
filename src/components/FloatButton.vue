<template>
  <v-card id="create" dark>
    <v-speed-dial
      :bottom="bottom"
      :direction="direction"
      :left="left"
      :open-on-hover="hover"
      :right="right"
      :top="top"
      class="my-7"
      v-model="fab"
    >
      <template v-slot:activator>
        <v-btn color="blue darken-2" fab v-model="fab">
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-cat</v-icon>
        </v-btn>
      </template>
      <v-btn v-show="true" color="indigo" fab small>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn :disabled="false" v-show="true" color="green" fab small>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>

      <v-btn v-show="true" color="red" :disabled="false" fab small>
        <v-icon>mdi-delete</v-icon>
      </v-btn>
      <v-btn v-show="true" color="amber" :disabled="false" fab small>
        <v-icon>mdi-delete-restore</v-icon>
      </v-btn>
      <v-btn v-show="true" color="amber" :disabled="false" fab small>
        <v-icon>mdi-autorenew</v-icon>
      </v-btn>
    </v-speed-dial>
  </v-card>
</template>

<script>
export default {
  name: "floatbutton",
  data: () => ({
    top: false,
    right: true,
    bottom: true,
    left: false,
    direction: "top",
    fab: false,
    hover: true
  }),
  watch: {
    top(val) {
      this.bottom = !val;
    },
    right(val) {
      this.left = !val;
    },
    bottom(val) {
      this.top = !val;
    },
    left(val) {
      this.right = !val;
    }
  }
};
</script>
<style scoped>
#create .v-speed-dial {
  position: fixed;
  z-index: 5;
}

#create .v-btn--floating {
  position: fixed;
}
</style>
