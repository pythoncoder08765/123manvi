const http = require('http');

const server = http.createServer(serverCallBack);
let a=[];
function serverCallBack(req,res){
    const url=req.url;
    if(url=='/create'){
        a.push(1);
        res.write(JSON.stringify(a));
    }else if(url=='/update'){
        a[3]=2;
        res.write(JSON.stringify(a));

    }else if(url=='/read'){
        res.write(JSON.stringify(a));
    }else if(url=='/delete'){
        a.pop();
    }
    res.end ();
}
server.listen(3070,function(){
    console.log("server listening")
});

