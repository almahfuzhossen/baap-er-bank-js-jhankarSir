document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-field');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    
    //deposit current value
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText =  previousDepositTotal + depositAmount;
    // update balance
    
    
    // clear deposit input field
    depositInput.value = '';
})