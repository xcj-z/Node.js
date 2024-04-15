/*
 * @Description: 
 * @Author: zhouhaimei
 * @Date: 2024-04-12 00:23:48
 * @LastEditors: zhouhaimei
 * @LastEditTime: 2024-04-12 01:12:30
 */
// 1.导入fs模块
const fs = require('fs');

// 2.创建 读取流对象
const rs = fs.createReadStream('./voice.mp3');

// 3.绑定data事件， chunk块   该事件每当读取出一块就执行一次
rs.on('data', chunk => {
    console.log(chunk); //chunk.length 可以返回其大小 
})

// 4.end事件  可选
rs.on('end',()=>{
    console.log('读取完成，关闭');
})