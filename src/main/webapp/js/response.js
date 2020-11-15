let radiusValue;
let x_value = false;
let r_value = false;
let svg_Xvalue;
let svg_Yvalue;

function setValue(name_variable, value_variable) {
    if (name_variable === 'x') {
        document.getElementById('_form:x_value').setAttribute('value', value_variable);
        x_value=true;
        for (let i = 16; i <= 22; i++) {
            if (i !== value_variable + 19) {
                document.getElementById('_form:j_idt' + i).getElementsByClassName("ui-chkbox-box ui-widget ui-corner-all ui-state-default")[0].children[0].setAttribute('class', '.ui-chkbox-icon ui-icon ui-c ui-icon-blank');
                document.getElementById('_form:j_idt' + i).getElementsByClassName("ui-chkbox-box ui-widget ui-corner-all ui-state-default")[0].setAttribute('class', 'ui-chkbox-box ui-widget ui-corner-all ui-state-default');
            } else {
                document.getElementById('_form:j_idt' + i).getElementsByClassName("ui-chkbox-box ui-widget ui-corner-all ui-state-default")[0].children[0].setAttribute('class', '.ui-chkbox-icon ui-icon ui-c ui-icon-check');
                document.getElementById('_form:j_idt' + i).getElementsByClassName("ui-chkbox-box ui-widget ui-corner-all ui-state-default")[0].setAttribute('class', 'ui-chkbox-box ui-widget ui-corner-all ui-state-default ui-state-active');
            }
        }
    }
    if (name_variable === 'r') {
        document.getElementById('_form:r_value').setAttribute('value', value_variable)
        radiusValue = value_variable;
        r_value=true;
        var number;
        if (value_variable === 1) {
            number = 25;
        }
        if (value_variable === 1.5) {
            number = 26;
        }
        if (value_variable === 2) {
            number = 27;
        }
        if (value_variable === 2.5) {
            number = 28;
        }
        if (value_variable === 3) {
            number = 29;
        }
        for (let i = 25; i <= 29; i++) {
            if (i !== number) {
                document.getElementById('_form:j_idt' + i).getElementsByClassName("ui-chkbox-box ui-widget ui-corner-all ui-state-default")[0].children[0].setAttribute('class', '.ui-chkbox-icon ui-icon ui-c ui-icon-blank');
                document.getElementById('_form:j_idt' + i).getElementsByClassName("ui-chkbox-box ui-widget ui-corner-all ui-state-default")[0].setAttribute('class', 'ui-chkbox-box ui-widget ui-corner-all ui-state-default');
            } else {
                document.getElementById('_form:j_idt' + i).getElementsByClassName("ui-chkbox-box ui-widget ui-corner-all ui-state-default")[0].children[0].setAttribute('class', '.ui-chkbox-icon ui-icon ui-c ui-icon-check');
                document.getElementById('_form:j_idt' + i).getElementsByClassName("ui-chkbox-box ui-widget ui-corner-all ui-state-default")[0].setAttribute('class', 'ui-chkbox-box ui-widget ui-corner-all ui-state-default ui-state-active');
            }
        }
    }
}
$("#svg_wrapper").click(function(e) {
    let offset = $(this).offset();
    let relativeX = (e.pageX - offset.left);
    let relativeY = (e.pageY - offset.top);
    alert("X: " + relativeX + "  Y: " + relativeY);
});



// document.querySelector('#svg_wrapper').onclick = function (event){
//
//         let clickX = Number(event.offsetX) - 150;
//         let clickY = Number(event.offsetY) - 150;
//         svg_Xvalue = ((radiusValue * clickX)/120).toFixed(3);
//         svg_Yvalue = ((-1) * (radiusValue * clickY)/120).toFixed(3);
//         document.getElementById('_form:x_value').setAttribute('value', svg_Xvalue);
//         document.getElementById('_form:y_value').setAttribute('value', svg_Yvalue);
// }

// $(function(){
//     $("#checkbox_r").on("click", function(event){
//         let clickX = Number(event.offsetX) - 150;
//         let clickY = Number(event.offsetY) - 150;
//         svg_Xvalue = ((radiusValue * clickX)/120).toFixed(3);
//         svg_Yvalue = ((-1) * (radiusValue * clickY)/120).toFixed(3);
//         document.getElementById('_form:x_value').setAttribute('value', svg_Xvalue);
//         document.getElementById('_form:y_value').setAttribute('value', svg_Yvalue);
//         return 0;
//     });
//     return 0;
// });


