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
      v-slot:activator
    >
      <v-btn color="deep-orange" fab v-show="!hidden">
        <v-icon>mdi-plus</v-icon>
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
    hover: true,
    hidden: false
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
