<template>
  <ag-grid-vue
    style="height: 100%"
    class="ag-theme-balham ag-grid-card"
    :columnDefs="columnDefs"
    :rowData="rowData"
    :gridOptions="newGridOptions"
  ></ag-grid-vue>
</template>

<script lang="ts">
import { Vue, Options, Prop } from "vue-property-decorator";
import {
  GridOptions,
  GridReadyEvent,
  RowDataChangedEvent,
} from "ag-grid-community";
// import { AgGridVue } from "ag-grid-vue3";
import { AgGridVue } from "./agGridVue/AgGridVue";
import lodash from "lodash";
import defaultOptions from "./defaultOptions";
@Options({
  components: {
    AgGridVue,
  },
})
export default class AgGrid extends Vue {
  @Prop({ default: () => [] }) columnDefs;
  @Prop({}) rowData;
  @Prop({ default: () => ({}) }) gridOptions: GridOptions;
  get newGridOptions() {
    return lodash.merge({}, defaultOptions());
  }
  // get GridKey() {
  //   return this.$i18n.locale;
  // }
  created() {}
}
</script>
<style lang="less">
@import "~ag-grid-community/dist/styles/ag-grid.css";
// @import '~ag-grid-community/dist/styles/ag-theme-alpine.css';
@import "~ag-grid-community/dist/styles/ag-theme-balham.css";
// @import "~ag-grid-community/dist/styles/ag-theme-material.css";
// 主题定制 https://www.ag-grid.com/vue-grid/themes-customising/
// .ag-grid-card {
//   // --ag-background-color: @primary-color
//   &.ag-theme-balham,
//   &.ag-theme-material,
//   &.ag-theme-alpine {
//     transition: height 0.2s;
//     min-height: 350px;

//     .ag-checkbox-input-wrapper.ag-checked::after {
//       color: @primary-color;
//     }

//     .ag-rtl .ag-side-bar-left .ag-selected .ag-side-button-button,
//     .ag-ltr .ag-side-bar-right .ag-selected .ag-side-button-button,
//     .ag-tab-selected {
//       border-color: @primary-color;
//     }
//   }
// }
</style>
