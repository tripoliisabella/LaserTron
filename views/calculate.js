function validateValues(){
    let mils = document.getElementById('result_mils');
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

function calculate(mils, mm, errorMsgTag) {
    if (!(mm.value === '')){
        mils.value = (mm.value*5000)/127;
    }
    
    if (!(mils.value === '')){
        mm.value = (mils.value*127)/5000;
    }

    return errorMsgTag.innerText = "Success";

}

function onChangeFieldDisable(obj){
    if (obj.id === 'mm' && obj.value > 0 ){
        document.getElementById('result_mils').setAttribute('readonly', true);
    }
    else if (obj.id === 'result_mils' && obj.value > 0 ){
        document.getElementById('mm').setAttribute('readonly', true);
    }
    else{
        document.getElementById('result_mils').value='';
        document.getElementById('mm').value='';
        document.getElementById('result_mils').removeAttribute('readonly');
        document.getElementById('mm').removeAttribute('readonly');
    }
}