var player = {
    fir: "",
    sec: "",
    duhap: "×",
    haveElement: ["metre", "second", "kilogram", "ampere", "kelvin", "mole", "candela"],
    allElement: {
        "metre": { "L": 1, "T": 0, "M": 0, "I": 0, "TH": 0, "N": 0, "J": 0 },
        "second": { "L": 0, "T": 1, "M": 0, "I": 0, "TH": 0, "N": 0, "J": 0 },
        "kilogram": { "L": 0, "T": 0, "M": 1, "I": 0, "TH": 0, "N": 0, "J": 0 },
        "ampere": { "L": 0, "T": 0, "M": 0, "I": 1, "TH": 0, "N": 0, "J": 0 },
        "kelvin": { "L": 0, "T": 0, "M": 0, "I": 0, "TH": 1, "N": 0, "J": 0 },
        "mole": { "L": 0, "T": 0, "M": 0, "I": 0, "TH": 0, "N": 1, "J": 0 },
        "candela": { "L": 0, "T": 0, "M": 0, "I": 0, "TH": 0, "N": 0, "J": 1 },
        "one": { "L": 0, "T": 0, "M": 0, "I": 0, "TH": 0, "N": 0, "J": 0 },
        "radian": { "L": 0, "T": 0, "M": 0, "I": 0, "TH": 0, "N": 0, "J": 0 },
        "steradian": { "L": 0, "T": 0, "M": 0, "I": 0, "TH": 0, "N": 0, "J": 0 },
        "hertz": { "L": 0, "T": -1, "M": 0, "I": 0, "TH": 0, "N": 0, "J": 0 },
        "newton": { "L": 1, "T": -2, "M": 1, "I": 0, "TH": 0, "N": 0, "J": 0 },
        "pascal": { "L": -1, "T": -2, "M": 1, "I": 0, "TH": 0, "N": 0, "J": 0 },
        "joule": { "L": 2, "T": -2, "M": 1, "I": 0, "TH": 0, "N": 0, "J": 0 },
        "watt": { "L": 2, "T": -3, "M": 1, "I": 0, "TH": 0, "N": 0, "J": 0 },
        "coulomb": { "L": 0, "T": 1, "M": 0, "I": 1, "TH": 0, "N": 0, "J": 0 },
        "volt": { "L": 2, "T": -3, "M": 1, "I": -1, "TH": 0, "N": 0, "J": 0 },
        "farad": { "L": -2, "T": 4, "M": -1, "I": 2, "TH": 0, "N": 0, "J": 0 },
        "ohm": { "L": 2, "T": -3, "M": 1, "I": -2, "TH": 0, "N": 0, "J": 0 },
        "mho": { "L": -2, "T": 3, "M": -1, "I": 2, "TH": 0, "N": 0, "J": 0 },
        "weber": { "L": 2, "T": -2, "M": 1, "I": -1, "TH": 0, "N": 0, "J": 0 },
        "tesla": { "L": 0, "T": -2, "M": 1, "I": -1, "TH": 0, "N": 0, "J": 0 },
        "henry": { "L": 2, "T": -2, "M": 1, "I": -2, "TH": 0, "N": 0, "J": 0 },
        "lumen": { "L": 0, "T": 0, "M": 0, "I": 0, "TH": 0, "N": 0, "J": 1 },
        "lux": { "L": -2, "T": 0, "M": 0, "I": 0, "TH": 0, "N": 0, "J": 1 },
        "gray": { "L": 2, "T": -2, "M": 0, "I": 0, "TH": 0, "N": 0, "J": 0 },
        "katal": { "L": 0, "T": -1, "M": 0, "I": 0, "TH": 0, "N": 1, "J": 0 },
        "area": { "L": 2, "T": 0, "M": 0, "I": 0, "TH": 0, "N": 0, "J": 0 },
        "volume": { "L": 3, "T": 0, "M": 0, "I": 0, "TH": 0, "N": 0, "J": 0 },
        "velocity": { "L": 1, "T": -1, "M": 0, "I": 0, "TH": 0, "N": 0, "J": 0 },
        "acceleration": { "L": 1, "T": -2, "M": 0, "I": 0, "TH": 0, "N": 0, "J": 0 },
        "wavenumber": { "L": -1, "T": 0, "M": 0, "I": 0, "TH": 0, "N": 0, "J": 0 },
        "density": { "L": -3, "T": 0, "M": 1, "I": 0, "TH": 0, "N": 0, "J": 0 },
        "surface density": { "L": -2, "T": 0, "M": 1, "I": 0, "TH": 0, "N": 0, "J": 0 },
        "specific volume": { "L": 3, "T": 0, "M": -1, "I": 0, "TH": 0, "N": 0, "J": 0 },
        "current density": { "L": -2, "T": 0, "M": 0, "I": 1, "TH": 0, "N": 0, "J": 0 },
        "magnetic field strength": { "L": -1, "T": 0, "M": 0, "I": 1, "TH": 0, "N": 0, "J": 0 },
        "concentration": { "L": -3, "T": 0, "M": 0, "I": 0, "TH": 0, "N": 1, "J": 0 },
        "mass concentration": { "L": -3, "T": 0, "M": 1, "I": 0, "TH": 0, "N": 0, "J": 0 },
        "luminance": { "L": -2, "T": 0, "M": 0, "I": 0, "TH": 0, "N": 1, "J": 0 },
    }
}

