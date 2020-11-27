<template>
  <div id="gallery">
    <v-container>
      <v-row>
        <v-col v-for="(n, i) in items" :key="i" cols="12" sm="4">
          <v-card class="pa-2" outlined tile>
            <router-link :to="{ path: 'Gallery/' + (i + 1) }" replace>
              <v-img
                src="https://picsum.photos/510/300?random"
                aspect-ratio="1.7"
              ></v-img>
            </router-link>

            <v-card-title>{{ n.title }} {{ i + 1 }}</v-card-title>
            <v-card-subtitle>{{ n.subtitle }} {{ i + 1 }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- pagination -->
    <div class="text-center">
      <v-pagination v-model="page" :length="6"></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    page: [],
    items: [
      {
        title: "title",
        subtitle: "subtitle",
      },
      {
        title: "title",
        subtitle: "subtitle",
      },
    ],
  }),
  methods: {},
};
</script>

<style>
</style>