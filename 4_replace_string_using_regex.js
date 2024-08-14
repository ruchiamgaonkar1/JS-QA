function replaceSubstring(inputString, regExp, replacingStr) {
    const regex = regExp;
    
    const outputString = inputString.replace(regex, replacingStr);
    
    return outputString;
  }

//   console.log(replaceSubstring('I am in India', /\bin\b/, 'with'));
//   I am with India