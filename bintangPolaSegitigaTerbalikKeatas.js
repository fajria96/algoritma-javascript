rows = 5;
segitigaKebawah = '';

for (let i = 0; i < rows; i++) {
   for (let j = rows; j > i; j--) {
       segitigaKebawah += '*';
   }
    segitigaKebawah += '\n';
}
console.log(segitigaKebawah);

/*

hasil: 

*****
****
***
**
*

*/