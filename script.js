let playerA="20200629132107.png";
let playerB="20200725173235.png";
let playerC="20200629135836.png";
let enemyA0="20200629132111.png";
let enemyB0="20200701092537.png";
let enemyA1="20200727170536.png";
let enemyB1="20200727170540.png";
let enemyA2="20200727170544.png";
let enemyB2="20200727170548.png";
let enemyA3="20200727170551.png";
let enemyB3="20200727170557.png";
let enemyA4="20200727175726.png";
let enemyB4="20200727175730.png";
let enemyA5="20200727175734.png";
let enemyB5="20200727175737.png";
let enemyA6="20200727175942.png";
let enemyB6="20200727175946.png";
let enemyA7="20200727175950.png";
let enemyB7="20200727175954.png";
let enemyA8="20200727180103.png";
let enemyB8="20200727180107.png";
let enemyA9="20200727180116.png";
let enemyB9="20200727180119.png";
let flag=true;
let stop=1;
//プレイヤーのid
let plyImg=document.getElementById("plyImg");
let plySt=new Array(8);
plySt=["plySt0","plySt1","plySt2","plySt3","plySt4","plySt5","plySt6",plySt7];
for(let i=0;i<6;i++){
plySt[i]=document.getElementById("plySt[i]");
}
//プレ ステータス
let plyLv=1;
let plyHp=6;
let plyHpMax=6;
let plyMp=5;
let plyMpMax=5;
let plyAtt=1;
let plyHeal=1;
let plyExp=0;
let plyExpNext=5;
let plyExpNeed=[5,15,45,65,90,130,165,200,250];
//敵のid
let eneImg=document.getElementById("eneImg");
let eneSt=new Array(7);
eneSt=["eneSt0","eneSt1","eneSt2","eneSt3","eneSt4","eneSt5","eneSt6"];
for(let i=0;i<6;i++){
eneSt[i]=document.getElementById("eneSt[i]");

}
//敵 ステータス
let eneLv=1;
let eneHp=[10,20,35,50,70,90,115,135,160,250];
let eneHpMax=[10,20,35,50,70,90,115,135,160,250];
let eneAtt=[2,3,2,4,4,6,2,5,4,10];
let eneKill=[0,0,0,0,0,0,0,0,0,0];
let eneCnt=5;
let eneCntMax=[5,5,3,5,4,7,1,5,2,5];
let eneExp=[1,2,3,5,8,10,13,17,20,35];
let enename=["スライム","クロコウモリ","ペストネズミ","ソリッド","ポチ","ハチオニ","ユラユラ","タマネギゾンビ","スピリット","クマノブー"];
let enesrcA=[enemyA0,enemyA1,enemyA2,enemyA3,enemyA4,enemyA5,enemyA6,enemyA7,enemyA8,enemyA9];
enesrcB=[enemyB0,enemyB1,enemyB2,enemyB3,enemyB4,enemyB5,enemyB6,enemyB7,enemyB8,enemyB9];

//せつめい
let setu=document.getElementById("setu");
setu.addEventListener("click",()=>{
 console.log("せつめい");
 if(flag){
alert("このゲームはクリックRPGです。");
 alert("モンスターをクリックすると攻撃力分のダメージを与えます。");
 alert("しかし、数秒間に1回モンスターの攻撃力分ダメージを受けます。");
 alert("その時は自分をクリックすることで回復魔法の値分、回復できます。");
 alert("強撃は自分のMPを5消費して、相手に自分の攻撃力の2倍のダメージを与えますが、自分の攻撃力の2分の1のダメージを受けます。");
 alert("強撃では大きなダメージを与えられますが、モンスターにトドメはさせません。HPが0以下になったらモンスターをクリックしてトドメを刺しましょう。");
 alert("次のモンスターへをクリックすると今より強いモンスターに、逃げるをクリックすると弱いモンスターと戦えます。");
 alert("これらの事を駆使してレベル10のモンスターを倒せばゲームクリアです。");
 alert("それでは、がんばってください！");
 
 }
});

//プレイヤーのイベント
let plyname=prompt("あなたの名前は？");
plySt0.textContent=plyname;
plyImg.addEventListener("mousedown",()=>{
 if(flag){
 console.log("plyle md");
 plyImg.src=playerC;
 }
});
plyImg.addEventListener("mouseup",()=>{
 if(flag){
 console.log("plyle up");
 plyImg.src=playerA;
 plyHp+=plyHeal;
 if(plyHp>plyHpMax){
  plyHp=plyHpMax;
  }
 plySt2.textContent="HP:"+plyHp;
 }
});
//次のモンスターor逃げる
let right=document.getElementById("right");
let left=document.getElementById("left");
right.addEventListener("click",()=>{
 console.log("つぎ");
 if(eneLv<10){
 eneLv++;
 if(flag){
 console.log("れべるだよ"+eneLv);
 eneSt1.textContent="レベル:"+eneLv;
 eneSt0.textContent=enename[eneLv-1];
 eneImg.src=enesrcA[eneLv-1];
 eneSt2.textContent="HP:"+eneHp[eneLv-1];
 eneSt3.textContent="攻撃力:"+eneAtt[eneLv-1];
 eneSt4.textContent="倒した回数"+eneKill[eneLv-1];
 }
}
})
left.addEventListener("click",()=>{
 console.log("にげる");
 if(eneLv>1){
 eneLv--;
  if(flag){
 console.log("れべるだよ"+eneLv);
 eneSt1.textContent="レベル:"+eneLv;
 eneSt0.textContent=enename[eneLv-1];
 eneImg.src=enesrcA[eneLv-1];
 eneSt2.textContent="HP:"+eneHp[eneLv-1];
 eneSt3.textContent="攻撃力:"+eneAtt[eneLv-1];
 eneSt4.textContent="倒した回数"+eneKill[eneLv-1];


}
 }
})

