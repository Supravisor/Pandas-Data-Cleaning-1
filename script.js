
// Missing data
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
