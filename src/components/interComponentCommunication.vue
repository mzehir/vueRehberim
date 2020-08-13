<template>
  <div class="card">
    <div class="card-header">
      <h4 class="text-center bg-success p-3 rounded-lg shadow-lg">Komponentler Arası İletişim</h4>
      <hr />
      <p class="text-center">
        <a class="badge badge-success" href="#c1">Props Yöntemi / Parenttan Child'e</a>
        <a class="badge badge-success" href="#c2">CustomEvents Yöntemi / Child'den Parent'a</a>
        <a class="badge badge-success" href="#c3">EventBus Yöntemi / Child'den Child'e</a>
      </p>
    </div>
    <div class="card-body card-body bg-primary text-white">
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="c1">Props Yöntemi / Parenttan Child'e</h4>
      </div>
      <div class="card-text">
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/props1.png" />
        </div>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/props2.png" />
        </div>
        <p>Diyelim ki aynı parenttan aynı child bileşene ikinci bir veri göndermek istedik? Bu noktada ilk işlemler sırasında ne yaptıysak aynı şeyleri tekrar yapmamız gerekir. 
          Sadece farkı nokta props ile veriyi karşıladığımız noktada 2 veriyi virgül ile ayırmamız gerekir.
        </p>
        <p>
          Ayrıca belirtmekte fayda var parenttan gönderilen veriyi child içerisinde karşılarken child props içerisinde gelen verinin türünü belirtebiliriz.
          String, array, obje, istek, true false yada gerekli gibi. Bu konununda araştırılması gerekir.
        </p>
      </div>
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="c2">CustomEvents Yöntemi / Child'den Parent'a</h4>
      </div>
      <div class="card-text">
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/customEvents-1.png" />
        </div>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/customEvents-2.png" />
        </div>
      </div>
       <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="c3">EventBus Yöntemi / Child'den Child'e</h4>
      </div>
      <div class="card-text">
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/eventBusMainjs.png" />
        </div>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/eventBushChild1.png" />
        </div>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/eventBusChild2.png" />
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