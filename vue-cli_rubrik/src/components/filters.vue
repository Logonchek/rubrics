<template>
  <div class="filtres">
    <div class="filtres__item">
      <p class="filtres__title">регионы</p>
      <select v-model="region">
        <option>Все</option>
        <option>Брянская область</option>
        <option>Белгородская область</option>
        <option>Владимирская область</option>
      </select>
    </div>
    <div class="filtres__item">
      <p class="filtres__title">Статистика кластеров</p>
      <select v-model="klaster">
        <option>Все</option>
        <option>Брянская область</option>
        <option>Белгородская область</option>
        <option>Владимирская область</option>
      </select>
    </div>
    <div class="filtres__item">
      <p class="filtres__title">Статистика внутренней рекламы</p>
      <select v-model="reklama">
        <option>Все</option>
        <option>Брянская область</option>
        <option>Белгородская область</option>
        <option>Владимирская область</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      region: 'Все',
      klaster: 'Все',
      reklama: 'Все',
    }
  },

  watch: {
    // эта функция запускается при любом изменении вопроса
    region: function () {
      this.$emit('changesFilter', [this.region, this.klaster, this.reklama])
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.filtres {
  margin-bottom: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
}
select {
  padding: 10px;
  border: 2px solid #e6e5e2;
  background: #ffffff;
  border-radius: 8px;
}
.filtres__title {
  margin-bottom: 8px;
}
</style>
