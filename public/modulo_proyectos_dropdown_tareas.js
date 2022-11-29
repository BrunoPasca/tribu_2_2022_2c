

/*the optionDropDown must be the id for an option*/
const tareaOptionDropDown = document.getElementById("tareaOptionDropDown");

/*Replace this with a call to the respective backend to get the data*/
/*it currently uses a hardcoded dictionary to get the data*/
const tareaExampleData = {
    "Tarea 1": "",
    "Tarea 2": "",
    "Tarea 3": "",
    "Tarea 4": ""
  }

  for (let key in tareaExampleData) {
    let option = document.createElement("option");
    option.setAttribute('value', tareaExampleData[key]);
  
    let optionText = document.createTextNode(key);
    option.appendChild(optionText);
  
    tareaOptionDropDown.appendChild(option);
  }