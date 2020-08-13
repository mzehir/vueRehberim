<template>
  <div class="card">
    <div class="card-header">
      <h4 class="text-center bg-success p-3 rounded-lg shadow-lg">Vuejs Vuex Kullanımı</h4>
      <hr />
      <p class="text-center">
        <a class="badge badge-success" href="#e1">Vuex Kullanımı(Genel Hatlarıyla)</a>
        <a class="badge badge-success" href="#e2">Vuex Getters Kullanımı(+mapGetters)</a>
        <a class="badge badge-success" href="#e3">Vuex Mutations Kullanımı(+mapMutations)</a>
        <a
          class="badge badge-success"
          href="#e4"
        >Vuex Actions Kullanımı(+parametre / +mapActions)</a>
        <a class="badge badge-success" href="#e5">Vuex Üzeriden Two Way Data Binding(v-model)</a>
        <a
          class="badge badge-success"
          href="#e6"
        >Vuex Tüm Özelliklerle İlgili Örnek</a>
        <a class="badge badge-success" href="#e7">Vuex Two Way Data Binding İle İlgili Örnek</a>
      </p>
    </div>
    <div class="card-body card-body bg-primary text-white">
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="e1">Vuex Kullanımı(Genel Hatlarıyla)</h4>
      </div>
      <div class="card-text">
        <p>Vuex kullanımını anlayabilmek için bir senaryo üzerinden ilerleyelim.</p>
        <p>
          Elimizde app.vue'nin child'i 2 adet bileşenimiz olsun bunlardan birincisi
          <strong>counter.vue</strong> olsun, ikincisi ise
          <strong>result.vue</strong> olsun.
        </p>
        <p>counter.vue bileşeninde 2 adet butonumuz olsun birinci butona click yapıldığında app.vue'ye +1 değerini göndersin, 2. butona click yapıldığında app.vue'ye -1 değerini göndersin.</p>
        <p>result.vue bileşeninde ise counter adlı değişkenin değeri template tagları arasında gösterilsin. Ama bu değer click yapılan butonlara bağlı olarak artsın yada azalsın.</p>
        <p>
          Yukarıdaki senaryoya göre vuex olmadan bu işlemi nasıl yaparız önce fotoğraflar üzerinden bunu incelemesini yapalım
          daha sonra ise vuex kurulumu ile beraber bu işlemmi vuex vasıtasıyla yapalım.
        </p>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/arcounter.png" />
        </div>
        <p>Şimdi aynı işlemi vuex kullanımı ile beraber yapalım tabi vuex kullanımına yükleme işlemi ile beraber başlayalım.</p>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/vuex-install.png" />
        </div>

        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/store-js-create.png" />
        </div>

        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/mai-js-vuex.png" />
        </div>
        <p>Bu noktadan sonra ise bu konunun en başında incelediğimiz butonlar vasıtasıyla değişen counter örneğine gidiyoruz.</p>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/vuex-sss.png" />
        </div>
      </div>
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="e2">Vuex Getters Kullanımı</h4>
      </div>
      <div class="card-text">
        <p>
          Vuex getters kullanımını senaryo üzerinden inceleyelim. Diyelim ki bir önceki örnekteki gibi vuex store'de counter adlı bir değişkenimiz var ve biz bu değişkenin 3 katının 6 eksiğini
          1'den fazla bileşenimizde göstermek istiyoruz. Bunun için bileşenlerimize store'deki counter değerini çeker ve bileşen içerisinde counter değerinin 3 katının 6 eksiğini fonksiyon ile hesaplar ve ekrana yazdırırız.
          Tabi bu işlemi her bileşen içerisinde tekrar tekrar yapmamız gerekir.
        </p>
        <p>Fakar getters ile beraber store içerisinde counter değerinin 3 katının 6 eksiğini bir kere hesaplar ve gerekli olan bileşenlerimize çekeriz. Gelin şimdi fotoğraf üzerinden bunu inceleyelim.</p>

        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/getters-storejs.png" />
        </div>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/getters-resultvue.png" />
        </div>
      </div>
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4>mapGetters Kullanımı</h4>
      </div>
      <div class="card-text">
        <p>Getters kullanımına değinmişken mapGetters kullanımına değinmemek olmaz. Hatta incelemeyi direk fotoğraf üzerinden yapalım.</p>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/mapGetters.png" />
        </div>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/mapGettersSon.png" />
        </div>
      </div>

      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="e3">Vuex Mutations Kullanımı</h4>
      </div>
      <div class="card-text">
        <p>
          Vuex mutationslar store'daki state içerisindeki değişkenleri değiştirmemizi sağlar. İyide biz zaten bunu yapabiliyoruz diyebiliriz. Ama ilerleyen derslerde anlaşılacaktır ki bazı noktalarda
          mutations kullanımı bize stateler üzerinde esnek bir kullanım sahasını yaratacaktır. O zaman fotoğraf ile beraber konumuzu inceleyelim.
        </p>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/mutations-son.png" />
        </div>
        <p>
          Son olarak eklemek gerekirse mutations kullanımı bizlere component seviyesinde kullanımda sunmaktadır. Aynı mapGetters'da olduğu gibi ve kullanımı tamamen mapGetters ile aynıdır. Tek fark
          mapGetters kullanımını computed içerisinde gerçekleştirirken mapMutations kullanımını methods içerisinde gerçekleştiriyoruz.
        </p>
        <p>
          <strong>
            Mutationslar bizlere değişkenler yada veriler üzerinde değişiklik yapabilme imkanı versede yapısal olarak senkron bir çizgide çalışmaktadır. Bu durum ise dış servislerde bağlantıda problem
            çıkarmaktadır. Dış servislerde bağlantıda vuex'in bizlere sunduğu asenkron olarak çalışan Actions kullanımı daha doğrudur. O zaman Actions incelememize geçelim.
          </strong>
        </p>
      </div>
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="e4">Vuex Actions Kullanımı</h4>
      </div>
      <div class="card-text">
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/actions.png" />
        </div>
        <p>mapActions kullanımıda aynı mapMutations kullanımı gibidir ve mapMutations gibi methods property'si içerisinde tanımlanır.</p>
        <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
          <h4>Vuex Actions Kullanımında Parametre Göndermek</h4>
        </div>
        <div class="card-text">
          <div class="text-center mb-3">
            <img class="border border-success img-fluid" src="../assets/actions-parametre.png" />
          </div>
          <p>Yine actionsta parametre gönderimi ile tamamen aynı yolla mutationslada parametre gönderilebilir.</p>
        </div>
      </div>
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="e5">Vuex Üzeriden Two Way Data Binding(v-model)</h4>
      </div>
      <div class="card-text">
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/two-way-data-binding-11.png" />
        </div>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/two-way-data-bindingSon.png" />
        </div>
        <p>Vuex ile ilgili tüm konular bu kadar olsada biz tüm vuex özelliklerini kullanarak son bir örnek daha yapalım.</p>
      </div>
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="e6">Vuex Tüm Özelliklerle İlgili Detaylı Örnek</h4>
      </div>
      <div class="card-text">
        <h4>store.js</h4>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/vuex-ornek1-store-js.png" />
        </div>
        <div class="text-center mb-3">
          <img
            class="border border-success img-fluid"
            src="../assets/vuex-ornek1-storejs-devami.png"
          />
        </div>
        <h4>counter.vue</h4>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/vuex-ornek1-counterVue1.png" />
        </div>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/vuex-ornek1-counterVue2.png" />
        </div>
        <h4>result.vue</h4>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/vuex-ornek1-resultVue1.png" />
        </div>
      </div>
      <h2>Kodların Derlenmesi</h2>
      <div class="card-text">
        <h4>result.vue</h4>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/derleme-resultVue.png" />
        </div>
        <h4>counter.vue</h4>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/derleme-counterVue.png" />
        </div>
        <h4>store.js</h4>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/derleme-newFiles.png" />
        </div>
        <div class="text-center mb-3">
          <img
            class="border border-success img-fluid"
            src="../assets/derleme-getters-mutations-actions.png"
          />
        </div>
      </div>
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="e7">Vuex Two Way Data Binding İle İlgili Örnek</h4>
      </div>
      <div class="card-text">
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/ornek-vmodel-vuex.png" />
        </div>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/example-v-model-derleme.png" />
        </div>
        <p>
          <strong>Vuex konu incelememizin sonuna gelmiş bulunmaktayız.</strong>
        </p>
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