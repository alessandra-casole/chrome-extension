function setUpEvents() {
   const inputEl = document.querySelector(".input-el");
   const inputBtn = document.querySelector(".input-btn");

   let myLeads = [];
   const ulEl = document.querySelector("#ul-el");

   //   Render the leads in the unordered list
   function render() {
      let listItems = "";
      for (let i = 0; i < myLeads.length; i++) {
         listItems += `<li> <a href="${myLeads[i]}" target="_blank"> ${myLeads[i]} </a> </li>`;
      }
      ulEl.innerHTML = listItems;
   }

   document.body.addEventListener("click", (e) => {
      if (e.target === inputBtn) {
         myLeads.push(inputEl.value);
         render();
         inputEl.value = "";
      }
   });
}

document.addEventListener("DOMContentLoaded", () => {
   setUpEvents();
});
