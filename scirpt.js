function encodeBase64() {
  const inputText = document.getElementById("inputText").value;
  const encodedText = btoa(inputText);
  document.getElementById("outputText").value = encodedText;
}

function decodeBase64() {
  const inputText = document.getElementById("inputText").value;
  try {
    const decodedText = atob(inputText);
    document.getElementById("outputText").value = decodedText;
  } catch (error) {
    document.getElementById("outputText").value = "Invalid Base64 string!";
  }
}
