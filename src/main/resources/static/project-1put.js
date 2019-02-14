
document.getElementById("updatebutton").addEventListener("click", newProduct);


function dummy (xhr) {
    console.log(xhr.response);
}

function newProduct() {
    let newProduct = {
        "name": document.getElementById("validationDefault01").value,
        "id": document.getElementById("validationDefault02").value,
        "price": document.getElementById("validationDefault03").value,
        "quantity": document.getElementById("validationDefault04").value,
        "warehouse": {
            "id": 6,    //document.getElementById("validationDefault06").value,
            "address": "515 Continental Way",   //document.getElementById("validationDefault05").value,
            "name": "J P Morgan Chase & Co"     //document.getElementById("validationDefault07").value
        }
    }
    console.log(newProduct);
    JSONobj = JSON.stringify(newProduct);
    makeAjaxPut('http://localhost:9595/product', dummy, JSONobj);
}

function makeAjaxPut(url, callback, newProduct){
    let xhr = new XMLHttpRequest();
    xhr.open("PUT", url);
        xhr.onreadystatechange = function(){
            if(xhr.readyState===4&&xhr.status===200){
                callback(this);
            }
        }
    xhr.setRequestHeader("content-type", "application/JSON");
    xhr.send(newProduct);
}


