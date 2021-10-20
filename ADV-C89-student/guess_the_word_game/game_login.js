player_1 = ""
player_2 = ""

function add_user(){
    player_1 = document.getElementById("player1_name_input").value
    player_2 = document.getElementById("player2_name_input").value
    localStorage.setItem("name1", player_1)
    localStorage.setItem("name2", player_2)
    window.location = "game_page.html"
}