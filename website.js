document.addEventListener("DOMContentLoaded", function () {

  var loginBtn = document.querySelector("#login-part button");
  if (loginBtn) {
    loginBtn.onclick = function () {
      var email = document.querySelector("#login-part input[type='text']").value;
      var pass = document.querySelector("#login-part input[type='password']").value;
      if (email === "" || pass === "") {
        alert("Fill all fields");
        return;
      }
      alert("Login successful");
      window.location.href = "home.html";
    };
  }

  var signupBtn = document.querySelector("#signup-part button");
  if (signupBtn) {
    signupBtn.onclick = function () {
      var inputs = document.querySelectorAll("#signup-part input");
      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
          alert("Fill all fields");
          return;
        }
      }
      alert("Signup successful");
      window.location.href = "login.html";
    };
  }

  var sendPostBtn = document.getElementById("send-post-btn");
  if (sendPostBtn) {
    sendPostBtn.onclick = function () {
      var q = document.getElementById("inp-question").value;
      if (q === "") {
        alert("Enter question");
        return;
      }

      var feed = document.querySelector(".feed-area");
      var post = document.createElement("div");
      post.className = "post-card";
      post.innerHTML = "<h3>" + q + "</h3>";
      feed.insertBefore(post, feed.firstChild);
      window.location.hash = "";
    };
  }

  var createBtn = document.getElementById("create-grp-btn");
  if (createBtn) {
    createBtn.onclick = function () {
      var name = document.getElementById("grp-name").value;
      var img = document.getElementById("grp-img").value;

      if (name === "") {
        alert("Enter group name");
        return;
      }

      var grid = document.querySelector(".grid-container");
      var card = document.createElement("div");
      card.className = "group-card";

      var image = document.createElement("img");
      image.src = img;

      var h4 = document.createElement("h4");
      h4.innerHTML = name;

      card.appendChild(image);
      card.appendChild(h4);
      grid.appendChild(card);

      document.getElementById("grp-name").value = "";
      document.getElementById("grp-img").value = "";
      window.location.hash = "";
    };
  }

  var likes = document.querySelectorAll(".like-btn");
  for (var i = 0; i < likes.length; i++) {
    likes[i].onclick = function () {
      var count = this.querySelector(".count");
      count.innerHTML = parseInt(count.innerHTML) + 1;
    };
  }

  var answerBtns = document.querySelectorAll(".post-answer-btn");
  for (var j = 0; j < answerBtns.length; j++) {
    answerBtns[j].onclick = function () {
      var area = this.parentElement;
      var textarea = area.querySelector("textarea");
      if (textarea.value === "") return;

      var list = area.querySelector(".answers-list");
      var p = document.createElement("p");
      p.innerHTML = "• " + textarea.value;
      list.appendChild(p);
      textarea.value = "";

      var card = area.parentElement;
      var info = card.querySelector("p");
      var num = parseInt(info.innerHTML);
      info.innerHTML = (num + 1) + " Answers";
    };
  }

  var askBtn = document.getElementById("qs-send");
  if (askBtn) {
    askBtn.onclick = function () {
      var q = document.getElementById("qs-input").value;
      if (q === "") return;

      var feed = document.getElementById("questions-feed");
      var card = document.createElement("div");
      card.className = "question-card";
      card.innerHTML = "<h4>" + q + "</h4><p>0 Answers</p>";
      feed.insertBefore(card, feed.firstChild);
      window.location.hash = "";
    };
  }

  var searchInput = document.querySelector(".search-input");
  if (searchInput) {
    searchInput.oninput = function () {
      var val = this.value.toLowerCase();

      var posts = document.querySelectorAll(".post-card");
      for (var k = 0; k < posts.length; k++) {
        var text = posts[k].innerText.toLowerCase();
        posts[k].style.display = text.includes(val) ? "block" : "none";
      }

      var questions = document.querySelectorAll(".question-card");
      for (var l = 0; l < questions.length; l++) {
        var qText = questions[l].innerText.toLowerCase();
        questions[l].style.display = qText.includes(val) ? "block" : "none";
      }

      var groups = document.querySelectorAll(".group-card");
      for (var m = 0; m < groups.length; m++) {
        var gText = groups[m].innerText.toLowerCase();
        groups[m].style.display = gText.includes(val) ? "block" : "none";
      }
    };
  }

});
