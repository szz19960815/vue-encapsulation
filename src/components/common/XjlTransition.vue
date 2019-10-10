<template>
  <section class="xjlTransition">
    <transition :name="typeString">
      <slot></slot>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'xjlTransition',
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    typeString () {
      let res = ''
      res = 'el-' + this.type
      return res
    }
  }
}
</script>

<style lang="less" scoped>

</style>
