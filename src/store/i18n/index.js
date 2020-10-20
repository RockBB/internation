// 引入必要的库
import Vue from 'vue'
import VueI18n from 'vue-i18n'
// 引入element ui国际化文件
import elen from 'element-ui/lib/locale/lang/en'
import elcn from 'element-ui/lib/locale/lang/zh-CN'
import ElementLocale from 'element-ui/lib/locale'

// 引入工具函数
import { getStorage, getBrowserLang } from '@/util'

// 引入项目中需要用到的中英文文案配置js
import enLocale from './lang/en'
import cnLocale from './lang/zh'

// 使用vue-i18n库
Vue.use(VueI18n);

// 获取当前语言（初始化时localStorage里没有存语言，默认为浏览器当前的语言）
const lang = getStorage('lang') || getBrowserLang();

// 组合element ui 和 项目自身的文案文件
const messages = {
    'en': {
        ...elen,
        ...enLocale
    },
    'zh': {
        ...elcn,
        ...cnLocale
    }
};

// 创建vueI18n实例并输出，在main.js中调用
const i18n = new VueI18n({
    locale: lang,
    messages,
    silentFallbackWarn: true,  // 设置为true后，在组件内使用时在浏览器不会报警告
});

ElementLocale.i18n((key, value) => i18n.t(key, value));
export default i18n
