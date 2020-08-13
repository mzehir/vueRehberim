<template>
  <div class="card">
    <div class="card-header">
      <h4 class="text-center bg-success p-3 rounded-lg shadow-lg">Vuejs İle Routing İşlemi</h4>
      <hr />
      <p class="text-center">
        <a class="badge badge-success" href="#d1">Routing Ayarları(Adres Çubuğundan)</a>
        <a
          class="badge badge-success"
          href="#d2"
        >Adres Çubuğundan # İşaretinin Kaldırılması</a>
        <a class="badge badge-success" href="#d3">Router Linkler İle Bileşenler Arasında Gezinme</a>
        <a
          class="badge badge-success"
          href="#d4"
        >Kod | @click İşlemi Üzerinden Route Çalıştırma</a>
        <a class="badge badge-success" href="#d5">Wildcard İle Tüm Rootları Yakalamak</a>
        <a class="badge badge-success" href="#d6">Child Routes Örneği(başka Projeden)</a>
      </p>
    </div>
    <div class="card-body card-body bg-primary text-white">
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="d1">Routing Ayarları(Adres Çubuğundan)</h4>
      </div>
      <div class="card-text">
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/router-npm-install.png" />
        </div>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/routerChildBilesenler.png" />
        </div>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/routing-routes-js.png" />
        </div>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/routes-js-ayarlari.png" />
        </div>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/main-js-ayarlari2.png" />
        </div>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/appVue-router-Wiew.png" />
        </div>
      </div>
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="d2">Routing İşleminde Adres Çubuğundan # İşaretinin Kaldırılması</h4>
      </div>
      <div class="card-text">
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/hash-history.png" />
        </div>
      </div>
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="d3">Router Linkler İle Bileşenler Arasında Gezinme</h4>
      </div>
      <div class="card-text">
        <p>
          Router ile şu ana kadar gördüğümüz konularda adres çubuğuna gideceğimiz adresi yazabiliyor ve adres çubuğuna yazdığımızı adrese gidebiliyorduk.
          Peki navbarımız olsa bu navbar vasıtasıyla bileşenler arasında gezebilsek gelin şimdi bu konu hakkında çalışalım.
        </p>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/router-link-1.png" />
        </div>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/router-link-2.png" />
        </div>
      </div>
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="d4">Kod Üzeriden Route Çalıştırma | @click İşlemi Üzerinden Route Çalıştırma</h4>
      </div>
      <div class="card-text">
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/click-route.png" />
        </div>
      </div>
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="d5">Wildcard İle Tüm Rootları Yakalamak</h4>
      </div>
      <div class="card-text">
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/willcard-kullanim.png" />
        </div>
        <p>
          <strong>
            Vue Router konusunu işlerken Route parametrelerine, child routes tanımlama, isimli routlar, named router views, hash fragment, guard hook fonksiyonları,
            route lazy konularına değinmedik. Değinmediğimiz konularıda bilmek faydalı olacaktır.
          </strong>
        </p>
        <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
          <h4 id="d6">Child Routes Örneği(Başka Projeden)</h4>
        </div>
        <p>
          Bu işlemler ile route konusunu bitirmiş olmaktayız. Alttaki foto ise alternatif child route bileşenlerle alakalıdır. Ayrıca eklemekte fayda olacaktır.
          aşağıdaki fotoğraftaki örnekte kullanım hatası olması muhtemel dahilindedir. Fakat benim fotodaki kullanım yöntemim muhtemelen o dönemde benim ihtiyacıma çözüm olmuştur.
        </p>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/ornek-router1.png" />
        </div>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/ornek-router-2.png" />
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