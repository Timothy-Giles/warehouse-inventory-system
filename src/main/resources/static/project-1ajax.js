AjaxGet("GET", 'http://localhost:9595/product/all', showAll);

function dummy (xhr) {
	console.log("dummy function called")
    console.log(xhr.response);
}



function deleteProduct(id, warehouseid) {
    let warehouse = {
        "address": "string",
        "id": warehouseid,
        "name": "string"
    }
    let product = {
        "id": id,
        "name": "string",
        "price": 0,
        "quantity": 0,
        "warehouse": warehouse
    }
    ajaxDelete("http://localhost:9595/product", dummy, product);
}

function AjaxGet(method, address, callback) {
	var productGet = new XMLHttpRequest();
	productGet.open(method, address);
	productGet.onreadystatechange = function(){
		if(productGet.readyState===4 && productGet.status===200){
			callback(this);
		} else {
            console.log(method.response);
        }
	}
	productGet.send();
}


function ajaxDelete(url, callback, productData){
    let xhr = new XMLHttpRequest();
    console.log(url);
    xhr.open("DELETE", url);
    xhr.onreadystatechange = function(){
        if(xhr.readyState===4&&xhr.status===204){
            callback(this);
        } else if (xhr.readyState ==4){
        	console.log(xhr.status+" "+xhr.statusText);
        }
    }
    xhr.setRequestHeader("Content-Type","application/json");
    let deletedProduct = JSON.stringify(productData);
    console.log(deletedProduct);
    xhr.send(deletedProduct);
}




function showAll(productGet){
	var products = JSON.parse(productGet.response);
	for (product of products){
        addRow(product.id, product.name, product.price , product.quantity, product.warehouse.name, product.warehouse.id);
    }
    console.log(products);
}

function addRow(id, name, price, quantity, warehouse, warehouseid){
    let row = document.createElement("tr");
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");
    let cell4 = document.createElement("td");
    let cell5 = document.createElement("td");
    let cell6 = document.createElement("td");
 
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
    row.appendChild(cell6);
    
    cell1.innerHTML = id;
    cell2.innerHTML = name;
    cell3.innerHTML = price;
    cell4.innerHTML = quantity;
    cell5.innerHTML = warehouse;
    cell6.innerHTML = `<button onclick="deleteProduct(${id}, ${warehouseid})" id="deletebutton" class="deletebutton">delete</button>`;
    document.getElementById("table").appendChild(row);
}

function searchProducts(){
    ajaxRequest("GET", reqUrl, displayAllProducts);
}




