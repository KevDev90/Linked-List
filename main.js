var bookmarks = [];
var enterButton = document.querySelector('.enter-button');
var websiteTitle = document.querySelector('.website-title');
var websiteURL = document.querySelector('.website-URL');
var cardDisplay = document.querySelector('.card-display');


enterButton.addEventListener('click', addNewBookmark);

cardDisplay.addEventListener('click', removeCardObj);

websiteTitle.addEventListener('keyup',toggleEnterButton());

websiteURL.addEventListener('keyup', toggleEnterButton());


function addNewBookmark() {
  console.log('mic-check');
  var newBookmark = makeInstance();
  createCard(newBookmark,cardDisplay);
  newBookmark.saveToLocal(bookmarks);
 }



 function noTitleError() {
   console.log('empty-fields');
 }

 function makeInstance() {
   var bookmark = new Bookmark(websiteTitle.value,websiteURL.value);
   bookmarks.push(bookmark);
   return bookmark;
   // create instance of the class, push into array of bookmarks,
 }

 function createCard(newBookmark,cardDisplay) {
   cardDisplay.insertAdjacentHTML('beforeend', `<div id= "${newBookmark.id}" class= "card-div">
     <h3 class= "web-card-title">${newBookmark.title}</h3>
     <hr>
     <p class="web-card-url">${newBookmark.url}</p>
     <hr>
     <button class="read-card" type="button"onclick= "readButton(event)">Read</button>
     <button class="delete-card" type="button" onclick= "deleteCard(event)">Delete</button>
     </div>`);

   }

   function toggleEnterButton() {
     if(websiteTitle==="" && websiteURL==="") {
       enterButton.disabled = true;
       noTitleError();
     } else {
       enterButton.disabled = false;
     }
    }

    function deleteCard(event) {
  var hiddenId = event.target.closest('.card-div').id;
  var deleteBtn = document.querySelector('.delete-card');
    removeCardObj(deleteBtn, hiddenId);
    event.target.closest('.card-div').remove();
    var instance = bookmarks.find(function(bookmark){
      return bookmark.id === Number(hiddenId);
    })
    instance.removeFromLocal(hiddenId);
    console.log(instance);

}
//check this later
function removeCardObj(array, id) {
  for (var i = 0; i < array.length; i++)
    if (array[i].id === Number(id)) {
        array.splice(i, 1);
        break;
    }
}

function noTitleError() {
  document.querySelector('.error-message').style.visibility = 'visible';
  document.querySelector('.error-message').innerHTML = "<img class='error' src='error-icon.svg'> *Please enter a Title and URL*";

}

function submitHandler() {
  var bSubmitGuess = true;
  var websiteTitle
  var websiteURL
  if (websitetitle.value === '' || websiteURL.value === '') {
    noTitleError();
    bSubmitGuess = false;
  } else {
    document.querySelector('.error-message').style.visibility = 'hidden';
    challenger1NameInput.style.border = '1px solid grey';
}
}

function readButton(event) {
  console.log(event);
  var hiddenId = event.target.closest('.card-div').id
  var readButton = event.target
  var instance = bookmarks.find(function(bookmark){
    return bookmark.id === Number(hiddenId);
  })
  instance.toggleRead();
  console.log(instance);
  if (!instance.read) {
    event.target.classList.remove('read');
  } else {
    event.target.classList.add('read');
  }

}



//
