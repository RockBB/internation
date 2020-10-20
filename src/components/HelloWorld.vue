<template>
  <div class="hello">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="5"><router-link to="/">{{ $t("home") }}</router-link></el-col>
          <el-col :span="5"><router-link to="/about">{{ $t("about") }}</router-link></el-col>
          <el-col :span="5">{{ $t("exchangeLanguage") }}</el-col>
          <el-col :span="5">
            <el-dropdown @command="handleSetLang" trigger="click">
              <div class="lang-active">
                <div v-for="(lang, i) in langs" :key="`LangActive${i}`" v-show="lang.key === activeLang">{{ lang.value }}
                  <i class="el-icon-arrow-down el-icon--right"></i></div>
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(lang, i) in langs" :key="`Lang${i}`" :command="lang.key">
                  <span class="text">{{ lang.value }}</span></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :span="4">{{$t('login.username')}}</el-col>
        </el-row>

      </el-header>
<!--      <el-main>-->
<!--        <div class="block">-->
<!--          <span class="demonstration">{{ $t("chooseDate") }}</span>-->
<!--          <el-date-picker v-model="value1" type="date" placeholder="">-->
<!--          </el-date-picker>-->
<!--        </div>-->
<!--      </el-main>-->
    </el-container>

  </div>
</template>

<script>
import {
    mapGetters,
    mapMutations
  } from 'vuex';
export default {
  name: 'HelloWorld',
  // i18n:{
  //     messages:{
  //       en: {
  //         title: 'Sport Brands',
  //         nike: 'Nike',
  //         adi: 'Adidas',
  //         nb: 'New Banlance',
  //         ln: 'LI Ning'
  //       },
  //       zh: {
  //         title: '运动品牌',
  //          nike: '耐克',
  //           adi: '阿迪达斯',
  //           nb: '新百伦',
  //           ln: '李宁'
  //       },
  //     }
  // },
  data () {
    return {
      value1: '',
      langs: [{
          key: 'zh',
          value: '中文'
        },
        {
          key: 'en',
          value: 'EngLish'
        },
        ],
    }
  },
 computed: {
      ...mapGetters({
        activeLang: 'language',
      })
    },
 methods: {
      ...mapMutations(['setLanguage']),
      handleSetLang(lang) {
        // 设置i18n.locale 组件库会按照上面的配置使用对应的文案文件
        this.$i18n.locale = lang
        // 提交mutations
        this.setLanguage(lang)
      }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
  body {
    margin: 0;
    bottom: 0;
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    /*text-decoration: none;*/
  }
  .router-link-exact-active {
      color: #42b983;
  }
</style>
