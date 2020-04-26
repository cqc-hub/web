let name='小明';
let age=18;
let flag=true;
function sum(a,b){
	return a+b;
}

if(flag){
	console.log(sum(20,30));
};
export{
	flag,
	sum
}

export var num1=1000;
export var heig=1.88;
export  function ooo(a,b){
	console.log(a*b);
}
export class person{
	run(){
		console.log('running');
	}
}