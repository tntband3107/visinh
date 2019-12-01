var qa
var img 
var n
var dem = 0;
var list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
list= shuffle(list)
function run(){
    loadqa(list[dem])
}
function loadqa(number){
    img.src="img/"+number+".jpg"
    $.getJSON( "qa/"+number+".json", function( data ) {
        qa.innerText = data.q + "  ("+dem+"/20)"
        n = data.n
        let n_c = 0;
        let n_a = []
        n.forEach(element => {
            n_a[n_c] = n_c
            n_c++;
        });
        n_a = shuffle(n_a)
        var span_a = document.createElement("span")
            span_a.innerText = data.a
        var answer =  document.createElement("button")
        answer.classList.add("btn")
        answer.appendChild(span_a)
        answer.addEventListener ("click", function() {
            $("button").remove()
            dem++
            if (dem == 21){
                loadqa(22)
            }else{
                loadqa(list[dem]);
            }    
        });
        var random = Math.floor(Math.random() * (n_c +1));
        var count =0;
        n.forEach(ni => {
            if(count == random){
                document.body.appendChild(answer)
            }
            count++
            var span = document.createElement("span")
            span.innerText = n[n_a[count-1]]
            var button = document.createElement("button")
            button.classList.add("btn")
            button.appendChild(span)
            button.addEventListener ("click", function() {
                button.classList.add("red")
                });
            document.body.appendChild(button);
           if ((count==n_c) &&(count==random)){
                document.body.appendChild(answer)
           }
        });
      });
}
window.onload = function(){
    qa = $("#question").get(0)
    img = $("#img").get(0)
    this.run();
}
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
