<template>
  <section class="xjlTable">
    <el-table :data="table.list" :border="border" :height="height || 'auto'" :header-row-style="headerStyle">
      <el-table-column
        v-for="(column,index) in table.column"
        :key="index"
        :label="column.title"
        :width="column.width"
        :min-width="column.minWidth"
        header-align="center"
        :align="column.align"
      >
        <template slot-scope="scope">
          <el-button
            v-for="(btn,i) in column.btn"
            :size="btn.size"
            :plain="btn.plain"
            :round="btn.round"
            :circle="btn.circle"
            :loading="btn.loading"
            :disabled="btn.disabled"
            :icon="btn.icon"
            :key="i"
            :type="btn.type"
            @click.stop="btn.callback.call(self,scope.row,$event)"
          >{{btn.label}}</el-button>
          {{scope.row[column.name]}}
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
export default {
  props: {
    table: {
      type: Object,
      required: true
    },
    border: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: ''
    },
    headerStyle: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      self: this
    }
  },
  mounted () {
    this.table.column.forEach(item => {
      if (item.filter) {
        this.table.list.forEach(data => {
          if ( typeof data[item.name] === 'number'){
            data[item.name] = this.$w.vm.$options.filters[item.filter](data[item.name])
          }
        })
      }
    })
  }
}
</script>

<style lang="less" scoped>
</style>
