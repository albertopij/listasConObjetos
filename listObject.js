"use strict";


// objestos error
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


// objetos lista


//funciones pagina.
var list0 = new list(5);

function addPag() {
    var name = document.getElementById("nametxt").value;
    var surname = document.getElementById("surnametxt").value;
    nametxt.value = "";
    surnametxt.value = "";
    try {
        list0.add(new Person(name, surname));
        resultado.innerHTML = list0.toString(list);
    } catch (err) {
        resultado.innerHTML = "Error! " + err;

    }
}

function removePag() {
    var name = document.getElementById("nametxt").value;
    var surname = document.getElementById("surnametxt").value;
    nametxt.value = "";
    surnametxt.value = "";
    try {
        list0.removeElement(list0.lastElement());
        resultado.innerHTML = list0.toString();
    } catch (err) {
        resultado.innerHTML = "Error! " + err;

    }
}

function Person(name, surname) {
    var name = name || "";
    var surname = surname || "";

    this.getname = function () {
        return name;
    }

    this.getsurname = function () {
        return surname;
    }

    Object.defineProperty(this, 'name', {
        get: function () {
            return name;
        },
        set: function (value) {
            name = value;
        }
    });

    Object.defineProperty(this, 'surname', {
        get: function () {
            return surname;
        },
        set: function (value) {
            surname = value;
        }
    });
}

function list(numElem) {
    var Max_element = numElem || 5;
    var list = [];
    this.isEmpty = function () {
        return list.length == 0;
    }
    this.isFull = function () {
        return list.length == Max_element;
    }
    this.size = function () {
        return list.length;
    }

    this.add = function (elem) {
        if (this.isFull()) throw new listException(1);
        return list.push(elem);
    }

    this.addAt = function (elem, index) {

        if (isNaN(index)) throw new NaNValueException();
        if (this.isFull()) throw new listException(1);
        if (index > this.size()) throw indexOutException();

        list.splice(index, 0, elem);

        return this.size();
    }

    this.get = function (index) {
        if (isNaN(index)) throw new NaNValueException();
        if (index > this.size()) throw indexOutException();
        return list[index];
    }

    this.toString = function () {
        var i;
        var tamano = this.size();
        var cadena;
        if (!this.isEmpty()) {
            cadena = list[0].name + "," + list[0].surname;
            if (tamano == 1) {
                return cadena;
            }
            for (i = 1; i < tamano; i++) {
                cadena += " - " + list[i].name + "," + list[i].surname;
            }

            return cadena;
        }
        throw new listException(2);

    }

    this.indexOf = function (elem) {
        return list.indexOf(elem);
    }

    this.lastIndexOf = function (elem) {
        return list.lastIndexOf(elem);
    }
    this.capacity = function () {
        return Max_element;
    }

    this.clear = function () {
        list.splice(0, this.size());
    }

    this.firstElement = function () {
        if (this.isEmpty()) throw new listException(2);
        return list[0];
    }

    this.lastElement = function () {
        if (this.isEmpty()) throw new listException(2);
        var fin = this.size() - 1;
        return list[fin];
    }

    this.remove = function (index) {
        if (index > this.size()) throw new indexOutException;

        var aux = list[index];
        list.splice(index, 1);
        return aux;
    }

    this.removeElement = function (elem) {
        var index = list.indexOf(elem);

        list.splice(index, 1);

        if (index >= 0) {
            return true;
        } else {
            return false;
        }
    }
    this.set = function (elem, index) {
        if (index > this.size()) throw new indexOutException;

        var aux = list[index];
        list[index] = elem;

        return aux;
    }
}

function test() {

    var p1 = new Person("Miguel", "Valle");
    var p2 = new Person("Jesús", "Rubio");
    var p3 = new Person("Hugo", "Martín");
    var p4 = new Person("Alberto", "Fernández");
    var p5 = new Person("Pedro", "Villar");

    var list1 = new list();
    console.log("pruebo la funcion add");
    list1.add(p1);
    console.log(list1.toString());
    list1.add(p2);
    console.log(list1.toString());
    /* list1.add(p3);
     console.log(list1.toString());*/
    list1.add(p4);
    console.log(list1.toString());
    console.log("pruebo la funcion addAt");
    list1.addAt(p5, 2);
    list1.add(p2);
    console.log(list1.toString());
    console.log("pruebo la funcion get");
    console.log(list1.get(2));
    console.log("pruebo la funcion indexOf");
    console.log(list1.indexOf(p2));
    console.log("pruebo la funcion lastIndexOf");
    console.log(list1.lastIndexOf(p2));
    console.log("pruebo la funcion capacity");
    console.log(list1.capacity());
    console.log("pruebo la funcion firstElement");
    console.log(list1.firstElement());
    console.log("pruebo la funcion lastElement");
    console.log(list1.lastElement());
    console.log("pruebo la funcion remove");
    console.log(list1.remove(1));
    console.log(list1.toString());
    console.log("pruebo la funcion removeElement");
    console.log(list1.removeElement(p2));
    console.log(list1.toString());
    console.log("pruebo la funcion set");
    console.log(list1.set(p2, 1));
    console.log(list1.toString());
    console.log("pruebo la funcion clear");
    list1.clear();
    console.log(list1.toString());
}

test();