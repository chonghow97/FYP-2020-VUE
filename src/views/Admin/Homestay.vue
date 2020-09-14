<template>
  <div id="homestay">
    <v-container>
      <div class="text-center">
        <v-btn class="ma-2" tile outlined color="success">
          <v-icon left>mdi-home-plus-outline</v-icon>Add
        </v-btn>
      </div>
      <!-- description, capacity, name -->
      <v-container>
        <v-card class="mx-auto" width="500">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Single-line item</v-list-item-title>
            </v-list-item-content>
            <v-btn small>1</v-btn>
            <v-btn small>2</v-btn>
          </v-list-item>

          <v-divider></v-divider>
        </v-card>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>