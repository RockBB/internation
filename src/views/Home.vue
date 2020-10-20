<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
      <el-main>
        <div class="block">
          <span class="demonstration">{{ $t("chooseDate") }}</span>
          <el-date-picker v-model="value1" type="date" placeholder="">
          </el-date-picker>
        </div>
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
        }
    }
}
</script>
