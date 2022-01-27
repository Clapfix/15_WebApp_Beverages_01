
/* View- Controller */

/* Der Plan
    Einlesen Daten von Webseite :: 
	Check Daten :: 
    Btn. Trigger :: 
    Business-Logic (Alter --> Getränk) :: 
    Bild austauschen :: 
*/

/***  Ablaufsteuerung | Control */
// Modul. Ablaufsteuerung | Test:
controller()  
function controller(){
    output(updateImg(checkAge(getImput())));
}

/** Eingabe | Check auf Datenintehrität */
//4. Modul: Eingabe
function getImput() {
    return 5;
    
}

/** Business-Logic */
//3. Modul: Business-Logic (Mapping) | Test:

function checkAge(age) {
    switch (true) {
       
        case (age >= data.milk.lower) && (age <= data.milk.upper) :
            return data.milk.bev;
        case (age >= data.juice.lower) && (age <= data.juice.upper) :
            return data.juice.bev;
        case (age >= data.cola.lower) && (age <= data.cola.upper) :
            return data.cola.bev;
        case (age >= data.wine.lower) && (age <= data.wine.upper) :
            return data.wine.bev;
        default:          
            return data.default.bev;           
    }
}

/*** View-Schicht aktualisieren */
//2.Modul: Bild aktualisiereb | Test: 
function updateImg(imgName){
    const img = document.getElementById("bevImg");
    img.src = gui.img.path + imgName + gui.img.ext;
    return imgName;
}

//1. Modul: Konsolenausgabe --> Test:
function output(outputData) {
    console.log(outputData);
}