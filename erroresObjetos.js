"use strict";

function BaseException() {
}

BaseException.prototype = new Error();

BaseException.prototype.constructor = BaseException;

BaseException.prototype.toString = function () {

    return this.name + ": " + this.message;
};

function listException(code) {
    this.name = "listException";

    switch (code) {
        case 1:
            this.message = "The list is full.";
            break;
        case 2:
            this.message = "The list is empty.";
            break;
        default:
            this.message = "list Exception";
    }
    this.code = code;
}

listException.prototype = new BaseException();
listException.prototype.constructor = listException;

function indexOutException() {
    this.name = "indexOutException";
    this.message = "El índice está fuera de los límites de la lista";
}

indexOutException.prototype = new BaseException();
indexOutException.prototype.constructor = indexOutException;

function NaNValueException() {
    this.name = "NaNValueException";
    this.message = "El índice introducido debe no es number";
}

NaNValueException.prototype = new BaseException(); //Heredamos de BaseException
NaNValueException.prototype.constructor = NaNValueException;