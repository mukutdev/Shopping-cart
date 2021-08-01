// Increase decrease event handler for phone

function phoneIncreaseDecreaseHandler (isIncrease){
     const addValue = document.getElementById('addValue').value;
     const valueNumber = parseInt(addValue);
     
     let totalValue = valueNumber;

     if(isIncrease == true){
          totalValue = valueNumber + 1;
     }
     if(isIncrease == false){
          totalValue = valueNumber - 1;
          
     }
     if( totalValue < 0){
          totalValue = valueNumber;
          alert("Quantity cant be negative");
     }
     document.getElementById('addValue').value = totalValue;
     const phoneNewPriceDecrease = totalValue * 1219;
     document.getElementById('phonePrice').innerText = phoneNewPriceDecrease;
     calculateTotalPrice();
 }
// Increase decrease event handler for phone case

function caseIncreaseDecreaseHandler (isIncrease){
     const caseInput = document.getElementById('caseInput').value;
     const caseNumber = parseInt(caseInput);
     let caseValue = caseNumber;

     if(isIncrease == true){
          caseValue = caseNumber + 1;
     }
     if(isIncrease == false){
          caseValue = caseNumber - 1;
          
     }
     if( caseValue < 0){
          caseValue = caseNumber;
          alert("Quantity cant be negative");
     }
     document.getElementById('caseInput').value = caseValue;
     const caseNewPriceDecrease = caseValue * 59;
     document.getElementById('casePrice').innerText = caseNewPriceDecrease;
     calculateTotalPrice();
 }


 //function for total cost count
 function calculateTotalPrice(){
      const phonePrice = document.getElementById('addValue');
      const phoneCount = parseInt(phonePrice.value);

      const casePrice = document.getElementById('caseInput');
      const caseCount = parseInt(casePrice.value);

      const totalPrice = (phoneCount * 1219) + (caseCount * 59);
      document.getElementById('total-price').innerText = totalPrice;

      // tax calculation 

       const totalTax = Math.round( (totalPrice * 10) / 100) ;
       document.getElementById('total-tax').innerText = '$' + totalTax;

     // Grand total calculation

      const grandTotal = totalPrice + totalTax;
      document.getElementById('grand-total').innerText = grandTotal;
 }
