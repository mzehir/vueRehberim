<template>
  <div class="card">
    <div class="card-header">
      <h4 class="text-center bg-success p-3 rounded-lg shadow-lg">Gelişmiş Komponent Kullanımı</h4>
      <hr />
      <p class="text-center">
        <a class="badge badge-success" href="#d1">Slot Kullanımı</a>
        <a class="badge badge-success" href="#d2">Komponentler Arası Dinamik Switch Kulanımı</a>
      </p>
    </div>
    <div class="card-body card-body bg-primary text-white">
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="d1">Slot İle Beraber Child Bileşene İçerik Göndermek</h4>
      </div>
      <div class="card-text">
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/slots1.png" />
        </div>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/slots2.png" />
        </div>
      </div>
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="d2">Componentler Arası Dinamik Switch Kullanımı</h4>
      </div>
      <div class="card-text">
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/switch-childs.png" />
        </div>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/switch-parent.png" />
        </div>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/keep-alive.png" />
        </div>
      </div>
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
    </div>
    <button @click="topFunction" id="myBtn">Yukarı</button>
  </div>
</template>
<script>
export default {
  methods: {
    topFunction() {
      document.body.scrollTop = 50;
      document.documentElement.scrollTop = 50;
    },
  },
};
</script>
<style scoped>
#myBtn {
  position: fixed;
  bottom: 10px;
  right: 20px;
  z-index: 99;
  font-size: 15px;
  border: none;
  outline: transparent;
  background-color: black;
  color: white;
  cursor: pointer;
  padding: 10px;
  border-radius: 40px;
  transition: 1s;
}

#myBtn:hover {
  background-color: white;
  color: black;
}
</style>