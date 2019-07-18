<template>
  <div>
    <toolbar :with-search="true"></toolbar>
    <div class="review-container">
      <h2 class="bold">
        SMA 8 Jakarta
      </h2>
      <h5>Jakarta Selatan</h5>
      <p>Berikan penilaianmu untuk SMA 8 Jakarta</p>
      <div class="criteria">
        <v-layout row wrap v-for="i in 3" :key="i">
          <v-flex xs3 class="align-middle">
            <p style="margin-bottom: 0; margin-top: .5rem;">Lokasi</p>
          </v-flex>
          <v-flex xs4
            ><v-rating
              v-model="rating[i - 1]"
              background-color="#2589bd"
              color="#2589bd"
              hover
            ></v-rating
          ></v-flex>

          <v-flex xs4>a</v-flex>
        </v-layout>
      </div>
    </div>
  </div>
</template>

<script>
import Toolbar from "../components/Toolbar";

export default {
  components: {
    Toolbar
  },
  data() {
    return {
      rating: []
    };
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.review-container {
  padding: 7rem 3rem 2rem 3rem;
  h5 {
    color: #a9a9a9;
    margin-bottom: 1rem;
  }
  .criteria {
    padding: 0 3rem;
  }
}
</style>
