var isOperatorClicked = new Boolean(false);
var isPlusClicked = new Boolean(false);
var isMinusClicked = new Boolean(false)
var isDivClicked = new Boolean(false)
var isMulClicked = new Boolean(false)
var oldValue, newValue, result;


function buttonClicked(val) {
    if (isOperatorClicked === true) {
        document.getElementById('screen').value = val
        isOperatorClicked = false
    } else {
        document.getElementById('screen').value += val
    }

}

function clearDisplay() {
    document.getElementById('screen').value = ""
}

function plusClicked() {
    isOperatorClicked = true;
    isPlusClicked = true;
    oldValue = document.getElementById('screen').value

}


function equalClicked() {
    newValue = document.getElementById('screen').value
    var newValueF = parseFloat(newValue.replace(",", "."))
    var oldValueF = parseFloat(oldValue.replace(",", "."))

    if (isPlusClicked === true) {

        result = oldValueF + newValueF
        document.getElementById('screen').value = result
        isPlusClicked = false
    } else if (isMinusClicked === true) {
        result = oldValueF - newValueF
        document.getElementById('screen').value = result
        isMinusClicked = false
    } else if (isMulClicked === true) {
        result = oldValueF * newValueF
        document.getElementById('screen').value = result
        isMulClicked = false
    } else if (isDivClicked === true) {
        result = oldValueF / newValueF
        document.getElementById('screen').value = result
        isDivClicked = false
    }
}

function minusClicked() {
    isOperatorClicked = true;
    isMinusClicked = true;
    oldValue = document.getElementById('screen').value
}

function mulClicked() {
    isOperatorClicked = true;
    isMulClicked = true;
    oldValue = document.getElementById('screen').value
}

function divClicked() {
    isOperatorClicked = true;
    isDivClicked = true;
    oldValue = document.getElementById('screen').value
}