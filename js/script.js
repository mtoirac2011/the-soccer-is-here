// Script for Home page
// function changeImage() {
//     document.getElementById("image").src = "img/soccerball.png";
// }
// setTimeout(changeImage(), 4000);

// Script for VIDEO
// =================

var miVideo = document.getElementById("video1");

function playPause() {
    if (miVideo.paused)
        miVideo.play();
    else
        miVideo.pause();
}

function stop() {
    miVideo.pause();
    miVideo.currentTime = 0;
}

function skip(value) {
    miVideo.currentTime += value;
}

// Script for players
let players = [
    "Lionel Messi", "Cristiano Ronaldo", "Neymar Jr.", "Robert Lewandowski",
    "Kylian Mbappe", "Kevin De Bruyne", "Virgil van Dijk", "Sadio Mané", 
    "Riyad Mahrez", "Erling Haaland"
];
let descrip = [
    "La Pulga Atómica (the Atomic Flea) has remained at the top of this list for over a decade now, and at 33, he’s still going strong. In fact, sensational stats and seasons have become second nature for him. Despite missing Barcelona’s first four games of the season due to injury, Messi is likely to win La Liga top scorer for the seventh time in his career with 22 goals so far and three games left to play. Along with those 22 goals, Messi has 20 assists in the league so far, beating his own personal record of 18 in a season and totaling 42 goal contributions in 30 league games. For any player, that’s the season of a lifetime. For Lionel Messi, that’s business as usual. In all competitions, Messi has 27 goals and 24 assists and is hoping to lead Barcelona to its first Champions League title since its treble win in the 2014-15 season. Messi is also the most recent player to win the Ballon d’Or, just barely beating out Liverpool defender Virgil van Dijk by seven points.",
    "As long as he’s around, he’ll be up near the top of the list. Cristiano Ronaldo is 35 years old, playing in Italy for only his second year, and still racking up absurd numbers in front of goal. Ronaldo has contributed to half of all of Juventus’ goals this season with 28 goals and 6 assists in the 28 games he’s played in the league and a total of 39 goal contributions in all competitions. He is currently challenging Lazio’s Ciro Immobile for the Capocannoniere (Serie A top scorer) and has been Juventus’ star player in what looks to be a title-winning campaign. Having won the Champions League with both of his former clubs, Ronaldo will want to complete his personal treble this season when the tournament restarts in August. What’s even more impressive is that Ronaldo is managing a goal a game in the league with less help from his teammates than he’s had in the past.",
    "Despite struggling with injury this season as well as not having played since early March due to Ligue 1’s decision to end the season early rather than restart play after lockdown, Neymar Jr. comes in third on my list. This should indicate just how incredible the Brazilian winger is when fit. In only 15 league games this season, Neymar recorded 13 goals and 6 assists. In 22 games in all competitions, those numbers increase to 18 goals and 10 assists. In his three seasons at Paris Saint-Germain, Neymar has not managed anything close to a fully fit season, but his world-class ability is as clear as day whenever he’s on the field. The only reasons that Neymar hasn’t won the Ballon d’Or are Messi, Ronaldo, and injuries. Without those three factors, Neymar would easily be a contender, if not a shoo-in, for the best player of all time.",
    "Bayern Munich’s world-class frontman just finished his sixth season with the club and his tenth season in the Bundesliga altogether, helping Bayern win its 8th title in a row. And at 31, Robert Lewandowski had his best season yet. Lewandowski secured Bundesliga’s top scorer award for the fifth time with 34 goals in the 31 matches he appeared in. He only failed to score in six games the entire season, recording seven braces and one hat trick. He also managed 51 goals and 6 assists in 43 games in all competitions, including two in the DFB Pokal final that Bayern recently won. Those numbers will likely increase in August as well when the Champions League resumes in Lisbon, as Lewandowski has scored in every Champions League game he’s featured in so far this season.",
    "Mbappe only falls short of Lewandowski on my list due to his youth and the fact that he hasn’t played since March. However, in a few years, the French 21-year-old could very well be at the top of this list, for his stats and ability are absolutely and objectively outstanding. Already a World Cup winner with a goal in the final and a four-time Ligue 1 winner, Mbappé’s trophy cabinet will only continue to expand. Slightly hampered by injury this season, Mbappé still scored 18 goals and made 7 assists in the 20 league games he played. In all competitions, he managed 47 combined goals and assists in 33 games. These are Messi numbers. These are Ronaldo numbers. These are Mbappé’s numbers.",
    "Another player who could easily end up challenging for the Ballon d’Or at the end of the year is Manchester City’s Kevin De Bruyne. The Belgian midfielder is absolutely world-class. He is easily the best midfielder in England, and his vision and passing ability are off the charts. De Bruyne has 11 goals and 18 assists in the Premier League this season, and with four games left to play, could very well be the player to finally break Thierry Henry’s Premier League record of 20 assists in a season. Having conceded the Premier League title to Liverpool this season, Pep Guardiola’s dominant Manchester City team will want to prove itself when the Champions League resumes in August, and Kevin De Bruyne will be a major factor in whether or not City can finally lift the trophy that the team has so coveted.",
    "The Dutch defender signed for Liverpool from Southampton in January of 2018 and has since become one of the best Premier League defenders of all time. One of the most important players in an excellent championship-winning side, Virgil van Dijk finished just behind Lionel Messi in the 2019 Ballon d’Or rankings, almost becoming the first defender since Italian center-back Fabio Cannavaro in 2006 to win the award. He did, however, win UEFA Men’s Player of the Year. In the Premier League last season, van Dijk conceded only 22 goals, kept 20 clean sheets, had a 74% tackle success rate, and recorded the second-most number of passes, earning himself the title of Premier League Player of the Year. Liverpool only lost once in the league and ended the season in second with 97 points, one point behind the team that beat them, Manchester City.",
    "Besides the team’s defensive strength, Liverpool has had one of the most threatening attacks in the world in the past few years, and Sadio Mané has been a key reason why. The Senegalese winger has been exceptional for the current English and European champions, recording 16 goals and 9 assists so far this season and winning the Premier League Golden Boot with 22 goals in the last alongside Pierre-Emerick Aubameyang and teammate Mo Salah. Despite Mo Salah’s record-breaking goalscoring campaign two seasons ago or Roberto Firmino’s technical superiority over both wingers, Sadio Mané stands out. His pace, finishing, and control are all world-class, and he has scored some incredible goals for Liverpool in the past two seasons, including a brilliant chip against Bayern Munich in the Champions League last year. Mané finished fourth for the 2019 Ballon d’Or and looks to be a challenger for the award again in 2020.",
    "Similar to Liverpool, it is incredibly difficult to pick out one attacking player in a side with so much talent up front and on the wings. What makes this even more difficult is that Manchester City’s squad depth forces some of the team’s best players to sit on the bench. I knew I had to include at least one Manchester City attacker, however, and between the likes of Bernardo Silva, Sergio Agüero, Raheem Sterling, Gabriel Jesus, and even the injured Leroy Sané, I decided on the former Leicester City player and Algerian international. Riyad Mahrez has 10 goals and 12 assists in the Premier League this season. While he is actually only the fifth Man City player to reach double digits in goals and assists this season (a Premier League record, by the way), he has only started 60% of City’s matches and was benched for five of them. Mahrez’s control and first touch are absolutely extraordinary, and he would arguably make it into the starting XI of any other team in the world. ",
    "After only one season in the limelight, Erling Haaland is arguably the best teenage soccer player in the world and has quickly become of one the best strikers in the game. Although he is only 19, his numbers are too ridiculous for him to not be one of the best players in the world right now. Haaland started this season with RB Salzburg in Austria, netting 16 goals and managing 6 assists in only 14 league games as well as recording 8 goals and 1 assist in the Champions League group stage. The Norwegian forward then made the switch to Borussia Dortmund midseason and continued his incredible form with 13 goals and 3 assists in 15 Bundesliga matches. In total, Haaland has 44 goals and 10 assists this season in 40 games, and it is these astonishing numbers that bring the youngster into the top 10 right now."
];

var num = 1;

function fnext(){
    const imagenLeft = document.getElementById("img-left");
    const imagenRight = document.getElementById("img-right");
    const playerName = document.getElementById("player-name");
    const playerDesc = document.getElementById("descrip");
    num++;
    if (num > 10){
        num = 1;
    }
    playerName.innerHTML = players[num-1];
    playerDesc.innerHTML = descrip[num-1];
    imagenLeft.src = "../img/players/"+"player"+num+".jpg";
    imagenRight.src = "../img/players/"+"club"+num+".jpg";
}

function fprev(){
    const imagenLeft = document.getElementById("img-left");
    const imagenRight = document.getElementById("img-right");
    const playerName = document.getElementById("player-name");
    const playerDesc = document.getElementById("descrip");
    num--;
    if (num < 1){
        num = 10;
    }
    playerName.innerHTML = players[num-1];
    playerDesc.innerHTML = descrip[num-1];
    imagenLeft.src = "../img/players/"+"player"+num+".jpg";
    imagenRight.src = "../img/players/"+"club"+num+".jpg";
}
