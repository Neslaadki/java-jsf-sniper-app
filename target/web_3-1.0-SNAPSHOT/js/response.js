let x_value = document.getElementsByName("x_value");
let y_value = document.getElementById("y_value");
let r_value = document.getElementsByName("r_value");

let error_message = '';


function validation() {
    let x_is_valid = validate_checkbox(x_value, "X", -2,2);
    let y_is_valid = validate_y_value(y_value.value);
    let r_is_valid = validate_checkbox(r_value,"R",1,5);
    if (!(x_is_valid && y_is_valid && r_is_valid)) {
        alert(error_message);
        error_message = '';
    }
    return x_is_valid && y_is_valid && r_is_valid;
}


//Валидация y_value
function validate_y_value(y_value) {
    console.log(y_value);
    if (y_value !== 'no' && y_value !== null) {
        if (/^(-?\d+)([,.]\d+)?$/.test(y_value) && y_value.replace(',', '.') >= -5 && y_value.replace(',', '.') <= 5) {
            return true;
        } else {
            error_message += 'Неверный формат значения координаты Y!\n';
        }
    } else {
        error_message += 'Необходимо выбрать координату Y!\n';
    }
    return false;
}

//Валидация array_value чекбоксов
function validate_checkbox(array_value, name, min_value, max_value) {
    //переменная которая в итоге будет выбрана из всех checkbox'ов
    let success_array_value = null;

    //Проверка на выбор нескольких checkBox'ов
    let i = 0;
    array_value.forEach(function (concrete_value) {
        if (concrete_value.checked) {
            i++;
            success_array_value = concrete_value.value;
        }
    })

    //проверка на все остальное
    if (success_array_value !== 'no' && success_array_value !== null) {
        if (min_value <= success_array_value && success_array_value <= max_value && i === 1) {
            return true;
        } else {
            if (i > 1) {
                error_message += 'Выбрано несколько ' + name + '-CheckBox\'ов, выберите один!\n';
                i = 0;
            } else {
                error_message += 'Неверный формат значения координаты ' + name + '!\n'
            }
        }
    } else {
        error_message += 'Необходимо выбрать координату ' + name + '!\n';
    }
    return false;
}

function validate_checkbox_withoutAlert(array_value, name, min_value, max_value) {
    //переменная которая в итоге будет выбрана из всех checkbox'ов
    let success_array_value = null;

    //Проверка на выбор нескольких checkBox'ов
    let i = 0;
    array_value.forEach(function (concrete_value) {
        if (concrete_value.checked) {
            i++;
            success_array_value = concrete_value.value;
        }
    })

    //проверка на все остальное
    if (success_array_value !== 'no' && success_array_value !== null) {
        if (min_value <= success_array_value && success_array_value <= max_value && i === 1) {
            return true;
        } else {
            if (i > 1) {
                i = 0;
            } else {
            }
        }
    } else {
    }
    return false;
}


