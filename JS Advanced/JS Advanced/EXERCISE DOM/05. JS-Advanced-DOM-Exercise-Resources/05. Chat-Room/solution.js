function solve() {
   let button = document.getElementById("send");

   button.addEventListener("click", () => {
      let inputData = document.getElementById("chat_input").value;
      document.getElementById("chat_input").value = "";
      let newMessage = document.createElement("div");
      newMessage.setAttribute("class", "message my-message");
      newMessage.innerText = inputData;
      document.getElementById("chat_messages").appendChild(newMessage);
      
   })
}


