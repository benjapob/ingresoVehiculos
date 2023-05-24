class Vehiculo{
    constructor(marca, modelo, valorBase, km, estado, color, año, patente, titular){
        this.marca = marca;
        this.modelo = modelo;
        this.valorBase = valorBase;
        this.valorFinal = parseInt(valorBase) + (parseInt(valorBase) * 0.19);
        this.km = km;
        this.estado = estado;
        this.color = color;
        this.año = año;
        this.patente = patente;
        this.vendido = false;
        this.titular = titular;
    }

    get getMarca() {
        return this.marca;
    }
    
    get getModelo() {
        return this.modelo;
    }

    get getValorBase() {
        return this.valorBase;
    }

    get getValorFinal() {
        return this.valorFinal;
    }

    get getKm() {
        return this.km;
    }

    get getEstado() {
        return this.estado;
    }

    get getColor() {
        return this.color;
    }

    get getAño() {
        return this.año;
    }

    get getPatente() {
        return this.patente;
    }

    get getVendido() {
        return this.vendido;
    }

    get getTitular() {
        return this.titular;
    }

    setMarca(marca) {
        this.marca = marca
    }

    setModelo(modelo) {
        this.modelo = modelo
    }

    setValorBase(valorBase) {
        this.valorBase = valorBase
    }

    setValorFinal(valorFinal) {
        this.valorFinal = valorFinal
    }

    setKm(km) {
        this.km = km
    }

    setEstado(estado) {
        this.estado = estado
    }

    setColor(color) {
        this.color = color
    }

    setAño(año) {
        this.año = año
    }

    setPatente(patente) {
        this.patente = patente
    }

    setVendido(vendido) {
        this.vendido = vendido
    }

    setTitular(titular) {
        this.titular = titular
    }
}

