const copyButton = document.querySelector(".code-container img");
const copy = document.querySelector(".code-container");
copyButton.addEventListener("click", () => {
  const copyText = copy.innerText;

  navigator.clipboard.writeText(copyText);
});
