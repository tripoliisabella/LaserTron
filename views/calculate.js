function validateValues(){
    let mils = document.getElementById('mils');
    let mm = document.getElementById('mm');
    let errorMsgTag = document.getElementsByTagName('h6')[0];

    if(mm.value === '' && mils.value === ''){
        errorMsgTag.innerText = "Please enter a number to convert."
        errorMsgTag.removeAttribute('hidden');
        return; 
    }
    else{
        errorMsgTag.setAttribute('hidden', true)
    }
    
    calculate(mils, mm, errorMsgTag);
}

function swapMils_Inches(expose, expose_label, hide, hide_label){
    hide.setAttribute('hidden', true);
    hide_label.setAttribute('hidden', true);

    expose_label.removeAttribute('hidden');
    expose.removeAttribute('hidden');
}

function calculate(mils, mm, errorMsgTag) {
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
        let calculatedValue = (mils.value*127)/5000;
        mm.value = calculatedValue ;
    }

    return errorMsgTag.innerText = "Success";

}

function clearValues(){
    document.getElementById('mils').value='';
    document.getElementById('mm').value='';
    document.getElementById('inch').value=''
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