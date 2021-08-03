
function sum(a){
    let arr1 = new Array()
    let kq = 0;
    while(a>1 && a<a+1){
        a = a/2
        arr1.push(a)        
    }
    kq = Math.floor(arr1.reduce((a,b)=>{return a+b}))
    return kq;
}

function Cal(slKem){  
    if(!isNaN(slKem)){
        document.getElementById("ketQua").innerHTML = sum(slKem)
    }else{
        document.getElementById("ketQua").innerHTML = "Đang chờ"
    }
}

function main(){    
    let slKem = document.getElementById("slKem").value
    slKem.onkeyup = Cal(slKem)
}main()
