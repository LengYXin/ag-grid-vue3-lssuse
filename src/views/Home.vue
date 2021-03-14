<template>
  <div class="home" style="height: 500px">
    <Grid :columnDefs="columnDefs" />
  </div>
  <!-- <a-divider>Test Btn</a-divider>
  <a-button type="primary">Get Data</a-button> -->
</template>

<script lang="ts">
import { Vue, Options, Inject } from "vue-property-decorator";
import { defineComponent } from "vue";
import { ColDef, ColGroupDef, GridOptions } from "ag-grid-community";
import Grid from "@/components/grid/grid.vue"; // @ is an alias to /src
import { EnumLocaleLabel } from "./locales"; // @ is an alias to /src

@Options({ components: { Grid } })
export default class extends Vue {
  columnDefs: (ColDef | ColGroupDef)[] = [
    {
      headerName: EnumLocaleLabel.ITCode,
      field: "ITCode",
    },
    {
      headerName: EnumLocaleLabel.Name,
      field: "Name",
    },
    {
      headerName: EnumLocaleLabel.Sex,
      field: "Sex",
    },
    {
      headerName: EnumLocaleLabel.Photo,
      field: "Photo",
    },
    {
      headerName: EnumLocaleLabel.IsValid,
      field: "IsValid",
    },
    {
      headerName: EnumLocaleLabel.RoleName,
      field: "RoleName",
    },
    {
      headerName: EnumLocaleLabel.GroupName,
      field: "GroupName",
    },
  ];
  get gridOptions(): GridOptions {
    return {
      frameworkComponents: {
        // RowAction: ,
      },
    };
  }
  created() {}
}
</script>
