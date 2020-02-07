let table = []
let table2 = []
let scores = JSON.parse(localStorage.getItem('rankingEasy'))
let scores2 = JSON.parse(localStorage.getItem('rankingHard'))

//ranking Easy
for (const score of scores) {
     
    table += `

        <tr>

            <td>${score.player}</td> 

            <td>${score.time}</td>                        

        </tr> <br>

    `

}
scores.sort(function(a, b){return b.time - a.time})

//ranking Hard
for (const score of scores2) {
    table2 += `

    <tr>

        <td>${score.player}</td> 

        <td>${score.time}</td>                        

    </tr> <br>

`

}
scores2.sort(function(a, b){return b.time - a.time})
// Injetar tabela 
document.querySelector("#divTable").innerHTML = table
document.querySelector("#divTable2").innerHTML = table2


 
