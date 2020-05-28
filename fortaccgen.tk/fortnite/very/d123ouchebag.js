var NumberOfWords = 35
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "https://link-to.net/106628/ACC328"
words[2] = "https://bit.ly/36O6YjT"
words[3] = "https://bit.ly/3elTtKy"
words[4] = "https://bit.ly/3c8512I"
words[5] = "https://bit.ly/2XagEC0"
words[6] = "https://link-to.net/106628/ACC372"
words[7] = "https://bit.ly/36Auy3m"
words[8] = "https://bit.ly/36Cc4zr"
words[9] = "https://bit.ly/3caWQCG"
words[10] = "https://link-to.net/106628/ACC400"
words[11] = "https://bit.ly/3c5eMP2"
words[12] = "https://bit.ly/2X9zUzp"
words[13] = "https://bit.ly/3d8V8mI"
words[14] = "https://link-to.net/106628/ACC291"
words[15] = "https://bit.ly/3ceFCUN"
words[16] = "https://bit.ly/3c5uqK9"
words[17] = "https://bit.ly/2TLXYWR"
words[18] = "https://link-to.net/106628/ACC342"
words[19] = "https://bit.ly/3dbALVW"
words[20] = "https://bit.ly/3cbYUKL"
words[21] = "https://bit.ly/2XFYhnd"
words[22] = "https://link-to.net/106628/ACC700"
words[23] = "https://bit.ly/3eqH7AT"
words[24] = "https://bit.ly/2ZJq7lf"
words[25] = "https://bit.ly/3eryKF9"
words[26] = "https://link-to.net/106628/ACC847"
words[27] = "https://bit.ly/2TNqiZ8"
words[28] = "https://bit.ly/3dam3P5"
words[29] = "https://bit.ly/3epxJxt"
words[30] = "https://link-to.net/106628/ACC333"
words[31] = "https://bit.ly/2AjGzyc"
words[32] = "https://bit.ly/3da6RkJ"
words[33] = "https://bit.ly/3gypnVY"
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
