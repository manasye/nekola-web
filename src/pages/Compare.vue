<template>
  <div @click="setInactive">
    <toolbar></toolbar>
    <div class="comp-container">
      <h2>Bandingkan Sekolah</h2>
      <v-layout wrap class="mt-4">
        <v-flex xs3
          ><p>Sekolah yang dibandingkan</p>
          <div v-if="firstSchool || secondSchool" class="mt-5">
            <p>Sekolah</p>
            <p>Fasilitas</p>
          </div>
        </v-flex>
        <v-flex xs3>
          <form class="search" @submit.prevent>
            <input
              class="form-control my-0 py-1 input-search"
              type="text"
              placeholder="Cari Sekolah ..."
              aria-label="Search"
              v-model="searchQueryFirst"
              v-on:keyup="searchSchool(1)"
              v-on:click.stop
            />
            <ul class="results" id="results-1">
              <li
                v-for="res in firstResults"
                :key="res.id"
                @click="setActive(1, res.id)"
              >
                <a>{{ res.name }}</a>
              </li>
            </ul>
          </form>
          <div v-if="firstSchool || secondSchool" class="mt-5">
            <p
              style="text-decoration: underline;cursor: pointer;"
              @click="window.location = 'https://google.com'"
            >
              SMA Negeri 8
            </p>
            <p class="font-weight-bold">4.7</p>
          </div>
        </v-flex>
        <v-flex xs2></v-flex>
        <v-flex xs3>
          <form class="search" @submit.prevent>
            <input
              class="form-control my-0 py-1 input-search"
              type="text"
              placeholder="Cari Sekolah ..."
              aria-label="Search"
              v-model="searchQuerySecond"
              v-on:keyup="searchSchool(2)"
              v-on:click.stop
            />
            <ul class="results" id="results-2">
              <li
                v-for="res in secondResults"
                :key="res.id"
                @click="setActive(2, res.id)"
              >
                <a>{{ res.name }}</a>
              </li>
            </ul>
          </form>
          <div v-if="firstSchool || secondSchool" class="mt-5">
            <p
              style="text-decoration: underline;cursor: pointer;"
              @click="window.location = 'https://google.com'"
            >
              SMA Negeri 8
            </p>
            <p class="font-weight-bold">4.7</p>
          </div>
        </v-flex>
        <v-flex xs1></v-flex>
      </v-layout>
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
      searchQueryFirst: "",
      searchQuerySecond: "",
      firstResults: [],
      secondResults: [],
      firstSchool: 1,
      secondSchool: 1
    };
  },
  methods: {
    setActive(idx, val) {
      if (idx === 1) {
        this.firstSchool = val;
        this.searchQueryFirst = this.firstResults.find(s => s.id === val).name;
      }
      if (idx === 2) {
        this.secondSchool = val;
        this.searchQuerySecond = this.secondResults.find(
          s => s.id === val
        ).name;
      }
      document.getElementById(`results-${idx}`).style.opacity = 0;
      document.getElementById(`results-${idx}`).style.height = 0;
    },
    searchSchool(idx) {
      document.getElementById(`results-${idx}`).style.opacity = 1;
      document.getElementById(`results-${idx}`).style.height = "auto";
    },
    setInactive() {
      document.getElementById(`results-1`).style.opacity = 0;
      document.getElementById(`results-1`).style.height = 0;
      document.getElementById(`results-2`).style.opacity = 0;
      document.getElementById(`results-2`).style.height = 0;
      this.firstResults = [];
      this.secondResults = [];
    }
  }
};
</script>

