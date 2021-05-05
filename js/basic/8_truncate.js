function truncateString(str, num) {
  if(str.length > num){
    return str.slice(0,num) + "..."
  }
  return str;
}

function truncate(str, num){

	return str.length > num ? str.slice(0,num) + "..." : str;
}
