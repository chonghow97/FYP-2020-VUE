<template>
  <div id="menu">
    <v-list-item two-line :class="miniVariant && 'px-0'" @click.stop="dialog = true">
      <v-list-item-avatar>
        <img src="https://randomuser.me/api/portraits/men/81.jpg" />
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>Sign in</v-list-item-title>
        <v-list-item-subtitle>Customer</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link :to="item.link">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <!-- Register form -->
    <v-dialog v-model="dialog" max-width="500">
      <Register></Register>
    </v-dialog>
  </div>
</template>



<script>
import Register from "@/components/Register.vue";
export default {
  components: { Register },
  data: () => ({
    dialog: false,
  }),
  props: { items: { title: String, icon: String, link: String } },
  methods: {
    welcome() {
      alert("atest");
    },
  },
};
</script>

<style></style>
