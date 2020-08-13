<template>
  <div class="card">
    <div class="card-header">
      <h4 class="text-center bg-success p-3 rounded-lg shadow-lg">Komponent Yapısına Giriş</h4>
      <hr />
      <p class="text-center">
        <a class="badge badge-success" href="#b1">Komponent Oluşturma</a>
        <a class="badge badge-success" href="#b2">Değişken Tanımlama</a>
        <a class="badge badge-success" href="#b3">V-Model Kullanımı</a>
        <a class="badge badge-success" href="#b4">Fonksiyon Returnlerini Ekrana Basmak</a>
        <a class="badge badge-success" href="#b5">Atribute Bind İşelmi(href binding)</a>
        <a class="badge badge-success" href="#b6">V-Html Kullanımı</a>
        <a class="badge badge-success" href="#b7">Eventler(click / mousemove)</a>
        <a class="badge badge-success" href="#b8">Event(İçerisiden) İle Parametre Göndermek</a>
        <a class="badge badge-success" href="#b9">İf | v-if / v-else-if / v-else Kullanımı</a>
        <a class="badge badge-success" href="#b10">Computed Properties</a>
        <a class="badge badge-success" href="#b11">Watch Properties</a>
        <a class="badge badge-success" href="#b12">Event Ve Atributes Kısaltmaları | @ / :</a>
        <a class="badge badge-success" href="#b13">v-show Kullanımı</a>
        <a class="badge badge-success" href="#b14">v-for Kullanımı</a>
        <a class="badge badge-success" href="#b15">Vuejs LifeCycle</a>
      </p>
    </div>
    <div class="card-body card-body bg-primary text-white">
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="b1">Lokal Komponent Oluşturma</h4>
      </div>
      <div class="card-text">
        <p>
          Vuejs ile yeni bir webpack-simple projesi oluşturduğumuzda zaten hali hazırda app.vue adlı bir bileşen bizi karşılamıştı.
          Biz bu noktadan sonra proje yapımıza uygun şekilde kendi bileşenlerimizi oluşturabiliriz.
          O zaman bileşen oluşturmak için aşağıdaki fotoğrafta görünen işlemleri yapalım.
        </p>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/komponent-olusturma.png" />
        </div>
        <p>
          Yukarıdaki fotoğrafta bir bileşen oluşturmada yapılması gereken tüm adımlar gösterilmiştir. Sadece adımları sırasıyla yapmak gerekmektedir. Burada dikkat edilmesi gereken husus
          <strong>template tagları</strong>
          içerisinde bir ana elementin olması gerekmektedir. Fotağrafta görünen
          <strong>id="app"</strong> bizim ana elementimiz oluyor. Komponent oluşturma ve parent bileşene import etme işlemi için bunları yapmak yeterlidir.
        </p>
      </div>
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="b2">Data Properties Kullanımı | Data İçerisindeki Değişkeni Template'ye Yazdırma</h4>
      </div>
      <div class="card-text">
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/data-kullanim.png" />
        </div>
      </div>
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4
          id="b3"
        >V-model Kullanımı | İnputa Girilen Değeri Almak | Two-Way Data Binding(İki Yönlü Veri İletişimi)</h4>
      </div>
      <div class="card-text">
        <div class="text-center mb-3">
          <img
            class="border border-success img-fluid"
            src="../assets/inputDegerYakalaV-On-Input.png"
          />
        </div>
        <p>
          Yukarıdaki görüntüde inputa girilen değeri anlık olarak farklı bir element vasıtasıyla ekrana yazdırdık. Şimdi aynı işlemi vuejs directivesi olan v-model ile daha kolay bir şekilde
          yapalım.
        </p>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/v-model-Kullanim.png" />
        </div>
        <p>
          V-model ile inputa girilen değeri yakalam bu kadar kolay. Ama bu noktada girilen değeri anlık olarak yakalıyoruz. Bu durum ise sayfa maaliyetini artırıyor.
          Demek istediğim kullanıcı input ile ilşkisini bitirdikten sonra değeri almak istersek
          <strong>-model v-model.lazy="...."</strong> kullanımı yeterli olacaktır.
          <br />Yine aynı şekilde kullanıcının input sonuna boşluk değeri girmesi istenmiyorsa
          <strong>v-model.lazy.trim</strong> kullanımı yeterli olacaktır.
          <br />Son olarak inputa string değer girilmesini istemiyorsak
          <strong>v-model.number.trim</strong> kullanımı yeterli olacaktır.
        </p>
        <p>Ayrıca Vuejs'de fonksiyonlar fotoğraftaki gibi methods içerisinde oluşturulur.</p>
      </div>
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="b4">Fonksiyon İle Return Edilen Stringleri Ekrana Basmak</h4>
      </div>
      <div class="card-text">
        <div class="text-center mb-3">
          <img
            class="border border-success img-fluid"
            src="../assets/fonksiton-return-ekrana-bas.png"
          />
        </div>
      </div>
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="b5">Atribute Bind İşlemi | Hrefe Dinamik Link Vermek</h4>
      </div>
      <div class="card-text">
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/v-bind-href.png" />
        </div>
      </div>
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="b6">v-html Kullanımı | Değişkene Kayıtlı Linki Template İçerisinde Kullanabilmek</h4>
      </div>
      <div class="card-text">
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/v-html-directives.png" />
        </div>
      </div>
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="b7">Eventler(click / mousemove)</h4>
      </div>
      <div class="card-text">
        <h6>Öncelikle event / click işlemini görelim.</h6>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/click-event1.png" />
        </div>
        <p>Yukarıdaki fotoğraf ile @click kullanımını gördük. Şimdi aynı işlemi daha basit bir yöntem ile aşağıdaki fotoğrafı inceleyerek öğrenelim.</p>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/click-events-2.png" />
        </div>
        <h6>Şimdi ise event / mousemove işlemini görelim.</h6>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/mousemove-events-1.png" />
        </div>
        <p>
          Ayrca biz örnekteki p elemnti içerisinde birde span elementi oluştursaydık ve p elementinin kordinat değerlerini alırken span elenmentinin kordinat değerlerinin
          gizli tutulması isteseydik; span elementine atribute ekler gibi
          <strong>v-on:mousemove.stop</strong> eklemesini yapmak yeterli olacaktı.
        </p>
      </div>
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="b8">Event İle Parametre Göndermek</h4>
      </div>
      <div class="card-text">
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/event-and-parametre.png" />
        </div>
      </div>
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="b9">İf Kullanımı(Template İçerisinde) | v-if / v-else-if / v-else Kullanımı</h4>
      </div>
      <div class="card-text">
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/if-kullanim-template-ici.png" />
        </div>
        <p>
          Yukarıdaki örnek haricinde template içerisinde
          <strong>v-if / v-else-if / v-else</strong> kullanımıylada yukarıdaki sonucun dah sağlıklı halini elde ederiz. Bu konu için aşağıdaki fotoğrafı inceleyebiliriz.
        </p>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/v-if-else-template-ici.png" />
        </div>
      </div>
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="b10">Computed Properties Kullanımı</h4>
      </div>
      <div class="card-text">
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/computed-anlatim1.png" />
        </div>
        <p>Yukarıdaki fotoğrafı incelediğimizde computed kullanmama eksikliğini gördük.</p>
        <p>Şimdi yukarıdaki kod tekrarından kurtulmak için aynı işlemi template içerisinde click eventini kullanarak yapalım.</p>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/computed-kullanim-2.png" />
        </div>
        <p>
          Computed bir değere veya veriye bağlı olarak başka bir alanın anlık değişimlerinin yapılması için dinleme işlemlerini gerçekleştirdiğimiz yerdir.
          İlgili alanları anlık olarak dinler ve değişim yapılması gereken kısma gerektiği yerde bilgi verir. Şimdi yukarıda fotoğrafta gördüğümüz işlemi computed
          ile yapalım.
        </p>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/computed-kullanim-3.png" />
        </div>
      </div>
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="b11">Watch Properties Kullanımı | Computed Alternatifi</h4>
      </div>
      <div class="card-text">
        <p>
          Computed çalışma mantığı tamamen senkron üzerinedir. Bundan ötürü db ile veri alışverişinde yada asenkron gerektiren işlemlerde sayfa maliyetini, yüklenmesini artırmaktadır.
          <br />Ama şimdi göreceğimiz Watch ile asenkron işlemler yapabiliriz. Watch bizim data içerisindeki herhangibir propertyi gözlemler ve değişim olduğunda devreye girer.
          Ve almasını istediğimiz aksiyonları alır. Şimdi örnek üzerinde kullanımını görelim.
        </p>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/watch-kullanim1.png" />
        </div>
      </div>
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="b12">Event Binding Ve Atributes Binding Kısaltmaları | @ / :</h4>
      </div>
      <div class="card-text">
        <p>
          Event binding işlemlerinde örneğin
          <strong>v-on:click='fonksiyon'</strong> yapısını kullanıyorduk. Ama bu kullanımı
          <strong>@click='fonksiyon'</strong> şekliyle kısaltabiliriz.
        </p>
        <p>
          Yine aynı şekilde atributes binding işlemlerinde örneğin
          <strong>v-bind:href='link'</strong> yapısını kullanıyorduk. Ama bu kullanımı
          <strong>:href='link'</strong> şekliyle kısaltabiliriz.
        </p>
      </div>
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="b13">V-Show Kullanımı</h4>
      </div>
      <div class="card-text">
        <p>Kullanımı tamamen v-if ile aynıdır. Fakat v-show'da else yada else-if gibi ek kullanımlar söz konusu değildir.</p>
        <p>
          Şayet biz ekranda gösterilmeyecek olan bir elemanın sadece displayini none yapmam istiyorsak v-show kullanmalıyız.
          Yok eğer DOM'dan tamamen kaldırılmasını istiyorsak v-if kullanmalıyız.
        </p>
      </div>
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="b14">v-for Kullanımı</h4>
      </div>
      <div class="card-text">
        <p>
          v-for map yerine kullanabileceğimiz, arraylarımızı li elementine döndürebileceğimiz bir directive'dir. Esnek bir kullanım yapısına sahiptir.
          Şimdi örnekler üzerinden kullanımını inceleyelim
        </p>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/v-for-kullanim-anlatim.png" />
        </div>
        <p>Burada v-for ile alakalı olarak temel anlatım yapılmıtır.</p>
      </div>
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="b15">Vue Life Cycle | Yaşam Döngüleri</h4>
      </div>
      <div class="card-text">
        <h6>beforeCreate</h6>
        <p>
          Bu hook metodu, ilk Vue.js instance nesnesi oluşturulmadan önce çağrılan metoddur.
          Bu aşamada data observation (reactivity), events, computed properties ve watchers’lar ayarlanma aşamasındadır ve hiç biriyle henüz etkileşime giremeyiz.
        </p>
        <h6>Created</h6>
        <p>
          Bu hook metodu, ilk Vue.js instance nesnesi oluşturulduğunda çağrılan metoddur. Bu aşamada data observation (reactivity), events, computed properties ve watchers’lar ayarlanmıştır
          ve etkileşime girebiliriz; fakat DOM ile etkileşime giremeyiz. Çünkü mounted olmamıştır. Yani “el” elementimiz olarak belirttiğimiz html kod bloğu sanal DOM’a daha yerleştirilmemiştir.
          Aynı zamanda “$el” property ‘de kullanıma daha henüz hazır değildir.
        </p>
        <h6>beforeMount</h6>
        <p>
          Bu aşamada “el” elementimiz olarak belirttiğimiz html kod bloğu sanal DOM’a daha yerleştirilmemiştir. Aynı zamanda “$el” property ‘de kullanıma daha henüz hazır değildir.
          Yerleştirme işlemi gerçekleşmeden önce bu hook metodu çağrılır.
        </p>
        <h6>Mounted</h6>
        <p>
          Bu aşamada “el” elementimiz sanal DOM’a yerleştirilmiştir. Kısaca tüm componentler render edilmiş ve sanal DOM’a yerleştirilmiştir.
          Vue.js özel “$el” değişkeni yeni oluşturulan “vm.$el” ‘e devredilmiştir. Ayrıca artık tüm componentler etkileşime hazır vaziyettedir.
        </p>
        <p>
          Sayfa açılır açılmaz ajax ile alınan bir veriyi componentlere aktarma gibi işlemler yapacaksak bu ajax çağrımları “Mounted” hook metodu içerisinde yapılmalıdır.
          Çünkü “Mounted” JQuery’deki
          <strong>$(document).ready()</strong>‘e tekabul ediyor. Arasındaki fark birisi gerçek DOM hazır olunca çağrılıyor,
          diğerinde de “el” elementimiz sanal DOM’a yerleştirip hazır olunca çağrılıyor.
        </p>
        <h6>beforeUpdate</h6>
        <p>Bu hook metodu, herhangi bir data değiştiğinde ve DOM’da bunu güncellemeye ihtiyaç duyduğunda data ve DOM’da veri değişmeden bu metod çağrılıyor.</p>
        <h6>Updated</h6>
        <p>Veride değişiklik olduktan sonra ve DOM’da da veri değiştiğinde bu hook metodu çağrılacaktır. Eğer değişiklikten sonra araya girip bir işlem yaptırmak istiyorsak bu metodu kullanacağız.</p>
        <h6>beforeDestroy</h6>
        <p>Vue instance nesnesi yok edilmeden önce çağrılacak hook metodudur.</p>
        <h6>Destroyed</h6>
        <p>Vue instance nesnesi yok edildikten sonra çağrılacak hook metodudur.</p>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/yasamDongusu.png" />
        </div>
        <div class="text-center mb-3">
          <img class="border border-success img-fluid" src="../assets/lifeCycle-example.png" />
        </div>
      </div>
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------- -->
    </div>
    <div class="card-footer bg-dark text-white">
      <p>Bir sonraki böümde componentler arasında iletişim konularını inceleyelim.</p>
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