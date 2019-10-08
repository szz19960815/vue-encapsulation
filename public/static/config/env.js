'use strict'

// process配置项
const appName = '项目名称'

// 版本号
var version = {
  show: true,
  value: "v1.0.0"
}

// 所有需要的url
var apiUrl = "" // 业务接口请求
var uploadUrl = "" // 文件上传接口
var ssoUrl = "" // 服务器下载接口
var frontUrl = "" // 客户端下载接口
var fileCamp = "" // 文件上传服务器地址
var filePreview = "" // 文件预览地址

let protocol = window.location.protocol // 协议
let hostname = window.location.hostname // 主机地址
let apiPort = "15012" // 业务请求地址端口
let webPort = window.location.port // 当前访问地址端口
let fileHostType = "in" // 文件服务器地址类型
let href = hostname + ":" + webPort // 当前url，判断环境依据

let serviceAddr = {
  path: '192.168.0.245',
  ports: ["15012", "8080", "in"] // [服务端接口端口，前端项目启动端口，内网访问还是外网访问]
}

let filesAddr = {
  path: {
    "in.fileCamp": "http://192.168.0.245",   // 文件上传服务器，内网访问
    "out.fileCamp": "http://192.168.0.245",   // 文件上传服务器，外网访问
    "in.filePreview": "http://ynxjl.cn",        // 在线预览服务器，内网访问
    "out.filePreview": "http://ynxjl.cn",        // 在线预览服务器，外网访问
  },
  ports: ["23001", "23003"]
}

/**
 * 逻辑判断，更新url配置信息
 * 动态配置url
 */
if (href === 'localhost:8081') { // 当前访问地址是开发环境或者本地地址
  protocol = "http:"
  hostname = serviceAddr.path
  apiPort = serviceAddr.ports[0]
  fileHostType = "in"
} else if (serviceAddr.path === undefined) {
  alert("配置文件错误，请联系技术人员");
  throw href + " 不在前端~/static/config/env.js 配置文件中"
} else {
  apiPort = serviceAddr.ports[0]
  webPort = serviceAddr.ports[1]
  fileHostType = serviceAddr.ports[2]
}

/**
 * 拼接url
 */
// 业务请求接口
apiUrl = protocol + "//" + hostname + ":" + apiPort
// 文件上传地址
uploadUrl = filesAddr.path[fileHostType + ".fileCamp"] + ':23000/api?method=common.file.upload&data={"appName":"' + appName + '"}'
// 文件下载地址
fileCamp = filesAddr.path[fileHostType + ".fileCamp"] + ":23001/" + appName + "/"
// 前端地址
frontUrl = protocol + "//" + hostname + ":" + webPort + "/"