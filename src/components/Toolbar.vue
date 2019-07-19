<template>
  <v-toolbar color="primary" fixed>
    <img
      src="../assets/logo.png"
      alt="Logo"
      class="logo"
      @click="pushTo('/')"
    />

    <v-spacer></v-spacer>

    <div style="width: 35%" v-if="withSearch">
      <div class="input-group md-form form-sm form-1 pl-0">
        <div class="input-group-prepend" @click="search">
          <span class="input-group-text lighten-3" id="basic-text1">
            <mdbIcon icon="search" />
          </span>
        </div>
        <input
          class="form-control my-0 py-1"
          type="text"
          placeholder="Cari sekolah atau guru ..."
          aria-label="Search"
          v-model="searchQuery"
          v-on:keyup.enter="search"
        />
      </div>
    </div>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
        flat
        class="text-capitalize"
        @click="pushTo('/search?type=school&sort=asc')"
        >Peringkat Sekolah</v-btn
      >
    </v-toolbar-items>

    <v-btn dark class="text-capitalize primary-button login">Masuk</v-btn>
  </v-toolbar>
</template>

<script>
import { mdbIcon } from "mdbvue";

export default {
  mounted() {
    this.searchQuery = this.$store.getters.searchQuery || this.$route.query.q;
  },
  components: {
    mdbIcon
  },
  props: ["withSearch"],
  data() {
    return {
      searchQuery: ""
    };
  },
  methods: {
    search() {
      this.$store.commit("changeQuery", this.searchQuery);
      this.$router.push({ path: "search", query: { q: this.searchQuery } });
    },
    pushTo: function(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  border-radius: 3vh !important;
  margin-right: 3rem !important;
}
.logo {
  max-height: 60%;
  margin-left: 18px !important;
}
</style>

<style>
.text-capitalize {
  text-transform: capitalize;
}
.primary-button {
  background-color: #2589bd !important;
}
</style>
