<template>
  <div>
    <toolbar :with-search="true"></toolbar>
    <h1>Search</h1>
  </div>
</template>

<script>
import Toolbar from "../components/Toolbar";

export default {
  components: {
    Toolbar
  }
};
</script>