class Persona {
    constructor(rut, nombre, apellido, edad) {
        this.rut = rut;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    get getRut() {
        return this.rut;
    }

    get getNombre() {
        return this.nombre;
    }

    get getApellido() {
        return this.apellido;
    }

    get getEdad() {
        return this.edad;
    }

    setRut(rut) {
        this.rut = rut;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    setApellido(apellido) {
        this.apellido = apellido;
    }

    setEdad(edad) {
        this.edad = edad;
    }
}

listaVehiculos = [];
listaPersonas = [];

let registrarVehiculo = function() {
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let valorBase = document.getElementById("valorBase").value;
    let km = document.getElementById("km").value;
    let estado = document.getElementById("estado").value;
    let color = document.getElementById("color").value;
    let año = document.getElementById("año").value;
    let patente = document.getElementById("patente").value;
    
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let rut = document.getElementById("rut").value;
    let edad = document.getElementById("edad").value;

    if (marca && modelo && valorBase && km && estado && color && año && patente && nombre && apellido && rut && edad) {
        p = new Persona(rut, nombre, apellido, edad);

        if (listaPersonas.find(x => x.getRut == rut)) {
            
        }
        else {
            listaPersonas.push(p);
        }

        v = new Vehiculo(marca, modelo, valorBase, km, estado, color, año, patente, p)

        
        if (listaVehiculos.find(x => x.getPatente == patente)) {
            alert("Vehiculo ya existe")
        }

        else {
            listaVehiculos.push(v);
            pos = listaVehiculos.indexOf(listaVehiculos.find(x => x.getPatente == patente));


            alert("Vehículo agregado exitosamente!")

            document.getElementById("marca").value = "";
            document.getElementById("modelo").value = "";
            document.getElementById("valorBase").value = "";
            document.getElementById("km").value = "";
            document.getElementById("estado").value = "";
            document.getElementById("color").value = "";
            document.getElementById("año").value = "";
            document.getElementById("patente").value = "";

            document.getElementById("nombre").value = "";
            document.getElementById("apellido").value = "";
            document.getElementById("rut").value = "";
            document.getElementById("edad").value = "";

            let tr = document.createElement("tr");
            tr.setAttribute("id", `tr${pos}`);
            let string = `<td>${marca}-${modelo}</td> <td>${patente}</td> <td>${v.getValorFinal}</td> <td>${km}</td> <td>${color}</td> <td>${estado}</td> <td>${nombre} ${apellido}</td> <td>${rut}</td> <td><input disabled unchecked class="form-check-input" type="checkbox" value="" id="vendido"></td>`
            tr.innerHTML = string.trim();
            document.getElementById("tabla").appendChild(tr);
            /* document.getElementById("tabla").innerHTML = "<tr> <td>"+marca + modelo +"</td> <td>" + patente +"</td> <td>"+nombre+" "+apellido+"</td> <td>"+rut+"</td> </tr> " */
        }

        
    }

    else {
        alert("Ingrese datos válidos, por favor.")
    }

}

let buscarVehiculo = function() {
    let buscar = document.getElementById("buscarPat").value;

    if (buscar) {
        v = listaVehiculos.find(x => x.getPatente == buscar)

        if (v) {
            document.getElementById("res1").value = v.getMarca;
            document.getElementById("res2").value = v.getModelo;
            document.getElementById("res3").value = v.getValorFinal;
            document.getElementById("res4").value = v.getKm;
            document.getElementById("res5").value = v.getColor;
            document.getElementById("res6").value = v.getAño;
            document.getElementById("res7").value = v.getPatente;
            document.getElementById("res8").value = v.getTitular.getNombre+" "+v.getTitular.getApellido;
            if (v.getEstado == "Nuevo") {
                document.getElementById("optNuevo").selected = "true";
            }
            else if (v.getEstado == "Usado") {
                document.getElementById("optUsado").selected = "true";
            }
            if (v.getVendido == true) {
                document.getElementById("vendido").checked = true;
            }
        }

        else {
            alert("No se encuentra el vehículo")
        }
        
        document.getElementById("buscarPat").value = "";
    }

    else {
        alert("Ingrese datos válidos, por favor.")
    }
}

let actualizarVehiculo = function() {
    let estadoNuevo = document.getElementById("estadoNuevo").value;
    let vendido = document.getElementById("vendido").checked;

    if (estadoNuevo) {
        let buscar = document.getElementById("res7").value;
        
        v = listaVehiculos.find(x => x.getPatente == buscar);

        if (v) {
            pos = listaVehiculos.indexOf(listaVehiculos.find(x => x.getPatente == buscar));
            
            v.setEstado(estadoNuevo);
            v.setVendido(vendido);

            document.getElementById("res1").value = "";
            document.getElementById("res2").value = "";
            document.getElementById("res3").value = "";
            document.getElementById("res4").value = "";
            document.getElementById("res5").value = "";
            document.getElementById("res6").value = "";
            document.getElementById("res7").value = "";
            document.getElementById("res8").value = "";
            document.getElementById("selecc").selected = "true";
            document.getElementById("vendido").checked = false;
            if (vendido) {
                string = `<td>${v.getMarca}-${v.getModelo}</td> <td>${v.getPatente}</td> <td>${v.getValorFinal}</td> <td>${v.getKm}</td> <td>${v.getColor}</td> <td>${v.getEstado}</td> <td>${v.getTitular.getNombre} ${v.getTitular.getApellido}</td> <td>${v.getTitular.getRut}</td> <td><input disabled checked class="form-check-input" type="checkbox" value="" id="vendido"></td>`
            }
            else {
                string = `<td>${v.getMarca}-${v.getModelo}</td> <td>${v.getPatente}</td> <td>${v.getValorFinal}</td> <td>${v.getKm}</td> <td>${v.getColor}</td> <td>${v.getEstado}</td> <td>${v.getTitular.getNombre} ${v.getTitular.getApellido}</td> <td>${v.getTitular.getRut}</td> <td><input disabled unchecked class="form-check-input" type="checkbox" value="" id="vendido"></td>`
            }
            document.getElementById(`tr${pos}`).innerHTML = string.trim();

            alert("Vehículo actualizado correctamente!")

        }

        else {
            alert("No se encuentra el vehículo")
        }

    }

    else {
        alert("Ingrese datos válidos, por favor.")
    }
}

/* function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
  
      const negativeSign = amount < 0 ? "-" : "";
  
      let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
      let j = (i.length > 3) ? i.length % 3 : 0;
  
      return negativeSign +
        (j ? i.substr(0, j) + thousands : '') +
        i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
        (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
      console.log(e)
    }
  }; */