var imsi = undefined;

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => JSON.stringify(object[key]) === JSON.stringify(value));
}

function setFirSec(id) {
    if (!document.getElementById(id).innerHTML == "") {
        if (player.fir == "") {
            player.fir = id;
        } else if (player.sec == "") {
            player.sec = id;
        } else {
            player.fir = id;
            player.sec = "";
        }
    }
}

Object.keys(player.allElement).slice(7).forEach(element => {
    document.getElementById(element).innerHTML = "";
});

document.getElementById("duhapSelect").addEventListener("click", function() {
    if (player.duhap == "×") {
        player.duhap = "÷";
    } else {
        player.duhap = "×";
    }
});

document.getElementById("calc").addEventListener("click", function() {
    // 예외 예) m ÷ m == rad
    if (player.fir == "metre" && player.sec == "metre" && player.duhap == "÷") {
        imsi = "radian";
    } else if (player.fir == "area" && player.sec == "area" && player.duhap == "÷") {
        imsi = "steradian";
    } else if (player.fir == "radian" && player.sec == "radian" && player.duhap == "×") {
        imsi = "steradian";
    } else if (player.fir == "candela" && player.sec == "steradian" && player.duhap == "×") {
        imsi = "lumen";
    } else if (player.fir == "steradian" && player.sec == "candela" && player.duhap == "×") {
        imsi = "lumen";
    } else if (player.fir == "lumen" && player.sec == "area" && player.duhap == "÷") {
        imsi = "lux";
    } else if (player.duhap == "×") {
        imsi = getKeyByValue(player.allElement, {
            "L": player.allElement[player.fir].L + player.allElement[player.sec].L,
            "T": player.allElement[player.fir].T + player.allElement[player.sec].T,
            "M": player.allElement[player.fir].M + player.allElement[player.sec].M,
            "I": player.allElement[player.fir].I + player.allElement[player.sec].I,
            "TH": player.allElement[player.fir].TH + player.allElement[player.sec].TH,
            "N": player.allElement[player.fir].N + player.allElement[player.sec].N,
            "J": player.allElement[player.fir].J + player.allElement[player.sec].J
        });
    } else if (player.duhap == "÷") {
        imsi = getKeyByValue(player.allElement, {
            "L": player.allElement[player.fir].L - player.allElement[player.sec].L,
            "T": player.allElement[player.fir].T - player.allElement[player.sec].T,
            "M": player.allElement[player.fir].M - player.allElement[player.sec].M,
            "I": player.allElement[player.fir].I - player.allElement[player.sec].I,
            "TH": player.allElement[player.fir].TH - player.allElement[player.sec].TH,
            "N": player.allElement[player.fir].N - player.allElement[player.sec].N,
            "J": player.allElement[player.fir].J - player.allElement[player.sec].J
        });
    }
    if (imsi !== undefined) {
        document.getElementById(imsi).innerHTML = imsi;
        if (!player.haveElement.includes(imsi)) { player.haveElement.push(imsi); }
        console.log("you made " + imsi);
    }
});

setInterval(function() {
    if (player.fir == "one") { document.getElementById("fir").innerHTML = "1"; } else { document.getElementById("fir").innerHTML = player.fir; }
    document.getElementById("sec").innerHTML = player.sec;
    document.getElementById("duhapSelect").innerHTML = player.duhap;
    document.getElementById("haveNumber").innerHTML = "you have " + player.haveElement.length + "/" + Object.keys(player.allElement).length + "(" + (player.haveElement.length / Object.keys(player.allElement).length * 100).toFixed(2) + "%) units.";
}, 30);