const menu = document.getElementById("menuBar");

const menuBtn = document.getElementById("menuButton");

const user = document.querySelector("#userButton");

const userForm = document.querySelector(".addUser");

// console.log(userForm)

const nameInput = document.querySelector("#nameInput");
// console.log(nameInput)

const surnameInput = document.querySelector("#surnameInput");
// console.log(surnameInput)

const genderInput = document.querySelector("#genderInput");
// console.log(genderInput)

const locationInput = document.querySelector("#locationInput");
//console.log(locationInput)

const ageInput = document.querySelector("#ageInput");
//console.log(ageInput);

const addButton = document.getElementById("addButton");

const userList = document.querySelector("#userList");
//console.log(userList);

let users = [
  {
    userName: "Ahmet",
    userSurname: "Hasan",
    userGender: "Erkek",
    userLocation: "Antalya",
    userAge: 25,
  },
];

const addNewUser = () => {
  const newUserName = nameInput.value;
  const newuserSurmame = surnameInput.value;

  const newuserGender = genderInput.value;
  const newuserLocation = locationInput.value;
  const newuserAge = ageInput.value;

  // console.log(newUserName,newuserSurmame)
  let newUser = {
    userName: newUserName,
    userSurname: newuserSurmame,
    userGender: newuserGender,
    userLocation: newuserLocation,
    userAge: newuserAge,
  };

  users.push(newUser);
  nameInput.value = "";
  surnameInput.value = "";
  genderInput.value = "";
  locationInput.value = "";
  ageInput.value = "";
  console.log(users);
};

function showUsers() {
  userList.innerHTML = ``;
  users.map((user) => {
    const userCard = document.createElement("div");
    //console.log(userCard)

    userCard.innerHTML = `
     
     <div class="card-left">
     <img
       src="https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGh1bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
       alt=""
     />
   </div>
   <div class="card-right">
     <div class="infoBox">
       <span>Kullanıcı Adı:</span>
       <span>${user.userName} </span>
     </div>
     <div class="infoBox">
       <span>Kullanıcı Soyadı:</span>
       <span>${user.userSurname} </span>
     </div>
     <div class="infoBox">
       <span>Cinsiyet:</span>
       <span>${user.userGender} </span>
     </div>
     <div class="infoBox">
       <span>Kullanıcı Yaşadığı Yer:</span>
       <span>${user.userLocation} </span>
     </div>
     <div class="infoBox">
       <span>Kullanıcı Yaş:</span>
       <span>${user.userAge} </span>
     </div>
   </div>
     
     `;
    userCard.classList.add("card");

    userList.appendChild(userCard);
  });
}

showUsers();

addButton.addEventListener("click", () => {
  if (nameInput.value == "") {
    alert("Kullanıcının adını gir");
  } else if (surnameInput.value == "") {
    alert("kullanıcı soyadını gir");
  } else if (genderInput.value == "") {
    alert("kullanıcının cinsiyetini gir");
  } else if (locationInput.value == "") {
    alert("kullanıcının şehrini gir");
  } else if (ageInput.value == "") {
    alert("kullanıcının yasını gir");
  } else {
    addNewUser();
  }

  //addNewUser();
  showUsers();
  //console.log(users);
});

user.addEventListener("click", () => {
  userForm.classList.toggle("openAddUser");
});

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
});
