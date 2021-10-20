player_1 = localStorage.getItem("name1")
player_2 = localStorage.getItem("name2")

player1_score = 0
player2_score = 0

document.getElementById("player1_name").innerHTML = player_1 + " : "
document.getElementById("player2_name").innerHTML = player_2 + " : "

document.getElementById("player1_score").innerHTML = player1_score
document.getElementById("player2_score").innerHTML = player2_score

document.getElementById("player_question").innerHTML = "Question turn: " + player_1
document.getElementById("player_answer").innerHTML = "Answer turn: " + player_2

function send(){
    get_word = document.getElementById("word").value
    word = get_word.toLowerCase()

    char1 = word.charAt(1)

    length_divide = Math.floor(word.length/2)
    char2 = word.charAt(length_divide)

    last = word.length - 1
    char3 = word.charAt(last)

    remove_char1 = word.replace(char1, "_")
    remove_char2 = remove_char1.replace(char2, "_")
    remove_char3 = remove_char2.replace(char3, "_")

    question_word = "<h4 id = 'word_display'> Q.  " + remove_char3 + "</h4>"
    input_box = "<br> Answer : <input type = 'text' id = 'input_check_box'> "
    check_button = "<br><br> <button class = 'btn btn-info' onclick = 'check()'>CHECK </button> "

    row = question_word + input_box + check_button ; 
    
    document.getElementById("output").innerHTML = row; 
    document.getElementById("word").value = ""
}

question_turn = "player1"
answer_turn = "player2"

function check(){
    get_answer = document.getElementById("input_check_box").value
    answer = get_answer.toLowerCase()

    if (answer == word){

    

    if (answer_turn == "player1"){
        player1_score = player1_score + 1
        document.getElementById("player1_score").innerHTML = player1_score
    }
    else {
        player2_score = player2_score + 1
        document.getElementById("player2_score").innerHTML = player2_score
    }
    }
    if (question_turn == "player1"){
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "question turn is "  + player_2

    }
    else {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "question turn is "  + player_1

    }

    if (answer_turn == "player1"){
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "answer turn is "  + player_2

    }
    else {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "answer turn is "  + player_1

    }

    document.getElementById("output").innerHTML = " "
}

