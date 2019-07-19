<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <toolbar :with-search="false"></toolbar>

    <section class="home-header">
      <h1>Temukan Sekolah Impianmu <br />di Sini!</h1>
      <div class="search-container">
        <v-layout>
          <v-flex xs 2> </v-flex>
          <v-flex xs 8>
            <div class="input-group md-form form form-1  ">
              <div class="input-group-prepend" @click="search">
                <span class="input-group-text lighten-3" id="basic-text1">
                  <mdbIcon icon="search" />
                </span>
              </div>
              <input
                class="form-control my-0 py-1 input-search"
                type="text"
                placeholder="Cari Sekolah atau Guru..."
                aria-label="Search"
                v-model="searchQuery"
                v-on:keyup.enter="search"
              />
            </div>
          </v-flex>
          <v-flex xs 2> </v-flex>
        </v-layout>
      </div>
      <div class="button-container">
        <v-layout>
          <v-flex xs4>
            <v-btn
              large
              dark
              class="text-capitalize "
              @click="pushTo('/compare')"
              >Bandingkan Sekolah</v-btn
            >
          </v-flex>
          <v-flex xs4>
            <v-btn
              large
              dark
              class="text-capitalize"
              @click="pushTo('/search?method=review&type=school')"
              >Review Sekolah</v-btn
            >
          </v-flex>
          <v-flex xs4>
            <v-btn
              large
              dark
              class="text-capitalize"
              @click="pushTo('/search?method=review&type=teacher')"
              >Review Guru</v-btn
            >
          </v-flex>
        </v-layout>
      </div>
    </section>

    <section class="home-bottom">
      <v-layout>
        <v-flex xs6>
          <div class="fav-school">
            <v-layout>
              <v-flex xs8>
                <h2 class="text-left">Sekolah Terfavorit</h2>
              </v-flex>
              <v-flex xs4>
                <b-form-select
                  v-model="selectedPlace"
                  :options="places"
                ></b-form-select>
              </v-flex>
            </v-layout>

            <table class="table table-hover mt-4">
              <thead>
                <tr>
                  <th v-for="(header, idx) in headers" :key="idx">
                    {{ header.name }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(school, idx) in schools"
                  :key="idx"
                  @click="pushTo(`/school/${school.id}`)"
                  style="cursor: pointer"
                >
                  <td class="align-middle">
                    {{ school.name }}
                  </td>
                  <td>
                    <img src="../assets/star.png" alt="star" /> &nbsp;
                    {{ school.score }}
                  </td>
                </tr>
              </tbody>
            </table>
            <v-btn
              dark
              class="text-capitalize "
              @click="pushTo('/search?type=school')"
              >Lihat Lainnya</v-btn
            >
          </div>
        </v-flex>

        <v-flex xs6>
          <v-layout row wrap style="padding: 3rem 7rem 0 0">
            <v-flex
              xs6
              v-for="city in landmarks"
              :key="city.title"
              class="landmark-card"
              @click="pushTo(city.route)"
            >
              <v-card>
                <v-img :src="city.image" max-height="230"></v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </section>
  </div>
</template>

<script>
import Toolbar from "../components/Toolbar";
import { mdbIcon } from "mdbvue";

export default {
  data() {
    return {
      searchQuery: "",
      headers: [
        {
          name: "Nama Sekolah"
        },
        {
          name: "Nilai Sekolah"
        }
      ],
      schools: [
        {
          name: "SMA Negeri 8 Jakarta",
          score: 4.9,
          id: 1
        },
        {
          name: "SMA Negeri 8 Jakarta",
          score: 4.9,
          id: 1
        },
        {
          name: "SMA Negeri 8 Jakarta",
          score: 4.9,
          id: 1
        },
        {
          name: "SMA Negeri 8 Jakarta",
          score: 4.9,
          id: 1
        },
        {
          name: "SMA Negeri 8 Jakarta",
          score: 4.9,
          id: 1
        },
        {
          name: "SMA Negeri 8 Jakarta",
          score: 4.9,
          id: 1
        },
        {
          name: "SMA Negeri 8 Jakarta",
          score: 4.9,
          id: 1
        },
        {
          name: "SMA Negeri 8 Jakarta",
          score: 4.9,
          id: 1
        }
      ],
      places: [{ value: 1, text: "Jakarta" }],
      selectedPlace: 1,
      landmarks: [
        {
          image: require("../assets/jakarta.png"),
          title: "Jakarta",
          route: "/search?city=jakarta"
        },
        {
          image: require("../assets/bali.png"),
          title: "Bali",
          route: "/search?city=bali"
        },
        {
          image: require("../assets/medan.png"),
          title: "Medan",
          route: "/search?city=medan"
        },
        {
          image: require("../assets/jogja.png"),
          title: "Jogja",
          route: "/search?city=jogja"
        }
      ]
    };
  },
  components: {
    Toolbar,
    mdbIcon
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

<style scoped lang="scss">
.home-header {
  color: white;
  background-image: url("../assets/header.png");
  padding: 12.5rem 9rem 9rem 9rem;
  background-size: cover;
  min-height: 100vh;
  h1 {
    font-size: 4rem;
    letter-spacing: 3px;
    text-align: center;
  }
  .search-container {
    justify-content: center;
    padding-top: 3rem;
    .input-search {
      height: calc(2.5em + 0.75rem + 2px);
    }
  }
  .button-container {
    padding-top: 5rem;
    button {
      background-color: #2589bd !important;
      border-radius: 3vh;
      font-weight: 600;
      width: 70%;
    }
  }
}
.home-bottom {
  .fav-school {
    padding: 3rem;
    td,
    th {
      text-align: left;
      img {
        width: 1.5rem;
      }
    }
  }
  button {
    background-color: #2589bd !important;
    border-radius: 3vh;
    font-weight: 600;
    width: 30%;
  }
  .landmark-card {
    padding: 0 1rem 2rem 1rem;
    position: relative;
    h4 {
      position: absolute;
      top: 1rem;
      left: 1rem;
      color: #2589bd;
      font-weight: bold;
    }
  }
}
</style>
