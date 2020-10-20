<template>
  <div class="about">
    <hello-world></hello-world>
    <h1>This is an about page</h1>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  }
}
</script>
