
// Missing data
let npArray = document.getElementById("npArray");
let variableMissing = document.getElementById("variableMissing");

const np = (arg) => {
   document.editor.textbox.value+= "\nnp." + arg;
}

const npis = (arg) => {
  if (npArray.value) {
      let regex = /\s*,\s*/g;
      let replacement = npArray.value;

        if (replacement.split("").includes(",")) {
          replacement = replacement.replaceAll(regex, ", ");
        } else {
            replacement = replacement;
      }
      document.editor.textbox.value+= "np." + arg + "(np.array([" + replacement + "]))";
  } else {
   document.editor.textbox.value+= "\nnp." + arg + "(np." + arg.slice(2) + ")";
  }
}

const isFinite = (arg) => {
  if (npArray.value) {
      let regex = /\s*,\s*/g;
      let replacement = npArray.value;

        if (replacement.split("").includes(",")) {
          replacement = replacement.replaceAll(regex, ", ");
        } else {
            replacement = replacement;
        }

      document.editor.textbox.value+="\nnp.isfinite" + "(np.array([" + replacement + "]))";

  } else {
     document.editor.textbox.value+="\nnp." + arg;
  }
}

const filter = () => {
  if (variableMissing.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'Missing data' section.");
  } else {
      document.editor.textbox.value+="\n" + variableMissing.value + "[np.isfinite(" + variableMissing.value + ")]";
  }
}

// Data cleaning with Pandas
let value = document.getElementById("value");
let dataSet = document.editor.dataSet;
let variableCleaning = document.getElementById("variableCleaning");

const isn = (arg) => {
  if (dataSet.value !== "") {
      let dataset = "";

    if (dataSet.value === "DataFrame") {
      dataset = "pd.DataFrame({\n    'Column a': [np.nan, np.nan, 4],\n    'Column b': [0, np.nan, 5],\n    'Column c': [1, np.nan, np.nan]\n})";
    } else {
      dataset = "pd.Series([np.nan, np.nan, 3])";
    }
      document.editor.textbox.value+="\npd." + arg + "(" + dataset + ")";
  } else if (value.value === "") {
    return alert("Please enter a value in the 'value' field, in the 'Data cleaning with Pandas' section.");
  } else {
      document.editor.textbox.value+="\npd." + arg + "(" + value.value + ")";
  }
}

const filterCleaning = () => {
  if (variableCleaning.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'Data cleaning with Pandas' section.");
  } else {
      document.editor.textbox.value+="\n" + variableCleaning.value + "[" + variableCleaning.value + ".notnull()]";
  }
}

// Drop null values
let variableDropping = document.getElementById("variableDropping");
let dropSet = document.editor.dropSet;
let dropNumber = document.getElementById("dropNumber");

const dropNull = () => {
  let dropnumber = "";

  if (variableDropping.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'Drop null values' section.");
  } else if (dropSet.value !== "") {
      let dropset = "";

      if (dropSet.value === "all" || dropSet.value === "any") {
        dropset = "how='" + dropSet.value + "'";
      } else {
        dropset = "axis='" + dropSet.value + "'";
      }

      if (dropNumber.value !== "") {
        dropnumber = "thresh=" + dropNumber.value + ", ";
      }
      document.editor.textbox.value+="\n" + variableDropping.value + ".dropna(" + dropnumber + dropset + ")";
  } else {
      if (dropNumber.value !== "") {
        dropnumber = "thresh=" + dropNumber.value;
      }
      document.editor.textbox.value+="\n" + variableDropping.value + ".dropna(" + dropnumber + ")";
  }
}

// Data at a glance
let variableData = document.getElementById("variableData");

const data = (stat) => {
  if (variableData.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'Data at a glance' section.");
  } else {
      document.editor.textbox.value+= '\n' + variableData.value + '.' + stat;
  }
}
