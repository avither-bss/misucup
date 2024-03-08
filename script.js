var questions = [
    {
      question: "Siapakah Presiden Indonesia yang pertama?",
      choices: ["Soekarno", "Soeharto", "Joko Widodo"],
      answer: "Soekarno"
    },
    {
      question: "Apa lambang negara Indonesia?",
      choices: ["Garuda Pancasila", "Burung Merpati", "Kepiting"],
      answer: "Garuda Pancasila"
    },
    {
      question: "Apakah ibu kota Indonesia?",
      choices: ["Jakarta", "Bandung", "Surabaya"],
      answer: "Jakarta"
    },
    {
      question: "Apakah ibukota Australia?",
      choices: ["Canberra", "Sydney", "Melbourne"],
      answer: "Canberra"
    },
    {
      question: "Apa lambang negara Australia?",
      choices: ["Kanguru", "Koala", "Wombat"],
      answer: "Kanguru"
    },
    {
      question: "Siapakah perdana menteri Australia?",
      choices: ["Scott Morrison", "Malcolm Turnbull", "Tony Abbott"],
      answer: "Scott Morrison"
    },
    {
      question: "Siapa presiden pertama Amerika Serikat?",
      choices: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"],
      answer: "George Washington"
    },
    {
      question: "Apa ibukota Amerika Serikat?",
      choices: ["Washington, D.C.", "New York City", "Los Angeles"],
      answer: "Washington, D.C."
    },
    {
      question: "Apakah nama sungai terpanjang di dunia?",
      choices: ["Amazon", "Nile", "Yangtze"],
      answer: "Amazon"
    },
    {
      question: "Berapa jumlah provinsi di Indonesia?",
      choices: ["34", "33", "35"],
      answer: "34"
    }
  ];
  
  var currentQuestion = 0;
  var score = 0;
  var timeLimit = 10; // Waktu terbatas dalam detik
  var timer; // Variabel untuk menyimpan timer
  
  function displayQuestion() {
    var q = questions[currentQuestion];
    document.getElementById("question").innerHTML = q.question;
  
    var choicesHtml = "";
    for (var i = 0; i < q.choices.length; i++) {
      choicesHtml += '<button onclick="checkAnswer(\'' + q.choices[i] + '\')" id="choice_' + i + '">' + q.choices[i] + '</button>';
    }
    document.getElementById("choices").innerHTML = choicesHtml;
    startTimer(); // Mulai timer untuk pertanyaan saat ini
  }
  
  function checkAnswer(choice) {
    var q = questions[currentQuestion];
    if (choice === q.answer) {
      score++;
      document.getElementById("result").innerHTML = "Benar!";
    } else {
      document.getElementById("result").innerHTML = "Salah!";
    }
  
    // Menonaktifkan tombol pilihan setelah menjawab
    var choiceButtons = document.querySelectorAll("#choices button");
    choiceButtons.forEach(function(button) {
      button.disabled = true;
    });
  
    clearInterval(timer); // Menghentikan timer setelah menjawab
    setTimeout(nextQuestion, 2000); // Tunggu 2 detik sebelum lanjut ke pertanyaan berikutnya
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
      document.getElementById("result").innerHTML = "";
      document.getElementById("nextQuestion").style.display = "none"; // Sembunyikan tombol Pertanyaan Selanjutnya
    } else {
      endGame();
    }
  }
  
  function startTimer() {
    var timeLeft = timeLimit;
    document.getElementById("timer").innerText = "Waktu Tersisa: " + timeLeft + " detik";
    timer = setInterval(function() {
      timeLeft--;
      document.getElementById("timer").innerText = "Waktu Tersisa: " + timeLeft + " detik";
      if (timeLeft <= 0) {
        clearInterval(timer);
        timeUp();
      }
    }, 1000);
  }
  
  function timeUp() {
    document.getElementById("result").innerHTML = "Waktu Habis!";
    disableButtons(); // Menonaktifkan tombol setelah waktu habis
    setTimeout(nextQuestion, 2000); // Tunggu 2 detik sebelum lanjut ke pertanyaan berikutnya
  }
  
  function disableButtons() {
    var choiceButtons = document.querySelectorAll("#choices button");
    choiceButtons.forEach(function(button) {
    button.disabled = true;
    });
    }
  
    function endGame() {
    var percentage = (score / questions.length) * 100;
    document.getElementById("question").innerHTML = "Kuis Selesai!";
    document.getElementById("choices").innerHTML = "";
    document.getElementById("result").innerHTML = "Skor Anda: " + percentage.toFixed(2) + "%";
    document.getElementById("timer").innerText = "";
  
    // Menampilkan tombol Mulai Ulang
    document.getElementById("refresh").style.display = "block";
    }
  
    function refreshGame() {
    // Mengalihkan ulang halaman untuk memulai ulang permainan
    window.location.reload();
    }
  
    displayQuestion();