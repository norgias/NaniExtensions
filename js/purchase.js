


function orderTotal() {
	var quantity = document.getElementById('quantity').value;
    var lengthPrice = document.getElementById('one').value;
    var lengthPrice2 = document.getElementById('two').value;


	var totalCost = (quantity * lengthPrice);
	totalCost = totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	var result = document.getElementById('greeting');
	result.innerHTML = "$"+totalCost;

	var totalCost2 = (quantity * lengthPrice2);
	totalCost2 = totalCost2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	var result2 = document.getElementById('greeting');
	result2.innerHTML = "$"+totalCost2;



}




