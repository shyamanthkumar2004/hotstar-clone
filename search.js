function search1() {
    let v=document.getElementById("sea").value;
    if(event.keyCode == 13) {
        var e1=document.getElementById("searchdiv");
        var e2=document.getElementById("moviediv");
        var e3=document.getElementById("tit");
        if(v.length===0){
            e2.style.visibility="hidden";
            e3.style.visibility="visible";
            e1.style.visibility="visible";
        }
        else{
        e1.style.visibility="hidden";
        e3.style.visibility="hidden";
        let url="https://www.omdbapi.com/?t=${v}&apikey=${key}";
        fetch(url)
            .then((resp)=>resp.json())
            .then((data)=>{
                if(data.Response=='True'){
                console.log(data);
                    e2.innerHTML=`
                    <div class="info">
                        <img src=${data.Poster} class="poster">
                        <div class="motitle">
                            <h2 id="title">${data.Title}</h2>
                            <img id="simg" src="data:image/jpeg;base64,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"></img>
                            <h4 id="imdb">${data.imdbRating}</h4>
                        </div>
                    </div>
                    `;
                }
                else{
                    e2.innerHTML=`<h3 id="error">${data.Error}</h3>`
                }
            });
            e2.style.display="block";
        }
    }
}
var e1=document.getElementById("searchdiv");
var e3=document.getElementById("trailerdiv");
var videos=["https://www.youtube.com/embed/Yxm9BUCgof4","https://www.youtube.com/embed/k5lFv_h7Rnw","https://www.youtube.com/embed/bUR_FKt7Iso",
"https://www.youtube.com/embed/cW2RWZCUot4","https://www.youtube.com/embed/bk_5n4mS-lk","https://www.youtube.com/embed/XkCFtP_52vM",
"https://www.youtube.com/embed/3L5X46j2t90","https://www.youtube.com/embed/oBlxdr1KbEA"];
function playtrailer(col){
    e1.style.visibility="hidden";
    document.getElementById("td").src=videos[col.id-1];
    e3.style.display="block";
}
