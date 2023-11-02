

// const displayInfo = document.querySelector(".account-details");
// const spendingsInfo = document.querySelector(".spending-info")
// const ulElement = document.createElement("ul")

// for (let i = 0; i<accounts.length; i ++ ) {
//     let data = accounts[i]
//     ulElement.innerHTML += `
//     <li id="${data.id}" class="btn-account">
//         <span>${data.title}</span>
//         <span>$ ${data.balance}</span>
//     </li>
//     `

//     displayInfo.appendChild(ulElement)
// }

// mainAccount();
// displayInfo.addEventListener('click', function(e) {
//     const clickedLi = e.target.closest('li');
    
//     if (clickedLi) {
//         const liId = clickedLi.id;
//             switch (liId) {
//                 case '1':
//                     clearSpendingsInfo()
//                     mainAccount();
//                     break;

//                 case '2':
//                      ()
//                     expenses()
//                     break;

//                 case '3':
//                     clearSpendingsInfo()
//                     saving()
//                     break;

//                 default:
//                     break;
//         }
        
//     }
// });

// function mainAccount() {
//     for (let i = 0; i < accounts.length; i++) {
//         let data = accounts[i];
//         if (data.id === 1) {
//             let spend = data.spendings;
//             const newEl = document.createElement("div");
//             for (let j = 0; j < spend.length; j++) {
//                 let spendingData = spend[j];
//                 let spendingCat = spendingData.category;
//                 let spendingAmount = spendingData.spent;

//                 newEl.innerHTML += `
//                     <div class="bar ${spendingCat.toLowerCase()}">
//                         <span>${spendingCat}</span>
//                         <span>$ ${spendingAmount}</span>
//                     </div>
//                 `;
//             }
//             spendingsInfo.appendChild(newEl);
//         }
//     }
// }

// function expenses() {
//     for (let i = 0; i < accounts.length; i++) {
//         let data = accounts[i];

//         if (data.id === 2) {
//             let spend = data.spendings;

//             const newEl = document.createElement("div");
//             for (let j = 0; j < spend.length; j++) {
//                 let spendingData = spend[j];
//                 let spendingCat = spendingData.category;
//                 let spendingAmount = spendingData.spent;

//                 newEl.innerHTML += `
//                     <div class="bar ${spendingCat.toLowerCase()}">
//                         <span>${spendingCat}</span>
//                         <span>$ ${spendingAmount}</span>
//                     </div>
//                 `
//             }
//             spendingsInfo.appendChild(newEl);
//         }
//     }
// }
  
// function saving() {
//      const newEl = document.createElement("div");
//         newEl.innerHTML += `
//             <div class="bar "style="text-align:left;">
//                 <span>No spending in saving section</span>
//             </div>
//         `
//     spendingsInfo.appendChild(newEl);
// }

// function clearSpendingsInfo() {
//     while (spendingsInfo.firstChild) {
//         spendingsInfo.removeChild(spendingsInfo.firstChild);
//     }
// }
import accounts from './accounts.js';
const menuBtn = document.querySelector('.bx-menu');
const toggleMenu = document.querySelector('.mobile-menu');
const accountHolderEl = document.querySelector('.account-item-holder')
const spendingHolderEl = document.querySelector('.spending-item-holder')


menuBtn.addEventListener('click', () => {
    if (menuBtn.classList.contains('bx-menu')) {
        menuBtn.classList.replace('bx-menu', 'bx-x');
        toggleMenu.style.display = "block";
    } else {
        menuBtn.classList.replace('bx-x', 'bx-menu');
        toggleMenu.style.display = "none";
    }
});

/*Rending the Account Items */
accounts.forEach((accountItem, index) => {
    let accountItemHolder = document.createElement('li')

    accountItemHolder.innerHTML = `
        <p>${accountItem.title}</p>
        <p>$ ${accountItem.balance}</p>
    `;

    accountHolderEl.appendChild(accountItemHolder);
    /*Checking the index number to add active status */
    if (index === 0 ) {
        accountItemHolder.classList.add('active')
    }
});

/*checking click event */

accountHolderEl.addEventListener('click', () => {
    mainAccount(2)
})


function mainAccount(accountId) {
    const account = accounts.find(acc => acc.id = accountId)
    console.log(account.id);
    
    if(account) {
        const spendings = account.spendings;
        
        spendings.forEach(speandingdata => {
            const spedingsDataHolder = document.createElement('li')
            spedingsDataHolder.innerHTML = `
                <p>${speandingdata.category}</p>
                <p>${speandingdata.spent}</p>
            `;

            spendingHolderEl.appendChild(spedingsDataHolder)
        })
    }
}