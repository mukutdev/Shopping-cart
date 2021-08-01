// Increase decrease event handler

function productIncreaseDecreaseHandler (isIncrease){
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
 }


