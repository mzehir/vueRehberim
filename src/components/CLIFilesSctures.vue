<template>
  <div class="card">
    <div class="card-header">
      <h4
        class="text-center bg-success p-3 rounded-lg shadow-lg"
      >CLI Dosya Yapısı Hakkında Bilgilendirmeler</h4>
    </div>
    <div class="card-body bg-primary">
      <div class="card-text">
        <p>
          <strong>webpack-simple projesi oluşturduğumuzda aşağıdaki fotoğraftaki gibi bir dosya yapısı bizi karşılar.</strong>
        </p>
        <div class="text-center mb-3">
          <img
            class="border border-success img-fluid"
            src="../assets/webpack-simple-files-sctures.png"
          />
        </div>
        <ul class="list-group">
          <li
            class="list-group-item list-group-item-action list-group-item-primary"
          >node_modüles = proje için gerekli olan modüllerin bulunduğu yerdir.</li>
          <li
            class="list-group-item list-group-item-action list-group-item-primary"
          >babelrc = es6 kodlarımızı es5 formatına dönüştürüldüğü yerdir.</li>
          <li
            class="list-group-item list-group-item-action list-group-item-primary"
          >index.html = internet ortamında build edildikten sonra çalıştırılacak olan dosyadır.</li>
          <li class="list-group-item list-group-item-action list-group-item-primary">
            package.json = Bir nevi referans dosyasıdır.
            Pojeye eklenen bağımlılıkları not alır. Daha sonra bağımlılıklar silindiğinde buraya alınan notlar sayesinde bağımlılıklar tekrardan yüklenebilir.
          </li>
          <li
            class="list-group-item list-group-item-action list-group-item-primary"
          >webpack.config = Projemizin tüm ayarlarının tutulduğu yerdir.</li>
          <li
            class="list-group-item list-group-item-action list-group-item-primary"
          >template tagları = Burada normal html etiketlerimizi kullanarak işlemlermizi yaparız. Ayrıca vue bize burada html etiketi olmayan birtakım etiket görünümünde kullanımlarda sunar.</li>
          <li class="list-group-item list-group-item-action list-group-item-success">
            script tagları = Burada ise javascript işlemlerimizi yaparız ki bu kısım kendi içerisinde parçalara bölünmektedir. Bunlar:
            <ul class="list-group">
              <li
                class="list-group-item list-group-item-action list-group-item-success"
              >script tagının hemen altına import işlemlerini yaparız.</li>
              <li
                class="list-group-item list-group-item-action list-group-item-success"
              >İmport işleminden sonra yapılacak tüm işlemler export default yapısı içerisinde yapılır. Yani import işlemlerinden sonra export default yapısını kurarız.</li>
              <li class="list-group-item list-group-item-action list-group-item-success">
                Değişken tanımlama, obje oluşturma, array oluşturma yada gelen veriyi karşılama gibi işlemler için ise export default {} güzelleri arasında data(){} oluştururuz.
                Ve data güzelleri arasında ise return{} oluştururuz. return güzelleri arasında ise tanımlamalarımızı yaparız.
              </li>
              <li
                class="list-group-item list-group-item-action list-group-item-success"
              >Fonksiyon işlemleri için ise data(){} property'si ile aynı seviyede methods:{} yapısını kurarız. Ve Fonksiyonlarımızı bu yapı içerisinde oluştururuz.</li>
              <li class="list-group-item list-group-item-action list-group-item-success">
                computed:{} , watch:{} yada yaşam döngüleri tanımlamalarımızı ise yine data(){} ile aynı seviyede oluştururuz.
                Hatırlayalım computed ve watch içerisindede fonksiyon tanımlaması yapabiliyorduk. Sadece çalışma prensibi daha farklıydı.
              </li>
            </ul>
          </li>
          <li class="list-group-item list-group-item-action list-group-item-primary">
            style tagları = Burada ise komponentimizle alakalı css şlemlerini yürütüyoruz.
            Ve buradaki işlemlerin diğer komponentleri etki altına almaması için scoped ekini kullanıyoruz. style scoped
          </li>
        </ul>
      </div>
    </div>
    <div class="card-footer bg-dark text-white">
      <p>Bu bölümde minimum derecede dosyalar hakkında bilgiler verilmiştir. Bir sonraki derste komponent yapısına giriş yapalım ve komponentler arasında iletişi inceleyelim</p>
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