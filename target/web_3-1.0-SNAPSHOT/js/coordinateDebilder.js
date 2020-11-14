$(function(){
        $("#checkbox_r").on("click", function(){
                let half_value = String(Number(radiusValue)/2);
                document.querySelector('#radius-text-right').innerHTML = radiusValue;
                document.querySelector('#radius-text-left').innerHTML = radiusValue;
                document.querySelector('#radius-text-top').innerHTML = radiusValue;
                document.querySelector('#radius-text-bottom').innerHTML = radiusValue;
                document.querySelector('#radius-text-right-half').innerHTML = half_value;
                document.querySelector('#radius-text-left-half').innerHTML = half_value;
                document.querySelector('#radius-text-top-half').innerHTML = half_value;
                document.querySelector('#radius-text-bottom-half').innerHTML = half_value;
                return 0;
        });
        return 0;
});