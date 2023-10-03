//12) Realizá un programa que permita al usuario ingresar el día y el mes de su cumpleaños (de manera independiente). La computadora debe indicar cuál es su signo del zodiaco. Deben validarse tanto el día como el mes.
/* RANGOS TOMADOS EN CUENTA
Aries: 21 de marzo al 19 de abril
Tauro: 20 de abril y al 20 de mayo
Géminis: 21 de mayo al 20 de junio
Cáncer: 21 de junio al 22 de julio
Leo: 23 de julio al 22 de agosto
Virgo: 23 de agosto al 22 de septiembre
Libra: 23 de septiembre al 22 de octubre
Escorpio: 23 de octubre al 21 de noviembre
Sagitario: 22 de noviembre al 21 de diciembre
Capricornio: 22 de diciembre al 19 de enero
Acuario: 20 de enero al 18 de febrero
Piscis: 19 de febrero al 20 de marzo
*/

let dia, mes, signo, diaValido, mesValido;

dia = parseInt(prompt("Ingrese el día de nacimiento"));
if (dia > 0 && dia < 32) {
  mes = parseInt(
    prompt("Ingrese el mes de nacimiento (con números del 1 al 12)")
  );

  switch (mes) {
    case 1:
      if (dia > 0 && dia < 32) {
        signo = dia > 19 ? "Acuario" : "Capricornio";
      } else {
        signo = "ENERO TIENE 31 DIAS";
      }
      break;
    case 2:
      if (dia > 0 && dia < 29) {
        signo = dia > 18 ? "Piscis" : "Acuario";
      } else {
        signo = "FEBRERO TIENE 28 DIAS";
        //NO SE CONSIDERA LOS AÑOS BICIESTOS
      }
      break;
    case 3:
      if (dia > 0 && dia < 32) {
        signo = dia > 20 ? "Aries" : "Piscis";
      } else {
        signo = "MARZO TIENE 31 DIAS";
      }
      break;
    case 4:
      if (dia > 0 && dia < 31) {
        signo = dia > 19 ? "Tauro" : "Aries";
      } else {
        signo = "ABRIL TIENE 30 DIAS";
      }
      break;
    case 5:
      if (dia > 0 && dia < 32) {
        signo = dia > 20 ? "Géminis" : "Tauro";
      } else {
        signo = "MAYO TIENE 31 DIAS";
      }
      break;
    case 6:
      if (dia > 0 && dia < 31) {
        signo = dia > 20 ? "Cáncer" : "Géminis";
      } else {
        signo = "JUNIO TIENE 30 DIAS";
      }
      break;
    case 7:
      if (dia > 0 && dia < 32) {
        signo = dia > 22 ? "Leo" : "Cáncer";
      } else {
        signo = "JULIO TIENE 31 DIAS";
      }
      break;
    case 8:
      if (dia > 0 && dia < 32) {
        signo = dia > 22 ? "Virgo" : "Leo";
      } else {
        signo = "AGOSTO TIENE 31 DIAS";
      }
      break;
    case 9:
      if (dia > 0 && dia < 31) {
        signo = dia > 22 ? "Libra" : "Virgo";
      } else {
        signo = "SEPTIEMBRE TIENE 30 DIAS";
      }
      break;
    case 10:
      if (dia > 0 && dia < 32) {
        signo = dia > 22 ? "Escorpio" : "Libra";
      } else {
        signo = "OCTUBRE TIENE 31 DIAS";
      }
      break;
    case 11:
      if (dia > 0 && dia < 31) {
        signo = dia > 21 ? "Sagitario" : "Escorpio";
      } else {
        signo = "NOVIEMBRE TIENE 30 DIAS";
      }
      break;
    case 12:
      if (dia > 0 && dia < 32) {
        signo = dia > 21 ? "Capricornio" : "Sagitario";
      } else {
        signo = "DICIEMBRE TIENE 31 DIAS";
      }
      break;
    default:
      signo = "MES INVALIDO";
      break;
  }
} else {
  signo = "DIA INVALIDO";
}
document.write(signo);
