let kata = "Halo Nama Saya FAJRI";

let newKata = "";
for (let i = 0; i < kata.length; i++) {
    if (kata[i] === kata[i].toUpperCase()) {
        newKata += kata[i].toLowerCase()    
    } else {
        newKata += kata[i].toUpperCase()  
    }
}

console.log(newKata);