// waktu pngerjaan 40 menit
// input [1, 4, 6, 7] => [14, 12, 8, 2]

//balik array 
let input = [1, 4, 6, 7]
function reverseArr(arr){
    for(let i = 3; i >= 0; i-- ){
        const n = arr[i]
        console.log(n * 2)
      
    }
 
}

console.log(reverseArr(input))