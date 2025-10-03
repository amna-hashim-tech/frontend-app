async function getMessage() {
  try {
    const response = await fetch("https://YOUR_BACKEND_URL/api/message");
    const data = await response.json();
    document.getElementById("response").innerText = data.message;
  } catch (err) {
    document.getElementById("response").innerText = "Error calling backend!";
  }
}
