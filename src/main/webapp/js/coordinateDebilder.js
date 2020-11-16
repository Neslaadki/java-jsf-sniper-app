function drawPoint(x, y, radius, hit) {
    let svg = document.getElementById('svg_for_point');
    let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        let x_value_point;
        let y_value_point;
        if(radiusValue !=null){
            x_value_point = (150 + (x * 120 / radiusValue));
            y_value_point = (150 + ((-1) * y * 120 / radiusValue));
        }else {
            x_value_point = (150 + (x * 120 / radius));
            y_value_point = (150 + ((-1) * y * 120 / radius));
        }
        circle.setAttribute('cx', String(x_value_point));
        circle.setAttribute('cy', String(y_value_point));
        circle.setAttribute('r', '5');
        circle.setAttribute('stroke', 'black');
        circle.setAttribute('class','point');
        if (hit) {
            circle.setAttribute('fill', 'green');
        } else {
            circle.setAttribute('fill', 'red');
        }
        svg.appendChild(circle);
        // svg.innerHTML += "<circle cx='2' cy='2' r='5' fill='red' stroke='black'/>"
}

function cleanerPoints(){
    $("circle.point").remove();
}

$(function () {
    $(".block__svg").click(function (e) {
        let offset = $(this).offset();
        let relativeX = (e.pageX - offset.left) - 150;
        let relativeY = ((e.pageY - offset.top) - 150);
        if (radiusValue != null) {
            let x_val = ((radiusValue * relativeX) / 120).toFixed(3);
            let y_val = ((-1) * (radiusValue * relativeY) / 120).toFixed(3);
            document.getElementById("_form:x_value").setAttribute('value', x_val);
            document.getElementById("_form:y_value").setAttribute('value', y_val);
        }

    });
    return 0;
});


$(function () {
    $("#checkbox_r").on("click", function () {
        let half_value = String(Number(radiusValue) / 2);
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

