var NumberOfWords = 35
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "https://shorthub.co/c6GEomi"
words[2] = "https://shorthub.co/2sLu1Rsj"
words[3] = "https://shorthub.co/yLmWf16"
words[4] = "https://shorthub.co/yuyt"
words[5] = "https://shorthub.co/36uKu6R"
words[6] = "https://shorthub.co/LTmWI5"
words[7] = "https://shorthub.co/oXyMK"
words[8] = "https://shorthub.co/JKk93X"
words[9] = "https://shorthub.co/sXSZ8hVu"
words[10] = "https://shorthub.co/qfxCgvv"
words[11] = "https://shorthub.co/CqN9tht"
words[12] = "https://shorthub.co/esp0L"
words[13] = "https://shorthub.co/O8LaNkEL"
words[14] = "https://shorthub.co/B6N4goft"
words[15] = "https://shorthub.co/IVkwH"
words[16] = "https://shorthub.co/oiV9vFtE"
words[17] = "https://shorthub.co/3NfB"
words[18] = "https://shorthub.co/XfhC7"
words[19] = "https://shorthub.co/EOGQ"
words[20] = "https://shorthub.co/NGB40Nny"
words[21] = "https://shorthub.co/m0VI28bu"
words[22] = "https://shorthub.co/LaeH"
words[23] = "https://shorthub.co/clwL"
words[24] = "https://shorthub.co/Rcn5f"
words[25] = "https://shorthub.co/VH1Um"
words[26] = "https://shorthub.co/iyY2tCkH"
words[27] = "https://shorthub.co/SOhljF5p"
words[28] = "https://shorthub.co/vAiq"
words[29] = "https://shorthub.co/Pg6xgcn"
words[30] = "https://shorthub.co/t9caXw"
words[31] = "https://shorthub.co/uIA3X6"
words[32] = "https://shorthub.co/2CZJ9b"
words[33] = "https://shorthub.co/ykdwftIW"
words[34] = "https://direct-link.net/106628/acc1" 
words[35] = "https://direct-link.net/106628/acc352" 

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}