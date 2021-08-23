function sum(a){
    let arr1 = new Array()
    let kq = 0;
    while(a>1 && a<a+1){
        // a = (a/2)
        a = Math.round(((a/2) + Number.EPSILON) * 100) / 100
        arr1.push(a)        
    }
    try {
        kq = Math.floor(arr1.reduce((a,b)=>{
            if(a && b){return a+b}
            else{ return 0}
        }))
        return {kq,arr1};
      } catch (error) {
        console.log(`Đang chờ giá trị: '${error.message}'`);
      }
}

function Cal(slKem){  
    if(slKem && !isNaN(slKem) && slKem>1){
        document.getElementById("ketQua").innerHTML = (sum(slKem).kq)
        document.getElementById("tinhNham").innerHTML = (sum(slKem).arr1).join(" | ")
    }else{
        document.getElementById("ketQua").innerHTML = "where's my kem"
    }
}
var tEst = function(num){
    num = Math.round((num + Number.EPSILON) * 100) / 100
    console.log(num)
}

function main(){    
    var a = 1.55555
    tEst(a)

    let slKem = document.getElementById("slKem").value
    Cal(slKem)

}

