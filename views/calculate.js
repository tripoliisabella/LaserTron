function validateValues(primaryObj, secondaryObj, errorObj){
    let obj1 = document.getElementById(primaryObj);
    let obj2 = document.getElementById(secondaryObj);

    if(obj1.value != '' || obj2.value != ''){
        document.getElementById(errorObj).innerText = ' ';
        if(primaryObj==='mm'&&secondaryObj==='mils'){
           calculateMmToMils(obj1, obj2); 
        }
        else if(primaryObj==='wavelen'&&secondaryObj==='wavenum'){
            calculateWavelen_waveNum(obj1, obj2); 
        }
    }
    else{
        document.getElementById(errorObj).innerText = "Please enter a number to convert."
        return 0;
    }
}

function swapMils_Inches(expose, expose_label, hide, hide_label){
    hide.setAttribute('hidden', true);
    hide_label.setAttribute('hidden', true);

    expose_label.removeAttribute('hidden');
    expose.removeAttribute('hidden');
}

function calculateMmToMils(mm, mils) {
    let inch = document.getElementById('inch');
    let inch_label = document.getElementById('inch_label');
    let mils_label = document.getElementById('mils_label');

    if (!(mm.value === '')){
        let calculatedValue = (mm.value*5000)/127;
        if (calculatedValue >= 1000){
            swapMils_Inches(inch, inch_label, mils, mils_label);
            inch.value = (calculatedValue/1000).toFixed(8);
        }
        else{
            swapMils_Inches(mils, mils_label, inch, inch_label);
        }
        mils.value = calculatedValue;
    }
    
    if (!(mils.value === '')){
        mm.value = (mils.value*127)/5000;
    }
    return;
}

function calculateWavelen_waveNum(waveLen,waveNum){
    if(waveNum.value!='')
    {
        waveLen.value=waveNum.value*(1/10000000);
    }
    else{
        waveNum.value=waveLen.value*(10000000);
    }
    return;
}

function clearValues(objList){
    let objListArr = objList.split(';');

    for(var i = 0; i < objListArr.length; i++){
        document.getElementById(objListArr[i]).value='';
    }
}

function onChangeFieldDisable(obj){
    let mils = document.getElementById('mils');
    let inch = document.getElementById('inch');
    let inch_label = document.getElementById('inch_label');
    let mils_label = document.getElementById('mils_label');

    if (obj.id === 'mm' && obj.value > 0 ){
        document.getElementById('mils').setAttribute('readonly', true);
    }
    else if (obj.id === 'mils' && obj.value > 0 ){
        document.getElementById('mm').setAttribute('readonly', true);
    }
    else{
        swapMils_Inches(mils, mils_label, inch, inch_label);
        clearValues();
        document.getElementById('mils').removeAttribute('readonly');
        document.getElementById('mm').removeAttribute('readonly');
    }
}