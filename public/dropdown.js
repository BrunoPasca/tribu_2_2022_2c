/*the optionDropDown must be the id for an option*/
const optionDropDown = document.getElementById("optionDropDown");

/*Replace this with a call to the respective backend to get the data*/
const exampleData = {
    "Australia": "",
    "Canada": "",
    "UK": "",
    "USA": ""
  }

  for (let key in exampleData) {
    let option = document.createElement("option");
    option.setAttribute('value', exampleData[key]);
  
    let optionText = document.createTextNode(key);
    option.appendChild(optionText);
  
    optionDropDown.appendChild(option);
  }