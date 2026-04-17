
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

