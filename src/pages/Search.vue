<template>
  <div>
    <toolbar :with-search="true"></toolbar>
    <div class="search-container">
      <h3 v-if="searchQuery">Hasil Pencarian "{{ searchQuery }}"</h3>
      <h3 v-else>Semua Sekolah</h3>

      <p>Menampilkan 50 dari 1300</p>

      <div class="text-xs-right">
        <v-pagination
          v-model="page"
          :length="15"
          :total-visible="7"
          light
        ></v-pagination>
      </div>

      <table class="table table-hover mt-4">
        <thead>
          <tr>
            <th v-for="(header, idx) in headers" :key="idx">
              {{ header.name }}
            </th>
            <th v-if="method === 'review'">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(data, idx) in datas"
            :key="idx"
            @click="pushTo(`/school/${data.id}`)"
            style="cursor: pointer"
          >
            <td class="align-middle">
              {{ data.category }}
            </td>
            <td class="align-middle">
              {{ data.name }}
            </td>
            <td class="align-middle">
              {{ data.location }}
            </td>
            <td class="align-middle">
              <img
                src="../assets/star.png"
                alt="star"
                :style="method === 'review' ? 'width: 12%' : 'width: 10%'"
              />
              &nbsp;
              {{ data.score }}
            </td>
            <td
              v-if="method === 'review'"
              @click.stop="pushTo(`/review/school/${data.id}`)"
            >
              <v-btn color="blue-grey" class="text-capitalize" round dark small
                >Review</v-btn
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Toolbar from "../components/Toolbar";

export default {
  mounted() {
    this.searchQuery = this.$store.getters.searchQuery || this.$route.query.q;
    this.method = this.$route.query.method || "";
  },
  data() {
    return {
      page: 1,
      headers: [
        {
          name: "Kategori"
        },
        {
          name: "Nama Sekolah"
        },
        {
          name: "Lokasi"
        },
        {
          name: "Nilai Sekolah"
        }
      ],
      datas: [
        {
          category: "Sekolah",
          name: "SMA Negeri 8 Jakarta",
          location: "Jakarta Selatan",
          score: 4.9,
          id: 1
        },
        {
          category: "Sekolah",
          name: "SMA Negeri 8 Jakarta",
          location: "Jakarta Selatan",
          score: 4.9,
          id: 1
        }
      ],
      method: ""
    };
  },
  methods: {
    pushTo: function(path) {
      this.$router.push(path);
    }
  },
  components: {
    Toolbar
  },
  computed: {
    searchQuery: function() {
      return this.$store.getters.searchQuery || this.$route.query.q;
    }
  }
};
</script>

<style lang="scss" scoped>
.search-container {
  padding: 7rem 3rem 2rem 3rem;
  h3 {
    font-weight: 600;
  }
  p {
    color: #a9a9a9;
    font-size: 1.2rem;
    margin-bottom: 0;
  }
}
</style>

<style>
.theme--light.v-pagination .v-pagination__item--active {
  background-color: #2589bd !important;
}
</style>
