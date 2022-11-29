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
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;

    
   // clear deposit input field
    depositInput.value = '';
});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-field');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    // update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const PreviousWithdrawTotalText = withdrawTotal.innerText;
    const PreviousWithdrawTotal = parseFloat(PreviousWithdrawTotalText);
    withdrawTotal.innerText = PreviousWithdrawTotal + withdrawAmount;


// update balance after withdraw total
const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotalText = parseFloat(balanceTotalText);
balanceTotal.innerText = previousBalanceTotalText - withdrawAmount;
  // clear withdraw input field

withdrawInput.value = '';
})