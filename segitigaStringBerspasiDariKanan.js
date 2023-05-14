let word = "Nama saya Fajri";

for (let i = 0; i < word.length; i++) {
     let space = "";
    for (let j = word.length; j > i; j--) {
         space += " ";
    }
  console.log(space + word[i]);
}

/*
hasil:

               N
              a
             m
            a
            
          s
         a
        y
       a
       
     F
    a
   j
  r
 i

*/