<style lang="scss" scoped>
.comp-container {
  padding: 7rem 3rem;
  min-height: 100vh;
  h2 {
    font-weight: 600;
  }

  a {
    color: #1e7ad3;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  input {
    font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 13px;
    color: #555860;
  }

  .search {
    position: relative;
    margin: 0 auto;
    width: 300px;
  }

  .search input {
    height: 26px;
    width: 100%;
    padding: 0 12px 0 25px;
    background: white
      url("https://cssdeck.com/uploads/media/items/5/5JuDgOa.png") 8px 6px
      no-repeat;
    border-width: 1px;
    border-style: solid;
    border-color: #a8acbc #babdcc #c0c3d2;
    border-radius: 13px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-shadow: inset 0 1px #e5e7ed, 0 1px 0 #fcfcfc;
    -moz-box-shadow: inset 0 1px #e5e7ed, 0 1px 0 #fcfcfc;
    -ms-box-shadow: inset 0 1px #e5e7ed, 0 1px 0 #fcfcfc;
    -o-box-shadow: inset 0 1px #e5e7ed, 0 1px 0 #fcfcfc;
    box-shadow: inset 0 1px #e5e7ed, 0 1px 0 #fcfcfc;
  }

  .search input:focus {
    outline: none;
    border-color: #66b1ee;
    -webkit-box-shadow: 0 0 2px rgba(85, 168, 236, 0.9);
    -moz-box-shadow: 0 0 2px rgba(85, 168, 236, 0.9);
    -ms-box-shadow: 0 0 2px rgba(85, 168, 236, 0.9);
    -o-box-shadow: 0 0 2px rgba(85, 168, 236, 0.9);
    box-shadow: 0 0 2px rgba(85, 168, 236, 0.9);
  }

  .search .results {
    opacity: 0;
    height: 0;
    position: absolute;
    top: 35px;
    left: 0;
    right: 0;
    z-index: 10;
    padding: 0;
    margin: 0;
    border-width: 1px;
    border-style: solid;
    border-color: #cbcfe2 #c8cee7 #c4c7d7;
    border-radius: 3px;
    background-color: #fdfdfd;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0%, #fdfdfd),
      color-stop(100%, #eceef4)
    );
    background-image: -webkit-linear-gradient(top, #fdfdfd, #eceef4);
    background-image: -moz-linear-gradient(top, #fdfdfd, #eceef4);
    background-image: -ms-linear-gradient(top, #fdfdfd, #eceef4);
    background-image: -o-linear-gradient(top, #fdfdfd, #eceef4);
    background-image: linear-gradient(top, #fdfdfd, #eceef4);
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    -ms-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    -o-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  .search .results li {
    display: block;
  }

  .search .results li:first-child {
    margin-top: -1px;
  }

  .search .results li:first-child:before,
  .search .results li:first-child:after {
    display: block;
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
    margin-left: -5px;
    border: 5px outset transparent;
  }

  .search .results li:first-child:before {
    border-bottom: 5px solid #c4c7d7;
    top: -11px;
  }

  .search .results li:first-child:after {
    border-bottom: 5px solid #fdfdfd;
    top: -10px;
  }

  .search .results li:first-child:hover:before,
  .search .results li:first-child:hover:after {
    display: none;
  }

  .search .results li:last-child {
    margin-bottom: -1px;
  }

  .search .results a {
    display: block;
    position: relative;
    margin: 0 -1px;
    padding: 6px 40px 6px 10px;
    color: #808394;
    font-weight: 500;
    text-shadow: 0 1px #fff;
    border: 1px solid transparent;
    border-radius: 3px;
  }

  .search .results a span {
    font-weight: 200;
  }

  .search .results a:before {
    content: "";
    width: 18px;
    height: 18px;
    position: absolute;
    top: 50%;
    right: 10px;
    margin-top: -9px;
    background: url("https://cssdeck.com/uploads/media/items/7/7BNkBjd.png") 0 0
      no-repeat;
  }

  .search .results a:hover {
    text-decoration: none;
    color: #fff;
    text-shadow: 0 -1px rgba(0, 0, 0, 0.3);
    border-color: #2380dd #2179d5 #1a60aa;
    background-color: #338cdf;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0%, #59aaf4),
      color-stop(100%, #338cdf)
    );
    background-image: -webkit-linear-gradient(top, #59aaf4, #338cdf);
    background-image: -moz-linear-gradient(top, #59aaf4, #338cdf);
    background-image: -ms-linear-gradient(top, #59aaf4, #338cdf);
    background-image: -o-linear-gradient(top, #59aaf4, #338cdf);
    background-image: linear-gradient(top, #59aaf4, #338cdf);
    -webkit-box-shadow: inset 0 1px rgba(255, 255, 255, 0.2),
      0 1px rgba(0, 0, 0, 0.08);
    -moz-box-shadow: inset 0 1px rgba(255, 255, 255, 0.2),
      0 1px rgba(0, 0, 0, 0.08);
    -ms-box-shadow: inset 0 1px rgba(255, 255, 255, 0.2),
      0 1px rgba(0, 0, 0, 0.08);
    -o-box-shadow: inset 0 1px rgba(255, 255, 255, 0.2),
      0 1px rgba(0, 0, 0, 0.08);
    box-shadow: inset 0 1px rgba(255, 255, 255, 0.2), 0 1px rgba(0, 0, 0, 0.08);
  }

  :-moz-placeholder {
    color: #a7aabc;
    font-weight: 200;
  }

  ::-webkit-input-placeholder {
    color: #a7aabc;
    font-weight: 200;
  }

  .lt-ie9 .search input {
    line-height: 26px;
  }
}
</style>
