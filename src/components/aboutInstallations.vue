<template>
  <div class="card">
    <div class="card-header">
      <h4
        class="text-center bg-success p-3 rounded-lg shadow-lg"
      >Kurulumlar Hakkında Bilgilendirmeler</h4>
      <hr />
      <p class="text-center">
        <a href="#nodeKurulum" class="badge badge-success">NodeJs Kurulumu</a>
        <a href="#CLIKurulum" class="badge badge-success">Vue CLİ Kurulumu</a>
        <a href="#WebPackKurulum" class="badge badge-success">Vue CLİ WEBPACK-SİMPLE Proje Oluşturma</a>
        <a
          href="#BootstrapKurulum"
          class="badge badge-success"
        >Projeye CDN İle Bootstrap İmport Etmek</a>
      </p>
    </div>
    <div class="card-body bg-primary text-white">
      <!-- -------------------------------------------------------------------------------NODEJS KURULUMU----------------------------------------------------------------------------------------->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="nodeKurulum">Node Js Kurulumu</h4>
      </div>
      <div class="card-text">
        <p>Vue CLI ile yeni bir proje başlatabilmek için öncelikle PC içinde node.js'in kurulu olması gerekmektedir.</p>
        <p>
          Node.js kurulumu için
          <a class="text-dark" href="https://nodejs.org/en/">buraya</a> tıklayabilirsiniz. NodeJs kurulum ile alakalı daha detaylı bilgiyi internetten bulabiliriz. O yüzden daha derine inmeden CLİ kurulumuna geçelim.
        </p>
      </div>
      <!-- -------------------------------------------------------------------------------VUE CLİ KURULUMU----------------------------------------------------------------------------------------->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="CLIKurulum">Vue CLİ Kurulumu</h4>
      </div>
      <div class="card-text">
        <p>
          Nodejs kurulumunda sonra bilgisayarımızda cmd yada powerShell ekranımızı açıyoruz ve fotoğraftaki gibi
          <strong>..cd</strong> komutu ile c dizinine ulaşıyoruz ve kodumuzu yazıyoruz enter tuşuna basıyoruz.
        </p>
        <div class="text-center">
          <img class="border border-success img-fluid" src="../assets/deneme.png" />
        </div>
        <p>Bu kurulum işlemini yine aynı şekilde editör üzerinden de yapabilmek mümkündür.</p>
        <p>
          Şayet bu kurulumda vue : "File C:\Users\ZehirMan\AppData\Roaming\npm\vue.ps1 cannot be loaded because running scripts is disabled on this system.
          For mor e information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170." gibi hata alınırsa;
        </p>
        <ul class="list-group">
          <li
            class="list-group-item list-group-item-action list-group-item-primary"
          >1. adımda windowsa ait PowerShell i yönetici olarak çalıştırın.</li>
          <li
            class="list-group-item list-group-item-action list-group-item-primary"
          >2. adımda 'cd..' komutuyla 'PS C:\>' bu ana dizine kadar gelin.</li>
          <li
            class="list-group-item list-group-item-action list-group-item-primary"
          >3. adımda 'PS C:\>' devamına 'Set-ExecutionPolicy RemoteSigned' bunu yazın.</li>
          <li
            class="list-group-item list-group-item-action list-group-item-primary"
          >4. adımda entere bastıktan sonra çıkan uyarıya 'y' yazın ve entere basın.</li>
        </ul>
        <p>
          <a
            class="text-dark"
            href="https://tecadmin.net/powershell-running-scripts-is-disabled-system/"
          >Ayrıca bu hata hakkında daha detaylı bilgi için buraya tıklayınız.</a>
        </p>
        <p>
          <a
            class="text-dark"
            href="https://cli.vuejs.org/guide/installation.html"
          >Vue CLİ kurulumunda daha detaylı bilgi için buraya tıklayınız.</a>
        </p>
      </div>
      <!-- -------------------------------------------------------------------VUE CLİ WEBPACK-SİMPLE PROJE OLUŞTURMA------------------------------------------------------------------------------->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="WebPackKurulum">Vue CLİ WEBPACK-SİMPLE Proje Oluşturma</h4>
      </div>
      <div class="card-text">
        <p>
          Vue CLİ kurulumundan sonra webpack-simple projesi oluşturmak için editörümüzün terminal ekranına fotoğraftaki kodu yazıyoruz ve enter tuşuna basıyoruz.
          Yükleme esnasında sorulan sorulara cevap olarak sadece enter tuşuna basmak yeterlidir. Ayrıca projeyi özellikle belirli bir klasör içine yüklemek istiyorsanız
          editörünüzü o klasör üzerinden çalıştırmayı unutmayın. Mesela aşağıdaki fotoğrafta ben projem adlı klasör içerisinde projeyi oluşturuyorum.
        </p>
        <div class="text-center">
          <img class="border border-success img-fluid" src="../assets/webpack-simple-install.png" />
        </div>
        <p>Son olarak proje ismi tamamen küçük harften oluşmalıdır.</p>
        <p>Bu yükleme işleminden sonra editörümüzü projemizin bulunduğu klasör dizininden başlatıyoruz ve terminal ekranımıza aşağıdaki kodu yazarak node_modüles bağımlılıklarını yüklüyoruz.</p>
        <div class="text-center">
          <img class="border border-success img-fluid" src="../assets/nodeModules-Install.png" />
        </div>
        <p>Fotoğraftaki klasör yolu dikkate alınmamalıdır.</p>
      </div>
      <!-- -------------------------------------------------------------------Projeye CDN İle Bootstrap İmport Etmek------------------------------------------------------------------------------->
      <div class="card-title text-center bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 id="BootstrapKurulum">Projeye CDN İle Bootstrap İmport Etmek</h4>
      </div>
      <div class="card-text">
        <p>Proje bootstrap import etmek için index.html dosyasına fotoğraftaki gibi kod eklemelerini yapıyoruz.</p>
        <div class="text-center">
          <img class="border border-success img-fluid" src="../assets/bootstrap-cdn-install.png" />
        </div>
        <p>
          <a
            class="text-dark"
            href="https://getbootstrap.com/"
          >Aynı zamanda fotoğraftaki kodlara buraya tıklayarakta ulaşabilirsiniz.</a>
        </p>
      </div>
      <!-- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
    </div>
    <div
      class="card-footer bg-dark text-white"
    >Şu anda gerekli olan kurulumlar bu kadardır. Bir sonraki derste webpack-simple ile beraberinde gelen dosyalarımzı kabaca inceleyelim.</div>
    <button @click="topFunction" id="myBtn">Yukarı</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      avatar: "deneme.png",
    };
  },
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