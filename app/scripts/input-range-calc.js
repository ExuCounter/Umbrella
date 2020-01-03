const rateRange = document.getElementById('rate-range'),
      rateRangeField = document.getElementById('rate-range-field'),
      expenseField = document.getElementById('expense-field'),
      onlyNumberInputs = document.getElementsByClassName('input-only-number'),
      perFieldRange = document.getElementById('per-field'),
      expenseRange = document.getElementById('expense-range'),
      rateSelect = document.getElementById('rate-select'),
      timeSpan = document.getElementById('time-span');

let MAXIMUM_ESTIMATE = 38,
    MAXIMUM_RATE = 125;
/* RATE ROW */

rateSelect.addEventListener('input', ()=>{
    if(rateSelect.value === 'day'){
       timeSpan.innerHTML = 'DAYS PER WEEK:';
       MAXIMUM_ESTIMATE = 7;
       MAXIMUM_RATE = 1000;
       perFieldRange.value = '5';
       rateRange.setAttribute('max', '1000');

    }
    else{
        timeSpan.innerHTML = 'HOURS PER WEEK:';
        MAXIMUM_ESTIMATE = 38;
        MAXIMUM_RATE = 125;
        perFieldRange.value = '38';
        rateRange.setAttribute('max', '125');

    }
});

rateRange.addEventListener('input', ()=>{
   rateRangeField.value = `${rateRange.value}`;

});
rateRangeField.addEventListener('input', ()=>{
    if(!(rateRangeField.value <= MAXIMUM_RATE)){
        rateRangeField.value = rateRangeField.value.slice(0, -1);
    }

    if(rateRangeField.value === '' && rateRangeField.value === 0){
        rateRange.value = '';
    }

    else{
        rateRange.value = rateRangeField.value;

    }

});
3
/* PER WEEK */

perFieldRange.addEventListener('input', ()=>{
    if(!(perFieldRange.value <= MAXIMUM_ESTIMATE)){
        perFieldRange.value = perFieldRange.value.slice(0, -1);

    }

});

/* EXPENSE ROW */

expenseRange.addEventListener('input', ()=>{
    expenseField.value = `${expenseRange.value}`;
    if(rateRange.value <= 0 && rateRange.value >= 125){
        rateRange.value = rateRange.value.slice(0, -1);

    }

});
expenseField.addEventListener('input', ()=>{
    if(!(expenseField.value <= 2000)){
        expenseField.value = expenseField.value.slice(0, -1);
    }

    if(expenseField.value === ''){
        expenseRange.value = 0;
    }

    else{
        expenseRange.value = expenseField.value;

    }
});

/* TEST ON NUMBERS */

for( let item of onlyNumberInputs ){

   item.addEventListener('input',(char)=>{
       let arr = item.value.split('');
       let arrLength = arr.length - 1;
       if(!(item.value.charCodeAt(arrLength) > 47 && item.value.charCodeAt(arrLength) < 59)){
          item.value = item.value.slice(0, -1);
       }

   })

}
