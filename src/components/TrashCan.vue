<template>
  <v-list
    :disabled="!pageDConfig.selectionMode"
    v-show="items.length"
    class="transparent mx-2"
  >
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
              <v-icon color="gray" left>{{
                getIcon(item.status.completed)
              }}</v-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.textContent" />
              </v-list-item-content>
              <v-list-item-action>
                <v-scale-transition>
                  <v-checkbox
                    v-show="pageDConfig.selectionMode"
                    :input-value="active"
                    :true-value="item"
                    color="white"
                  />
                </v-scale-transition>
              </v-list-item-action>
              <v-scale-transition>
                <div class="mx-2" right style="color:gray">
                  {{ "@" + "npcgo" }}
                </div>
              </v-scale-transition>
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
  name: "trashcan",
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
    ...mapGetters({
      items: "getDeletedTodo",
      pageDConfig: "getPageDynamicConfig"
    })
  },
  mounted() {
    this.$emit("itemsPageInit");
  }
};
</script>

<style>
.transparent {
  background-color: transparent !important;
  border-color: transparent !important;
}
</style>
