window.addEventListener("load",inicio);
            function inicio(){
                document.getElementById("dragon").addEventListener("click",mostrarBall);
                document.getElementById("kimetsuYaiba").addEventListener("click",mostrarKimetsu);
                document.getElementById("black").addEventListener("click",mostrarBlack);
                document.getElementById("all").addEventListener("click",mostrarTodo);
            }
  function mostrarBall(){
    document.getElementById("kimetsu").style.display="none";
    document.getElementById("kimetsu2").style.display="none";
    document.getElementById("blackclover").style.display="none";
    document.getElementById("blackclover2").style.display="none";
    document.getElementById("dragonball").style.display="flex";
    document.getElementById("dragonball2").style.display="flex";
    
  }
  function mostrarKimetsu(){
    document.getElementById("kimetsu").style.display="flex";
    document.getElementById("kimetsu2").style.display="flex";
    document.getElementById("blackclover").style.display="none";
    document.getElementById("blackclover2").style.display="none";
    document.getElementById("dragonball").style.display="none";
    document.getElementById("dragonball2").style.display="none";
    
  }
  function mostrarBlack(){
    document.getElementById("kimetsu").style.display="none";
    document.getElementById("kimetsu2").style.display="none";
    document.getElementById("blackclover").style.display="flex";
    document.getElementById("blackclover2").style.display="flex";
    document.getElementById("dragonball").style.display="none";
    document.getElementById("dragonball2").style.display="none";
  }
  function mostrarTodo(){
    document.getElementById("kimetsu").style.display="flex";
    document.getElementById("kimetsu2").style.display="flex";
    document.getElementById("blackclover").style.display="flex";
    document.getElementById("blackclover2").style.display="flex";
    document.getElementById("dragonball").style.display="flex";
    document.getElementById("dragonball2").style.display="flex";
  }