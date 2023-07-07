
const container = document.querySelector('.container')
const numberDiv= document.querySelector('.numberDiv')
const readBtn = document.querySelector('.readBtn')

let allIsRead = false;

// function chet(i) {
//     allIsRead = !allIsRead
//     const unreadMessages = messenger.filter(item => item.read === false);
//     container.innerHTML = `
// <div class = 'hederDiv'>
//     <div class = 'chetDiv'>
//         <h2>Notifications</h2>
//         <div class = 'numberDiv'>${unreadMessages.length}</div>
//     </div>
//     <button onclick = 'readBtnClick(${i})' class = 'read'>${allIsRead ? 'Mark all as read' : 'Mark all as unread'}</button>
// </div>
// `}

readBtn.textContent = 'Mark all as read'


const messenger = [
    {
        img: './images/avatar-mark-webber.webp',
        name: 'Mark Webber',
        read: false,
    },
    {
        img: './images/avatar-angela-gray.webp',
        name: 'Angela Gray',
        read: false,
    },
    {
        img: './images/avatar-jacob-thompson.webp',
        name: 'Jacob Thompson',
        read: false,
    },
    {
        img: './images/avatar-rizky-hasanuddin.webp',
        name: 'Rizky Hasanuddin',
        read: false,
    },
    {
        img: './images/avatar-kimberly-smith.webp',
        name: 'Kimberly Smith',
        read: false,
    },
    {
        img: './images/avatar-nathan-peterson.webp',
        name: 'Nathan Neterson',
        read: false,
    },
    {
        img: './images/avatar-anna-kim.webp',
        name: 'Anna Kim',
        read: false,
    },
]


const unreadMessages = messenger.filter(item => item.read === false);

numberDiv.textContent = unreadMessages.length

readBtn.addEventListener('click', ()=>{
    readBtnClick()
})

function messengerCase(obj) {
    container.innerHTML = ''
    
    // chet()
    for (let i = 0; i < obj.length; i++) {
        const person = obj[i]
        container.innerHTML += `
        <div class = ${person.read === true ? "personRead" : "personCase"} onclick = 'readCase(${i})'>
        <img src="${person.img}">
        <p>${person.name} followed you</p>
        </div> `
    }
}

// function readBtnClick() {
//     const allUnRead = messenger.some(mgs => mgs.read === false)

//     if (allIsRead){
//         for (let i = 0; i<messenger.length; i++){
//             messenger[i].read = true
//         }
//         messengerCase(messenger)
//     }

//     const allReadFiltered = messenger.filter(mgs => mgs.read === true).length

//     if (allReadFiltered === messenger.length){
//         for(let i =0 ; i < messenger.length; i++){
//             messenger[i].read = false
//         }
//         messengerCase(messenger)
//     }

//     const someRead = messenger.some(mgs => mgs.read === true)

//     if (someRead){
//         for (let i = 0; i<messenger.length; i++){
//             messenger[i].read = true
//         }
//         messengerCase(messenger)
//     }
// }

function readBtnClick() {
    const unreadMessages = messenger.filter(item => item.read === false);
    const allUnread = messenger.some((msg) => msg.read === false);
    const allReadFiltered = messenger.filter((msg) => msg.read === true).length;
    if (allReadFiltered === messenger.length) {
      for (let index = 0; index < messenger.length; index++) {
        messenger[index].read = false;
      }
      messengerCase(messenger);
    }
    if (allUnread) {
      for (let index = 0; index < messenger.length; index++) {
        messenger[index].read = true;
      }
      messengerCase(messenger);
    }
    // some method
    const someRead = messenger.some((msg) => msg.read === true);
    if (someRead) {
      for (let index = 0; index < messenger.length; index++) {
        messenger[index].read = true;
      }
      messengerCase(messenger);
    }
    numberDiv.textContent = allReadFiltered
    console
  }

function readCase(index) {

    messenger[index].read = !messenger[index].read;
    messengerCase(messenger)
}



messengerCase(messenger)

