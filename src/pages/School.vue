<template>
  <div>
    <toolbar :with-search="true"></toolbar>
    <div class="school-container">
      <v-layout row wrap>
        <v-flex xs6>
          <h1>
            SMA 8 Jakarta &nbsp;
            <span>
              <img src="../assets/star.png" alt="star" style="width: 2.5rem" />
              &nbsp;4.7
            </span>
          </h1>

          <h4>Jakarta Selatan (4 km dari lokasimu)</h4>
        </v-flex>

        <v-flex xs6 class="text-xs-right">
          <v-btn color="green" class="white--text text-capitalize" round>
            Website &nbsp;<v-icon>language</v-icon>
          </v-btn>

          <v-btn color="blue" class="white--text text-capitalize" round>
            Review &nbsp;<v-icon>create</v-icon>
          </v-btn>

          <v-btn color="blue-grey" class="white--text text-capitalize" round>
            Share &nbsp;<v-icon>share</v-icon>
          </v-btn>
        </v-flex>

        <v-flex xs6>
          <GmapMap
            :center="{ lat: -6.17511, lng: 106.865036 }"
            :zoom="7"
            map-type-id="terrain"
            style="width: 90%; height: 380px"
          ></GmapMap>
        </v-flex>

        <v-flex xs6 class="text-xs-right"
          ><h5>Peringkat Sekolah Berdasarkan Lokasi</h5>
          <table
            class="table table-hover mt-4"
            style="width: 80%; float: right"
          >
            <tbody>
              <tr
                v-for="(school, idx) in topSchools"
                :key="idx"
                @click="pushTo(`/school/${school.id}`);"
                style="cursor: pointer"
                :class="idx === 1 ? 'bold' : ''"
              >
                <td>{{ idx + 1 }}</td>
                <td class="align-middle">{{ school.name }}</td>
                <td>
                  <img src="../assets/star.png" alt="star" style="width: 10%" />
                  &nbsp; {{ school.score }}
                </td>
              </tr>
            </tbody>
          </table></v-flex
        >

        <v-flex xs6 class="mt-5">
          <h3>Hasil Penilaian</h3>
          <table class="table table-hover mt-4" style="width: 90%">
            <tbody>
              <tr v-for="(grade, idx) in grades" :key="idx">
                <td class="align-middle">{{ grade.title }}</td>
                <td class="text-xs-right">
                  <img
                    src="../assets/star.png"
                    alt="star"
                    style="width: 5%"
                    v-if="grade.score < 5"
                  />
                  &nbsp; {{ grade.score }}
                </td>
              </tr>
            </tbody>
          </table></v-flex
        >

        <v-flex xs6 class="mt-5">
          <h3 class="text-xs-right">Guru Terbaik</h3>
          <table
            class="table table-hover mt-4"
            style="width: 80%; float: right;"
          >
            <tbody>
              <tr
                v-for="(teacher, idx) in topTeachers"
                :key="idx"
                @click="pushTo(`/teacher/${teacher.id}`);"
                style="cursor: pointer"
              >
                <td class="align-middle">{{ teacher.name }}</td>
                <td class="text-xs-right">
                  <img src="../assets/star.png" alt="star" style="width: 10%" />
                  &nbsp; {{ teacher.score }}
                </td>
              </tr>
            </tbody>
          </table></v-flex
        >
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
      topSchools: [
        {
          name: "SMA 1 Medan",
          score: 4.9
        },
        {
          name: "SMA 1 Medan",
          score: 4.9
        },
        {
          name: "SMA 1 Medan",
          score: 4.9
        },
        {
          name: "SMA 1 Medan",
          score: 4.9
        },
        {
          name: "SMA 1 Medan",
          score: 4.9
        }
      ],
      grades: [
        {
          title: "Fasilitas",
          score: "4.7"
        },
        {
          title: "SPP",
          score: "1000000 - 1500000"
        }
      ],
      topTeachers: [
        {
          name: "SMA 1 Medan",
          score: 4.9
        },
        {
          name: "SMA 1 Medan",
          score: 4.9
        },
        {
          name: "SMA 1 Medan",
          score: 4.9
        },
        {
          name: "SMA 1 Medan",
          score: 4.9
        },
        {
          name: "SMA 1 Medan",
          score: 4.9
        }
      ]
    };
  },
  methods: {
    pushTo: function(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss" scoped>
.school-container {
  padding: 7rem 3rem 2rem 3rem;
  h1 {
    font-weight: 600;
  }
  h4 {
    color: #a9a9a9;
    margin-bottom: 2rem;
  }
  h3,
  h5 {
    font-weight: 600;
  }
  span {
    font-weight: 400;
    font-size: 2rem;
  }
  .bold {
    font-weight: 600;
  }
}
</style>
