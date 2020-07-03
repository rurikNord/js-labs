function plus() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value; // getElementByld возвращает элемент DOM по индентификатору
    num1 = parseInt(num1); // parselnt возвращает целое число из строки
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 + num2;
    document.getElementById('out').innerHTML = result;
}

function minus() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    result = num1 - num2;
    document.getElementById('out').innerHTML = result; // innerHTML разметка дочерных DOM-элементов
}