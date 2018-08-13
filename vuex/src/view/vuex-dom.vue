<!--父组件中引入子组件-->
<template>
  <div>
    <!-- <a href="javascript:;" @click="$store.state.dialog.show = false">点击</a> -->
    <el-button type="primary" @click="newShow">点击</el-button>
    <t-dialog></t-dialog>
  </div>
</template>

<script>
import dialog from './vuex-dom-1.vue'
export default {
  components: {
    't-dialog': dialog
  },
  methods: {
    newShow () {
    //   $store.state.dialog.show = false
    //   console.info(this.show)
      console.info(!this.$store.state.dialog.show)
      if (this.$store.state.dialog.show === false) {
        this.$store.state.dialog.show = !this.$store.state.dialog.show
      }
    }
  }
}
</script>
