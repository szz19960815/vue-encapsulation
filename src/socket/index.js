export const mainSocket = {
  connect: function () {
    console.log('main', '连接成功')
  },
  disconnect: function () {
    console.log('main', '断开连接')
  },
  remessage: function (msg) {
    console.log(msg)
  }
}

export default {
  mainSocket
}
