document.getElementById('btnCalculate').addEventListener('click',calculate);


function calculate(event) {
    event.preventDefault();

    let billValue = parseFloat(document.tipsForm.bill.value);
    
    let choice = parseFloat(document.tipsForm.serviceQual.value);
    
    let peopleNumber = parseFloat(document.tipsForm.people.value);

    const tip = billValue * choice;

  switch(choice){
    case 0.3: document.getElementById('result').innerHTML = "Valor a pagar de Gorgeta é de R$: " + tip; break;

    case 0.2: document.getElementById('result').innerHTML ="Valor a pagar de Gorgeta é de R$: " + tip; break;

    case 0.15: document.getElementById('result').innerHTML ="Valor a pagar de Gorgeta é de R$: " + tip; break;

    case 0.1: document.getElementById('result').innerHTML ="Valor a pagar de Gorgeta é de R$: " + tip; break;

    case 0.05: document.getElementById('result').innerHTML ="Valor a pagar de Gorgeta é de R$: " + tip; break;

    default: document.getElementById('result').innerHTML = "Escolhar uma opção"; break;
  }

  if(peopleNumber > 1){
    document.getElementById('paymentDivision').innerHTML = "Valor dividido por " + peopleNumber + " Pessoas é de R$ " +  (tip / peopleNumber).toFixed(2);
  }else {
    document.getElementById('paymentDivision').innerHTML = " ";
  }
}



