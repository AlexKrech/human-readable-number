module.exports = function toReadable(number) {

    if (number < 20) {
        return unit(number)
    }

    number = String(number)
    number = number.split('')

    function unit(number) {
        switch (+number) {
            case 0:
                return 'zero';
            case 1:
                return 'one';
            case 2:
                return 'two';
            case 3:
                return 'three';
            case 4:
                return 'four';
            case 5:
                return 'five';
            case 6:
                return 'six';
            case 7:
                return 'seven';
            case 8:
                return 'eight';
            case 9:
                return 'nine';
            case 10:
                return 'ten';
            case 11:
                return 'eleven';
            case 12:
                return 'twelve';
            case 13:
                return 'thirteen';
            case 14:
                return 'fourteen';
            case 15:
                return 'fifteen';
            case 16:
                return 'sixteen';
            case 17:
                return 'seventeen';
            case 18:
                return 'eighteen';
            case 19:
                return 'nineteen';
        }
    }

    function ten(number) {
        switch (+number) {
            case 2:
                return 'twenty';
            case 3:
                return 'thirty';
            case 4:
                return 'forty';
            case 5:
                return 'fifty';
            case 6:
                return 'sixty';
            case 7:
                return 'seventy';
            case 8:
                return 'eighty';
            case 9:
                return 'ninety';
        }
    }

    if (number.length == 2 && number[1] == 0) {
        return `${ten(number[0])}`
    }

    if (number.length == 2) {
        return `${ten(number[0])} ${unit(number[1])}`
    }

    if (number.length == 3 && number[1] == 0 && number[2] == 0) {
        return `${unit(number[0])} hundred`
    }

    if (number.length == 3 && number[1] == 1) {
        let teen = '' + number[1] + number[2];
        return `${unit(number[0])} hundred ${unit(teen)}`
    }

    if (number.length == 3 && number[1] !== 0 && number[2] == 0) {
        return `${unit(number[0])} hundred ${ten(number[1])}`
    }

    if (number.length == 3 && number[1] == 0 && number[2] !== 0) {
        return `${unit(number[0])} hundred ${unit(number[2])}`
    }

    if (number.length == 3) {
        return `${unit(number[0])} hundred ${ten(number[1])} ${unit(number[2])}`
    }
}
