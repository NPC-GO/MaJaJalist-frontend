<template>
  <v-navigation-drawer app class="py-2" clipped v-model="drawer">
    <template v-slot:prepend>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img
            src="https://avatars1.githubusercontent.com/u/58970961?s=200&v=4"
            alt=""
          />
        </v-list-item-avatar>
        <v-list-item-content class="font-weight-bold">
          <v-list-item-title
            ><v-icon v-if="true" small color="" left>mdi-dev-to</v-icon
            >NPC-GO</v-list-item-title
          >
          <v-list-item-subtitle
            >{{ "@" + "npcgo"
            }}<v-icon v-if="true" color="blue" right x-small
              >mdi-check-decagram</v-icon
            ></v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <div class="pa-2 text-center">
        <v-btn outlined block color="amber darken-3">
          <v-icon left>mdi-logout</v-icon>
          登出
        </v-btn>
      </div>
    </template>

    <v-divider />
    <v-list dense>
      <template v-for="(item, i) in drawerConfigs">
        <v-list-item :to="item.router" :key="i">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title :class="item.class">{{
              item.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "navigationdrawer",
  data: () => ({
    drawer: null,
    drawerConfigs: [
      {
        router: "/",
        icon: "mdi-clipboard-list",
        text: "所有項目",
        class: "font-weight-bold"
      },
      {
        router: "/unfinished",
        icon: "mdi-clipboard-alert",
        text: "代辦事項",
        class: ""
      },
      {
        router: "/finished",
        icon: "mdi-clipboard-check",
        text: "已完成",
        class: ""
      },
      {
        router: "/trashcan",
        icon: "mdi-trash-can",
        text: "垃圾桶",
        class: ""
      },
      {
        router: "/settings",
        icon: "mdi-settings",
        text: "設定",
        class: ""
      }
    ]
  }),
  methods: {
    onDrawerClicked() {
      this.drawer = !this.drawer;
    }
  }
};
</script>

<style></style>