//ぱわーあたっく
let patk=document.getElementById("patk");
patk.addEventListener("mousedown",()=>{
 if(flag&&plyMp>4){
 eneImg.src=enesrcB[eneLv-1];
 plyImg.src=playerB;
 }
});
patk.addEventListener("mouseup",()=>{
 if(flag&&plyMp>4){
  eneImg.src=enesrcA[eneLv-1];
  plyImg.src=playerA;
  plyMp-=5;
  eneHp[eneLv-1]-=plyAtt*2;
  plyHp-=Math.floor(plyAtt*0.5);
  eneSt2.textContent="HP:"+eneHp[eneLv-1];
  plySt2.textContent="HP:"+plyHp;
  plySt7.textContent="MP:"+plyMp;
  }
});


//エネミーのイベント
eneSt0.textContent=enename[eneLv-1];
eneImg.addEventListener("mousedown",()=>{
 if(flag){
 console.log("enele md");
 eneImg.src=enesrcB[eneLv-1];
 }
});
eneImg.addEventListener("mouseup",()=>{
 if(flag){
  console.log("enele up");
  eneImg.src=enesrcA[eneLv-1];
  if(eneHp[eneLv-1]>0){
   eneHp[eneLv-1]-=plyAtt;
   if(plyMp<plyMpMax){
    plyMp++;
   }
  plySt7.textContent="MP:"+plyMp;
  }else{
   //倒した処理
   eneHp[eneLv-1]=eneHpMax[eneLv-1];
   eneKill[eneLv-1]++;
   eneSt4.textContent="倒した回数"+eneKill[eneLv-1];
   console.log("あああいいいううう"+eneKill[9]);
//ゲームクリア
if(eneKill[9]==1){
flag=false;
eneCnt=-10;
stop=0;
plyImg.src="img/20200727212245.png"
playerB="img/20200727212245.png";
right.textContent="続ける"
right.addEventListener("click",()=>{
 flag=true;
stop=1;
playerB="img/20200725173235.png";
 right.textContent="次のモンスター"
});

}

  //経験値しょり
   plyExp +=eneExp[eneLv-1];
   plySt5.textContent="経験値:"+plyExp;
   plyExpNext-=eneExp[eneLv-1];
   //レベルupしょり
   if(plyExpNext<1){
    plyExpNext=plyExpNeed[plyLv]
    plyLv++;
    plySt1.textContent="レベル:"+plyLv;
    plyHpMax=plyLv*3+6;
    plyHp=plyHpMax;
    plySt2.textContent="HP:"+plyHp;
    plyMpMax=Math.floor(plyLv*1.5+5);
    plyMp=plyMpMax;
    plySt7.textContent="MP:"+plyMp;
    plyAtt++;
    plySt3.textContent="攻撃力:"+plyAtt;
    plyHeal=Math.floor(plyLv*0.4+1);
    plySt4.textContent="回復魔法:"+plyHeal;
   }
   plySt6.textContent="次のレベルまでの経験値"+plyExpNext+"ポイント";
  }
  eneSt2.textContent="HP:"+eneHp[eneLv-1];
 }
});

//敵が時間ごとに攻撃
let eneSec=document.getElementById("eneSec")
let loop=setInterval(()=>{
 eneCnt--;
 if(eneCnt>0&&flag){
  eneSec.textContent="モンスターの攻撃まで"+eneCnt+"秒";
}else{
  plyImg.src=playerB;
  plyHp-=eneAtt[eneLv-1]*stop;
  if(plyHp>0){
   plySt2.textContent="HP:"+plyHp;
  eneSec.textContent="モンスターの攻撃まで"+eneCnt+"秒";
   }else{
    plyHp=0;
    clearInterval(loop);
    plySt2.textContent="HP:"+plyHp;
    plyImg.src=playerB;
    eneSec.textContent="ゲームオーバー";
    flag=false;
   }
  
 setTimeout(()=>{
  if(flag){
  eneCnt=eneCntMax[eneLv-1];
  plyImg.src=playerA;
  } 
},500)


 }
},1000);

