let namee=document.getElementById('name');
let eng=document.getElementById('english');
let tam=document.getElementById('tamil');
let mat=document.getElementById('maths');
let sci=document.getElementById('science');
let soc=document.getElementById('social');
let btnn=document.getElementById("btn");

function update(){
    let table=document.getElementById('table');
    let row=table.insertRow(table.length);
    

    let c1=row.insertCell(0);
    let c2=row.insertCell(1);
    let c3=row.insertCell(2);
    let c4=row.insertCell(3);
    let c5=row.insertCell(4);
    let c6=row.insertCell(5);
    let c7=row.insertCell(6);
    let c8=row.insertCell(7);

    c1.innerText=namee.value;
    c2.innerText=parseInt(eng.value);
    c3.innerText=parseInt(tam.value);
    c4.innerText=parseInt(mat.value);
    c5.innerText=parseInt(sci.value);
    c6.innerText=parseInt(soc.value);
    

    var total=parseInt(eng.value)+parseInt(tam.value)+parseInt(mat.value)+parseInt(sci.value)+parseInt(soc.value);
    c7.innerText=total
    console.log(total)

    var p=total/500*100;
    c8.innerText=p+"%";

    namee.value="";    
    eng.value="";
    tam.value="";
    mat.value="";
    sci.value="";
    soc.value="";
}

btnn.addEventListener("click",update)