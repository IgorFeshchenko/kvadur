module.exports = function solveEquation(equation) {
  let newStr = equation.split(" ");
  let a = newStr[0];
  let b = newStr[4];
  let c = newStr[8];
  if(newStr[3] == "-"){
     b = -b;
  }
  
  if(newStr[7] == "-"){
     c = -c;
  }

/*  let d = b*b -4*a*c;*/
  let x1 =  ((-b + Math.sqrt(b*b -4*a*c))/(2*a))/Math.pow(10,6);
  let x2 = ((-b - Math.sqrt(b*b -4*a*c))/(2*a))/Math.pow(10,6);


  if( x1>0 && x2>0 && x1<x2){
    return ([Math.round(x1*Math.pow(10,6)),Math.round(x2*Math.pow(10,6))]);
  }else if( x1>0 && x2>0 && x1>x2) {
  	return  ([Math.round(x2*Math.pow(10,6)),Math.round(x1*Math.pow(10,6))]);
  } else if(x1<0 && x2<0 && x1>x2){
  	  return  ([Math.round(x2*Math.pow(10,6)),Math.round(x1*Math.pow(10,6))]);
  } else if (x1<0 && x2<0 && x1<x2){
  	return  ([Math.round(x1*Math.pow(10,6)),Math.round(x2*Math.pow(10,6))]);
  } else if (x1>0 && x2<0){
return  ([Math.round(x2*Math.pow(10,6)),Math.round(x1*Math.pow(10,6))]);
  } else if (x1<0 && x2>0){
  	return  ([Math.round(x1*Math.pow(10,6)),Math.round(x2*Math.pow(10,6))]);
  }




}
