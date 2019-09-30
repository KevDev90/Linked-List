class Bookmark {
  constructor(title, url) {
    this.title = title;
    this.id = Date.now();
    this.read = false;
    this.url = url;
  }
  toggleRead() {
    this.read = !this.read;
  }

  saveToLocal(bookmarks) {
    // turn data into a string, save the string to local, when the card is created.
    console.log(this.id);
    localStorage.setItem(JSON.stringify(this.id), JSON.stringify(this));
  }

  //when read is changed, change that on local storage as well
  //localStorage.setItem(id,NEWINSTANCE)
  //localRead()

  removeFromLocal(id) {
    localStorage.removeItem(id);





    // var localBookmarks =JSON.parse(localStorage.getItem('bookmarks'));
    // var item =localBookmarks.find(function(lB){
    //   console.log(lB.id);
    //   console.log(Number(id));
    // return lB.id=== Number(id);
    //
    // });
    // console.log(localBookmarks, item, '1')

  }
}
