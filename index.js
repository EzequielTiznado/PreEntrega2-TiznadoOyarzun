/*----------------------------------------------------- FUNCTIONS----------------------------------------------------- */
function welcome() {
    alert("Bienvenido al sistema  de Asistencia del Personal");
}

function accountant(a) {
    return a + 1;
}

function total(person)
 {
    const Total=20;
   
    if (person > Total)
    {
            alert("ATENCION! \nYa se cargo la totalidad del personal disponible");
            return true;
    }
}

function validateInput(type) {
    exit = true
    while (exit) {
        let validation;
        if (type == 1) {
            validation = Number(prompt("Seleccione el tipo de personal: \n1-Personal Jerarquico \n2-Empleado \n3-Pasante"));

        }

        else if (type == 2) {
            validation = Number(prompt("Seleccione el destino: \n1-Direccion \n2-Operaciones \n3-Sistemas \n4-Tesoreria"));

        }


        if ((type == 1 && validation < 4 && validation != 0) || (type == 2 && validation <= 4 && validation != 0)) {
            exit = false;
        } else {
            alert("Opcion incorrecta!")
        }

        switch (validation) {
            case 1:
                if (type == 1) {
                    return result = "Personal Jerarquico";
                } else {
                    return result = "Direccion";
                }

            case 2:
                if (type == 1) {
                    return result = "Empleado";
                } else {
                    return result = "Operaciones";
                }
            case 3:
                if (type == 1) {
                    return result = "Pasante";
                } else {
                    return result = "Sistemas";
                }
            case 4:
                if (type == 2) {
                    return result = "Tesoreria"
                }
        }
    }
}


function subMenu(salir) {
    while (salir) {
        let op = Number(prompt("presione: \n1.Para volver al menu \n2.Para salir"));

        if (op == 1) {
            salir = false
            return salida = true
        }

        else if (op = 2) {
            salir = false;
            return salida = false;
        }

        else {
            alert("Opcion invalida!")
        }


    }
}

function goodBye() {

    alert("Gracias por utilizar el sistema de Asistencia del Personal");
}
/*----------------------------------------------------- CLASSES----------------------------------------------------- */

class Employees {
    constructor(register, nameOfPerson, jobOfPerson, workPlace, admissionTime, dischargeTime, totalHours) //horaIngreso,horaSalida) 
    {   
        this.register      = register;
        this.nameOfPerson  = nameOfPerson;
        this.jobOfPerson   = jobOfPerson;
        this.workPlace     = workPlace;
        this.attendance    = false;
        this.admissionTime = parseFloat(admissionTime);
        this.dischargeTime = parseFloat(dischargeTime);
        this.totalHours    = parseFloat(totalHours);
    }


    assist() //crear una condicion para q ingrese a un contador en caso q falte y otro en caso q asista
    {
        this.attendance = true;

    }

    startAdmissionTime() {
        this.admissionTime = parseFloat(prompt("ATENCION: Las horas y minutos se separan por un punto\nHora de ingreso: "));
    }

    startDischargeTime() {
        this.dischargeTime = parseFloat(prompt("ATENCION: Las horas y minutos se separan por un punto\nHora de egreso: "));
    }

    totalHoursWorked() 
    {
        this.totalHours = this.dischargeTime - this.admissionTime; 
    }
}
/*--------------------------------------------------------------------------------------------------------------------- */
let name;
let occupation;
let office;
let type;
let op;
const people = [];
let totalPerson=0;
let register=0;
let exit=1;
welcome();

alert("A continuacion cargue el personal ingresado")

while(exit!=2)
 {
    register=accountant(register)
    namePerson  = prompt("Ingrese nombre: ")

    type        = 1;
    occupation    = validateInput(type);

    type        = 2;
    oficce      = validateInput(type);

    const employee = new Employees(register, namePerson, occupation, oficce);
    employee.assist();
    employee.startAdmissionTime();
    people.push(employee);

    totalPerson = accountant(totalPerson);
    total(totalPerson)
    exit  = Number(prompt("1- Registrar otro ingreso \n2- Salir"));
 }

alert("Datos cargados correctamente!");



exit=true
while(exit)
{

    let option= Number (prompt ("Elija una opcion: \n1.Cargar horario de salida.\n2.Informe personal.\n3.Personas que ingresaron tarde \n4.Borrar registro\n**Ingrese cualquier otra tecla para salir "));

    switch (option)
    {
        case 1:
                aux=prompt("ingrese un nombre");
                people.forEach((person) => 
                {
                    if(person.nameOfPerson == aux)
                    { 
                        person.startDischargeTime();
                        person.totalHoursWorked(); 
                    }    
                });
                break;

         case 2:                   
                for (let i = 0; i < people.length; i++) 
                {
                    if (people[i].dischargeTime > 0)
                    {
                        alert("Numero de registro: " + people[i].register +"\nNombre: " + people[i].nameOfPerson + "\nCargo: " + people[i].jobOfPerson + "\nOficina: " + people[i].workPlace + "\nHorario de ingreso: " + people[i].admissionTime+ "\nHorario de egreso: " + people[i].dischargeTime+ "\nHoras trabajadas en el dia: " + Math.round(people[i].totalHours));
                    }else
                    {
                        alert("Numero de registro: " + people[i].register +"\nNombre: " + people[i].nameOfPerson + "\nCargo: " + people[i].jobOfPerson + "\nOficina: " + people[i].workPlace + "\nHorario de ingreso: " + people[i].admissionTime+ "\nNo consta registro de egreso");
                    }
                }
                break;

        case 3:
                const late = people.filter(person => person.admissionTime > 7.00);
                for (let i = 0; i < late.length; i++) 
                {
                    alert(late[i].nameOfPerson + ", de la oficina de "+late[i].workPlace);
                
                } 
                
                break;
        case 4: 
                aux=Number(prompt("Ingrese el numero de registro a eliminar"));
                if (aux > people.length){
                    alert("El registro no existe")
                }else
                {
                    for (let i = 0; i < people.length; i++)
                    {   
                        if (i==aux)
                        {
                            people.splice((aux-1), 1);
                            alert("Se actualizaron la cantidad de registros");
                        }
                    }
                } 
            break;

        default:
            exit=false;
            break;  
    }

}
goodBye();





