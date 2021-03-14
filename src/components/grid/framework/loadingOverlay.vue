<template>
  <div>
    <a-spin tip="Grid Loading..." />
    <a-divider></a-divider>
    <a-button type="primary" @click="onTest">Console</a-button>
    <a-divider></a-divider>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script lang="ts">
import { Options, Prop, Vue } from "vue-property-decorator";
import { defineComponent } from "vue";
@Options({
  components: {},
})
export default class extends Vue {
  created() {
    console.log("LENG ~ created", this);
  }
  mounted() {
    console.log("LENG ~ mounted", this);
  }
  onTest(){
    console.warn("LENG ~ onTest", this);
  }
  updated() {

  }
  destroyed() {

  }
}
// It works here
// export default defineComponent({
//   created() {
//     console.log("LENG ~ created", this);
//   },
//   mounted() {
//     console.log("LENG ~ mounted", this);
//   },
//   methods: {
//     onTest() {
//       console.warn("LENG ~ onTest", this);
//     },
//   },
// });
</script>

<style lang="less">
</style>
