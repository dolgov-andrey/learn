'use strict';

console.log(pow(3,2));
console.log(pow(3,3));
console.log(pow(1,100));
console.log(pow(2,2));

function pow(x,n){
	var res=1;
	 for (var i = n; i >= 1; i--) {
		res*= x;
	}
	return res;

}