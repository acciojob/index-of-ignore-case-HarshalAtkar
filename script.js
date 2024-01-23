function indexOfIgnoreCase(s1, s2) {
  // write your code here
	var strLower = s1.toLowerCase();
    var subStrLower = s2.toLowerCase();
    return strLower.indexOf(subStrLower);
	//index function gives to value substring which is to search and index
	// from which search begins
	//it is case sensetive
	

}

// Please do not change the code below
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
// alert(indexOfIgnoreCase(s1, s2));
