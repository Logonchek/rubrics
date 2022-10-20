<template>
  <div class="material-statistic">
    <div class="grapf__wrapper">
      <div
        class="grapf__item grapf__item_total"
        v-for="(mount, index) in mounts"
        :key="index"
      >
        {{ mount.total }}
        <div class="grapf__item grapf__item_figure">
          <div class="figure" :style="{ height: `${mount.total / 10}%` }"></div>
        </div>
        {{ mount.mount }}
      </div>
    </div>
    <div class="grapf__wrapper"></div>
    <div class="table-data">
      <div class="mount" v-for="(bbb, index) in rr" :key="index">
        {{ bbb.title }}
      </div>
    </div>
  </div>
</template>

<script>
import materialData from '../api'
console.log(materialData.region.all[2].categories)

export default {
  data() {
    return {
      mounts: materialData.region.all,
      grapf: materialData.region.all.total,
      rr: [],
      tt: [],
    }
  },

  mounted() {
    this.mounts.forEach((element) => {
      this.rr.push(element.categories)
    })
    this.rr.forEach((element) => {
      this.tt.push(element)
      console.log(this.tt)
    })
  },
  methods: {
    normalizeGrapf() {
      const maxValue = Math.max(...this.grapf)
      const minValue = Math.min(...this.grapf)
      return this.grapf.map((price) => {
        ;((price - minValue) * 100) / (maxValue - minValue)
      })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
.figure {
  background: #3b8dd2;
  width: 40px;
  max-height: 200px;
  display: grid;
  align-self: self-end;
}
</style>
