<template>
  <div class="rubric-statistic">
    <ul class="rubrics" @click="rubric">
      <li
        v-for="(mount, index) in rubrics"
        :key="index"
        class="rubrics__li rubrics__li_all"
        data-rubric="all"
        ref="myInput"
      >
        {{ mount.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import api from '../api'

export default {
  data() {
    return {
      heading: '',
      rubrics: api,
    }
  },
  methods: {
    rubric: function (e) {
      this.heading = e.target.innerHTML
      this.$emit('current-heading', this.heading)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.rubric-statistic {
}
.rubrics {
  display: grid;
  max-width: 300px;
  background: #e6e5e281;
  .rubrics__li {
    list-style-type: none;
    border-bottom: 1px solid rgb(161, 161, 161);
    padding: 16px;
  }
  .rubrics__li:hover {
    cursor: pointer;
  }
  .rubrics__li:active {
    background: white;
  }
}
</style>
