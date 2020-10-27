let radiusValue = 0;


let radius_is_installed = document.querySelector('#r_value').onclick = function (){

    if (validate_checkbox_withoutAlert(r_value,"R",1,5)){
        r_value.forEach(function (concrete_value) {
            if (concrete_value.checked) {
                radiusValue = concrete_value.value;
            }
        })

        let half_value = String(Number(radiusValue)/2);
        document.querySelector('#radius-text-right').innerHTML = radiusValue;
        document.querySelector('#radius-text-left').innerHTML = radiusValue;
        document.querySelector('#radius-text-top').innerHTML = radiusValue;
        document.querySelector('#radius-text-bottom').innerHTML = radiusValue;
        document.querySelector('#radius-text-right-half').innerHTML = half_value;
        document.querySelector('#radius-text-left-half').innerHTML = half_value;
        document.querySelector('#radius-text-top-half').innerHTML = half_value;
        document.querySelector('#radius-text-bottom-half').innerHTML = half_value;


        let r_changer = document.getElementsByName("points");

        r_changer.forEach(function (concrete_value) {
            let arr_value = concrete_value.getAttribute("xyr").valueOf().split(" ");
            arr_value[0]=(150 + (arr_value[0]*120/radiusValue))
            arr_value[1]=(150 + ((-1)*arr_value[1]*120/radiusValue))

            concrete_value.setAttribute('cx', String(arr_value[0]));
            concrete_value.setAttribute('cy', String(arr_value[1]));
        })
        return 1;

    }else return 0;
}


document.querySelector('#svg_wrapper').onclick = function (event){
    if (radius_is_installed() === 1){
        let clickX = Number(event.offsetX) - 150;
        let clickY = Number(event.offsetY) - 150;
        let x_val = ((radiusValue * clickX)/120).toFixed(3);
        let y_val = ((-1) * (radiusValue * clickY)/120).toFixed(3);
        let a = "?x_value=" + String(x_val) + "&y_value=" + String(y_val) + "&r_value=" + String(radiusValue);
        document.location.href = '/web_2-1.0-SNAPSHOT/webServlet' + a;
    }else{
        alert('Необходимо задать значение R, причем единственное!');
    }
}








