<template>
  <v-list shaped v-show="items.length" class="transparent mx-2">
    <v-list-item-group multiple v-model="inActiveItems">
      <template v-for="item in items">
        <v-card :key="`${item.id}`">
          <v-list-item
            :ref="item.id"
            :value="item.id"
            active-class="amber"
            class="my-3"
          >
            <template v-slot:default="{ active }">
              <v-icon :color="getIconColor(item.status.completed)" left>{{
                getIcon(item.status.completed)
              }}</v-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.textContent" />
              </v-list-item-content>
              <v-list-item-action>
                <v-checkbox
                  :input-value="active"
                  :true-value="item"
                  color="white"
                />
              </v-list-item-action>
            </template>
          </v-list-item>
        </v-card>
      </template>
    </v-list-item-group>
  </v-list>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "donepage",
  data: () => ({
    inActiveItems: []
  }),
  methods: {
    getIcon(type) {
      let icon;
      if (type === false) {
        icon = "mdi-alert-circle-outline";
      } else if (type === true) {
        icon = "mdi-check-circle-outline";
      }
      return icon;
    },
    getIconColor(type) {
      let iconColor;
      if (type === false) {
        iconColor = "red";
      } else if (type === true) {
        iconColor = "green";
      }
      return iconColor;
    }
  },
  computed: {
    ...mapGetters({ items: "getFinishedTodo" })
  }
};
</script>

<style>
.transparent {
  background-color: transparent !important;
  border-color: transparent !important;
}
</style>
