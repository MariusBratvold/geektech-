var total = 0;

function test(item) {
    if (item.checked) {
        total += parseInt(item.value);
    } else {
        total -= parseInt(item.value);
    }
    //alert(total);
    document.getElementById('Totalcost').innerHTML = total + " ,-";
}