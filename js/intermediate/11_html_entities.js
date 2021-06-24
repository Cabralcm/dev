/*Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 *
 */


function convertHTML(str) {
  let lookup = {"&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "'": "&apos;",
                '"': "&quot;"};
  let outStr = []
  for(let i = 0; i < str.length; i++){
    if(str[i] in lookup){
      outStr.push(lookup[str[i]]);
    }else{outStr.push(str[i])}
  }
  return outStr.join("");
}

convertHTML("Dolce & Gabbana");
