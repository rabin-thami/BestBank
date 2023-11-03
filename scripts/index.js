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
    let accountItemHolder = document.createElement('li');
    accountItemHolder.innerHTML = `
        <p>${accountItem.title}</p>
        <p>$ ${accountItem.balance}</p>
    `;
    accountItemHolder.setAttribute('account-titale-id', `${accountItem.id}`);
    accountHolderEl.appendChild(accountItemHolder);

    // Add a click event listener to each <li> element
    accountItemHolder.addEventListener('click', () => {
        // Remove the "active" class from the currently active element
        const currentActive = accountHolderEl.querySelector('.active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }
        // Add the "active" class to the clicked element
        accountItemHolder.classList.add('active');
    });
    /*Checking the index number to add active status */
    if (index === 0) {
        accountItemHolder.classList.add('active');
    }
});

/*checking click event */
let currentAccountId = 1;
mainAccount(currentAccountId);

accountHolderEl.addEventListener('click', (e) => {
    // Check if the clicked element is an <li> element
    if (e.target.tagName === 'LI') {
        const accountTitleId = parseInt(e.target.getAttribute('account-titale-id'));
        currentAccountId = accountTitleId;
        mainAccount(currentAccountId);
    }
});

function mainAccount(accountId) {
    const account = accounts.find(acc => acc.id === accountId);

    if (account) {
        const spendings = account.spendings;
        // Clear the existing content in spendingHolderEl
        while (spendingHolderEl.firstChild) {
            spendingHolderEl.removeChild(spendingHolderEl.firstChild);
        }

        if (spendings.length === 0) {
            const spedingsDataHolder = document.createElement('li'); 
            spedingsDataHolder.textContent = "There is No Spenings in Saving" 
            spendingHolderEl.appendChild(spedingsDataHolder)
        }else {
            spendings.forEach(speandingdata => {
                const spedingsDataHolder = document.createElement('li');
                const widthPercentage = (speandingdata.spent / 1000) * 100;

                spedingsDataHolder.innerHTML = `
                    <p>${speandingdata.category}</p>
                    <p>$${speandingdata.spent}</p>
                `;

                spendingHolderEl.appendChild(spedingsDataHolder);
                spedingsDataHolder.style.width = `${widthPercentage}%`;
            });
        }
    }
}
