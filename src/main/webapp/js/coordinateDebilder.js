$(function (){
        $(".block__svg").click(function(e) {
                let offset = $(this).offset();
                let relativeX = (e.pageX - offset.left) - 150;
                let relativeY = ((e.pageY - offset.top) - 150);
                let x_val = ((radiusValue * relativeX)/120).toFixed(3);
                let y_val = ((-1) * (radiusValue * relativeY)/120).toFixed(3);
                alert("X: " + x_val + "  Y: " + y_val);

        });
        return 0;
});



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



});

