function firstNonRepeatedChar(str) {
 // Write your code here
	let k = ''
	let flag = false
	for (let i = 0; i < str.length; i++) {
		let count = 0
		for (let j = 0; j < str.length; j++) {
			if (str[i] == str[j]) {
				 count += 1
				 k = str[i]
			}
	   }
		if(count>=2){
			flag = true
		}
		if(count==1){
			return k
		}
    }
	if (flag==true) {
		return 'null'
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
