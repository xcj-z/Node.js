// 1.引入fs模块
const fs = require('fs')

// 2.异步追加
fs.appendFile('./motto.txt','----笛卡尔主观唯心主义',err => {
    if(err){
        console.log('追加失败')
        return
    }
    console.log('追加成功')
})

// // 同步追加
fs.appendFileSync('./mottoSync.txt','----宋代刘过的《唐多令·芦叶满汀洲》')

// writeFile也可以实现追加效果 配置参数写上 {flag:a}
fs.writeFile('./motto.txt','\r\n世界统一于物质  辩证唯物主义',{flag:'a'}, err => {
    if(err){
        console.log('追加失败')
        return
    }
    console.log('追加成功')
})