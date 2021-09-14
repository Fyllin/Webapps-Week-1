if (document.readyState !== "loading") {
  executeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    executeCode();
  });
}

function executeCode() {
  const addCommentButton = document.getElementById("add-comment");
  const removeCommentsButton = document.getElementById("remove-comments");

  addCommentButton.addEventListener("click", function () {
    console.log("jou");

    var entry = document.createElement("li");

    entry.appendChild(
      document.createTextNode(document.getElementById("textarea").value)
    );

    document.getElementById("commentlist").appendChild(entry);
  });

  removeCommentsButton.addEventListener("click", function () {
    var askUser = window.confirm(
      "ARE YOU SERIOUSLY SO SURE YOU WANT TO DELETE ALL OF THE COMMENTS IN THE WHOLE LIST THAT IS ON THE PAGE RIGHT NOW???????!!?!?!?!?!?!?"
    );

    if (askUser === true) {
      document.getElementById("commentlist").innerHTML = "";
    }

    console.log("jou");
  });
}
