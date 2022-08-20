/*
    表单提交post请求默认的数据格式是urlencoded编码格式
*/

const express = require("express"); // 引入express
const cors = require("cors")
const axios = require("axios")

const app = new express();
// const upload=multer({dest:"uploads/"});
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "uploads");
//     }, filename: function (req, file, cb) {
//         const uniquSuffix = Date.now() + "-" + Math.round(Math.raadom() * 1e9);
//         cb(null, uniquSiuffix + "-" + file.originame);

//     },

// })

// const upload = multer({ storage: storage });

// 告诉express,我要使用ejs模板引擎;
app.set("view engine", "ejs");
// 接受json数据
app.use(express.json());
// cors帮助跨域
app.use(cors());

app.get("/", (req, res) => {
    res.send('世界你好 ');

});
// 登录
app.get("/login", (req, res) => {
    res.end("登陆页面");

});
// 注册
app.get("/register", (req, res) => {
    res.render("register");
});

//接口
app.get("/list", (req, res) => {
    res.json({
        code: 200,
        msg: "数据获取成功",
    });
})

// 小米优品中间服务   帮助跨域
app.get("/xm", async (req, res) => {
    const result = await axios.get(
        "https://www.xiaomiyoupin.com/homepage/main/v1002?platform=pc"
    );
    console.log("xiaomi", result.data.data.homepage.floors[0].data.items);
    const data = result.data.data.homepage.floors[0].data.items;
    res.json({
        code: 200,
        msg: "获取数据成功",
        data,
    });
})


// post页面展示
app.get("/pagepost", (req, res) => {
    res.render("post");
});
app.post("/testpost", (req, res) => {
    console.log(req.body); // 获取请求体数据
});

// 图片上传的接口
app.post("/upload", upload.single("avatar"), function (req, res, next) {
    console.log(11111, req.file); // req.file指的是上传的文件对象
  });




app.listen(8888);










