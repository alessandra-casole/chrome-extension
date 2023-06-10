function setUpEvents() {
   const inputEl = document.querySelector(".input-el");
   const inputBtn = document.querySelector(".input-btn");
   let myLeads = [];
   const ulEl = document.querySelector("#ul-el");
   const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
   const tabBtn = document.querySelector(".tab-btn");
   const deleteBtn = document.querySelector(".delete-btn");

   //   Render the leads in the unordered list
   function render(leads) {
      let listItems = "";
      for (let value of leads) {
         listItems += `<li> <a href="${value}" target="_blank"> ${value} </a> </li>`;
      }
      ulEl.innerHTML = listItems;
   }

   if (leadsFromLocalStorage) {
      myLeads = leadsFromLocalStorage;
      render(myLeads);
   }

   document.body.addEventListener("click", (e) => {
      if (e.target === inputBtn) {
         myLeads.push(inputEl.value);
         render(myLeads);
         inputEl.value = "";
         localStorage.setItem("myLeads", JSON.stringify(myLeads));
      } else if (e.target === tabBtn) {
         chrome.tabs.query(
            { active: true, currentWindow: true },
            function (tabs) {
               myLeads.push(tabs[0].url);
               render(myLeads);
               localStorage.setItem("myLeads", JSON.stringify(myLeads));
            }
         );
      }
   });

   deleteBtn.addEventListener("dblclick", () => {
      localStorage.clear();
      myLeads = [];
      ulEl.innerHTML = "";
   });
}

document.addEventListener("DOMContentLoaded", () => {
   setUpEvents();
});
