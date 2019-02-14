window.onload = function() {
    document.getElementById("createproduct").addEventListener("click", newProduct);
}
function dummy (xhr) {
    console.log(xhr.response);
}

function newProduct() {
    let warehouse = {
        "address": document.getElementById("warehouseaddress").value,
        "id": document.getElementById("warehouseid").value,
        "name": document.getElementById("warehousename").value,
    }
    let newProduct = {
        "id": document.getElementById("id").value,
        "name": document.getElementById("name").value,
        "price": document.getElementById("price").value,
        "quantity": document.getElementById("quantity").value,
        "warehouse": warehouse
    }
    console.log(newProduct);
    JSONobj = JSON.stringify(newProduct);
    makeAjaxPost('http://localhost:9595/product', dummy, JSONobj);
}

function makeAjaxPost(url, callback, createdProduct){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4&&xhr.status===200){
            callback(this);
        }
    }
    xhr.setRequestHeader("content-type", "application/JSON");
    xhr.send(createdProduct);
}