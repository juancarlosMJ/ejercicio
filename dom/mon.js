function calcular (){

    let cantidad = parseInt($('#cantidad').val());
    if (cantidad < 1) {
        swal("La cantidad debe ser mayor a cero");
        return false;
}
 //obtenemos el valor del radio
    let moneda = $('input:radio[name=moneda]:checked').val();
    if (moneda == undefined) {
    alert("Debes seleccionar la medida!");
    return false;
}
 //calculamos el resultado
resultado = total(cantidad,moneda);
$('#totalPagar').val("Total de compra en $" +resultado + " moneda");
return false;
}
function total(cantidad,moneda){
    let total= 0;
    switch(moneda){
        case 'bitcoin':
        total= cantidad/800000;
        break;
        case 'mana':
            totalpagar = cantidad/24;
            break;
            case 'etherium':
                totalpagar = cantidad/70000;
                break;
                case'bat':
                totalpagar = cantidad /21;
                break;
                case 'xrp':
                    totalpagar = cantidad / 30;
                    break;
                }
return total;
}
function limpiar(){
    $('#frmmon')[0].reset();
    $('#moneda').text('');
}