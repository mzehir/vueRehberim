<template>
  <div id="app">
    <div class="container-fluid bg-dark">
      <div class="row pt-3">
        <div class="col-sm-12 col-md-2">
          <navigations class="ml-1"></navigations>
        </div>
        <div class="col-sm-12 col-md-10">
          <h5 class="alert alert-danger text-center col-sm-none">VUE REHBERİME HOŞ GELDİNİZ</h5>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navigations from "./components/navigations";
export default {
  components: {
    navigations: navigations,
  },
};
</script>

<style>
</style>
