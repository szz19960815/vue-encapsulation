<template>
  <section class="xjlDialog">
    <el-dialog
      :title="title"
      :visible.sync="showDialog"
      :width="width"
      :fullscreen="fullScreen"
      :center="center"
    >
      <slot></slot>
    </el-dialog>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false,
      required: true
    },
    width: {
      type: String,
      default: '50%'
    },
    fullScreen: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    footer: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    changeShow (val) {
      this.$emit('update:show', val)
    }
  },
  computed: {
    showDialog: {
      get () {
        return this.show
      },
      set (val) {
        // this.$emit('update:show', val)
        this.changeShow(val)
      }
    }
  }
}
</script>

<style>
</style>
