document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-field');
    const depositAmount = depositInput.value;
    
    //deposit current value
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    depositTotal.innerText = depositAmount;
    console.log(depositTotalText);
    
    // clear deposit input field
    depositInput.value = '';
})