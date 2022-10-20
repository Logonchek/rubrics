<template>
  <div class="main-content">
    <div class="coll">
      <rubrics @current-heading="headingOn" />
      <div class="categories">
        <div class="filtres">
          <div class="filtres__item">
            <p class="filtres__title">регионы</p>
            <select value="Все регионы" v-model="choicRegiоn">
              <option v-for="(region, index) in filtres" :key="index">
                {{ region.title }}
              </option>
            </select>
          </div>
          <div class="filtres__item">
            <p class="filtres__title">Статистика кластеров {{ choicRegiоn }}</p>
            <select>
              <option>Все</option>
              <option>Брянская область</option>
              <option>Белгородская область</option>
              <option>Владимирская область</option>
            </select>
          </div>
          <div class="filtres__item">
            <p class="filtres__title">Статистика внутренней рекламы</p>
            <select>
              <option>Все</option>
              <option>Брянская область</option>
              <option>Белгородская область</option>
              <option>Владимирская область</option>
            </select>
          </div>
        </div>
        {{ title }}

        <div class="cart">
          <div class="cart__graph" v-for="(region, index) in cart" :key="index">
            {{ region.value }}
            <div class="grapf__item grapf__item_figure">
              <div
                class="figure"
                :style="{ height: `${region.value / 50}%` }"
              ></div>
            </div>
            {{ region.date }}
          </div>
        </div>

        <table>
          <tbody>
            <tr>
              <td style="width: 152px"></td>
              <td v-for="(category, index) in table[0].values" :key="index">
                {{ category.date }}
              </td>
            </tr>
          </tbody>
        </table>

        <table v-for="(category, index) in table" :key="index">
          <tbody>
            <tr>
              <td>{{ category.title }}</td>
              <td v-for="(title, index) in category.values" :key="index">
                {{ title.value }}
              </td>
            </tr>
            <tr
              v-for="(childs_category, index) in category.childs"
              :key="index"
            >
              <td>
                {{ childs_category.title }}
              </td>
              <td v-for="(title, index) in childs_category.values" :key="index">
                {{ title.value }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import rubrics from './components/rubrics.vue'
import api_categories from './api_categories'
export default {
  name: 'App',
  components: {
    rubrics,
  },

  data() {
    return {
      title: '',
      choicRegiоn: '',
      filtres: api_categories.regions_list,
      table: api_categories.table,
      cart: api_categories.chart,
    }
  },

  methods: {
    headingOn(heading) {
      this.title = heading
    },
  },
  watch: {
    async choicRegiоn() {
      // let responseTable = await fetch(
      //   `http://rubriks?region=${this.choicRegiоn}`
      // )
      // this.table = await responseTable.json()
      console.log(this.table)
    },
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.main-content {
  max-width: 1920px;
  width: 90%;
  margin: auto;
  margin-top: 40px;
}
.coll {
  display: grid;
  grid-template-columns: auto 1fr;
  justify-items: start;
  grid-gap: 44px;
}
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
.mount {
  margin-left: 24px;
}
.mount-wrapper {
  margin-left: 60px;
}
td {
  // padding-right: 20px;
  padding: 10px;
}
tr {
}
.figure {
  background: #3b8dd2;
  width: 40px;
  max-height: 200px;
  display: grid;
  align-self: self-end;
}
.grapf__wrapper {
  display: grid;
  grid-auto-flow: column;
  justify-content: left;
  grid-gap: 50px;
}
.grapf__item_figure {
  height: 200px;
  display: grid;
  margin-bottom: 8px;
}
.cart {
  display: grid;
  grid-auto-flow: column;
  margin-bottom: 60px;
  justify-content: left;
  grid-gap: 16px;
}
</style>
