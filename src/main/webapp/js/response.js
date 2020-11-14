let radiusValue;


function setValue(name_variable, value_variable) {
    if (name_variable === 'x') {
        document.getElementById('_form:x_value').setAttribute('value', value_variable);
        for (let i = 16; i <= 22; i++) {
            if(i!==value_variable+19) {
                document.getElementById('_form:j_idt' + i).getElementsByClassName("ui-chkbox-box ui-widget ui-corner-all ui-state-default")[0].children[0].setAttribute('class', '.ui-chkbox-icon ui-icon ui-c ui-icon-blank');
                document.getElementById('_form:j_idt' + i).getElementsByClassName("ui-chkbox-box ui-widget ui-corner-all ui-state-default")[0].setAttribute('class', 'ui-chkbox-box ui-widget ui-corner-all ui-state-default');
            }else {
                document.getElementById('_form:j_idt' + i).getElementsByClassName("ui-chkbox-box ui-widget ui-corner-all ui-state-default")[0].children[0].setAttribute('class', '.ui-chkbox-icon ui-icon ui-c ui-icon-check');
                document.getElementById('_form:j_idt' + i).getElementsByClassName("ui-chkbox-box ui-widget ui-corner-all ui-state-default")[0].setAttribute('class', 'ui-chkbox-box ui-widget ui-corner-all ui-state-default ui-state-active');
            }
        }
    }
    if (name_variable === 'r') {
        document.getElementById('_form:r_value').setAttribute('value', value_variable)
        //ну тут я считаю пздц какой-то
        radiusValue = value_variable;
        var number;
        if(value_variable===1){
            number=26;
        }if(value_variable===1.5){
            number=27;
        }if (value_variable===2){
            number=28;
        }if (value_variable===2.5){
            number=29;
        }if (value_variable===3){
            number=30;
        }
        for (let i = 26; i <= 30; i++) {
            if(i!==number) {
                document.getElementById('_form:j_idt' + i).getElementsByClassName("ui-chkbox-box ui-widget ui-corner-all ui-state-default")[0].children[0].setAttribute('class', '.ui-chkbox-icon ui-icon ui-c ui-icon-blank');
                document.getElementById('_form:j_idt' + i).getElementsByClassName("ui-chkbox-box ui-widget ui-corner-all ui-state-default")[0].setAttribute('class', 'ui-chkbox-box ui-widget ui-corner-all ui-state-default');
            }else {
                document.getElementById('_form:j_idt' + i).getElementsByClassName("ui-chkbox-box ui-widget ui-corner-all ui-state-default")[0].children[0].setAttribute('class', '.ui-chkbox-icon ui-icon ui-c ui-icon-check');
                document.getElementById('_form:j_idt' + i).getElementsByClassName("ui-chkbox-box ui-widget ui-corner-all ui-state-default")[0].setAttribute('class', 'ui-chkbox-box ui-widget ui-corner-all ui-state-default ui-state-active');
            }
        }
    }
}