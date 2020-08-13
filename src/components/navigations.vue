<template>
  <div>
    <h5 class="alert alert-danger text-center">Konu İçerikleri</h5>
    <div class="list-group" id="list-tab" role="tablist">
      <router-link
        tag="a"
        to="/"
        class="list-group-item list-group-item-action mb-3 rounded"
        active-class="active"
        exact
      >Proje Hakkında</router-link>

      <router-link
        tag="a"
        to="/aboutVue"
        class="list-group-item list-group-item-action mb-3 rounded"
        active-class="active"
        exact
      >Vue Hakkında</router-link>

      <router-link
        tag="a"
        to="/aboutInstallations"
        class="list-group-item list-group-item-action mb-3 rounded"
        active-class="active"
        exact
      >Gerekli Kurulumlar</router-link>

      <router-link
        tag="a"
        to="/CLIFilesSctures"
        class="list-group-item list-group-item-action mb-3 rounded"
        active-class="active"
        exact
      >CLİ Dosya Yapısı</router-link>

      <router-link
        tag="a"
        to="/componentScturesGiris"
        class="list-group-item list-group-item-action mb-3 rounded"
        active-class="active"
        exact
      >Komponent Yapısına Giriş</router-link>
      <router-link
        tag="a"
        to="/interComponentCommunication"
        class="list-group-item list-group-item-action mb-3 rounded"
        active-class="active"
        exact
      >Komponentler Arası İletişim</router-link>
      <router-link
        tag="a"
        to="/usingAdvancedComponent"
        class="list-group-item list-group-item-action mb-3 rounded"
        active-class="active"
        exact
      >Gelişmiş Komponent Kullanımı</router-link>
      <router-link
        tag="a"
        to="/vueRouter"
        class="list-group-item list-group-item-action mb-3 rounded"
        active-class="active"
        exact
      >Vue-Router Kullanımı</router-link>
       <router-link
        tag="a"
        to="/vuex"
        class="list-group-item list-group-item-action mb-3 rounded"
        active-class="active"
        exact
      >Vuex Kullanımı</router-link>
      
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
</style>