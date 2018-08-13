
<!--子组件-->
<template>
  <!-- <el-dialog :visible.sync="$store.state.dialog.show"></el-dialog> -->
  <el-dialog
  title="提示"
  :visible.sync="this.show"
  width="30%"
  center>
  <span>需要注意的是内容是默认不居中的</span>
  <span slot="footer" class="dialog-footer">
    <!-- <el-button @click="$store.state.dialog.show = false">取 消</el-button>
    <el-button type="primary" @click="$store.state.dialog.show = false">确 定</el-button> -->
    <el-button @click="notShowBtn">取 消</el-button>
    <el-button type="primary" @click="notShowBtn">确 定</el-button>
  </span>
</el-dialog>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  data () {
    return {
    //   dialogVisible: $store.state.dialog.show
    }
  },
  methods: {
    notShowBtn () {
      this.$store.state.dialog.show = false
    //   this.show = this.notShow
    //   return this.$store.state.dialog.show = !this.$store.state.dialog.show
    }
  },
  computed: {
    notShow () {
      return this.$store.getters.notShow
    },
    // 这里的三点叫做 ：扩展运算符
    ...mapState({
      show: state => state.dialog.show // 相当于 this.$store.state.dialog.show
    }),
    ...mapGetters([
      'notShow'
    ])

    // mapGetters、 mapActions 和 mapState 类似
    // mapGetters 一般也写在 computed 中
    // mapActions 一般写在 methods 中
  },
  created () {
    console.info(this.show)
    console.info(this.notShow)
    console.info(this.$store.getters.notShow)
  }
}
</script>
