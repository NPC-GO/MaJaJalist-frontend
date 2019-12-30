<template>
  <v-list v-show="items.length" class="transparent mx-2">
    <v-list-item-group multiple v-model="inActiveItems">
      <template v-for="item in items">
        <v-card :key="`${item.id}`">
          <v-list-item
            :ref="item.id"
            :value="item.id"
            active-class="amber"
            class="my-3"
            transition="scroll-y-transition"
            @click.stop="onItemClick"
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
                  v-show="true"
                  :input-value="active"
                  :true-value="item"
                  color="white"
                />
              </v-list-item-action>
              <div class="mx-2" right style="color:gray">
                {{ "@" + "npcgo" }}
              </div>
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
  name: "notdonepage",
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
    },
    onItemClick() {
      this.$nextTick(() => {
        this.$store.dispatch("setPageDynamicConfig", {
          name: "selectedItemInCurrentPage",
          data: this.inActiveItems
        });
      });
    }
  },
  computed: {
    ...mapGetters({ items: "getUnfinishedTodo" })
  },
  mounted() {
    this.$store.dispatch("setPageDynamicConfig", {
      name: "currentPage",
      data: this.$router.currentRoute.name
    });
  }
};
</script>

<style>
.transparent {
  background-color: transparent !important;
  border-color: transparent !important;
}
</style>
