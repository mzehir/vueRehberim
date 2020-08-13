<template>
  <div class="card mb-2">
    <div class="card-header">
      <h4 class="text-center bg-success p-3 rounded-lg shadow-lg">Proje Hakkında Bilgilendirmeler</h4>
    </div>
    <div class="card-body bg-primary">
      <div class="card-title bg-dark p-3 rounded-lg shadow-lg text-white">
        <h4 class="text-center">Genel Bakış</h4>
      </div>
      <div class="card-text text-white">
        <p>
          Şu anda inceliyor olduğumuz proje Vuejs eğitimim sırasında aldığım notlardan oluşan bir projedir. Ve bu projeyi inceliyorsak Vuejs hakkında en azından temel
          bilgilere sahip olmamız gerekmektedir. Çünkü bu projede Vue.js ile alakalı konular öğretici niteliklerden daha çok hatırlatıcı bir özelliğe sahiptir. Aslında
          bir nevi not defteri gibi düşünülebilir.
        </p>
        <p>Proje içerisinde:</p>
        <ul class="list-group">
          <li
            class="list-group-item list-group-item-action list-group-item-primary"
          >Vue hakkında genel bilgiler.</li>
          <li
            class="list-group-item list-group-item-action list-group-item-primary"
          >Vue CLİ hakkında genel bilgiler.</li>
          <li
            class="list-group-item list-group-item-action list-group-item-primary"
          >Bazı kurulum işlemleri hakkında bilgiler.</li>
          <li
            class="list-group-item list-group-item-action list-group-item-primary"
          >CLİ ile component oluşturma.</li>
          <li
            class="list-group-item list-group-item-action list-group-item-primary"
          >Directives hakkında bilgiler.</li>
          <li
            class="list-group-item list-group-item-action list-group-item-primary"
          >Eventler hakkında bilgiler.</li>
          <li
            class="list-group-item list-group-item-action list-group-item-primary"
          >Modifier hakkında bilgiler.</li>
          <li
            class="list-group-item list-group-item-action list-group-item-primary"
          >Yaşam döngüleri hakkında bilgiler</li>
          <li
            class="list-group-item list-group-item-action list-group-item-primary"
          >Data, methods, computed, watch gibi properties kullanımları hakkında genel bilgiler.</li>
          <li class="list-group-item list-group-item-action list-group-item-primary">Bind İşlemleri.</li>
          <li
            class="list-group-item list-group-item-action list-group-item-primary"
          >Resource hakkında genel bilgiler.</li>
          <li
            class="list-group-item list-group-item-action list-group-item-primary"
          >Props, custom events, event bus kullanımları.</li>
          <li class="list-group-item list-group-item-action list-group-item-primary">Slot kullanımı.</li>
          <li
            class="list-group-item list-group-item-action list-group-item-primary"
          >Switch kullanımı.</li>
          <li
            class="list-group-item list-group-item-action list-group-item-primary"
          >Keep-Alive kullanımı.</li>
          <li
            class="list-group-item list-group-item-action list-group-item-primary"
          >Routing Kullanımı.</li>
          <li class="list-group-item list-group-item-action list-group-item-primary">Vuex kullanımı</li>
        </ul>
        <p>
          gibi konular yer almaktadır. Ve bu konular hakkında bilgiler verilmektedir. Bunlarla alakalı fotoğraf destekli örnekler yapılmaktadır. Sadece ilk konular
          olan Vue nedir?, Vue dosya yapısı nedir? gibi konular hakkında fazla bilgi yer almamaktadır. Zaten bunlarla ilgili internette fazlaca kaynak bulunmaktadır.
        </p>
      </div>
    </div>
    <div class="card-footer bg-dark text-white">
      <p>Bu projenin kaynağına buraya tıklayarak ulaşabilirsiniz. Bir sonraki derste Vuejs hakkında genel bilgilerden bahsedeceğiz.</p>
    </div>
    <button @click="topFunction" id="myBtn">Yukarı</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
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