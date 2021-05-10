function mutation(arr) {
  let hashMap = {};
  for(let i = 0; i < arr[0].length; i++){
    hashMap[arr[0][i].toLowerCase()] = true;
  }
  for(let i = 0; i < arr[1].length; i++){
    if (!(arr[1][i].toLowerCase() in hashMap)){
      return false;
    }
  }
  return true;
}

