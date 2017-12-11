"use strict";

function Person(name, surname) {
    this.name = name || "";
    this.surname = surname || "";
}

function list(numElem) {
    this.Max_element = numElem || 5;
    this.list = [];
    this.isEmpty = function () {
        return this.list.length == 0;
    }
    this.isFull = function () {
        return this.list.length == this.Max_element;
    }
    this.size = function () {
        return this.list.length;
    }

    this.add = function (elem) {
        if (this.isFull()) throw "La lista esta llena";
        return this.list.push(elem);
    }

    this.addAt = function (elem, index) {

        if (isNaN(index)) throw new NaNValueException();
        if (this.isFull()) throw new listException(1);
        if (index > this.size()) throw indexOutException();

        this.list.splice(index, 0, elem);

        return this.size();
    }

    this.get = function (index) {
        if (isNaN(index))throw new NaNValueException();
        if (index > this.size())  throw indexOutException();
        return this.list[index];
    }

    this.toString = function () {
        var i;
        var tamano = this.size();
        var cadena;
        if (!this.isEmpty()) {
            cadena = this.list[0].name + "," + this.list[0].surname;
            if (tamano == 1) {
                return cadena;
            }
            for (i = 1; i < tamano; i++) {
                cadena += " - " + this.list[i].name + "," + this.list[i].surname;
            }

            return cadena;
        } else {
            return "La lista esta vacia";
        }

    }

    this.indexOf = function (elem) {
        return this.list.indexOf(elem);
    }

    this.lastIndexOf = function (elem) {
        return this.list.lastIndexOf(elem);
    }
    this.capacity = function () {
        return this.Max_element;
    }

    this.clear = function () {
        this.list.splice(0, this.size());
    }

    this.firstElement = function () {
        if (this.isEmpty()) throw "La lista está vacia";
        return this.list[0];
    }

    this.lastElement = function () {
        if (this.isEmpty()) throw "La lista está vacia";
        var fin = this.size() - 1;
        return this.list[fin];
    }

    this.remove = function (index) {
        if (index > this.size()) throw "El índice está fuera de los límites de la lista";

        var aux = this.list[index];
        this.list.splice(index, 1);
        return aux;
    }

    this.removeElement = function (elem) {
        var index = this.list.indexOf(elem);

        this.list.splice(index, 1);

        if (index >= 0) {
            return true;
        } else {
            return false;
        }
    }
    this.set = function (elem, index) {
        if (index > this.size()) throw "El índice está fuera de los límites de la lista";

        var aux = this.list[index];
        this.list[index] = elem;

        return aux;
    }
}

function test() {

    var p1 = new Person("Miguel", "Valle");
    var p2 = new Person("Jesús", "Rubio");
    var p3 = new Person("Hugo", "Martín");
    var p4 = new Person("Alberto", "Fernández")
    var p5 = new Person("Pedro", "Villar");

    var list1 = new list();

    list1.add(p1);
    console.log(list1.toString());
    list1.add(p2);
    console.log(list1.toString());
    /* list1.add(p3);
     console.log(list1.toString());*/
    list1.add(p4);
    console.log(list1.toString());
    list1.addAt(p5, 2);
    list1.add(p2);
    console.log(list1.toString());
    console.log(list1.toString());
    console.log(list1.get(2));
    console.log(list1.indexOf(p2));
    console.log(list1.lastIndexOf(p2));
    console.log(list1.capacity());
    console.log(list1.firstElement());
    console.log(list1.lastElement());
    console.log(list1.remove(1));
    console.log(list1.toString());
    console.log(list1.removeElement(p2));
    console.log(list1.toString());
    console.log(list1.set(p2, 1));
    console.log(list1.toString());
}

test();