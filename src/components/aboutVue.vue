<template>
  <div class="card">
    <div class="card-header">
      <h4 class="text-center bg-success p-3 rounded-lg shadow-lg">Vue Hakkında Kısaca Genel Bilgiler</h4>
    </div>
    <div class="card-body bg-primary">
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 class="text-center">Vuejs Nedir?</h4>
      </div>
      <div class="card-text">
        <p>Kısaca tanım yapmak gerekirse Vuejs client tarafında kullanıcı arayüzü oluşturmayı sağlayan interaktif bir front-end javascript kütüphanesidir.</p>
        <p>
          Vuejs içerisinde hazır şablonlar bulundurmasıyla da kullanıcının işini tamemen kolaylaştıran bir özellik kazanmıştır. Ben bu noktada Vue CLİ'ın bizlere sunduğu webpack-simple şablonunu
          kullanıyor olacağım. Lafı fazla uzatmayalım ve CLI kurulumuna ve diğer kurulumlara geçelim.
        </p>
      </div>
    </div>
    <div class="card-footer bg-dark text-white">
      <p>Bir sonraki derste gerekli kurulumları halledeceğiz.</p>
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