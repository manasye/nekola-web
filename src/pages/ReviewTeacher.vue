<template>
  <div>
    <toolbar :with-search="true"></toolbar>
    <div class="review-container">
      <h2 class="bold">
        Budi Santoso
      </h2>
      <h5>SMA 8 Jakarta</h5>
      <p>Berikan penilaianmu untuk Budi Santoso</p>
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

      <div class="chips-container">
        <v-layout>
          <v-flex xs6>
            <v-combobox
              label="Pilih 3 kata yang menggambarkan Budi Santoso"
              v-model="selected"
              :items="characters"
              multiple
              chips
            ></v-combobox>
          </v-flex>
        </v-layout>
      </div>

      <v-textarea
        solo
        name="input-7-1"
        label="Berikan komentar Anda..."
        v-model="comment"
        no-resize
        style="width: 65%"
      ></v-textarea>
      <v-btn class="white--text text-capitalize primary-button" round>
        Submit
      </v-btn>
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
      rating: [],
      comment: "",
      chips: [],
      selected: ["Programming"],
      characters: ["Programming", "Design", "Vue", "Vuetify"]
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
    margin-bottom: 1.5rem;
  }
  .chips-container {
    margin-bottom: 2rem;
  }
}
</style>
