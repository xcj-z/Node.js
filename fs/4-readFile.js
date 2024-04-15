/*
 * @Description: 
 * @Author: zhouhaimei
 * @Date: 2024-04-11 23:38:33
 * @LastEditors: zhouhaimei
 * @LastEditTime: 2024-04-11 23:45:15
 */
// 1.导入fs模块
const fs = require('fs');

// 2.异步读取文件
fs.readFile('./motto.txt',(err,data) => {
    if(err){
        console.log('读取失败');
        return;
    }
    console.log(data.toString());//data 是Buffer对象，要通过toString转化为字符串
})