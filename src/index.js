const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let obj = {
        '11': "-",
        '10': ".",
        '**': " ",
        '00': '',
      }
      let arr3=[];
      let arr2 =[];
      let arr1=[];
      let str
      let str1
      let str2
      let arr4=[];
      
      
      for (let i = 0; i<(expr.length/10)+1;i++){
        arr1.push(expr.split('',i*10));
        if (i === 0|| i === 1){
          str = arr1[i].join('')
        }
       if (i>1&&i!==0&&i!==1){
         arr1[i].splice(0, 10*(i-1) )
         str = arr1[i].join('')
       }
        arr2.push(str)
      }
        arr2.splice(0,1)
        for( let a = 0; a<arr2.length; a++ ){
          arr3.push(arr2[a].split(''))
          arr3.forEach(function(item,index){
            let d = (arr3[index])
            arr4[a] = []
            arr4[a]+=(obj[ String(d[0]+d[1]) ])
            arr4[a]+=(obj[ String(d[2]+d[3]) ])
            arr4[a]+=(obj[ String(d[4]+d[5]) ])
            arr4[a]+=(obj[ String(d[6]+d[7]) ])
            arr4[a]+=(obj[ String(d[8]+d[9]) ])
          
        })
        arr4.forEach(function(item, index){
          if(index === 0){
            str2 = ''
          }
          if(item.includes(' ')){
          return str2 += ' '
      
          }
          str2 += (String(MORSE_TABLE[arr4[index]]))
          
        })
      }
      return str2
}

module.exports = {
    decode
}