<template>
  <div class="home">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <el-main>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column :label="$t('date')" >
              <span class="demonstration">{{ $t("chooseDate") }}</span>
              <el-date-picker v-model="value1" type="date" placeholder=""></el-date-picker>
          </el-table-column>
          <el-table-column prop="name" :label="$t('title')"></el-table-column>
        </el-table>
      </el-main>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
    data () {
      return {
        value1: '',
        tableData: [{
            date: '2016-05-02',
            name: this.$t('nike'),
          }, {
            date: '2016-05-04',
            name: this.$t('adi'),
          }, {
            date: '2016-05-01',
            name: this.$t('nb'),
          }, {
            date: '2016-05-03',
            name: this.$t('ln'),
          }]
      }
    }
}
</script>

<style>
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
</style>
