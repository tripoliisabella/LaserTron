function onChangeCalculateValue(obj, newValueObj){
    if(obj.id === 'mm' || obj.id === 'mils'){
        calculateMm_Mils(obj, newValueObj);
    }
    else if(obj.id === 'wavelen' || obj.id === 'wavenum'){
        calculateWavelen_waveNum(obj, newValueObj);
    }

    else if(obj.id ==="seconds" || obj.id === 'hertz'){
        calculateSec_Htz(obj, newValueObj);
    }
}

function calculateMm_Mils(obj, newValueObj) {
    if ((obj.id === 'mm') && obj.value != ''){
        let inch = document.getElementById('inch');
        let inch_label = document.getElementById('inch_label');
        let mils_label = document.getElementById('mils_label');

        let calculatedValue = (obj.value*5000)/127;
        if (calculatedValue >= 1000){
            inch.value = (calculatedValue/1000).toFixed(8);
        }
        else{
            inch.value = '';
        }
        newValueObj.value = calculatedValue;
    }
    
    else if ((obj.id === 'mils') && obj.value != ''){
        newValueObj.value = (obj.value*127)/5000;
        inch.value = '';
    }
    else {
        newValueObj.value = '';
    }
    return;
}

function calculateWavelen_waveNum(obj,newValueObj){
    if(obj.id === 'wavenum' && obj.value != '')
    {
        newValueObj.value=(1/obj.value)*(10000000);
    }
    else if(obj.id === 'wavelen' && obj.value != ''){
        newValueObj.value=(10000000)/obj.value;
    }
    else{
        newValueObj.value = '';
    }
    return;
}

function calculateSec_Htz(obj, newValueObj) {
    let obj_unit = document.getElementById(obj.id + "_dropdown");
    let newValueObj_unit = document.getElementById(newValueObj.id + "_dropdown");
    
    if(obj.value != ''){
        newValueObj.value = (1/(obj.value*unitConversion(obj_unit.value)))*unitConversion(newValueObj_unit.value);
    }
    else{
        newValueObj.value = '';
    }
}

function unitConversion (unit){
    let retVal = 1;
    switch (unit){
        case "milli": 
            retVal = 0.001;
            break;
        case "micro":
            retVal = 0.000001;
            break;
        case "nano":
            retVal = 0.000000001; 
            break;
        case "mega":
            retVal = 1000000;
            break;
        case "kilo":
            retVal = 1000;
            break;
        default: 
            retVal = 1;
            break;
    }

    return retVal;
}