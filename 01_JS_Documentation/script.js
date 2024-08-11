const copyButton = document.querySelector(".code-container img");
const copy = document.querySelector(".code-container");
const copyMessage=document.querySelector('.copied-msg')
copyButton.addEventListener("click", () => {
  const copyText = copy.innerText;

  navigator.clipboard.writeText(copyText);
  addClassToCopyButton()
});
function addClassToCopyButton(){
  copyMessage.classList.add('show')
  setTimeout(()=>{
    copyMessage.classList.remove('show')
  },500)
}