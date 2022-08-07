//####-Elementaires-####//
const classementPHTML = document.getElementById('classementP');
const classementCHTML = document.getElementById('classementC');
const imageHTML = document.getElementById('image');
const fileLocation = '\Users/flori\Desktop\Images\One Piece\Char/';
const charHTML = document.getElementsByTagName('ul');
const classementPJHTML = document.getElementById('classementPJ');
const imageJHTML = document.getElementById('imageJ');


var listeOfPersos = [];
var listeOfPersosJ = []
var listeOfCrews = [];

//####-Fonctions-####//

function sortInArray(obj, list) {
    //Ajoute à la fin
    list.push(obj);

    //variables locales
    let precedentObj = list[list.indexOf(obj)-1];
    let objPosition = list.indexOf(obj);

    if ((objPosition > 0) && (precedentObj.power[0] < obj.power[0])) {

        while (precedentObj.power[0] < obj.power[0]) {

            objPosition = list.indexOf(obj);
            list.splice(objPosition, 1);
            list.splice(objPosition-1, 0, obj);

            if (list.indexOf(obj) > 0) {
                precedentObj = list[list.indexOf(obj)-1];
            }
            else {
                break
            }
        }
    }
}

function battles(bataille, which) {
    let team1Pow = 0;
    let team2Pow = 0;
    let team3Pow = 0;

    for(elt of bataille[0]) {
        let newP = document.createElement('p');
        newP.textContent = elt.name + ' ' + elt.power[which];
        newP.className = 'quadrillage';
        document.getElementById('team1').appendChild(newP);
        team1Pow += elt.power[which];
    }
    for(elt of bataille[1]) {
        let newP = document.createElement('p');
        newP.textContent = elt.name + ' ' + elt.power[which];
        newP.className = 'quadrillage';
        document.getElementById('team2').appendChild(newP);
        team2Pow += elt.power[which];
    }
    for(elt of bataille[2]) {
        let newP = document.createElement('p');
        newP.textContent = elt.name + ' ' + elt.power[which];
        newP.className = 'quadrillage';
        document.getElementById('team3').appendChild(newP);
        team3Pow += elt.power[which];
    }

    let pow1 = document.createElement('p');
    pow1.textContent = `Puissance totale: ${Math.round(team1Pow*100)/ 100}`;
    document.getElementById('team1').appendChild(pow1);

    let pow2 = document.createElement('p');
    pow2.textContent = `Puissance totale: ${Math.round(team2Pow*100)/ 100}`;
    document.getElementById('team2').appendChild(pow2);

    let pow3 = document.createElement('p');
    pow3.textContent = `Puissance totale: ${Math.round(team3Pow*100)/ 100}`;
    document.getElementById('team3').appendChild(pow3);
}


function sizOfBattle(battle, num) {
    let size = 0;
    for (let i = 0; i < 2; i++) {
        for (char of battle[i]) {
            size += char.power[num]
        }
    }
    return size;
}


function implement(list, where) {

    for (obj of list) {

        obj.num = list.indexOf(obj) + 1;
        obj.html.innerHTML = `<li>${obj.num}. ${obj.name}</li><li>${obj.power[0]} <button id="${obj.id}">Show</button></li>`;

        where.appendChild(obj.html);
    }
}


//####-Classes-####//
class Perso {
    constructor(ref, pow, classHTML, powa, powu, powe, powt, powm, powh, powp, powd, poww, powo) {
        this.name = ref.replace(/_/gi, ' ');
        this.power = [pow, powa, powu, powe, powt, powm, powh, powp, powd, poww, powo];
        this.html = document.createElement('ul');
        this.num;
        this.html.className = classHTML;
        this.id = ref;

        sortInArray(this, listeOfPersos);
    }  
}

class PersoJ {
    constructor(ref, pow, classHTML, powpb, powbt, powsc, powdu, powgw, powso, powsbr, powjl) {
        this.name = ref.replace(/_/gi, ' ');
        this.power = [pow, powpb, powbt, powsc, powdu, powgw, powso, powsbr, powjl];
        this.html = document.createElement('ul');
        this.html.className = classHTML;
        this.id = ref;

        sortInArray(this, listeOfPersosJ);
    }
}

class Crew {
    constructor(name, members, classHTML) {
        this.name = name;
        this.power = [0];
        this.html = document.createElement('ul');
        this.num;
        this.html.className = classHTML;
        this.id = name.replace(/ /gi, '_');

        for (var char of members) {
            this.power[0] += char.power[0];
        }

        sortInArray(this, listeOfCrews);
    }
}

//####-Objets persos-####//

//---A---//
//AB
var abdullah =                  new Perso('Abdullah',                   75,     'acp',      35,35,35,35,35,75,75,75,75,75);
var absalom =                   new Perso('Absalom',                    49,     'moria',    49,49,49,49,49,49,49,49,0,0);
//AC
var acilia =                    new Perso('Acilia',                     30,     'shinsekai', 30,30,30,30,30,30,30,30,30,30);
//AD
var adele =                     new Perso('Adele',                      1,      'hp',       1,1,1,1,1,1,1,1,1,1);
//AG
var aggie =                     new Perso('Aggie',                      57,      'bb',       57,57,57,57,57,57,57,57,57,57);
var agotogi =                   new Perso('Agotogi',                    3,      'paradise', 3,3,3,3,3,3,3,3,3,3);
var agsilly =                   new Perso('Agsilly',                    60,     'bb',       60,60,60,60,60,60,60,60,60,60);
var agyo =                      new Perso('Agyo',                       13,     'shinsekai', 13,13,13,13,13,13,13,13,13,13);
//AH
var ahhoDesunen =               new Perso('Ahho_Desunen_IX',            1,      'eb',       1,1,1,1,1,1,1,1,1,1);
var ahhoZurako =                new Perso('Ahho_Zurako',                0.2,    'eb',       0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2);
var ahiru =                     new Perso('Ahiru',                      57,     'r',        50,50,50,50,50,57,57,57,57,57);
//AI
var aisa =                      new Perso('Aisa',                       0.2,    'ciel',     0.2,0.2,0.2,0.2,0.2,1,1,1,1,1);
//AK
var akehende =                  new Perso('Akehende',                   59,     'marine',   59,59,59,59,59,59,59,59,59,59);
var akudaiK =                   new Perso('Akudai_Kanzaburo',           1,      'shinsekai',1,1,1,1,1,1,1,1,1,1);
var akumai =                    new Perso('Akumai',                     5,      'bw',       5,5,5,5,5,5,5,5,5,5);
//AL
var aladdin =                   new Perso('Aladdin',                    70,     'hp',       70,70,70,70,70,70,70,70,70,70);
var albion =                    new Perso('Albion',                     70,     'paradise', 30,30,30,30,30,70,70,70,70,70);
var ally =                      new Perso('Ally',                       2,      'shinsekai', 0.2,0.2,0.2,0.2,0.2,2,2,2,2,2);
var alpagaman =                 new Perso('Alpagaman',                  30,     'k',        30,30,30,30,30,30,30,30,30,30);
//AM
var amadob =                    new Perso('Amadob',                     60,     'bb',       60,60,60,60,60,60,60,60,60,60);
var amazon =                    new Perso('Amazon',                     1,      'ciel',     1,1,1,1,1,1,1,1,1,1);
//AN
var andre =                     new Perso('Andre',                      50,     'bb',       50,50,50,50,50,50,50,50,50,50);
var anjo =                      new Perso('Anjo',                       2,      'eb',       2,2,2,2,2,2,2,2,2,2);
var antonio =                   new Perso('Antonio',                    1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var anZengaiina =               new Perso('An_Zengaiina',               10,     'paradise', 10,10,10,10,10,10,10,10,10,10);
//AO
var ao =                        new Perso('A_O',                        44,     'bb',       44,44,44,44,44,44,44,44,44,44);
//AP
var aphelandra =                new Perso('Aphelandra',                 14,     'amazon',   14,14,14,14,14,14,14,14,14,14);
//AR
var aremoGanmi =                new Perso('Aremo_Ganmi',                1,      'shinsekai', 1,1,1,1,1,1,1,1,1,1);
var arlong =                    new Perso('Arlong',                     38,     'eb',       38,38,38,38,38,38,38,38,38,38);
var arrow =                     new Perso('Arrow',                      10,     'paradise', 10,10,10,10,10,10,10,10,10,10);
var arthur =                    new Perso('Arthur',                     50,     'bb',       50,50,50,50,50,50,50,50,50,50);
var aruyutayan =                new Perso('Aruyutayan_V',               1,      'nb',       1,0,0,0,0,0,0,0,0,0);
//AS
var asahija =                   new Perso('Asahija',                    6,      'marine',   6,6,6,6,6,6,6,6,6,6);
var ashuraDoji =                new Perso('Ashura_Doji',                740,    'wano',     740,740,740,740,740,740,740,740,740,740);
var aswa =                      new Perso('Aswa',                       1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
//AT
var atagoyama =                 new Perso('Attagoyama',                 11,     'shinsekai',11,11,11,11,11,11,11,11,11,11);
var atmos =                     new Perso('Atmos',                      313,    'bb',       313,313,313,313,313,313,313,313,313,313);
var attach =                    new Perso('Attach',                     1,      'marine',   1,1,1,1,1,1,1,1,1,1);
//AV
var avaloPizzaro =              new Perso('Avalo_Pizzaro',              720,    'bn',       400,400,400,400,400,720,720,720,720,720);
//AZ
var azuki =                     new Perso('Azuki',                      1,      'shinsekai',1,1,1,1,1,1,1,1,1,1);


//---B---//
//BA
var babanuki =                  new Perso('Babanuki',                   180,    'k',        180,180,180,180,180,180,180,180,180,180);
var babe =                      new Perso('Babe',                       31,     'bw',       31,31,31,31,31,31,1311,31,31,31);
var baby5 =                     new Perso('Baby_5',                     68,     'acp',      30,32,34,36,40,60,61,68,68,68);
var baggaley =                  new Perso('Baggaley',                   60,     'bb',       60,60,60,60,60,60,60,60,60,60);
var baggy =                     new Perso('Baggy',                      151,     'baggy',    15,17,19,21,30,150,150,150,150,151);
var bakezo =                    new Perso('Bakezo',                     7,      'marine',   7,7,7,7,7,7,7,7,7,7);
var bakkin =                    new Perso('Bakkin',                     1,      'shinsekai', 1,1,1,1,1,1,1,1,1,1);
var banchina =                  new Perso('Banchina',                   1,      'eb',       1,1,1,1,1,1,1,1,1,1);
var banDedessinee =             new Perso('Ban_Dedessinée',             1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var bankuro =                   new Perso('Bankuro',                    200,    'roger',    200,200,200,200,200,200,200,200,200,200);
var banshee =                   new Perso('Banshee',                    61,     'bb',       61,61,61,61,61,61,61,61,61,61);
var bao =                       new Perso('Bao',                        1,      'moria',    1,1,1,1,1,1,1,1,1,1);
var baoHuang =                  new Perso('Bao_Huang',                  61,     'k',        61,61,61,61,61,61,61,61,61,61);
var barbeBrune =                new Perso('Barbe_Brune',                29,     'shinsekai', 29,29,29,29,29,29,29,29,29,29);
var barbeRose =                 new Perso('Barbe_Rose',                 26,     'bn',       26,26,26,26,26,26,26,26,26,26);
var barrel =                    new Perso('Barrel',                     10,     'paradise', 10,10,10,10,10,10,10,10,10,10);
var barry =                     new Perso('Barry',                      40,     'bb',       40,40,40,40,40,40,40,40,40,40);
var bartholomewKuma =           new Perso('Bartholomew_Kuma',           730,    'corsaire', 730,730,730,730,730,730,730,730,730,730);
var bartolomeo =                new Perso('Bartolomeo',                 353,    'acp',      3,10,30,50,60,350,350,350,351,353);
var basilHawkins =              new Perso('Basil_Hawkins',              600,    'supernova', 20,50,100,150,200,600,600,600,600,600);
var basilisk =                  new Perso('Basilisk',                   51,     'marine',   51,51,51,51,51,51,51,51,51,51);
var baskerville =               new Perso('Baskerville',                30,     'gm',       30,30,30,30,30,30,30,30,30,30);
var bastille =                  new Perso('Bastille',                   243,    'marine',   243,243,243,243,243,243,243,243,243,243);
var batman =                    new Perso('Batman',                     30,     'k',        30,30,30,30,30,30,30,30,30,30);
var baxcon =                    new Perso('Baxcon',                     4,      'acp',      4,4,4,4,4,4,4,4,4,4);
//BE
var beeAnne =                   new Perso('Bee_Anne',                   15,     'acp',      10,10,10,10,10,15,15,15,15,15);
var beer =                      new Perso('Beer_VI',                    1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var belladonna =                new Perso('Belladonna',                 12,     'amazon',   12,12,12,12,12,12,12,12,12,12);
var bellamy =                   new Perso('Bellamy',                    80,     'dqd',      50,60,63,67,69,78,79,80,80,80);
var bellet =                    new Perso('Bellet',                     6,      'paradise', 6,6,6,6,6,6,6,6,6,6);
var belmer =                    new Perso('Belmer',                     4,      'eb',       4,4,4,4,4,4,4,4,4,4);
var beloBetty =                 new Perso('Belo_Betty',                 519,    'r',        419,419,419,419,419,519,519,519,519,519);
var benBeckmann =               new Perso('Ben_Beckmann',               1800,   'sr',       1800,1800,1800,1800,1800,1800,1800,1800,1800,1800);
var bepo =                      new Perso('Bepo',                       100,    'shinsekai', 20,20,20,20,20,100,100,100,100,100);
//BI
var bigPan =                    new Perso('Big_Pan',                    33,     'fox',      33,33,33,33,33,33,33,33,33,33);
var bimine =                    new Perso('Bimine',                     1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var bingo =                     new Perso('Bingo',                      1,      'wano',     1,1,1,1,1,1,1,1,1,1);
var bishamon =                  new Perso('Bishamon',                   12,     'wano',     12,12,12,12,12,12,12,12,12,12);
var biyo =                      new Perso('Biyo',                       11,     'shinsekai', 11,11,11,11,11,11,11,11,11,11);
var bizarre =                   new Perso('Bizarre',                    50,     'bb',       50,50,50,50,50,50,50,50,50,50);
//BL
var blackBack =                 new Perso('Black_Back',                 100,    'zo',       100,100,100,100,100,100,100,100,100,100);
var blackMaria =                new Perso('Black_Maria',                512,    'k',        412,412,412,412,412,512,512,512,512,512);
var blamenko =                  new Perso('Blamenko',                   700,    'bb',       700,700,700,700,700,700,700,700,700,700);
var blenheim =                  new Perso('Blenheim',                   450,    'bb',       450,450,450,450,450,450,450,450,450,450);
var blueFan =                   new Perso('Blue_Fan',                   1,      'amazon',   1,1,1,1,1,1,1,1,1,1);
var blueGilly =                 new Perso('Blue_Gilly',                 145,    'acp',      2,10,30,50,80,140,142,143,144,145);
var blueno =                    new Perso('Blueno',                     48,     'gm',       40,40,43,43,43,48,48,48,48,48);
var blumarine =                 new Perso('Blumarine',                  200,    'roger',    200,200,200,200,200,200,200,200,200,200);
//BO
var boaHancock =                new Perso('Boa_Hancock',                650,    'amazon',   650,650,650,650,650,650,650,650,650,650);
var boaMarigold =               new Perso('Boa_Marigold',               154,    'amazon',   154,154,154,154,154,154,154,154,154,154);
var boaSandersonia =            new Perso('Boa_Sandersonia',            154,    'amazon',   154,154,154,154,154,154,154,154,154,154);
var bobbin =                    new Perso('Bobbin',                     170,    'bm',       170,170,170,170,170,170,170,170,170,170);
var bobbyFunk =                 new Perso('Bobby_Funk',                 101,    'shinsekai', 101,101,101,101,101,101,101,101,101,101);
var bobomba =                   new Perso('Bobomba',                    4,      'acp',      4,4,4,4,4,4,4,4,4,4);
var bogard =                    new Perso('Bogard',                     100,    'marine',   100,100,100,100,100,100,100,100,100,100);
var bomba =                     new Perso('Bomba',                      4,      'acp',      4,4,4,4,4,4,4,4,4,4);
var bonclay =                   new Perso('Bonclay',                    41,     'bw',       34,36,36,36,41,0,0,0,0,0);
var bongo =                     new Perso('Bongo',                      1,      'wano',     1,1,1,1,1,1,1,1,1,1);
var boo =                       new Perso('Boo',                        68,     'acp',      30,30,30,30,30,68,68,68,68,68);
var boodle =                    new Perso('Boodle',                     1,      'eb',       1,1,1,1,1,1,1,1,1,1);
var boomba =                    new Perso('Boomba',                     12,     'marine',   12,12,12,12,12,12,12,12,12,12);
var borsalinoKizaru =           new Perso('Borsalino_Kizaru',           2000,   'marine',   2000,2000,2000,2000,2000,2000,2000,2000,2000,2000);
//BR
var braham =                    new Perso('Braham',                     45,     'ciel',     45,45,45,45,45,45,45,45,45,45);
var brahm =                     new Perso('Brahm',                      20,     'paradise', 20,20,20,20,20,20,20,20,20,20);
var brandnew =                  new Perso('Brandnew',                   43,     'marine',   43,43,43,43,43,43,43,43,43,43);
var brew =                      new Perso('Brew',                       60,     'bb',       60,60,60,60,60,60,60,60,60,60);
var brisgola =                  new Perso('Brisgola',                   50,     'k',        50,50,50,50,50,50,50,50,50,50);
var brocca =                    new Perso('Brocca',                     43,     'bb',       43,43,43,43,43,43,43,43,43,43);
var broggy =                    new Perso('Broggy',                     110,    'giant',    110,110,110,110,110,110,110,110,110,110);
var brook =                     new Perso('Brook',                      490,    'cp',       80,80,80,85,90,322,324,326,327,490);
//BU
var buche =                     new Perso('Buche',                      2,      'bm',       2,2,2,2,2,2,2,2,2,2);
var buchi =                     new Perso('Buchi',                      7,      'eb',       7,7,7,7,7,7,7,7,7,7);
var buffalo =                   new Perso('Buffalo',                    55,     'dqd',      40,40,40,40,40,55,55,55,55,55);
var buhichuck =                 new Perso('Buhichuck',                  5,      'moria',    5,5,5,5,5,5,5,5,5,5);
var bungo =                     new Perso('Bungo',                      1,      'wano',     1,1,1,1,1,1,1,1,1,1);
var bunnyJoe =                  new Perso('Bunny_Joe',                  90,     'r',        90,90,90,90,90,90,90,90,90,90);
var bushon =                    new Perso('Bushon',                     1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var busshiri =                  new Perso('Busshiri',                   3,      'wb',       3,3,3,3,3,3,3,3,3,3);
//BY
var byron =                     new Perso('Byron',                      4,      'paradise', 4,4,4,4,4,4,4,4,4,4);


//---C---//
//CA
var calgara =                   new Perso('Calgara',                    187,    'ciel',     0,0,0,0,0,0,0,0,0,0);
var camie =                     new Perso('Camie',                      1,      'hp',       1,1,1,1,1,1,1,1,1,1);
var cancer =                    new Perso('Cancer',                     213,    'marine',   213,213,213,213,213,213,213,213,213,213);
var candre =                    new Perso('Candre',                     50,     'marine',   50,50,50,50,50,50,50,50,50,50);
var cands =                     new Perso('Cands',                      50,     'bb',       50,50,50,50,50,50,50,50,50,50);
var candy =                     new Perso('Candy',                      23,     'paradise', 23,23,23,23,23,23,23,23,23,23);
var caponeGangBege =            new Perso('Capone_Gang_Bege',           278,    'supernova', 2,10,40,70,120,250,260,265,275,278);
var caponePets =                new Perso('Capone_Pets',                0.1,    'shinsekai', 0,0,0,0,0,0.1,0.1,0.1,0.1,0.1);
var caribou =                   new Perso('Caribou',                    54,     'paradise', 30,30,30,30,30,54,54,54,54,54);
var carmel =                    new Perso('Carmel',                     1,      'shinsekai', 0,0,0,0,0,0,0,0,0,0);
var carnage =                   new Perso('Carnage',                    26,     'baggy',    10,10,10,10,10,26,26,26,26,26);
var carne =                     new Perso('Carne',                      9,      'eb',       9,9,9,9,9,9,9,9,9,9);
var carrot =                    new Perso('Carrot',                     225,    'zo',       40,40,40,40,40,210,210,210,215,225);
var catacombo =                 new Perso('Catacombo',                  275,    'marine',   275,275,275,275,275,275,275,275,275,275);
var catarinaDevon =             new Perso('Catarina_Devon',             625,    'bn',       200,200,200,200,210,400,420,470,540,625);
var cavendish =                 new Perso('Cavendish',                  354,    'acp',      250,250,250,250,250,310,330,351,352,354);
//CB
var cBGalant =                  new Perso('CB_Galant',                  200,    'roger',    200,200,200,200,200,200,200,200,200,200);
//CE
var cesarClown =                new Perso('Cesar_Clown',                274,    'dqd',      274,274,274,274,274,274,274,274,274,274);
//CH
var chabo =                     new Perso('Chabo',                      1,      'eb',       1,1,1,1,1,1,1,1,1,1);
var chaka =                     new Perso('Chaka',                      25,     'paradise', 25,25,25,25,25,25,25,25,25,25);
var chao =                      new Perso('Chao',                       4,      'acp',      4,4,4,4,4,4,4,4,4,4);
var chappe =                    new Perso('Chappe',                     12,     'shinsekai', 12,12,12,12,12,12,12,12,12,12);

//-Charlotte-//
//CH-A
var charlotteAkimeg =           new Perso('Charlotte_Akimeg',           10,     'bm',       10,10,10,10,10,10,10,10,10,10);
var charlotteAllmeg =           new Perso('Charlotte_Allmeg',           10,     'bm',       10,10,10,10,10,10,10,10,10,10);
var charlotteAmande =           new Perso('Charlotte_Amande',           168,     'bm',      168,168,168,168,168,168,168,168,168,168);
var charlotteAnana =            new Perso('Charlotte_Anana',            5,      'bm',       5,5,5,5,5,5,5,5,5,5);
var charlotteAngel =            new Perso('Charlotte_Angel',            50,     'bm',       50,50,50,50,50,50,50,50,50,50);
var charlotteAnglais =          new Perso('Charlotte_Anglais',          25,     'bm',       25,25,25,25,25,25,25,25,25,25);
//CH-B
var charlotteBasans =           new Perso('Charlotte_Basans',           50,     'bm',       50,50,50,50,50,50,50,50,50,50);
var charlotteBasskarte =        new Perso('Charlotte_Basskarte',        50,     'bm',       50,50,50,50,50,50,50,50,50,50);
var charlotteBavarois =         new Perso('Charlotte_Bavarois',         50,     'bm',       50,50,50,50,50,50,50,50,50,50);
var charlotteBrownie =          new Perso('Charlotte_Brownie',          50,     'bm',       50,50,50,50,50,50,50,50,50,50);
var charlotteBroye =            new Perso('Charlotte_Broyé',            50,     'bm',       50,50,50,50,50,50,50,50,50,50);
var charlotteBrulee =           new Perso('Charlotte_Brulée',           154,    'bm',       54,54,54,54,54,154,154,154,154,154);
//CH-C
var charlotteCabalette =        new Perso('Charlotte_Cabalette',        166,    'bm',       166,166,166,166,166,166,166,166,166,166);
var charlotteCadenza =          new Perso('Charlotte_Cadenza',          166,    'bm',       166,166,166,166,166,166,166,166,166,166);
var charlotteChiboust =         new Perso('Charlotte_Chiboust',         40,     'bm',       40,40,40,40,40,40,40,40,40,40);
var charlotteChiffon =          new Perso('Charlotte_Chiffon',          40,     'bm',       40,40,40,40,40,40,40,40,40,40);
var charlotteCinnamon =         new Perso('Charlotte_Cinnamon',         50,     'bm',       50,50,50,50,50,50,50,50,50,50);
var charlotteCitron =           new Perso('Charlotte_Citron',           50,     'bm',       50,50,50,50,50,50,50,50,50,50);
var charlotteCompo =            new Perso('Charlotte_Compo',            50,     'bm',       50,50,50,50,50,50,50,50,50,50);
var charlotteCompote =          new Perso('Charlotte_Compote',          65,     'bm',       65,65,65,65,65,65,65,65,65,65);
var charlotteCornstarch =       new Perso('Charlotte_Cornstarch',       50,     'bm',       50,50,50,50,50,50,50,50,50,50);
var charlotteCounter =          new Perso('Charlotte_Counter',          166,    'bm',       166,166,166,166,166,166,166,166,166,166);
var charlotteCracker =          new Perso('Charlotte_Cracker',          647,    'bm',       647,647,647,647,647,647,647,647,647,647);
var charlotteCustard =          new Perso('Charlotte_Custard',          60,     'bm',       60,60,60,60,60,60,60,60,60,60);
//CH-D
var charlotteDacquoise =        new Perso('Charlotte_Dacquoise',        50,     'bm',       50,50,50,50,50,50,50,50,50,50);
var charlotteDaifuku =          new Perso('Charlotte_Daifuku',          285,    'bm',       285,285,285,285,285,285,285,285,285,285);
var charlotteDolce =            new Perso('Charlotte_Dolce',            25,     'bm',       25,25,25,25,25,25,25,25,25,25);
var charlotteDosmarche =        new Perso('Charlotte_Dosmarche',        50,     'bm',       50,50,50,50,50,50,50,50,50,50);
var charlotteDragee =           new Perso('Charlotte_Dragée',           25,     'bm',       25,25,25,25,25,25,25,25,25,25);
//CH-E
var charlotteEffilee =          new Perso('Charlotte_Effilée',          68,     'bm',       68,68,68,68,68,68,68,68,68,68);
//CH-F
var charlotteFlambee =          new Perso('Charlotte_Flambée',          10,     'bm',       10,10,10,10,10,10,10,10,10,10);
var charlotteFuyumeg =          new Perso('Charlotte_Fuyumeg',          10,     'bm',       10,10,10,10,10,10,10,10,10,10);
//CH-G
var charlotteGala =             new Perso('Charlotte_Gala',             66,     'bm',       66,66,66,66,66,66,66,66,66,66);
var charlotteGalette =          new Perso('Charlotte_Galette',          167,     'bm',      167,167,167,167,167,167,167,167,167,167);
//CH-H
var charlotteHachee =           new Perso('Charlotte_Hachée',           68,     'bm',       68,68,68,68,68,68,68,68,68,68);
var charlotteHarumeg =          new Perso('Charlotte_Harumeg',          10,     'bm',       10,10,10,10,10,10,10,10,10,10);
var charlotteHighFat =          new Perso('Charlotte_High-Fat',         50,     'bm',       50,50,50,50,50,50,50,50,50,50);
//Ch-J
var charlotteJoconde =          new Perso('Charlotte_Joconde',          30,     'bm',       30,30,30,30,30,30,30,30,30,30);
var charlotteJoscarpone =       new Perso('Charlotte_Joscarpone',       30,     'bm',       30,30,30,30,30,30,30,30,30,30);
//CH-K
var charlotteKanten =           new Perso('Charlotte_Kanten',           40,     'bm',       40,40,40,40,40,40,40,40,40,40);
var charlotteKatakuri =         new Perso('Charlotte_Katakuri',         1500,   'bm',       1500,1500,1500,1500,1500,1500,1500,1500,1500,1500);
var charlotteKato =             new Perso('Charlotte_Kato',             40,     'bm',       40,40,40,40,40,40,40,40,40,40);
//CH-L
var charlotteLaura =            new Perso('Charlotte_Laura',            40,     'bm',       40,40,40,40,40,40,40,40,40,40);
var charlotteLaurin =           new Perso('Charlotte_Laurin',           50,     'bm',       50,50,50,50,50,50,50,50,50,50);
var charlotteLinlin =           new Perso('Charlotte_Linlin',           4000,   'bm',       3900,4000,4000,4000,4000,4000,4000,4000,4000,4000);
//CH-M
var charlotteMaple =            new Perso('Charlotte_Maple',            30,     'bm',       30,30,30,30,30,30,30,30,30,30);
var charlotteMarble =           new Perso('Charlotte_Marble',           30,     'bm',       30,30,30,30,30,30,30,30,30,30);
var charlotteMarnier =          new Perso('Charlotte_Marnier',          50,     'bm',       50,50,50,50,50,50,50,50,50,50);
var charlotteMascarpone =       new Perso('Charlotte_Mascarpone',       30,     'bm',       30,30,30,30,30,30,30,30,30,30);
var charlotteMash =             new Perso('Charlotte_Mash',             50,     'bm',       50,50,50,50,50,50,50,50,50,50);
var charlotteMelise =           new Perso('Charlotte_Melise',           50,     'bm',       50,50,50,50,50,50,50,50,50,50);
var charlotteMobile =           new Perso('Charlotte_Mobile',           40,     'bm',       40,40,40,40,40,40,40,40,40,40);
var charlotteMontb =            new Perso('Charlotte_Montb',            40,     'bm',       40,40,40,40,40,40,40,40,40,40);
var charlotteMondee =           new Perso('Charlotte_Mondée',           65,     'bm',       65,65,65,65,65,65,65,65,65,65);
var charlotteMontdor =          new Perso('Charlotte_Montdor',          167,    'bm',       167,167,167,167,167,167,167,167,167,167);
var charlotteMoscato =          new Perso('Charlotte_Moscato',          80,     'bm',       80,80,80,80,80,80,80,80,80,80);
var charlotteMozart =           new Perso('Charlotte_Mozart',           50,     'bm',       50,50,50,50,50,50,50,50,50,50);
var charlotteMyukuru =          new Perso('Charlotte_Myukuru',          20,     'bm',       20,20,20,20,20,20,20,20,20,20);
//CH-N
var charlotteNewgo =            new Perso('Charlotte_Newgo',            10,     'bm',       10,10,10,10,10,10,10,10,10,10);
var charlotteNewichi =          new Perso('Charlotte_Newichi',          10,     'bm',       10,10,10,10,10,10,10,10,10,10);
var charlotteNewji =            new Perso('Charlotte_Newji',            10,     'bm',       10,10,10,10,10,10,10,10,10,10);
var charlotteNewsan =           new Perso('Charlotte_Newsan',           10,     'bm',       10,10,10,10,10,10,10,10,10,10);
var charlotteNewshi =           new Perso('Charlotte_Newshi',           10,     'bm',       10,10,10,10,10,10,10,10,10,10);
var charlotteNoisette =         new Perso('Charlotte_Noisette',         50,     'bm',       50,50,50,50,50,50,50,50,50,50);
var charlotteNormande =         new Perso('Charlotte_Normande',         1,      'bm',       1,1,1,1,1,1,1,1,1,1);
var charlotteNougat =           new Perso('Charlotte_Nougat',           10,     'bm',       10,10,10,10,10,10,10,10,10,10);
var charlotteNusstorte =        new Perso('Charlotte_Nusstorte',        50,     'bm',       50,50,50,50,50,50,50,50,50,50);
var charlotteNutmeg =           new Perso('Charlotte_Nutmeg',           10,     'bm',       10,10,10,10,10,10,10,10,10,10);
//CH-O
var charlotteOpera =            new Perso('Charlotte_Opera',            177,    'bm',       177,177,177,177,177,177,177,177,177,177);
var charlotteOven =             new Perso('Charlotte_Oven',             175,    'bm',       175,175,175,175,175,175,175,175,175,175);
//CH-P
var charlottePanna =            new Perso('Charlotte_Panna',            30,     'bm',       30,30,30,30,30,30,30,30,30,30);
var charlottePerospero =        new Perso('Charlotte_Perospero',        483,    'bm',       483,483,483,483,483,483,483,483,483,483); 
var charlottePoire =            new Perso('Charlotte_Poire',            50,     'bm',       50,50,50,50,50,50,50,50,50,50);
var charlottePraline =          new Perso('Charlotte_Praline',          50,     'bm',       50,50,50,50,50,50,50,50,50,50);
var charlottePrim =             new Perso('Charlotte_Prim',             50,     'bm',       50,50,50,50,50,50,50,50,50,50);
var charlottePudding =          new Perso('Charlotte_Pudding',          10,     'bm',       10,10,10,10,10,10,10,10,10,10);
//CH-R
var charlotteRaisin =           new Perso('Charlotte_Raisin',           20,     'bm',       20,20,20,20,20,20,20,20,20,20);
//CH-S
var charlotteSaintMarc =        new Perso('Charlotte_Saint-Marc',       50,     'bm',       50,50,50,50,50,50,50,50,50,50);
var charlotteSmoothie =         new Perso('Charlotte_Smoothie',         790,    'bm',       790,790,790,790,790,790,790,790,790,790);
var charlotteSnack =            new Perso('Charlotte_Snack',            500,    'bm',       500,500,500,500,500,500,500,500,500,500);
//CH-T
var charlotteTablet =           new Perso('Charlotte_Tablet',           50,     'bm',       50,50,50,50,50,50,50,50,50,50);
//CH-W
var charlotteWafers =           new Perso('Charlotte_Wafers',           12,     'bm',       12,12,12,12,12,12,12,12,12,12);
var charlotteWiro =             new Perso('Charlotte_Wiro',             21,     'bm',       21,21,21,21,21,21,21,21,21,21);
//CH-Y
var charlotteYuen =             new Perso('Charlotte_Yuen',             10,     'bm',       10,10,10,10,10,10,10,10,10,10);
//CH-Z
var charlotteZuccotto =         new Perso('Charlotte_Zuccotto',         50,     'bm',       50,50,50,50,50,50,50,50,50,50);

var chess =                     new Perso('Chess',                      23,     'paradise', 23,23,23,23,23,23,23,23,23,23);
var chesskippa =                new Perso('Chesskippa',                 34,     'wb',       34,34,34,34,34,34,34,34,34,34);
var chichilisia =               new Perso('Chichisilia',                123,    'shinsekai', 123,123,123,123,123,123,123,123,123,123);
var chicken =                   new Perso('Chicken',                    1,      'eb',       1,1,1,1,1,1,1,1,1,1);
var chief =                     new Perso('Chief',                      12,     'ciel',     12,12,12,12,12,12,12,12,12,12);
var chimney =                   new Perso('Chimney',                    1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var chocolat =                  new Perso('Chocolat',                   18,     'paradise', 18,18,18,18,18,18,18,18,18,18);
var choi =                      new Perso('Choi',                       54,     'bb',       54,54,54,54,54,54,54,54,54,54);
var chome =                     new Perso('Chome',                      34,     'k',        34,34,34,34,34,34,34,34,34,34);

//CI
//Cipher
var oeilNoirOeilBlanc =         new Perso('???',                        300,    'gm',       300,300,300,300,300,300,300,300,300,300);
var rougePasContent =           new Perso('???',                        300,    'gm',       300,300,300,300,300,300,300,300,300,300);
var deuxTraitsOeilDroit =       new Perso('???',                        300,    'gm',       300,300,300,300,300,300,300,300,300,300);
var violetBoucheEnO =           new Perso('???',                        300,    'gm',       300,300,300,300,300,300,300,300,300,300);
//CL
var clione =                    new Perso('Clione',                     40,     'shinsekai', 10,10,10,10,10,40,40,40,40,40);
var clover =                    new Perso('Clover',                     1,      'wb',       1,1,1,1,1,1,1,1,1,1);
//CO
var cocoa =                     new Perso('Cocoa',                      32,     'paradise', 32,32,32,32,32,32,32,32,32,32);
var colombus =                  new Perso('Colombus',                   73,     'acp',      30,30,30,30,30,70,70,70,73,73);
var colscon =                   new Perso('Colscon',                    67,     'bb',       67,67,67,67,67,67,67,67,67,67);
var concelot =                  new Perso('Concelot',                   160,    'zo',       160,160,160,160,160,160,160,160,160,160);
var conis =                     new Perso('Conis',                      1,      'ciel',     1,1,1,1,1,1,1,1,1,1);
var corgi =                     new Perso('Corgi',                      21,     'gm',       21,21,21,21,21,21,21,21,21,21);
var coribou =                   new Perso('Coribou',                    46,     'paradise', 34,34,34,34,37,46,46,46,46,46);
var cornelia =                  new Perso('Cornelia',                   78,     'bb',       78,78,78,78,78,78,78,78,78,78);
var cosette =                   new Perso('Cosette',                    1,      'shinsekai', 1,1,1,1,1,1,1,1,1,1);
var cosmo =                     new Perso('Cosmo',                      6,      'ener',     6,6,6,6,6,6,6,6,6,6);
var cosmos =                    new Perso('Cosmos',                     21,     'amazon',   21,21,21,21,21,21,21,21,21,21);
var cotton =                    new Perso('Cotton',                     4,      'acp',      4,4,4,4,4,4,4,4,4,4);
//CR
var crocodile =                 new Perso('Crocodile',                  114,     'bw',       86,86,86,86,86,114,114,114,114,114);
var crocus =                    new Perso('Crocus',                     2,      'roger',    2,2,2,2,2,2,2,2,2,2);
//CU
var curiel =                    new Perso('Curiel',                     335,    'bb',       335,335,335,335,335,335,335,335,335,335);


//---D---//
//DA
var dachoman =                  new Perso('Dachoman',                   20,     'k',        20,20,20,20,20,20,20,20,20,20);
var dadan =                     new Perso('Dadan',                      4,      'eb',       4,4,4,4,4,4,4,4,4,4);
var daddyDee =                  new Perso('Daddy_Dee',                  1,      'eb',       1,1,1,1,1,1,1,1,1,1);
var dagama =                    new Perso('Dagama',                     89,     'shinsekai', 89,89,89,89,89,89,89,89,89,89);
var daifugo =                   new Perso('Daifugo',                    179,    'k',        179,179,179,179,179,179,179,179,179,179);
var daigin =                    new Perso('Daigin',                     42,     'marine',   42,42,42,42,42,42,42,42,42,42);
var daikoku =                   new Perso('Daikoku',                    65,     'k',        65,65,65,65,65,65,65,65,65,65);
var daikon =                    new Perso('Daikon',                     4,      'acp',      4,4,4,4,4,4,4,4,4,4);
var daisy =                     new Perso('Daisy',                      19,     'amazon',   19,19,19,19,19,19,19,19,19,19);
var dalmatien =                 new Perso('Dalmatien',                  243,    'marine',   243,243,243,243,243,243,243,243,243,243);
var damask =                    new Perso('Damask',                     26,     'shinsekai', 26,26,26,26,26,26,26,26,26,26);
var daruma =                    new Perso('Daruma',                     50,     'hp',       2,4,6,8,10,50,0,0,0,0);
var dazBonez =                  new Perso('Daz_Bonez',                  44,     'bw',       40,40,40,40,44,44,44,44,44,44);
//DE
var decalvanBrothers =          new Perso('Decalvan_Brothers',          111,    'bb',       111,111,111,111,111,111,111,111,111,111);
var delacuaji =                 new Perso('Delacuaji',                  89,     'bb',       89,89,89,89,89,89,89,89,89,89);
var dellinger =                 new Perso('Dellinger',                  117,    'dqd',      100,100,100,100,100,117,117,117,117,117);
var demaroBlack =               new Perso('Demaro_Black',               99,     'paradise', 88,88,88,88,88,99,99,99,99,99);
var den =                       new Perso('Den',                        23,     'hp',       23,23,23,23,23,23,23,23,23,23);
var denjiro =                   new Perso('Denjiro',                    603,    'wano',     403,403,403,403,403,403,403,403,403,603);
var devilDias =                 new Perso('Devil_Dias',                 56,     'paradise', 56,56,56,56,56,56,56,56,56,56);
//DI
var diamante =                  new Perso('Diamante',                   165,    'dqd',      165,165,165,165,165,165,165,165,165,165);
var diamondJoz =                new Perso('Diamond_Joz',                1030,   'bb',       1030,1030,1030,1030,1030,1030,1030,1030,1030,1030);
var didit =                     new Perso('Didit',                      1,      'eb',       1,1,1,1,1,1,1,1,1,1);
var diesel =                    new Perso('Diesel',                     21,     'bm',       21,21,21,21,21,21,21,21,21,21);
var diezBarrels =               new Perso('Diez_Barrels',               45,     'marine',   45,45,45,45,45,45,45,45,45,45);
var disco =                     new Perso('Disco',                      2,      'paradise', 2,2,2,2,2,2,2,2,2,2);
//DO
var dobbyIbadonbo =             new Perso('Dobby_Ibadonbo',             345,    'paradise', 345,345,345,345,345,345,345,345,345,345);
var doberMan =                  new Perso('Doberman',                   248,    'marine',   248,248,248,248,248,248,248,248,248,248);
var dobon =                     new Perso('Dobon',                      60,     'k',        60,60,60,60,60,60,60,60,60,60);
var docQ =                      new Perso('Doc_Q',                      299,    'bn',       10,30,50,70,90,150,250,260,280,299);
var dogra =                     new Perso('Dogra',                      2,      'eb',       2,2,2,2,2,2,2,2,2,2);
var dogya =                     new Perso('Dogya',                      56,     'bb',       56,56,56,56,56,56,56,56,56,56);
var dohaIttankaII =             new Perso('Doha_Ittanka_II',            344,    'paradise', 344,344,344,344,344,344,344,344,344,344);
var dolton =                    new Perso('Dolton',                     28,     'paradise', 28,28,28,28,28,28,28,28,28,28);
var doma =                      new Perso('Doma',                       112,    'bb',       112,112,112,112,112,112,112,112,112,112);
var domino =                    new Perso('Domino',                     68,     'marine',   68,68,68,68,68,68,68,68,68,68);
var domoKun =                   new Perso('Domo-Kun',                   2,      'baggy',    2,2,2,2,2,2,2,2,2,2);
var donChinjao =                new Perso('Don_Chinjao',                551,    'acp',      551,551,551,551,551,551,551,551,551,551);
var donKrieg =                  new Perso('Don_Krieg',                  37,     'eb',       37,37,37,37,37,37,37,37,37,37);
var donovan =                   new Perso('Donovan',                    24,     'fox',      24,24,24,24,24,24,24,24,24,24);
var donQuichotteDoflamingo =    new Perso('Don_Quichotte_Doflamingo',   1250,    'dqd',     1250,1250,1250,1250,1250,1250,1250,1250,1250,1250);
var donQuichotteHoming =        new Perso('Don_Quichotte_Homing',       1,      'gm',       1,1,1,1,1,1,1,1,1,1);
var donQuichotteMjosgard =      new Perso('Don_Quichotte_Mjosgard',     2,      'gm',       2,2,2,2,2,2,2,2,2,2);
var donQuichotteRossinante =    new Perso('Don_Quichotte_Rossinante',   40,     'marine',   0,0,0,0,0,0,0,0,0,0);
var donquino =                  new Perso('Donquino',                   200,    'roger',    200,200,200,200,200,200,200,200,200,200);
var donSai =                    new Perso('Don_Sai',                    149,    'acp',      50,60,70,80,90,120,130,140,145,149);
var doran =                     new Perso('Doran',                      12,     'shinsekai', 12,12,12,12,12,12,12,12,12,12);
var doringo =                   new Perso('Doringo',                    200,    'roger',    200,200,200,200,200,200,200,200,200,200);
var dorry =                     new Perso('Dorry',                      110,    'giant',    110,110,110,110,110,110,110,110,110,110);
var dosun =                     new Perso('Dosun',                      50,     'hp',       2,4,6,8,10,50,0,0,0,0);
//DR
var draculeMihawk =             new Perso('Dracule_Mihawk',             2100,   'corsaire', 2100,2100,2100,2100,2100,2100,2100,2100,2100,2100);
var draw =                      new Perso('Draw',                       210,    'marine',   210,210,210,210,210,210,210,210,210,210);
var drHiluluk =                 new Perso('Dr_Hiluluk',                 1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var drip =                      new Perso('Drip',                       34,     'paradise', 34,34,34,34,34,34,34,34,34,34);
var drophy =                    new Perso('Drophy',                     23,     'bw',       23,23,23,23,23,23,23,23,23,23);
var drugPeclo =                 new Perso('Drug_Peclo',                 456,    'shinsekai', 456,456,456,456,456,456,456,456,456,456);
//DU
var duckyBree =                 new Perso('Ducky_Bree',                 78,     'bb',       78,78,78,78,78,78,7,78,78,78);
var duFeld =                    new Perso('Du_Feld',                    455,    'shinsekai', 455,455,455,455,455,455,455,455,455,455);
var duval =                     new Perso('Duval',                      53,     'paradise', 10,10,10,20,40,50,51,52,53,53);


//---E---//
var eddy =                      new Perso('Eddy',                       25,     'paradise', 25,25,25,25,25,25,25,25,25,25);
var edwardNewgate =             new Perso('Edward_Newgate',             5000,   'bb',       4200,5000,5000,5000,4500,0,0,0,0,0);
var edwardWeeble =              new Perso('Edward_Weeble',              2030,   'corsaire', 800,850,900,950,1000,1800,1850,1900,1960,2030);
var egana =                     new Perso('Egana',                      1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var eggplant =                  new Perso('Eggplant',                   6,      'bm',       6,6,6,6,6,6,6,6,6,6);
var eiri =                      new Perso('Eiri',                       61,     'shinsekai', 61,61,61,61,61,61,61,61,61,61);
var elizabelloII =              new Perso('Elizabello_II',              321,    'shinsekai', 321,321,321,321,321,321,321,321,321,321);
var elmy =                      new Perso('Elmy',                       67,     'bb',       67,67,67,67,67,67,67,67,67,67);
var emporioIvankov =            new Perso('Emporio_Ivankov',            633,    'r',        633,633,633,633,633,633,633,633,633,633);
var ener =                      new Perso('Ener',                       920,    'ener',     800,800,800,800,920,920,920,920,920,920);
var enishida =                  new Perso('Enishida',                   23,     'amazon',   23,23,23,23,23,23,23,23,23,23);
var epoida =                    new Perso('Epoida',                     98,     'bb',       98,98,98,98,98,98,98,98,98,98);
var eponi =                     new Perso('Eponi',                      1,      'shinsekai', 1,1,1,1,1,1,1,1,1,1);
var erik =                      new Perso('Erik',                       16,     'paradise', 16,16,16,16,16,16,16,16,16,16);
var erio =                      new Perso('Erio',                       200,    'roger',    200,200,200,200,200,200,200,200,200,200);
var eustassKidd =               new Perso('Eustass_Kidd',               1850,    'supernova', 50,150,250,330,410,820,830,850,1150,1850);


//---F---//
var farafra =                   new Perso('Farafra',                    13,     'paradise', 13,13,13,13,13,13,13,13,13,13);
var faust =                     new Perso('Faust',                      245,    'paradise', 78,78,78,78,78,245,245,245,245,245);
var fenBock =                   new Perso('Fen_Bock',                   8,      'shinsekai', 8,8,8,8,8,8,8,8,8,8);
var finamore =                  new Perso('Finamore',                   34,     'bb',       34,34,34,34,34,34,34,34,34,34);
var fillonce =                  new Perso('Fillonce',                   1,      'hp',       1,1,1,1,1,1,1,1,1,1);
var fishbonen =                 new Perso('Fishbonen',                  1,      'marine',   1,1,1,1,1,1,1,1,1,1);
var fisherTiger =               new Perso('Fisher_Tiger',               1001,   'hp',       1001,1001,1001,1001,1001,1001,1001,1001,1001,1001);
var flapper =                   new Perso('Flapper',                    4,      'acp',      4,4,4,4,4,4,4,4,4,4);
var forliewbs =                 new Perso('Forliewbs',                  101,    'bb',       101,101,101,101,101,101,101,101,101,101);
var fossa =                     new Perso('Fossa',                      305,    'bb',       305,305,305,305,305,305,305,305,305,305);
var fourTricks =                new Perso('Four_Tricks',                50,     'k',        50,50,50,50,50,50,50,50,50,50);
var foxy =                      new Perso('Foxy',                       45,     'fox',      45,45,45,45,45,45,45,45,45,45);
var francois =                  new Perso('François',                   14,     'paradise', 14,14,14,14,14,14,14,14,14,14);
var franky =                    new Perso('Franky_Cutty_Flam',          520,    'cp',       30,35,40,60,70,300,315,325,328,520);
var fujin =                     new Perso('Fujin',                      17,     'k',        17,17,17,17,17,17,17,17,17,17);
var fukaboshi =                 new Perso('Fukaboshi',                  110,    'hp',       110,110,110,110,110,110,110,110,110,110);
var fukuro =                    new Perso('Fukuro',                     47,     'gm',       35,35,35,35,35,47,47,47,47,47);
var fukurokuju =                new Perso('Fukurokuju',                 167,    'k',        167,167,167,167,167,167,167,167,167,167);
var fullbody =                  new Perso('Fullbody',                   9,      'marine',   9,9,9,9,9,9,9,9,9,9);


//---G---//
//GA
var gaburu =                    new Perso('Gaburu',                     45,     'shinsekai', 45,45,45,45,45,45,45,45,45,45);
var gaimon =                    new Perso('Gaimon',                     1,      'eb',       1,1,1,1,1,1,1,1,1,1);
var gal =                       new Perso('Gal',                        10,     'marine',   10,10,10,10,10,10,10,10,10,10);
var galaxy =                    new Perso('Galaxy',                     8,      'ener',     8,8,8,8,8,8,8,8,8,8);
var galdino =                   new Perso('Galdino',                    59,     'bw',       32,32,32,32,39,59,59,59,59,59);
var gally =                     new Perso('Gally',                      7,      'eb',       7,7,7,7,7,7,7,7,7,7);
var gambia =                    new Perso('Gambia',                     77,     'acp',      40,40,40,40,40,77,77,77,77,77);
var gancho =                    new Perso('Gancho',                     1,      'shinsekai', 1,1,1,1,1,1,1,1,1,1);
var ganForr =                   new Perso('Gan_Forr',                   94,     'ciel',     94,94,94,94,94,94,94,94,94,94);
var ganryu =                    new Perso('Ganryu',                     200,    'roger',    200,200,200,200,200,200,200,200,200,200);
var ganryu2 =                   new Perso('Ganryu_',                    55,     'bb',       55,55,55,55,55,55,55,55,55,55);
var gatherine =                 new Perso('Gatherine',                  1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var gatz =                      new Perso('Gatz',                       3,      'shinsekai', 3,3,3,3,3,3,3,3,3,3);
var gazelleman =                new Perso('Gazelleman',                 30,     'k',        30,30,30,30,30,30,30,30,30,30);
//GE
var geckoMoria =                new Perso('Gecko_Moria',                370,    'moria',    300,300,300,300,300,370,370,370,370,370);
var gedatsu =                   new Perso('Gedatsu',                    69,     'ener',     69,69,69,69,69,69,69,69,69,69);
var gem =                       new Perso('Gem',                        22,     'bw',       22,22,22,22,22,22,22,22,22,22);
var genbo =                     new Perso('Genbo',                      45,     'ciel',     45,45,45,45,45,45,45,45,45,45);
var genzo =                     new Perso('Genzo',                      4,      'eb',       4,4,4,4,4,4,4,4,4,4);
var georgeBlack =               new Perso('George_Black',               243,    'paradise', 243,243,243,243,243,243,243,243,243,243);
var georgeMach =                new Perso('George_Mach',                24,     'fox',      24,24,24,24,24,24,24,24,24,24);
var gerd =                      new Perso('Gerd',                       105,    'acp',      100,100,100,100,100,105,105,105,105,105);
//GI
var giberson =                  new Perso('Giberson',                   333,    'shinsekai', 333,333,333,333,333,333,333,333,333,333);
var gin =                       new Perso('Gin',                        28,     'eb',       28,28,28,28,28,28,28,28,28,28);
var gina =                      new Perso('Gina',                       24,     'fox',      24,24,24,24,24,24,24,24,24,24);
var ginko =                     new Perso('Ginko',                      11,     'shinsekai', 11,11,11,11,11,11,11,11,11,11);
var ginRummy =                  new Perso('Gin_Rummy',                  62,     'k',        62,62,62,62,62,62,62,62,62,62);
var giovanni =                  new Perso('Giovanni',                   160,    'zo',       160,160,160,160,160,160,160,160,160,160);
//GL
var gladius =                   new Perso('Gladius',                    82,     'dqd',      82,82,82,82,82,82,82,82,82,82);
var gloriosa =                  new Perso('Gloriosa',                   1,      'amazon',   1,1,1,1,1,1,1,1,1,1);
var glove =                     new Perso('Glove',                      21,     'marine',   21,21,21,21,21,21,21,21,21,21);
//GO
var gode =                      new Perso('Gode',                       13,     'ener',     13,13,13,13,13,13,13,13,13,13);
var goldberg =                  new Perso('Goldberg',                   105,    'acp',      100,100,100,100,100,105,105,105,105,105);
var golDRoger =                 new Perso('Gol_D_Roger',                5500,   'roger',    5500,0,0,0,0,0,0,0,0,0);
var goo =                       new Perso('Goo',                        24,     'paradise', 24,24,24,24,24,24,24,2,24,24);
var gorilla =                   new Perso('Gorilla',                    27,     'marine',   27,27,27,27,27,27,27,27,27,27);
var goro =                      new Perso('Goro',                       3,      'paradise', 3,3,3,3,3,3,3,3,3,3);
var gorobe =                    new Perso('Gorobe',                     1,      'wano',     1,1,1,1,1,1,1,1,1,1);
var gotti =                     new Perso('Gotti',                      85,     'shinsekai', 20,20,20,20,20,85,85,85,85,85);
//GR
var grabar =                    new Perso('Grabar',                     1,      'shinsekai', 1,1,1,1,1,1,1,1,1,1);
var gram =                      new Perso('Gram',                       1,      'wb',       1,1,1,1,1,1,1,1,1,1);
var greatMichael =              new Perso('Great_Michael',              97,     'bb',       97,97,97,97,97,97,97,97,97,97);
//GY
var gyaro =                     new Perso('Gyaro',                      9,      'hp',       9,9,9,9,9,9,9,9,9,9);
var gyoro =                     new Perso('Gyoro',                      1,      'moria',    1,1,1,1,1,1,1,1,1,1);
var gyoru =                     new Perso('Gyoru',                      1,      'eb',       1,1,1,1,1,1,1,1,1,1);
var gyro =                      new Perso('Gyro',                       42,     'paradise', 42,42,42,42,42,42,42,42,42,42);


//---H---//
//HA
var hack =                      new Perso('Hack',                       90,     'r',        30,30,30,30,30,90,90,90,90,90);
var hack2 =                     new Perso('Hack_',                      1,      'wb',       1,1,1,1,1,1,1,1,1,1);
var haguarDSauro =              new Perso('Haguar_D_Sauro',             202,    'marine',   202,202,202,202,202,202,202,202,202,202);
var hajrudin =                  new Perso('Hajrudin',                   202,    'acp',      50,60,70,80,90,140,202,202,202,202);
var hamburg =                   new Perso('Hamburg',                    33,     'fox',      33,33,33,33,33,33,33,33,33,33);
var hamBurger =                 new Perso('Ham_Burger',                 1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var hamlet =                    new Perso('Hamlet',                     50,     'k',        50,50,50,50,50,50,50,50,50,50);
var hammond =                   new Perso('Hammond',                    50,     'hp',       2,4,6,8,10,50,0,0,0,0);
var han =                       new Perso('Han',                        0.3,    'wano',     0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3,0.3);
var hangan =                    new Perso('Hangan',                     56,     'bb',       56,56,56,56,56,56,56,56,56,56);
var hanger =                    new Perso('Hanger',                     1,      'eb',       1,1,1,1,1,1,1,1,1,1);
var hanji =                     new Perso('Hanji',                      2,      'wano',     2,2,2,2,2,2,2,2,2,2);
var hanzo =                     new Perso('Hanzo',                      31,     'k',        31,31,31,31,31,31,31,31,31,31);
var hannyabal =                 new Perso('Hannyabal',                  93,     'marine',   93,93,93,93,93,93,93,93,93,93);
var happaYamao =                new Perso('Happa_Yamao',                1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var happygun =                  new Perso('Happygun',                   46,     'bb',       46,46,46,46,46,46,46,46,46,46);
var haredas =                   new Perso('Haredas',                    1,      'ciel',     1,1,1,1,1,1,1,1,1,1);
var harisenbon =                new Perso('Harisenbon',                 15,     'hp',       15,15,15,15,15,15,15,15,15,15);
var haritsuKendiyo =            new Perso('Haritsu_Kendiyo',            34,     'shinsekai', 34,34,34,34,34,34,34,34,34,34);
var haruta =                    new Perso('Haruta',                     318,    'bb',       318,318,318,318,318,318,318,318,318,318);
//HE
var heat =                      new Perso('Heat',                       190,    'shinsekai', 10,20,35,50,70,190,190,190,190,190);
var helwett =                   new Perso('Helwett',                    25,     'paradise', 25,25,25,25,25,25,25,25,25,25);
var heppoko =                   new Perso('Heppoko',                    4,      'baggy',    4,4,4,4,4,4,4,4,4,4);
var hera =                      new Perso('Hera',                       32,     'shinsekai', 32,32,32,32,32,32,32,32,32,32);
var heracles =                  new Perso('Heracles',                   54,     'paradise', 54,54,54,54,54,54,54,54,54,54);
var herb =                      new Perso('Herb',                       1,      'ciel',     1,1,1,1,1,1,1,1,1,1);
var hermep =                    new Perso('Hermep',                     50,     'marine',   1,2,4,8,16,48,49,50,50,50);
//HI
var higuma =                    new Perso('Higuma',                     13,     'eb',       0,0,0,0,0,0,0,0,0,0);
var hildon =                    new Perso('Hildon',                     16,     'moria',    16,16,16,16,16,16,16,16,16,16);
var hina =                      new Perso('Hina',                       68,     'marine',   68,68,68,68,68,68,68,68,86,68);
var hiramera =                  new Perso('Hiramera',                   1,      'hp',       1,1,1,1,1,1,1,1,1,1);
var hitsugisukan =              new Perso('Hitsugisukan',               467,    'zo',       467,467,467,467,467,467,467,467,467,467);
//HO
var ho =                        new Perso('Ho',                         1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var hocha =                     new Perso('Hocha',                      1,      'wb',       1,1,1,1,1,1,1,1,1,1);
var hocker =                    new Perso('Hocker',                     1,      'eb',       1,1,1,1,1,1,1,1,1,1);
var hodyJones =                 new Perso('Hody_Jones',                 430,    'hp',       2,2,2,5,10,430,0,0,0,0);
var hogback =                   new Perso('Hogback',                    48,     'moria',    40,40,40,45,45,48,48,48,48,48);
var hoichael =                  new Perso('Hoichael',                   1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var holdem =                    new Perso('Holdem',                     61,     'k',        61,61,61,61,61,61,61,61,61,61);
var hotei =                     new Perso('Hotei',                      14,     'k',        14,14,14,14,14,14,14,14,14,14);
var hotokeSengoku =             new Perso('Hotoke_Sengoku',             1990,   'marine',   2000,2000,2000,2000,2000,1990,1990,1990,1990,1990);
var hotori =                    new Perso('Hotori',                     46,     'ener',     40,42,45,45,45,46,46,46,46,46);
//HU
var hublot =                    new Perso('Hublot',                     86,     'bb',       86,86,86,86,86,86,86,86,86,86);
var humphrey =                  new Perso('Humphrey',                   1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var hustle =                    new Perso('Hustle',                     9,      'eb',       9,9,9,9,9,9,9,9,9,9);
//HY
var hyogoro =                   new Perso('Hyogoro',                    259,    'wano',     259,259,259,259,259,259,259,259,259,259);
var hyota =                     new Perso('Hyota',                      15,     'paradise', 15,15,15,15,15,15,15,15,15,15);
var hyouzou =                   new Perso('Hyouzou',                    50,     'hp',       2,4,6,8,10,50,0,0,0,0);


//---I---//
var icarosMucchi =              new Perso('Icaros_Mucchi',              50,     'hp',       2,4,6,8,10,50,0,0,0,0);
var icebarg =                   new Perso('Icebarg',                    10,     'paradise', 10,10,10,10,10,10,10,10,10,10);
var ichika =                    new Perso('Ichika',                     0.2,    'hp',       0,0,0,0,0,0,0,0,0,0);
var ideaman =                   new Perso('Ideaman',                    6,      'eb',       6,6,6,6,6,6,6,6,6,6);
var ideo =                      new Perso('Ideo',                       146,    'acp',      10,15,20,25,30,130,135,140,145,146);
var igaram =                    new Perso('Igaram',                     17,     'paradise', 17,17,17,17,17,17,17,17,17,17);
var ikkaku =                    new Perso('Ikkaku',                     40,     'shinsekai', 10,10,10,10,10,40,40,40,40,40);
var inazuma =                   new Perso('Inazuma',                    58,     'r',        50,50,50,50,50,58,58,58,58,58);
var indigo =                    new Perso('Indigo',                     134,    'rocks',    134,134,134,134,134,134,134,134,134,134);
var inhel =                     new Perso('Inhel',                      4,      'acp',      4,4,4,4,4,4,4,4,4,4);
var inuarashi =                 new Perso('Inuarashi',                  649,    'wano',     389,389,389,389,389,389,389,389,389,649);
var inuppe =                    new Perso('Inuppe',                     25,     'moria',    25,25,25,25,25,25,25,25,25,25);
var ipponmatsu =                new Perso('Ipponmatsu',                 1,      'eb',       1,1,1,1,1,1,1,1,1,1);
var ipponume =                  new Perso('Ipponume',                   1,      'eb',       1,1,1,1,1,1,1,1,1,1);
var isa =                       new Perso('Isa',                        1,      'ciel',     1,1,1,1,1,1,1,1,1,1);
var ishigoShutemanna =          new Perso('Ishigo_Shutemanna',          1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var ishilly =                   new Perso('Ishilly',                    1,      'hp',       1,1,1,1,1,1,1,1,1,1);
var islewan =                   new Perso('Islewan',                    114,    'bb',       114,114,114,114,114,114,114,114,114,114);
var isshoFujitora =             new Perso('Issho_Fujitora',             1940,   'marine',   1940,1940,1940,1940,1940,1940,1940,1940,1940,1940);
var isuka =                     new Perso('Isuka',                      124,    'marine',   124,124,124,124,124,124,124,124,124,124);
var izou =                      new Perso('Izou',                       295,    'bb',       295,295,295,295,295,295,295,295,295,295);


//---J---//
//JA
var jabura =                    new Perso('Jabura',                     52,     'gm',   52,52,52,52,52,52,52,52,52,52);
var jack =                      new Perso('Jack',                       1000,   'k',        1000,1000,1000,1000,1000,1000,1000,1000,1000,1000);
var jacksonbanner =             new Perso('Jacksonbanner',              200,    'roger',    200,200,200,200,200,200,200,200,200,200);
var jango =                     new Perso('Jango',                      9,      'marine',   9,9,9,9,9,9,9,9,9,9);
var jarul =                     new Perso('Jarul',                      103,    'shinsekai', 0,0,0,0,0,0,0,0,0,0);
//JE
var jeanAngo =                  new Perso('Jean_Ango',                  127,    'shinsekai', 127,127,127,127,127,127,127,127,127,127);
var jeanBart =                  new Perso('Jean_Bart',                  70,     'shinsekai', 20,20,20,20,20,70,70,70,70,70);
var jeanGoen =                  new Perso('Jean_Goen',                  12,     'paradise', 12,12,12,12,12,12,12,12,12,12);
var jeep =                      new Perso('Jeep',                       1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var jeet =                      new Perso('Jeet',                       75,     'acp',      35,35,35,35,35,75,75,75,75,75);
var jerry =                     new Perso('Jerry',                      35,     'gm',       35,35,35,35,35,35,35,35,35,35);
var jero =                      new Perso('Jero',                       7,      'marine',   7,7,7,7,7,7,7,7,7,7);
var jesusBurgess =              new Perso('Jesus_Burgess',              598,    'bn',       80,100,120,240,360,400,450,500,550,598);
var jewelryBonney =             new Perso('Jewelry_Bonney',             285,    'supernova', 10,30,50,80,150,260,265,273,280,285);
//JI
var jibuemon =                  new Perso('Jibuemon',                   5,      'wano',     5,5,5,5,5,5,5,5,5,5);
var jigokuBenten =              new Perso('Jigoku_Benten',              3,      'k',        3,3,3,3,3,3,3,3,3,3);
var jigoro =                    new Perso('Jigoro',                     41,     'moria',    41,41,41,41,41,41,41,41,41,41);
var jigra =                     new Perso('Jigra',                      32,     'shinsekai', 32,32,32,32,32,32,32,32,32,32);
var jinbe =                     new Perso('Jinbe',                      650,    'cp',       400,400,400,400,400,550,550,550,550,650);
//JO
var jo =                        new Perso('Jo',                         4,      'wano',     4,4,4,4,4,4,4,4,4,4);
var jobo =                      new Perso('Jobo',                       1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var john =                      new Perso('John',                       956,    'rocks',    902,0,0,54,0,0,0,0,0,0);
var johnGiant =                 new Perso('John_Giant',                 244,    'marine',   244,244,244,244,244,244,244,244,244,244);
var johnny =                    new Perso('Johnny',                     29,     'eb',       9,9,9,9,9,29,29,29,29,29);
var jora =                      new Perso('Jora',                       71,     'dqd',      71,71,71,71,71,71,71,71,71,71);
var jorge =                     new Perso('Jorge',                      1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var jorul =                     new Perso('Jorul',                      103,    'shinsekai', 103,103,103,103,103,103,103,103,103,103);
//JU
var judy =                      new Perso('Judy',                       1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var julius =                    new Perso('Julius',                     57,     'bb',       57,57,57,57,57,57,57,57,57,57);
var junan =                     new Perso('Junan',                      1,      'hp',       1,1,1,1,1,1,1,1,1,1);


//---K---//
//KA
var kabu =                      new Perso('Kabu',                       15,     'acp',      10,10,10,10,10,15,15,15,15,15);
var kadar =                     new Perso('Kadar',                      59,     'marine',   59,59,59,59,59,59,59,59,59,59);
var kagikko =                   new Perso('Kagikko',                    6,      'eb',       6,6,6,6,6,6,6,6,6,6);
var kaido =                     new Perso('Kaido',                      4800,   'k',        3400,4800,4800,4800,4800,4800,4800,4800,4800,4800);
var kairen =                    new Perso('Kairen',                     1,      'hp',       1,1,1,1,1,1,1,1,1,1);
var kairiken =                  new Perso('Kairiken',                   23,     'paradise', 23,23,23,23,23,23,23,23,23,23);
var kairoKureyo =               new Perso('Kairo_Kureyo',               267,    'paradise', 267,267,267,267,267,267,267,267,267,267);
var kaisoUrouge =               new Perso('Kaiso_Urouge',               480,    'supernova', 30,60,100,160,215,470,475,478,480,480);
var kaku =                      new Perso('Kaku',                       240,    'gm',       100,100,100,100,100,240,240,240,240,240);
var kaku2 =                     new Perso('Kaku_',                      7,      'k',        7,7,7,7,7,7,7,7,7,7);
var kakukaku =                  new Perso('Kakukaku',                   1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var kalifa =                    new Perso('Kalifa',                     47,     'gm',       35,35,40,40,40,47,47,47,47,47);
var kamakiri =                  new Perso('Kamakiri',                   45,     'ciel',     45,45,45,45,45,45,45,45,45,45);
var kaneshiro =                 new Perso('Kaneshiro',                  5,      'hp',       5,5,5,5,5,5,5,5,5,5);
var kanezenny =                 new Perso('Kanezenny',                  1,      'wb',       1,1,1,1,1,1,1,1,1,1);
var kanjuro =                   new Perso('Kanjuro',                    315,    'k',        315,315,315,315,315,315,315,315,315,315);
var kappa =                     new Perso('Kappa',                      1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var kapoty =                    new Perso('Kapoty',                     24,     'fox',      24,24,24,24,24,24,24,24,24,24);
var karasu =                    new Perso('Karasu',                     547,    'r',        447,447,447,447,447,547,547,547,547,547);
var karma =                     new Perso('Karma',                      69,     'bb',       69,69,69,69,69,69,69,69,69,69);
var kasa =                      new Perso('Kasa',                       1,      'shinsekai', 1,1,1,1,1,1,1,1,1,1);
var kasagoba =                  new Perso('Kasagoba',                   13,     'hp',       13,13,13,13,13,13,13,13,13,13);
var kashii =                    new Perso('Kashii',                     49,     'paradise', 34,34,40,40,40,49,49,49,49,49);
var katsuzo =                   new Perso('Katsuzo',                    1,      'wano',     1,1,1,1,1,1,1,1,1,1);
var kaya =                      new Perso('Kaya',                       1,      'eb',       1,1,1,1,1,1,1,1,1,1);
var kazekage =                  new Perso('Kazekage',                   13,     'k',        13,13,13,13,13,13,13,13,13,13);
//KE
var kebi =                      new Perso('Kebi',                       5,      'paradise', 5,5,5,5,5,5,5,5,5,5);
var kechatch =                  new Perso('Kechatch',                   76,     'bb',       76,76,76,76,76,76,76,76,76,76);
var keith =                     new Perso('Keith',                      7,      'zo',       7,7,7,7,7,7,7,7,7,7);
var kellyFunk =                 new Perso('Kelly_Funk',                 66,     'shinsekai', 66,66,66,66,66,66,66,66,66,66);
//KI
var kibagaeru =                 new Perso('Kibagaeru',                  32,     'fox',      32,32,32,32,32,32,32,32,32,32);
var kibin =                     new Perso('Kibin',                      27,     'marine',   27,27,27,27,27,27,27,27,27,27);
var kichiguVergo =              new Perso('Kichigu_Vergo',              263,    'dqd',      263,263,263,263,263,263,263,263,263,263);
var kiev =                      new Perso('Kiev',                       14,     'paradise', 14,14,14,14,14,14,14,14,14,14);
var kiku =                      new Perso('Kiku',                       13,     'amazon',   13,13,13,13,13,13,13,13,13,13);
var kikunojo =                  new Perso('Kikunojo',                   294,    'wano',     294,294,294,294,294,294,294,294,294,294);
var kikyo =                     new Perso('Kikyo',                      13,     'amazon',   13,13,13,13,13,13,13,13,13,13);
var killer =                    new Perso('Killer',                     730,    'supernova', 20,40,100,150,190,500,520,525,528,730);
var kimel =                     new Perso('Kimel',                      79,     'bb',       79,79,79,79,79,79,79,79,79,79);
var kinderella =                new Perso('Kinderella',                 1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var kinemon =                   new Perso('Kinemon',                    400,    'wano',     400,400,400,400,400,400,400,400,400,400);
var king =                      new Perso('King',                       1600,   'k',        1600,1600,1600,1600,1600,1600,1600,1600,1600,1600);
var kinga =                     new Perso('Kinga',                      78,     'bb',       78,78,78,78,78,78,78,78,78,78);
var kingdew =                   new Perso('Kingdew',                    325,    'bb',       325,325,325,325,325,325,325,325,325,325);
var kinoko =                    new Perso('Kinoko',                     245,    'baggy',    245,245,245,245,245,245,245,245,245,245);
var kisegawa =                  new Perso('Kisegawa',                   1,      'wano',     1,1,1,1,1,1,1,1,1,1);
var kitton =                    new Perso('Kitton',                     1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var kiwi =                      new Perso('Kiwi',                       1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
//KO
var koala =                     new Perso('Koala',                      120,    'r',        40,40,40,40,40,120,120,120,120,120);
var kobe =                      new Perso('Kobe',                       1,      'wano',     1,1,1,1,1,1,1,1,1,1);
var koby =                      new Perso('Koby',                       143,    'marine',   0.5,4,20,30,40,133,133,143,143,143);
var koda =                      new Perso('Koda',                       1,      'marine',   1,1,1,1,1,1,1,1,1,1);
var kokoro =                    new Perso('Kokoro',                     2,      'paradise', 2,2,2,2,2,2,2,2,2,2);
var komane =                    new Perso('Komane',                     1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var komir =                     new Perso('Komir',                      247,    'marine',   247,247,247,247,247,247,247,247,247,247);
var konbu =                     new Perso('Konbu',                      11,     'shinsekai', 11,11,11,11,11,11,11,11,11,11);
var kong =                      new Perso('Kong',                       1900,   'marine',   1900,1900,1900,1900,1900,1900,1900,1900,1900,1900);
var kop =                       new Perso('Kop',                        8,      'paradise', 8,8,8,8,8,8,8,8,8,8);
var kotatsu =                   new Perso('Kotatsu',                    75,     'bb',       75,75,75,75,75,75,75,75,75,75);
var kotori =                    new Perso('Kotori',                     46,     'ener',     40,42,45,45,45,46,46,46,46,46);
var koza =                      new Perso('Koza',                       26,     'paradise', 26,26,26,26,26,26,26,26,26,26);
var koze =                      new Perso('Koze',                       7,      'eb',       7,7,7,7,7,7,7,7,7,7);
var kozukiHiyori =              new Perso('Kozuki_Hiyori',              1,      'wano',     1,1,1,1,1,1,1,1,1,1);
var kozukiMomonosuke =          new Perso('Kozuki_Momonosuke',          2,      'wano',     0,0,0,0,0,1,1,1,1,2);
var kozukiOden =                new Perso('Kozuki_Oden',                3500,   'wano',     3500,0,0,0,0,0,0,0,0,0);
var kozukiSukiyaki =            new Perso('Kozuki_Sukiyaki',            489,    'wano',     489,0,0,0,0,0,0,0,0,0);
var kozukiToki =                new Perso('Kozuki_Toki',                2,      'wano',     2,2,2,2,2,2,2,2,2,2);
//KU
var kukai =                     new Perso('Kukai',                      76,     'bb',       76,76,76,76,76,76,76,76,76,76);
var kumadori =                  new Perso('Kumadori',                   47,     'gm',       35,35,35,35,35,47,47,47,47,47);
var kumadoriYamanbako =         new Perso('Kumadori_Yamanbako',         21,     'paradise', 21,21,21,21,21,21,21,21,21,21);
var kumagoro =                  new Perso('Kumagoro',                   1,      'wano',     1,1,1,1,1,1,1,1,1,1);
var kumashi =                   new Perso('Kumashi',                    19,     'moria',    19,19,19,19,19,19,19,19,19,19);
var kuni =                      new Perso('Kuni',                       14,     'k',        14,14,14,14,14,14,14,14,14,14);
var kureha =                    new Perso('Kureha',                     9,      'paradise', 9,9,9,9,9,9,9,9,9,9);
var kuro =                      new Perso('Kuro',                       36,     'eb',       36,36,36,36,36,36,36,36,36,36);
var kuromarimo =                new Perso('Kuromarimo',                 23,     'paradise', 23,23,23,23,23,23,23,23,23,23);
var kuroobi =                   new Perso('Kuroobi',                    18,     'hp',       18,18,18,18,18,18,18,18,18,18);
var kurotsuru =                 new Perso('Kurotsuru',                  1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var kurozumiHigurashi =         new Perso('Kurozumi_Higurashi',         1,      'k',        1,1,1,1,1,1,1,1,1,1);
var kurozumiOrochi =            new Perso('Kurozumi_Orochi',            95,     'wano',     95,95,95,95,95,95,95,95,95,95);
var kurozumiSemimaru =          new Perso('Kurozumi_Semimaru',          1,      'k',        1,1,1,1,1,1,1,1,1,1);
var kuzanAokiji =               new Perso('Kuzan_Aokiji',               2290,   'marine',   2000,2000,2000,2000,2000,2290,2290,2290,2290,2290);
//KY
var kyros =                     new Perso('Kyros',                      150,    'shinsekai', 30,30,30,30,30,30,30,150,150,150);
var kyuin =                     new Perso('Kyuin',                      67,     'dqd',      67,67,67,67,67,67,67,67,67,67);
var kyuji =                     new Perso('Kyuji',                      1,      'marine',   1,1,1,1,1,1,1,1,1,1);
var kyukyu =                    new Perso('Kyukyu',                     1,      'paradise', 1,1,1,1,1,1,1,1,1,1);


//---L---//
//LA
var lacroix =                   new Perso('Lacroix',                    245,    'marine',   245,245,245,245,245,245,245,245,245,245);
var lacuba =                    new Perso('Lacuba',                     17,     'paradise', 17,17,17,17,17,17,17,17,17,17);
var ladyAlvida =                new Perso('Lady_Alvida',                18,     'baggy',    18,18,18,18,18,18,18,18,18,18);
var laffite =                   new Perso('Laffite',                    640,    'bn',       70,100,110,130,150,600,610,620,630,640);
var laki =                      new Perso('Laki',                       20,     'ciel',     20,20,20,20,20,20,20,20,20,20);
var laoG =                      new Perso('Lao_G',                      81,     'dqd',      81,81,81,81,81,81,81,81,81,81);
var laskey =                    new Perso('Laskey',                     46,     'gm',       30,32,33,34,35,46,46,46,46,46);
var lassou =                    new Perso('Lassou',                     2,      'bw',       2,0,0,0,0,0,0,0,0,0);
//LE
var lebouc =                    new Perso('Lebouc',                     11,     'zo',       11,11,11,11,11,11,11,11,11,11);
var lemoncheese =               new Perso('Lemoncheese',                1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var leo =                       new Perso('Leo',                        18,     'acp',      10,10,10,10,10,18,18,18,18,18);
var leonero =                   new Perso('Leonero',                    89,     'bb',       89,89,89,89,89,89,89,89,89,89);
//LI
var lily =                      new Perso('Lily',                       29,     'paradise', 29,29,29,29,29,29,29,29,29,29);
var lindbergh =                 new Perso('Lindbergh',                  517,    'r',        417,417,417,417,417,517,517,517,517,517);
var lines =                     new Perso('Lines',                      6,      'marine',   6,6,6,6,6,6,6,6,6,6);
var lipDoughty =                new Perso('Lip_Doughty',                88,     'paradise', 88,88,88,88,88,88,88,88,88,88);
var littleOzJr =                new Perso('Little_Oz_Jr',               389,    'bb',       389,389,389,389,389,389,389,389,389,389);
//LO
var loki =                      new Perso('Loki',                       120,    'shinsekai', 120,120,120,120,120,120,120,120,120,120);
var lombric =                   new Perso('Lombric',                    24,     'fox',      24,24,24,24,24,24,24,24,24,24);
//Lu
var luckyRoo =                  new Perso('Lucky_Roo',                  1050,   'sr',       1050,1050,1050,1050,1050,1050,1050,1050,1050,1050);
var lulis =                     new Perso('Lulis',                      1,      'hp',       1,1,1,1,1,1,1,1,1,1);


//---M---//
//MA
var machvise =                  new Perso('Machvise',                   80,     'dqd',      80,80,80,80,80,80,80,80,80,80);
var macro =                     new Perso('Macro',                      18,     'hp',       18,18,18,18,18,18,18,18,18,18);
var macro2 =                    new Perso('Macro_',                     4,      'ener',     4,4,4,4,4,4,4,4,4,4);
var madilloman =                new Perso('Madilloman',                 30,     'k',        30,30,30,30,30,30,30,30,30,30);
var magellan =                  new Perso('Magellan',                   1490,   'marine',   1490,1490,1490,1490,1490,1490,1490,1490,1490,1490);
var magra =                     new Perso('Magra',                      5,      'eb',       5,5,5,5,5,5,5,5,5,5);
var maidy =                     new Perso('Maidy',                      1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var makino =                    new Perso('Makino',                     1,      'eb',       1,1,1,1,1,1,1,1,1,1);
var makko =                     new Perso('Makko',                      6,      'marine',   6,6,6,6,6,6,6,6,6,6);
var manboshi =                  new Perso('Manboshi',                   16,     'hp',       16,16,16,16,16,16,16,16,16,16);
var mani =                      new Perso('Mani',                       25,     'paradise', 25,25,25,25,25,25,25,25,25,25);
var manjaro =                   new Perso('Manjaro',                    12,     'paradise', 12,12,12,12,12,12,12,12,12,12);
var manshelly =                 new Perso('Manshelly',                  1,      'shinsekai', 1,1,1,1,1,1,1,1,1,1);
var marco =                     new Perso('Marco',                      1750,   'bb',       1600,1600,1600,1600,1600,1750,1750,1750,1750,1750);
var margarita =                 new Perso('Margarita',                  1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var marguerite =                new Perso('Marguerite',                 13,     'amazon',   13,13,13,13,13,13,13,13,13,13);
var mariaNapole =               new Perso('Maria_Napole',               1,      'hp',       1,1,1,1,1,1,1,1,1,1);
var marie =                     new Perso('Marie',                      1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var marilyn =                   new Perso('Marilyn',                    1,      'ciel',     1,1,1,1,1,1,1,1,1,1);
var marin =                     new Perso('Marin',                      2,      'paradise', 2,2,2,2,2,2,2,2,2,2);
var marshallDTeach =            new Perso('Marshall_D_Teach',           4300,   'bn',       500,500,1000,1500,1500,4000,4100,4200,4300,4300);
var marumieta =                 new Perso('Marumieta',                  1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var mashikaku =                 new Perso('Mashikaku',                  7,      'marine',   7,7,7,7,7,7,7,7,7,7);
var masira =                    new Perso('Masira',                     32,     'paradise', 32,32,32,32,32,32,32,32,32,32);
var maskedDeuce =               new Perso('Masked_Deuce',               344,    'bb',       344,344,344,344,344,344,344,344,344,344);
var maujii =                    new Perso('Maujii',                     2,      'shinsekai', 2,2,2,2,2,2,2,2,2,2);
var maxMarks =                  new Perso('Max_Marks',                  200,    'roger',    200,200,200,200,200,200,200,200,200,200);
var maynard =                   new Perso('Maynard',                    249,    'marine',   249,249,249,249,249,249,249,249,249,249);
var mayushika =                 new Perso('Mayushika',                  10,     'ciel',     10,10,10,10,10,10,10,10,10,10);
//MC
var mcGuy =                     new Perso('McGuy',                      78,     'bb',       78,78,78,78,78,78,78,78,78,78);
var mcKinley =                  new Perso('Mc_Kinley',                  22,     'ener',     22,22,22,22,22,22,22,22,22,22);
//ME
var meadows =                   new Perso('Meadows',                    45,     'shinsekai', 45,45,45,45,45,45,45,45,45,45);
var mero =                      new Perso('Mero',                       1,      'hp',       1,1,1,1,1,1,1,1,1,1);
var merry =                     new Perso('Merry',                      2,      'eb',       2,2,2,2,2,2,2,2,2,2);
//MI
var michael =                   new Perso('Michael',                    1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var mihar =                     new Perso('Mihar',                      143,    'bb',       143,143,143,143,143,143,143,143,143,143);
var mikazuki =                  new Perso('Mikazuki',                   36,     'paradise', 36,36,36,36,36,36,36,36,36,36);
var mikioItoo =                 new Perso('Mikio_Itoo',                 4,      'eb',       4,4,4,4,4,4,4,4,4,4);
var mikita =                    new Perso('Mikita',                     21,     'bw',       21,21,21,21,21,21,21,21,21,21);
var milky =                     new Perso('Milky',                      11,     'zo',       11,11,11,11,11,11,11,11,11,11);
var milletPine =                new Perso('Millet_Pine',                200,    'roger',    200,200,200,200,200,200,200,200,200,200);
var minatomo =                  new Perso('Minatomo',                   1,      'eb',       1,1,1,1,1,1,1,1,1,1);
var minatomo2 =                 new Perso('Minatomo_',                  1,      'wano',     1,1,1,1,1,1,1,1,1,1);
var ministreGauche =            new Perso('Ministre_Gauche',            2,      'hp',       2,2,2,2,2,2,2,2,2,2);
var ministreDroit =             new Perso('Ministre_Droit',             9,      'hp',       9,9,9,9,9,9,9,9,9,9);
var minochihuahua =             new Perso('Minochihuahua',              11,     'marine',   11,11,11,11,11,11,11,11,11,11);
var minokoala =                 new Perso('Minokoala',                  167,    'marine',   167,167,167,167,167,167,167,167,167,167);
var minorhinoceros =            new Perso('Minorhinoceros',             167,    'marine',   167,167,167,167,167,167,167,167,167,167);
var minoruba =                  new Perso('Minoruba',                   23,     'paradise', 23,23,23,23,23,23,23,23,23,23);
var minotaurus =                new Perso('Minotaurus',                 167,    'marine',   167,167,167,167,167,167,167,167,167,167);
var minozebra =                 new Perso('Minozebra',                  167,    'marine',   167,167,167,167,167,167,167,167,167,167);
var missCatharina =             new Perso('Miss_Catharina',             3,      'bw',       3,3,3,3,3,3,3,3,3,3);
var missFathersDay =            new Perso('Miss_Fathers_Day',           17,     'bw',       17,17,17,17,17,17,17,17,17,17);
var missGoldenweek =            new Perso('Miss_Goldenweek',            31,     'bw',       31,31,31,31,31,31,31,31,31,31);
var missMonday =                new Perso('Miss_Monday',                12,     'bw',       12,12,12,12,12,12,12,12,12,12);
var missMothersDay =            new Perso('Miss_Mothers_Day',           19,     'bw',       19,19,19,19,19,19,19,19,19,19);
var missSaturday =              new Perso('Miss_Saturday',              6,      'bw',       6,6,6,6,6,6,6,6,6,6);
var missThursday =              new Perso('Miss_Thursday',              7,      'bw',       7,7,7,7,7,7,7,7,7,7);
var missTuesday =               new Perso('Miss_Tuesday',               8,      'bw',       8,8,8,8,8,8,8,8,8,8);
var mizerka =                   new Perso('Mizerka',                    70,     'k',        70,70,70,70,70,70,70,70,70,70);
var mizuira =                   new Perso('Mizuira',                    0.2,    'wb',       0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2,0.2);
var mizutaMadaisuki =           new Perso('Mizuta_Madaisuki',           25,     'wb',       25,25,25,25,25,25,25,25,25,25);
var mizutaMawaritosuki =        new Perso('Mizuta_Mawaritosuki',        25,     'wb',       25,25,25,25,25,25,25,25,25,25);
//MO
var mocha =                     new Perso('Mocha',                      11,     'shinsekai', 11,11,11,11,11,11,11,11,11,11);
var mochi =                     new Perso('Mochi',                      1,      'ciel',     1,1,1,1,1,1,1,1,1,1);
var moda =                      new Perso('Moda',                       1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var momonga =                   new Perso('Momonga',                    320,    'marine',   320,320,320,320,320,320,320,320,320,320);
var monda =                     new Perso('Monda',                      24,     'fox',      24,24,24,24,24,24,24,24,24,24);
var monet =                     new Perso('Monet',                      120,    'dqd',      120,120,120,120,120,120,120,120,120,120);
var monji =                     new Perso('Monji',                      11,     'zo',       11,11,11,11,11,11,11,11,11,11);
var monkeyDDragon =             new Perso('Monkey_D_Dragon',            3200,   'r',        3200,3200,3200,3200,3200,3200,3200,3200,3200,3200);
var monkeyDGarp =               new Perso('Monkey_D_Garp',              2200,   'marine',   4200,2200,2200,2200,2200,2200,2200,2200,2200,2200);
var monkeyDLuffy =              new Perso('Monkey_D_luffy',             3800,   'cp',       100,180,260,500,420,1000,1000,1000,1500,3500);
var montblancCricket =          new Perso('Montblanc_Cricket',          41,     'paradise', 41,41,41,41,41,41,41,41,41,41);
var montblancNorland =          new Perso('Montblanc_Norland',          88,     'paradise', 0,0,0,0,0,0,0,0,0,0);
var moonIsaacJr =               new Perso('Moon_Isaac_Jr',              200,    'roger',    200,200,200,200,200,200,200,200,200,200);
var morgan =                    new Perso('Morgan',                     31,     'marine',   31,31,31,31,31,31,31,31,31,31);
var morgans =                   new Perso('Morgans',                    92,     'shinsekai', 92,92,92,92,92,92,92,92,92,92);
var morge =                     new Perso('Morge',                      25,     'baggy',    10,10,10,10,10,25,25,25,25,25);
var morley =                    new Perso('Morley',                     519,    'r',        419,419,419,419,419,519,519,519,519,519);
var mornin =                    new Perso('Mornin',                     1,      'eb',       1,1,1,1,1,1,1,1,1,1);
var mororon =                   new Perso('Mororon',                    1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var motzel =                    new Perso('Motzel',                     1,      'eb',       1,1,1,1,1,1,1,1,1,1);
var moumousagi =                new Perso('Moumousagi',                 210,    'marine',   210,210,210,210,210,210,210,210,210,210);
var mountainRicky =             new Perso('Mountain_Ricky',             24,     'fox',      24,24,24,24,24,24,24,24,24,24);
var mountblutain =              new Perso('Mountblutain',               13,     'paradise', 13,13,13,13,13,13,13,13,13,13);
var mouseman =                  new Perso('Mouseman',                   30,     'k',        30,30,30,30,30,30,30,30,30,30);
var mousse =                    new Perso('Mousse',                     1,      'ciel',     1,1,1,1,1,1,1,1,1,1);
var moyle =                     new Perso('Moyle',                      4,      'ciel',     4,4,4,4,4,4,4,4,4,4);
var mozambia =                  new Perso('Mozambia',                   213,    'marine',   213,213,213,213,213,213,213,213,213,213);
var mozu =                      new Perso('Mozu',                       1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
//MR
var mr6 =                       new Perso('Mr_6',                       21,     'bw',       21,21,21,21,21,21,21,21,21,21);
var mr7 =                       new Perso('Mr_7',                       19,     'bw',       19,19,19,19,19,19,19,19,19,19);
var mr9 =                       new Perso('Mr_9',                       10,     'bw',       10,10,10,10,10,10,10,10,10,10);
var mr10 =                      new Perso('Mr_10',                      9,      'bw',       9,9,9,9,9,9,9,9,9,9);
var mr11 =                      new Perso('Mr_11',                      8,      'bw',       8,8,8,8,8,8,8,8,8,8);
var mr12 =                      new Perso('Mr_12',                      7,      'bw',       7,7,7,7,7,7,7,7,7,7);
var mrBeans =                   new Perso('Mr_Beans',                   5,      'bw',       5,5,5,5,5,5,5,5,5,5);
var mrLove =                    new Perso('Mr_Love',                    5,      'bw',       5,5,5,5,5,5,5,5,5,5);
var mrMellow =                  new Perso('Mr_Mellow',                  5,      'bw',       5,5,5,5,5,5,5,5,5,5);
var mrMomora =                  new Perso('Mr_Momora',                  200,    'roger',    200,200,200,200,200,200,200,200,200,200);
var mrShimizu =                 new Perso('Mr_Shimizu',                 4,      'bw',       4,4,4,4,4,4,4,4,4,4);
//MU
var muchana =                   new Perso('Muchana',                    1,      'marine',   1,1,1,1,1,1,1,1,1,1);
var murgen =                    new Perso('Mugren',                     200,    'roger',    200,200,200,200,200,200,200,200,200,200);
var mukkashimiTower =           new Perso('Mukkashimi_Tower',           1,      'shinsekai', 1,1,1,1,1,1,1,1,1,1);
var mule =                      new Perso('Mule',                       25,     'paradise', 25,25,25,25,25,25,25,25,25,25);
var mummy =                     new Perso('Mummy',                      46,     'shinsekai', 46,46,46,46,46,46,46,46,46,46);
var mummyMee =                  new Perso('Mummy_Mee',                  1,      'eb',       1,1,1,1,1,1,1,1,1,1);


//---N---//
//NA
var nako =                      new Perso('Nako',                       1,      'eb',       1,1,1,1,1,1,1,1,1,1);
var nami =                      new Perso('Nami',                       170,    'cp',       1,1,3,4,5,38,38,38,70,170);
var namur =                     new Perso('Namur',                      500,    'bb',       500,500,500,500,500,500,500,500,500,500);
var natto =                     new Perso('Natto',                      2,      'paradise', 2,2,2,2,2,2,2,2,2,2);
var nazuKetagari =              new Perso('Nazu_Ketagari',              203,    'marine',   203,203,203,203,203,203,203,203,203,203);
//NE
var nefertariCobra =            new Perso('Nefertari_Cobra',            4,      'paradise', 4,4,4,4,4,4,4,4,4,4);
var nefertariTiti =             new Perso('Nefertari_Titi',             1,      'paradise', 0,0,0,0,0,0,0,0,0,0);
var nefertariVivi =             new Perso('Nefertari_Vivi',             10,     'bw',       10,10,10,10,10,10,10,10,10,10);
var negikumaMaria =             new Perso('Negikuma_Maria',             1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var nekomamushi =               new Perso('Nekomamushi',                650,    'wano',     390,390,390,390,390,390,390,390,390,650);
var neptune =                   new Perso('Neptune',                    55,     'hp',       55,55,55,55,55,55,55,55,55,55);
var nero =                      new Perso('Nero',                       47,     'gm',       35,35,35,35,35,47,47,47,47,47);
var nerine =                    new Perso('Nerine',                     14,     'amazon',   14,14,14,14,14,14,14,14,14,14);
var nezumi =                    new Perso('Nezumi',                     27,     'marine',   27,27,27,27,27,27,27,27,27,27);
//NI
var nicoOlivia =                new Perso('Nico_Olivia',                3,      'wb',       3,3,3,3,3,3,3,3,3,3);
var nicoRobin =                 new Perso('Nico_Robin',                 600,    'cp',       70,80,90,100,103,220,222,224,226,600);
var nigeratta =                 new Perso('Nigeratta',                  4,      'wb',       4,4,4,4,4,4,4,4,4,4);
var nika =                      new Perso('Nika',                       0.2,    'hp',       0,0,0,0,0,0,0,0,0,0);
var nin =                       new Perso('Nin',                        1,      'moria',    1,1,1,1,1,1,1,1,1,1);
var ninjin =                    new Perso('Ninjin',                     1,      'eb',       0.4,1,1,1,1,1,1,1,1,1)
var ninth =                     new Perso('Ninth',                      99,     'bb',       99,99,99,99,99,99,99,99,99,99);
var nnkeKun =                   new Perso('Nnke-Kun',                   2,      'baggy',    2,2,2,2,2,2,2,2,2,2);
//NO
var nojiko =                    new Perso('Nojiko',                     2,      'eb',       2,2,2,2,2,2,2,2,2,2);
var noraGitsune =               new Perso('Nora_Gitsune',               4,      'paradise', 4,4,4,4,4,4,4,4,4,4);
var nosgarl =                   new Perso('Nosgarl',                    79,     'bb',       79,79,79,79,79,79,79,79,79,79);
var nozdon =                    new Perso('Nozdon',                     200,    'roger',    200,100,100,100,100,100,100,100,100,100);
//NU
var nubon =                     new Perso('Nubon',                      4,      'acp',      4,4,4,4,4,4,4,4,4,4);
var nugireYainu =               new Perso('Nugire_Yainu',               17,     'eb',       17,17,17,17,17,17,17,17,17,17);
var number1 =                   new Perso('Inbi',                       250,    'k',        250,250,250,250,250,250,250,250,250,250);
var number2 =                   new Perso('Fuga',                       250,    'k',        250,250,250,250,250,250,250,250,250,250);
var number3 =                   new Perso('Zanki',                      250,    'k',        250,250,250,250,250,250,250,250,250,250);
var number4 =                   new Perso('Jaki',                       250,    'k',        250,250,250,250,250,250,250,250,250,250);
var number5 =                   new Perso('Goki',                       250,    'k',        250,250,250,250,250,250,250,250,250,250);
var number6 =                   new Perso('Rokki',                      250,    'k',        250,250,250,250,250,250,250,250,250,250);
var number7 =                   new Perso('Nagi',                       250,    'k',        250,250,250,250,250,250,250,250,250,250);
var number8 =                   new Perso('Hatcha',                     250,    'k',        250,250,250,250,250,250,250,250,250,250);
var number9 =                   new Perso('Kunyun',                     250,    'k',        250,250,250,250,250,250,250,250,250,250);
var number10 =                  new Perso('Juki',                       250,    'k',        250,250,250,250,250,250,250,250,250,250);


//---O---//
var ocho =                      new Perso('Ocho',                       199,    'wano',     199,199,199,199,199,199,199,199,199,199);
var octopako =                  new Perso('Octopako',                   4,      'hp',       4,4,4,4,4,4,4,4,4,4);
var octy =                      new Perso('Octy',                       21,     'hp',       21,21,21,21,21,21,21,21,21,21);
var ohm =                       new Perso('Ohm',                        70,     'ener',     70,70,70,70,70,70,70,70,70,70);
var ohmasa =                    new Perso('Ohmasa',                     199,    'wano',     199,199,199,199,199,199,199,199,199,199);
var oimo =                      new Perso('Oimo',                       49,     'paradise', 34,34,34,35,35,49,49,49,49,49);
var okame =                     new Perso('Okame',                      3,      'paradise', 3,3,3,3,3,3,3,3,3,3);
var okome =                     new Perso('Okome',                      15,     'paradise', 15,15,15,15,15,15,15,15,15,15);
var onigumo =                   new Perso('Onigumo',                    245,    'marine',   245,245,245,245,245,245,245,245,245,245);
var oran =                      new Perso('Oran',                       1,      'wb',       1,1,1,1,1,1,1,1,1,1);
var orlombus =                  new Perso('Orlombus',                   149,    'acp',      50,55,60,65,70,120,120,145,149,149);
var ossamondo =                 new Perso('Ossamondo',                  87,     'bb',       87,87,87,87,87,87,87,87,87,87);
var otohime =                   new Perso('Otohime',                    1,      'hp',       1,1,1,1,1,1,1,1,1,1);
var outlookIII =                new Perso('Outlook_III',                1,      'eb',       1,1,1,1,1,1,1,1,1,1);
var oz =                        new Perso('Oz',                         490,    'moria',    490,490,490,490,490,490,490,490,490,490);


//---P---//
//PA
var packy =                     new Perso('Packy',                      7,      'eb',       7,7,7,7,7,7,7,7,7,7);
var pagaya =                    new Perso('Pagaya',                     1,      'ciel',     1,1,1,1,1,1,1,1,1,1);
var pageOne =                   new Perso('Page_One',                   390,    'k',        290,290,290,290,290,390,390,390,390,390);
var palms =                     new Perso('Palms',                      68,     'bb',       68,68,68,68,68,68,68,68,68,68);
var pandaman =                  new Perso('Pandaman',                   45,     'eb',       3,6,9,12,15,20,25,30,35,45);
var pandawoman =                new Perso('Pandawoman',                 45,     'paradise', 3,6,9,12,15,20,25,30,35,45);
var pankutaDakeyan =            new Perso('Pankuta_Dakeyan',            35,     'paradise', 35,35,35,35,35,35,35,35,35,35);
var pansy =                     new Perso('Pansy',                      14,     'amazon',   14,14,14,14,14,14,14,14,14,14);
var pantri =                    new Perso('Pantri',                     1,      'ciel',     1,1,1,1,1,1,1,1,1,1);
var papaneel =                  new Perso('Papaneel',                   7,      'hp',       7,7,7,7,7,7,7,7,7,7);
var pappag =                    new Perso('Pappag',                     1,      'hp',       1,1,1,1,1,1,1,1,1,1);
var pascia =                    new Perso('Pascia',                     1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var patty =                     new Perso('Patty',                      4,      'eb',       4,4,4,4,4,4,4,4,4,4);
var pauly =                     new Perso('Pauly',                      45,     'paradise', 40,40,42,42,42,45,45,45,45,45);
var pavlik =                    new Perso('Pavlik',                     97,     'bb',       97,97,97,97,97,97,97,97,97,97);
//PE
var pearl =                     new Perso('Pearl',                      22,     'eb',       22,22,22,22,22,22,22,22,22,22);
var peeplyLulu =                new Perso('Peeply_Lulu',                3,      'paradise', 3,3,3,3,3,3,3,3,3,3);
var pedro =                     new Perso('Pedro',                      200,    'zo',       200,200,200,200,200,200,200,200,200,200);
var pekkori =                   new Perso('Pekkori',                    2,      'paradise', 2,2,2,2,2,2,2,2,2,2);
var pekoms =                    new Perso('Pekoms',                     163,    'bm',       163,163,163,163,163,163,163,163,163,163);
var pell =                      new Perso('Pell',                       26,     'paradise', 26,26,26,26,26,26,26,26,26,26);
var pellini =                   new Perso('Pellini',                    4,      'acp',      4,4,4,4,4,4,4,4,4,4);
var penguin =                   new Perso('Penguin',                    60,     'shinsekai', 15,15,15,15,15,60,60,60,60,60);
var peppoko =                   new Perso('Peppoko',                    3,      'baggy',    3,3,3,3,3,3,3,3,3,3);
var perona =                    new Perso('Perona',                     48,     'moria',    35,35,35,35,35,48,48,48,48,48);
var peterman =                  new Perso('Peterman',                   15,     'paradise', 15,15,15,15,15,15,15,15,15,15);
var petermoo =                  new Perso('Petermoo',                   200,    'roger',    200,200,200,200,200,200,200,200,200,200);
//PI
var pica =                      new Perso('Pica',                       364,    'dqd',      364,364,364,364,364,364,364,364,364,364);
var pickles =                   new Perso('Pickles',                    33,     'fox',      33,33,33,33,33,33,33,33,33,33);
var piiman =                    new Perso('Piiman',                     1,      'eb',       0.4,1,1,1,1,1,1,1,1,1);
var pike =                      new Perso('Pike',                       4,      'marine',   4,4,4,4,4,4,4,4,4,4);
var pisaro =                    new Perso('Pisaro',                     5,      'hp',       5,5,5,5,5,5,5,5,5,5);
//PO
var poker =                     new Perso('Poker',                      130,    'k',        130,130,130,130,130,130,130,130,130,130);
var poppoko =                   new Perso('Poppoko',                    3,      'baggy',    3,3,3,3,3,3,3,3,3,3);
var poppy =                     new Perso('Poppy',                      14,     'amazon',   14,14,14,14,14,14,14,14,14,14);
var porche =                    new Perso('Porche',                     33,     'fox',      33,33,33,33,33,33,33,33,33,33);
var porchemy =                  new Perso('Porchemy',                   2,      'eb',       2,2,2,2,2,2,2,2,2,2);
var poro =                      new Perso('Poro',                       1,      'eb',       1,1,1,1,1,1,1,1,1,1);
var portgasDAce =               new Perso('Portgas_D_Ace',              1300,   'bb',       1000,1000,1000,1000,1300,0,0,0,0,0);
var portgasDRouge =             new Perso('Portgas_D_Rouge',            3,      'roger',    3,3,3,3,3,3,3,3,3,3);
var potaufeu =                  new Perso('Potaufeu',                   1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var potsun =                    new Perso('Potsun',                     1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var pound =                     new Perso('Pound',                      15,     'shinsekai', 15,15,15,15,15,15,15,15,15,15);
//PU
var puddingPudding =            new Perso('Pudding-Pudding',            35,     'marine',   35,35,35,35,35,35,35,35,35,35);
var puppu =                     new Perso('Puppu',                      21,     'paradise', 21,21,21,21,21,21,21,21,21,21);


//---Q---//
var queen =                     new Perso('Queen',                      1017,   'k',        1017,1017,1017,1017,1017,1017,1017,1017,1017,1017);


//---R---//
//RA
var rabbitman =                 new Perso('Rabbitman',                  20,     'k',        20,20,20,20,20,20,20,20,20,20);
var raccoon =                   new Perso('Raccoon',                    94,     'wb',       94,94,94,94,94,94,94,94,94,94);
var raideen =                   new Perso('Raideen',                    99,     'shinsekai', 99,99,99,99,99,99,99,99,99,99);
var raijin =                    new Perso('Raijin',                     14,     'k',        14,14,14,14,14,14,14,14,14,14);
var raizo =                     new Perso('Raizo',                      310,    'wano',     310,310,310,310,310,310,310,310,310,310);
var rakuda =                    new Perso('Rakuda',                     3,      'wano',     3,3,3,3,3,3,3,3,3,3);
var rakuyo =                    new Perso('Rakuyo',                     650,    'bb',       650,650,650,650,650,650,650,650,650,650);
var ramba =                     new Perso('Ramba',                      90,     'bb',       90,90,90,90,90,90,90,90,90,90);
var ramen =                     new Perso('Ramen',                      1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var rampo =                     new Perso('Rampo',                      4,      'acp',      4,4,4,4,4,4,4,4,4,4);
var ran =                       new Perso('Ran',                        13,     'amazon',   13,13,13,13,13,13,13,13,13,13);
var rangram =                   new Perso('Rangram',                    200,    'roger',    200,200,200,200,200,200,200,200,200,200);
//RE
var rebecca =                   new Perso('Rebecca',                    67,     'shinsekai', 67,67,67,67,67,67,67,67,67,67);
var reforte =                   new Perso('Reforte',                    79,     'bb',       79,79,79,79,79,79,79,79,79,79);
var reuder =                    new Perso('Reuder',                     1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var reverse =                   new Perso('Reverse',                    25,     'paradise', 25,25,25,25,25,25,25,25,25,25);
//RI
var richy =                     new Perso('Richy',                      14,     'baggy',    9,9,9,9,9,14,14,14,14,14);
var rika =                      new Perso('Rika',                       1,      'eb',       1,1,1,1,1,1,1,1,1,1);
var rikuDoldoIII =              new Perso('Riku_Doldo_III',             68,     'shinsekai', 68,68,68,68,68,68,68,68,68,68);
var rindo =                     new Perso('Rindo',                      12,     'amazon',   12,12,12,12,12,12,12,12,12,12);
var rint =                      new Perso('Rint',                       1,      'wb',       1,1,1,1,1,1,1,1,1,1);
var ripper =                    new Perso('Ripper',                     11,     'marine',   11,11,11,11,11,11,11,11,11,11);
var riskyBrothers =             new Perso('Risky_Brothers',             21,     'paradise', 21,21,21,21,21,21,21,21,21,21);
//RO
var road =                      new Perso('Road',                       105,    'acp',      100,100,100,100,100,105,105,105,105,105);
var robLucci =                  new Perso('Rob_Lucci',                  275,    'gm',       200,200,200,200,200,275,275,275,275,275);
var roche =                     new Perso('Roche',                      1,      'wb',       1,1,1,1,1,1,1,1,1,1);
var rocheTomson =               new Perso('Roche_Tomson',               233,    'paradise', 233,233,233,233,233,233,233,233,233,233);
var rocksDXebec =               new Perso('Rocks_D_Xebec',              5300,   'rocks',    5300,5300,5300,5300,5300,5300,5300,5300,5300,5300);
var rockstar =                  new Perso('Rockstar',                   265,    'sr',       265,265,265,265,265,265,265,265,265,265);
var rody =                      new Perso('Rody',                       100,    'zo',       100,100,100,100,100,100,100,100,100,100);
var roji =                      new Perso('Roji',                       1,      'wb',       1,1,1,1,1,1,1,1,1,1);
var rokkaku =                   new Perso('Rokkaku',                    6,      'marine',   6,6,6,6,6,6,6,6,6,6);
var rollingLogan =              new Perso('Rolling_Logan',              78,     'shinsekai',78,78,78,78,78,78,78,78,78,78);
var ronse =                     new Perso('Ronse',                      244,    'marine',   244,244,244,244,244,244,244,244,244,244);
var roronoaZoro =               new Perso('Roronoa_Zoro',               1500,   'cp',       50,70,120,200,250,650,650,666,766,1500);
var roshio =                    new Perso('Roshio',                     42,     'paradise', 42,42,0,0,0,0,0,0,0,0);
var roth =                      new Perso('Roth',                       25,     'paradise', 25,25,25,25,25,25,25,25,25,25);
var rowing =                    new Perso('Rowing',                     200,    'roger',    200,200,200,200,200,200,200,200,200,200);
//RU
var run =                       new Perso('Run',                        37,     'shinsekai', 37,37,37,37,37,37,37,37,37,37);
var rush =                      new Perso('Rush',                       78,     'bb',       78,78,78,78,78,78,78,78,78,78);
var russian =                   new Perso('Russian',                    1,      'shinsekai', 1,1,1,1,1,1,1,1,1,1);
//RY
var ryokugyu =                  new Perso('Ryokugyu',                   1940,   'marine',   1940,1940,1940,1940,1940,1940,1940,1940,1940,1940);
var ryuboshi =                  new Perso('Ryuboshi',                   17,     'hp',       17,17,17,17,17,17,17,17,17,17);


//---S---//
//SA
var saber =                     new Perso('Saber',                      76,     'bb',       76,76,76,76,76,76,76,76,76,76);
var sabo =                      new Perso('Sabo',                       1700,   'r',        1000,1000,1000,1000,1000,1700,1700,1700,1700,1700);
var sadi =                      new Perso('Sadi',                       122,    'marine',   122,122,122,122,122,122,122,122,122,122);
var sakazukiAkainu =            new Perso('Sakazuki_Akainu',            2300,   'marine',   2000,2000,2000,2000,2000,2300,2300,2300,2300,2300);
var saki =                      new Perso('Saki',                       1,      'wano',     1,1,1,1,1,1,1,1,1,1);
var saldeath =                  new Perso('Saldeath',                   101,    'marine',   101,101,101,101,101,101,101,101,101,101);
var sam =                       new Perso('Sam',                        1,      'eb',       1,1,1,1,1,1,1,1,1,1);
var samosa =                    new Perso('Samosa',                     1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var samuraiBatts =              new Perso('Samurai_Batts',              1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var sancrin =                   new Perso('Sancrin',                    1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var sanjuanWolf =               new Perso('Sanjuan_Wolf',               307,    'bn',       307,307,307,307,307,307,307,307,307,307);
var sanka =                     new Perso('Sanka',                      0.2,    'hp',       0,0,0,0,0,0,0,0,0,0);
var sapi =                      new Perso('Sapi',                       1,      'eb',       1,1,1,1,1,1,1,1,1,1);
var sarahebi =                  new Perso('Sarahebi',                   20,     'k',        20,20,20,20,20,20,20,20,20,20);
var sarfunkel =                 new Perso('Sarfunkel',                  1,      'eb',       1,1,1,1,1,1,1,1,1,1);
var sarieNantokanette =         new Perso('Sarie_Nantokanette',         1,      'eb',       1,1,1,1,1,1,1,1,1,1);
var sarquiss =                  new Perso('Sarquiss',                   43,     'paradise', 40,40,40,40,40,43,43,43,43,43);
var sarutobi =                  new Perso('Sarutobi',                   21,     'k',        21,21,21,21,21,21,21,21,21,21);
var sasaki =                    new Perso('Sasaki',                     515,    'k',        415,415,415,415,415,515,515,515,515,515);
var satori =                    new Perso('Satori',                     70,     'ener',     70,70,70,70,70,70,70,70,70,70);
//SC
var scarlett =                  new Perso('Scarlett',                   1,      'shinsekai',1,1,1,1,1,1,1,1,1,1);
var schollzo =                  new Perso('Schollzo',                   17,     'paradise', 17,17,17,17,17,17,17,17,17,17);
var scopperGabane =             new Perso('Scopper_Gabane',             1900,   'roger',    2500,1900,1900,1900,1900,1900,1900,1900,1900,1900);
var scotch =                    new Perso('Scotch',                     23,     'k',        23,23,23,23,23,23,23,23,23,23);
var scratchmenApoo =            new Perso('Scratchmen_Apoo',            595,    'supernova', 30,60,120,200,280,590,590,590,590,595);
//SE
var seamars =                   new Perso('Seamars',                    24,     'lune',     24,24,24,24,24,24,24,24,24,24);
var seira =                     new Perso('Seira',                      1,      'hp',       1,1,1,1,1,1,1,1,1,1);
var seki =                      new Perso('Seki',                       1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var senorPink =                 new Perso('Senor_Pink',                 115,    'dqd',      115,115,115,115,115,115,115,115,115,115);
var sentomaru =                 new Perso('Sentomaru',                  272,    'marine',   200,200,200,200,200,272,272,272,272,272);
var seto =                      new Perso('Seto',                       18,     'ciel',     18,18,18,18,18,18,18,18,18,18);
//SH
var shachi =                    new Perso('Shachi',                     50,     'shinsekai', 12,12,12,12,12,50,50,50,50,50);
var shakky =                    new Perso('Shakky',                     24,      'paradise', 24,24,24,24,24,24,24,24,24,24);
var sham =                      new Perso('Sham',                       7,      'eb',       7,7,7,7,7,7,7,7,7,7);
var shanba =                    new Perso('Shanba',                     8,      'paradise', 8,8,8,8,8,8,8,8,8,8);
var shanks =                    new Perso('Shanks',                     4600,   'sr',       4600,4600,4600,4600,4600,4600,4600,4600,4600,4600);
var sharinguru =                new Perso('Sharinguru',                 28,     'marine',   28,28,28,28,28,28,28,28,28,28);
var sheepshead =                new Perso('Sheepshead',                 63,     'k',        63,63,63,63,63,63,63,63,63,63);
var shiki =                     new Perso('Shiki',                      3000,   'rocks',    3900,3000,3000,3000,3000,3000,3000,3000,3000,3000);
var shiliew =                   new Perso('Shiliew',                    1785,   'bn',       1200,1200,1200,1200,1200,1785,1785,1785,1785,1785);
var shimotsukiKoushirou =       new Perso('Shimotsuki_Koushirou',       71,     'eb',       71,71,71,71,71,71,71,71,71,71);
var shimotsukiKozaburo =        new Perso('Shimotsuki_Kozaburo',        171,    'eb',       171,0,0,0,0,0,0,0,0,0);
var shimotsukiKuina =           new Perso('Shimotsuki_Kuina',           24,     'eb',       24,0,0,0,0,0,0,0,0,0);
var shimotsukiRyuma =           new Perso('Ryuma',                      1200,   'wano',     0,0,0,190,0,0,0,0,0,0);
var shimotsukiUshimaru =        new Perso('Shimotsuki_Ushimaru',        271,    'wano',     271,0,0,0,0,0,0,0,0,0);
var shimotsukiYasuie =          new Perso('Shimotsuki_Yasuie',          65,     'wano',     65,65,65,65,65,65,65,65,65,65);
var shine =                     new Perso('Shine',                      10,     'marine',   10,10,10,10,10,10,10,10,10,10);
var shinobu =                   new Perso('Shinobu',                    40,     'wano',     40,40,40,40,40,40,40,40,40,40);
var shion =                     new Perso('Shion',                      11,     'amazon',   11,11,11,11,11,11,11,11,11,11);
var shioyaki =                  new Perso('Shioyaki',                   5,      'hp',       5,5,5,5,5,5,5,5,5,5);
var shirahoshi =                new Perso('Shirahoshi',                 1,      'hp',       1,1,1,1,1,1,1,1,1,1);
var shirutonDoruyanaika =       new Perso('Shiruton_Doruyanaika',       1,      'sb',       1,1,1,1,1,1,1,1,1,1);
var shojo =                     new Perso('Shojo',                      32,     'paradise', 32,32,32,32,32,32,32,32,32,32);
var shu =                       new Perso('Shu',                        40,     'marine',   40,40,40,40,40,40,40,40,40,40);
var shura =                     new Perso('Shura',                      70,     'ener',     70,70,70,70,70,70,70,70,70,70);
//SI
var sicilian =                  new Perso('Sicilian',                   170,    'zo',       170,170,170,170,170,170,170,170,170,170);
var sicily =                    new Perso('Sicily',                     59,     'marine',   59,59,59,59,59,59,59,59,59,59);
var silverAxe =                 new Perso('Silver_Axe',                 444,    'rocks',    444,0,0,44,0,0,0,0,0,0);
var silversRayleigh =           new Perso('Silvers_Rayleigh',           2550,   'roger',    3550,2550,2550,2550,2550,2550,2550,2550,2550,2550);
var sind =                      new Perso('Sind',                       11,     'shinsekai', 0,0,0,0,0,11,11,11,11,11);
//SK
var skull =                     new Perso('Skull',                      213,    'bb',       213,213,213,213,213,213,213,213,213,213);
//SL
var sleepy =                    new Perso('Sleepy',                     96,     'bb',       96,96,96,96,96,96,96,96,96,96);
//SM
var smack =                     new Perso('Smack',                      17,     'hp',       17,17,17,17,17,17,17,17,17,17);
var smoker =                    new Perso('Smoker',                     250,    'marine',   100,120,140,160,180,230,250,250,250,250);
var smooge =                    new Perso('Smooge',                     23,     'shinsekai', 23,23,23,23,23,23,23,23,23,23);
//SN
var snakeman =                  new Perso('Snakeman',                   20,     'k',        20,20,20,20,20,20,20,20,20,20);
//SO
var solitaire =                 new Perso('Solitaire',                  180,    'k',        180,180,180,180,180,180,180,180,180,180);
var sonier =                    new Perso('Sonier',                     24,     'fox',      24,24,24,24,24,24,24,24,24,24);
var sora =                      new Perso('Sora',                       1,      'hp',       1,1,1,1,1,1,1,1,1,1);
//SP
var spacey =                    new Perso('Spacey',                     5,      'ener',     5,5,5,5,5,5,5,5,5,5);
var spandam =                   new Perso('Spandam',                    14,     'gm',       14,14,14,14,14,14,14,14,14,14);
var spandine =                  new Perso('Spandine',                   46,     'gm',       30,32,33,34,35,46,46,46,46,46);
var spartan =                   new Perso('Spartan',                    54,     'shinsekai', 54,54,54,54,54,54,54,54,54,54);
var spector =                   new Perso('Spector',                    1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var speed =                     new Perso('Speed',                      60,     'k',        60,60,60,60,60,60,60,60,60,60);
var speedJiru =                 new Perso('Speed_Jiru',                 308,    'bb',       308,308,308,308,308,308,308,308,308,308);
var spencer =                   new Perso('Spencer',                    200,    'roger',    200,200,200,200,200,200,200,200,200,200);
var splash =                    new Perso('Splash',                     2,      'paradise', 2,2,2,2,2,2,2,2,2,2);
var splatter =                  new Perso('Splatter',                   2,      'paradise', 2,2,2,2,2,2,2,2,2,2);
var spoil =                     new Perso('Spoil',                      1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
//SQ
var squardo =                   new Perso('Squardo',                    52,     'bb',       52,52,52,52,52,52,52,52,52,52);
//SR
//-SR-Crew-//
var limeJuice =                 new Perso('Lime_Juice',                 900,    'sr',       900,900,900,900,900,900,900,900,900,900);
var bonkPunch =                 new Perso('Bonk_Punch',                 890,    'sr',       890,890,890,890,890,890,890,890,890,890);
var buildingSnake =             new Perso('Building_Snake',             880,    'sr',       880,880,880,880,880,880,880,880,880,880);
var hongou =                    new Perso('Hongou',                     870,    'sr',       870,870,870,870,870,870,870,870,870,870);
var howlingGab =                new Perso('Howling_Gab',                860,    'sr',       860,860,860,860,860,860,860,860,860,860);
//ST

var stainless =                 new Perso('Stainless',                  213,    'marine',   213,213,213,213,213,213,213,213,213,213);
var stalker =                   new Perso('Stalker',                    5,      'marine',   5,5,5,5,5,5,5,5,5,5);
var stansen =                   new Perso('Stansen',                    105,    'acp',      100,100,100,100,100,105,105,105,105,105);
var sterry =                    new Perso('Sterry',                     1,      'eb',       1,1,1,1,1,1,1,1,1,1);
var stevie =                    new Perso('Stevie',                     1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var stool =                     new Perso('Stool',                      1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var strawberry =                new Perso('Strawberry',                 246,    'marine',   246,246,246,246,246,246,246,246,246,246);
var streusen =                  new Perso('Streusen',                   20,     'bm',       20,20,20,20,20,20,20,20,20,20);
var stussy =                    new Perso('Stussy',                     51,     'gm',       20,20,30,30,30,50,50,50,51,51);
//St-
var stCharlos =                 new Perso('Saint-Charlos',              1,      'gm',       1,1,1,1,1,1,1,1,1,1);
var stJalmack =                 new Perso('Saint-Jalmack',              1,      'gm',       1,1,1,1,1,1,1,1,1,1);
var stRosward =                 new Perso('Saint-Rosward',              1,      'gm',       1,1,1,1,1,1,1,1,1,1);
var stSharlia =                 new Perso('Sainte-Sharlia',             1,      'gm',       1,1,1,1,1,1,1,1,1,1);
//SU
var sugar =                     new Perso('Sugar',                      2,      'dqd',      2,2,2,2,2,2,2,2,2,2);
var suke =                      new Perso('Suke',                       14,     'wano',     14,14,14,14,14,14,14,14,14,14);
var sukoshibaKanishitoru =      new Perso('Sukoshiba_Kanishitoru',      5,      'marine',   5,5,5,5,5,5,5,5,5,5);
var suleiman =                  new Perso('Suleiman',                   140,    'acp',      1,5,13,25,50,130,135,137,140,140)
var sunbell =                   new Perso('Sunbell',                    200,    'roger',    200,100,100,100,100,100,100,100,100,100);
var sweetPea =                  new Perso('Sweet_Pea',                  15,     'amazon',   15,15,15,15,15,15,15,15,15,15);


//---T---//
//TA
var tacos =                     new Perso('Tacos',                      1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var take =                      new Perso('Take',                       5,      'hp',       5,5,5,5,5,5,5,5,5,5);
var tama =                      new Perso('Tama',                       1,      'wano',     1,1,1,1,1,1,1,1,1,1);
var tamachibi =                 new Perso('Tamachibi',                  0.3,    'paradise', 0,0,0,0,0,0,0,0,0,0);
var tamago =                    new Perso('Tamago',                     170,    'bm',       170,170,170,170,170,170,170,170,170,170);
var tamagon =                   new Perso('Tamagon',                    14,     'paradise', 14,14,14,14,14,14,14,14,14,14);
var tamanegi =                  new Perso('Tamanegi',                   1,      'eb',       0.4,1,1,1,1,1,1,1,1,1);
var tankLepanto =               new Perso('Tank_Lepanto',               46,     'shinsekai', 46,46,46,46,46,46,46,46,46,46);
var tansui =                    new Perso('Tansui',                     17,     'hp',       17,17,17,17,17,17,17,17,17,17);
var taro =                      new Perso('Taro',                       200,    'roger',    200,100,100,100,100,100,100,100,100,100);
var tashigi =                   new Perso('Tashigi',                    100,    'marine',   10,20,30,40,50,130,130,140,140,140);
//TB
var tBone =                     new Perso('T-Bone',                     100,    'marine',   100,100,100,100,100,100,100,100,100,100);
//TE
var teaIV =                     new Perso('Tea_IV',                     1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var tenguyamaKotetsu =          new Perso('Tenguyama_Kotetsu',          167,    'wano',     0,0,0,0,0,0,0,0,0,0);
var tenguyamaHitetsu =          new Perso('Tenguyama_Hitetsu',          167,    'wano',     167,167,167,167,167,167,167,167,167,167);
var terracotta =                new Perso('Terracotta',                 1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var terry =                     new Perso('Terry',                      1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var terryGilteo =               new Perso('Terry_Gilteo',               89,     'r',        89,89,89,89,89,89,89,89,89,89);
var teru =                      new Perso('Teru',                       1,      'eb',       1,1,1,1,1,1,1,1,1,1);
var tetsu =                     new Perso('Tetsu',                      5,      'wano',     5,5,5,5,5,5,5,5,5,5);
//TH
var thalassaLucas =             new Perso('Thalassa_Lucas',             1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var thatch =                    new Perso('Thatch',                     900,    'bb',       900,900,900,900,900,900,900,900,900,900);
//TI
var tibany =                    new Perso('Tibany',                     37,     'paradise', 37,37,37,37,37,37,37,37,37,37);
var tilestone =                 new Perso('Tilestone',                  28,     'paradise', 28,28,28,28,28,28,28,28,28,28);
//TO
var togare =                    new Perso('Togare',                     4,      'hp',       4,4,4,4,4,4,4,4,4,4);
var tokijiro =                  new Perso('Tokijiro',                   1,      'wano',     1,1,1,1,1,1,1,1,1,1);
var tokkikake =                 new Perso('Tokkikake',                  210,    'marine',   210,210,210,210,210,210,210,210,210,210);
var toko =                      new Perso('Toko',                       0.2,    'wano',     0,0,0,0,0,0,0,0,0,0.2);
var tom =                       new Perso('Tom',                        210,    'hp',       210,0,0,0,0,0,0,0,0,0);
var tomatoGang =                new Perso('Tomato_Gang',                78,     'paradise', 78,78,78,78,78,78,78,78,78,78);
var tonjit =                    new Perso('Tonjit',                     1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var tonytonyChopper =           new Perso('Tony-Tony_Chopper',          203,    'cp',       30,50,75,90,90,147,147,147,150,203);
var toto =                      new Perso('Toto',                       1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
//TR
var trafalgarDWaterLami =       new Perso('Tafalgar_D_Water_Lami',      1,      'nb',       0,0,0,0,0,0,0,0,0,0);
var trafalgarDWaterLaw =        new Perso('Trafalgar_D_Water_Law',      1750,    'supernova', 100,200,300,350,400,700,710,750,1050,1750);
var trebol =                    new Perso('Trebol',                     155,    'dqd',      155,155,155,155,155,155,155,155,155,155);
var tristane =                  new Perso('Tristane',                   11,     'zo',       11,11,11,11,11,11,11,11,11,11);
//TS
var tsukimi =                   new Perso('Tsukimi',                    1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var tsunagoro =                 new Perso('Tsunagoro',                  199,    'wano',     199,199,199,199,199,199,199,199,199,199);
var tsunokkov =                 new Perso('Tsunokkov',                  56,     'paradise', 56,56,56,56,56,56,56,56,56,56);
var tsuru =                     new Perso('Tsuru',                      480,    'marine',   880,480,480,480,480,480,480,480,480,480);
var tsuru2 =                    new Perso('Tsuru_',                     1,      'wano',     1,1,1,1,1,1,1,1,1,1);
//TU
var turco =                     new Perso('Turco',                      25,     'paradise', 25,25,25,25,25,25,25,25,25,25);
//TW
var tweetums =                  new Perso('Tweetums',                   24,     'fox',      24,24,24,24,24,24,24,24,24,24);


//---U---//
var ucy =                       new Perso('Ucy',                        23,     'shinsekai', 23,23,23,23,23,23,23,23,23,23);
var uholisia =                  new Perso('Uholisia',                   9,      'shinsekai',9,9,9,9,9,9,9,9,9,9);
var ukkari =                    new Perso('Ukkari',                     3,      'marine',   3,3,3,3,3,3,3,3,3,3);
var ulti =                      new Perso('Ulti',                       395,    'k',        295,295,295,295,295,395,395,395,395,395);
var ultraking =                 new Perso('Ultraking',                  1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var umit =                      new Perso('Umit',                       267,    'shinsekai',267,267,267,267,267,267,267,267,267,267);
var unforgivableMask =          new Perso('Unforgivable_Mask',          135,    'paradise', 135,135,135,135,135,135,135,135,135,135);
var uni =                       new Perso('Uni',                        40,     'shinsekai', 10,10,10,10,10,40,40,40,40,40);
var unluckies =                 new Perso('Unluckies',                  20,     'bw',       20,20,20,20,20,20,20,20,20,20);
var urashima =                  new Perso('Urashima',                   23,     'wano',     23,23,23,23,23,23,23,23,23,23);
var usakkov =                   new Perso('Usakkov',                    32,     'paradise', 32,32,32,32,32,32,32,32,32,32);
var usopp =                     new Perso('Usopp',                      93,     'cp',       1,1,10,10,10,53,53,53,53,93);
var uzu =                       new Perso('Uzu',                        11,     'shinsekai',0,0,0,0,0,0,11,11,11,11);


//---V---//
//VA
var vanAugur =                  new Perso('Van_Augur',                  795,    'bn',       70,130,190,250,310,750,760,770,780,795);
var vanderDecken =              new Perso('Vander_Decken',              334,    'hp',       334,0,0,0,0,0,0,0,0,0);
var vanderDeckenIX =            new Perso('Vander_Decken_IX',           34,     'hp',       34,34,34,34,34,34,34,34,34,34);
var variete =                   new Perso('Variété',                    11,     'zo',       11,11,11,11,11,11,11,11,11,11);
var vascoShot =                 new Perso('Vasco_Shot',                 303,    'bn',       200,200,200,200,200,303,303,303,303,303);
//VE
var vegapunk =                  new Perso('Vegapunk',                   12,     'marine',   12,12,12,12,12,12,12,12,12,12);
var verygood =                  new Perso('Verygood',                   28,     'marine',   28,28,28,28,28,28,28,28,28,28);
//VI
var vinsmokeIchiji =            new Perso('Vinsmoke_Ichiji',            199,    'germa',    199,199,199,199,199,199,199,199,199,199);
var vinsmokeJudge =             new Perso('Vinsmoke_Judge',             200,    'germa',    200,200,200,200,200,200,200,200,200,200);
var vinsmokeNiji =              new Perso('Vinsmoke_Niji',              198,    'germa',    198,198,198,198,198,198,198,198,198,198);
var vinsmokeReiju =             new Perso('Vinsmoke_Reiju',             197,    'germa',    197,197,197,197,197,197,197,197,197,197);
var vinsmokeSanji =             new Perso('Vinsmoke_Sanji',             1000,   'cp',       35,60,90,120,130,400,410,415,435,1000);
var vinsmokeSora =              new Perso('Vinsmoke_Sora',              1,      'germa',    1,1,1,1,1,1,1,1,1,1);
var vinsmokeYonji =             new Perso('Vinsmoke_Yonji',             196,    'germa',    196,196,196,196,196,196,196,196,196,196);
var viola =                     new Perso('Viola',                      3,      'shinsekai', 3,3,3,3,3,3,3,3,3,3);
var vista =                     new Perso('Vista',                      899,    'bb',       899,899,899,899,899,899,899,899,899,899);
var vitan =                     new Perso('Vitan',                      95,     'bb',       95,95,95,95,95,95,95,95,95,95);
var vito =                      new Perso('Vito',                       150,    'shinsekai', 30,30,30,30,30,150,150,150,150,150);

//---W---//
var wadatsumi =                 new Perso('Wadatsumi',                  34,     'hp',       34,34,34,34,34,34,34,34,34,34);
var wallace =                   new Perso('Wallace',                    92,     'bb',       92,92,92,92,92,92,92,92,92,92);
var wallem =                    new Perso('Wallem',                     57,     'bb',       57,57,57,57,57,57,57,57,57,57);
var wanda =                     new Perso('Wanda',                      225,    'zo',       100,100,100,100,100,225,225,225,225,225);
var wanze =                     new Perso('Wanze',                      36,     'gm',       36,36,36,36,36,36,36,36,36,36);
var wapol =                     new Perso('Wapol',                      29,     'paradise', 29,29,29,29,29,29,29,29,29,29);
var warashi =                   new Perso('Warashi',                    10,     'ciel',     10,10,10,10,10,10,10,10,10,10);
var wellington =                new Perso('Wellington',                 43,     'nb',       43,43,43,43,43,43,43,43,43,43);
var whiteyBay =                 new Perso('Whitey_Bay',                 96,     'bb',       96,96,96,96,96,96,96,96,96,96);
var wicka =                     new Perso('Wicka',                      4,      'acp',      4,4,4,4,4,4,4,4,4,4);
var willieGallon =              new Perso('Willie_Gallon',              1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var wiper =                     new Perso('Wiper',                      80,     'ciel',     70,70,70,70,70,80,80,80,80,80);
var wire =                      new Perso('Wire',                       99,     'shinsekai', 10,20,30,40,50,99,99,99,99,99);
var whosWho =                   new Perso("Who's_Who",                  618,    'k',        518,518,518,518,518,618,618,618,618,618);
var woopSlap =                  new Perso('Woop_Slap',                  1,      'eb',       1,1,1,1,1,1,1,1,1,1);

//---X---//
var xDrake =                    new Perso('X_Drake',                    593,    'supernova', 50,70,150,200,300,585,585,585,585,593);

//---Y---//
var yama =                      new Perso('Yama',                       47,     'ener',     40,42,45,45,45,47,47,47,47,47);
var yamakaji =                  new Perso('Yamakaji',                   246,    'marine',   246,246,246,246,246,246,246,246,246,246);
var yamato =                    new Perso('Yamato',                     840,    'wano',     540,540,540,540,540,540,540,540,540,840);
var yamenahare =                new Perso('Yamenahare',                 1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var yamon =                     new Perso('Yamon',                      200,    'roger',    200,200,200,200,200,200,200,200,200,200);
var yarisugi =                  new Perso('Yarisugi',                   43,     'marine',   43,43,43,43,43,43,43,43,43,43);
var yassop =                    new Perso('Yassop',                     1020,   'sr',       1020,1020,1020,1020,1020,1020,1020,1020,1020,1020);
var yatappe =                   new Perso('Yatappe',                    199,    'wano',     199,199,199,199,199,199,199,199,199,199);
var yazaemon =                  new Perso('Yazaemon',                   12,     'k',        12,12,12,12,12,12,12,12,12,12);
var yetiCoolBrothers =          new Perso('Yeti_Cool_Brothers',         99,     'dqd',      99,99,99,99,99,99,99,99,99,99);
var yokozunaKawamatsu =         new Perso('Yokozuna_Kawamatsu',         710,    'wano',     610,610,610,610,610,610,610,610,610,710);
var yomo =                      new Perso('Yomo',                       102,    'zo',       102,102,102,102,102,102,102,102,102,102);
var yonka =                     new Perso('Yonka',                      0.2,    'hp',       0,0,0,0,0,0,0,0,0,0);
var yonkaTwo =                  new Perso('Yonka_Two',                  0.2,    'hp',       0,0,0,0,0,0,0,0,0,0);
var yorki =                     new Perso('Yorki',                      211,    'wb',       211,0,0,0,0,0,0,0,0,0);
var yosaku =                    new Perso('Yosaku',                     29,     'eb',       9,9,9,9,9,29,29,29,29,29);
var yoshimoto =                 new Perso('Yoshimoto',                  1,      'paradise', 1,1,1,1,1,1,1,1,1,1);
var yotsubane =                 new Perso('Yotsubane',                  10,     'ciel',     10,10,10,10,10,10,10,10,10,10);
var yu =                        new Perso('Yu',                         0.2,    'eb',       0,0,0,0,0,0,0,0,0,0);
var yui =                       new Perso('Yui',                        200,    'roger',    200,200,200,200,200,200,200,200,200,200);
var yuki =                      new Perso('Yuki',                       1,      'shinsekai', 1,1,1,1,1,1,1,1,1,1);
var yurikah =                   new Perso('Yurikah',                    64,     'paradise', 64,64,64,64,64,64,64,64,64,64);

//---Z---//
var zabo =                      new Perso('Zabo',                       7,      'ciel',     7,7,7,7,7,7,7,7,7,7);
var zadie =                     new Perso('Zadie',                      1,      'wb',       1,1,1,1,1,1,1,1,1,1);
var zala =                      new Perso('Zala',                       41,     'bw',       32,32,35,38,41,41,41,41,41,41);
var zambai =                    new Perso('Zambai',                     44,     'paradise', 33,33,33,33,33,44,44,44,44,44);
var zeff =                      new Perso('Zeff',                       345,    'eb',       35,35,35,35,35,35,35,35,35,35);
var zeo =                       new Perso('Zeo',                        50,     'hp',       2,4,6,8,10,50,0,0,0,0);
var zephyr =                    new Perso('Zephyr',                     1920,   'marine',   1920,1920,1920,1920,1920,1920,1920,1920,1920,1920);
var zepo =                      new Perso('Zepo',                       90,     'zo',       0,0,0,0,0,0,0,0,0,0);
var zodia =                     new Perso('Zodia',                      86,     'bb',       86,86,86,86,86,86,86,86,86,86);
var zotto =                     new Perso('Zotto',                      57,     'marine',   57,57,57,57,57,57,57,57,57,57);
var zucca =                     new Perso('Zucca',                      90,     'bb',       90,90,90,90,90,90,90,90,90,90);



//####-Forces-####//

var forcesZombies =     {name: 'Forces Zombies',                    power: [200,200,200,200,200,200,200,200,200,200,200]};

var forcesImpelDown =   {name: 'Forces Impel Down',                 power: [700,700,700,700,700,700,700,700,700,700,700]};

var forcesMarines =     {name: 'Forces Marines',                    power: [2000,100,0,400,0,1200,0,200,300,0,0]};

var forcesACP =         {name: 'Forces ACP',                        power: [400,0,0,0,0,0,0,0,200,400,400]};

var forcesKaido =       {name: 'Gifters, Pleasures et Waiters',     power: [1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000]};

var forcesGerma =       {name: 'Armée Germa66',                     power: [3500,3500,3500,3500,3500,3500,3500,3500,3500,3500,3500]};

var forcesBW =          {name: 'Billions et Millions',              power: [55,55,55,55,55,55,55,55,55,55,55]};

var forcesRevo =        {name: 'Armée Révolutionnaire',             power: [3000,2000,2000,2000,2000,2000,3000,3000,3000,3000,3000]};

var forcesKozuki =      {name: 'Samourais de Wano',                 power: [600,600,600,600,600,600,600,600,600,600,600]};

var forcesRocks =       {name: 'Membres des Rocks',                 power: [1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000]};

var forcesPacifista =   {name: 'Pacifistas',                        power: [2000,200,400,600,800,2000,2000,2000,2000,2000,2000]};

var forcesYontaMaria =  {name: 'Flotte Yonta Maria',                power: [1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000]};

//####-Equipages-####//
var mugiwaraCrew =      new Crew('Chapeaux de Pailles', [monkeyDLuffy, roronoaZoro, nami, usopp, vinsmokeSanji, tonytonyChopper, nicoRobin, franky, brook, jinbe], 'cp');

var rogerCrew =         new Crew('Équipage de Roger', [golDRoger, silversRayleigh, scopperGabane, kozukiOden, kozukiToki, shanks, baggy, nozdon, sunbell, taro, doringo, petermoo, milletPine, ganryu, cBGalant, donquino, mrMomora, moonIsaacJr, yui, rangram, murgen, maxMarks, spencer, erio, rowing, jacksonbanner, bankuro, yamon, blumarine, nekomamushi, inuarashi, portgasDRouge], 'roger');

var whiteBeardCrew =    new Crew('Équipage de Barbe Blanche', [edwardNewgate, marco, portgasDAce, diamondJoz, thatch, vista, blamenko, rakuyo, namur, blenheim, curiel, kingdew, haruta, atmos, speedJiru, fossa, izou, littleOzJr, squardo, bizarre, barry, baggaley, arthur, andre, amadob, agsilly, aggie, banshee, brew, brocca, choi, colscon, cornelia, decalvanBrothers, delacuaji, dogya, doma, duckyBree, elmy, epoida, finamore, forliewbs, ganryu2, greatMichael,
                         hangan, happygun, hublot, islewan, julius, kechatch, kimel, kinga, kotatsu, kukai, leonero, maskedDeuce, mcGuy, mihar, ninth, nosgarl, ossamondo, palms, pavlik, ramba, reforte, rush, skull, sleepy, vitan, wallace, whiteyBay, zodia, zucca], 'bb');

var rouxCrew =          new Crew('Équipage du Roux', [shanks, benBeckmann, luckyRoo, yassop, rockstar, limeJuice, bonkPunch, buildingSnake, hongou, howlingGab], 'sr');

var centBetesCrew =     new Crew('Équipage aux Cent Bêtes', [kaido, king, queen, jack, xDrake, pageOne, whosWho, sasaki, blackMaria, ulti, sheepshead, holdem, speed, dobon, basilHawkins, babanuki, daifugo, solitaire, ginRummy, baoHuang, brisgola, fourTricks, hamlet, poker, mizerka, batman, gazelleman, mouseman, alpagaman, madilloman, snakeman, rabbitman, sarahebi, dachoman, scratchmenApoo,
                         number1, number2, number3, number4, number5, number6, number7, number8, number9, number10, forcesKaido, daikoku, fujin, fukurokuju, hanzo, hotei, jigokuBenten, kaku2, kazekage, kuni, raijin, sarutobi, scotch, yazaemon], 'k');

var blackBeardCrew =    new Crew('Équipage de Barbe Noire', [marshallDTeach, jesusBurgess, shiliew, vanAugur, avaloPizzaro, laffite, catarinaDevon, sanjuanWolf, vascoShot, docQ, barbeRose], 'bn');

var bigMomCrew =        new Crew('Équipage de Big Mom', [charlotteLinlin, charlotteKatakuri, charlotteSmoothie, charlotteCracker, charlotteSnack, charlottePerospero, charlotteCompote, charlotteDaifuku, charlotteOven, charlotteMondee, charlotteAmande, charlotteHachee, charlotteEffilee, charlotteOpera, charlotteCounter, charlotteCadenza, charlotteCabalette, charlotteGala, charlotteCustard, charlotteAngel, charlotteZuccotto, charlotteBrulee, charlotteBroye,
                         charlotteNusstorte, charlotteBasskarte, charlotteDosmarche, charlotteNoisette, charlotteMoscato, charlotteMash, charlotteCornstarch, charlotteCompo, charlotteLaurin, charlotteMontdor, charlotteMozart, charlotteMarnier, charlotteHighFat, charlotteTablet, charlotteCitron, charlotteCinnamon, charlotteSaintMarc, charlotteBasans, charlotteMelise, charlotteDacquoise, charlotteGalette, charlottePoire,
                         charlotteBavarois, charlottePrim, charlotteKanten, charlotteKato, charlotteMontb, charlotteChiboust, charlotteMobile, charlotteMarble, charlotteMyukuru, charlotteMaple, charlotteBrownie, charlotteJoconde, charlotteRaisin, charlottePanna, charlotteMascarpone, charlotteJoscarpone, charlotteYuen, charlotteNewgo, charlotteNewichi, charlotteNewji, charlotteNewsan, charlotteNewshi, charlotteNutmeg,
                         charlotteAkimeg, charlotteAllmeg, charlotteHarumeg, charlotteFuyumeg, charlotteNougat, charlottePudding, charlotteFlambee, charlotteAnglais, charlotteAnana, charlotteDolce, charlotteDragee, tamago, pekoms, streusen, bobbin, charlotteNormande, diesel, eggplant], 'bm');

var rocksCrew =         new Crew('Équipage des Rocks', [rocksDXebec, edwardNewgate, kaido, charlotteLinlin, shiki, indigo, john, silverAxe, forcesRocks], 'rocks');

var revoCrew =          new Crew('Armée Révolutionnaire', [monkeyDDragon, sabo, emporioIvankov, beloBetty, karasu, morley, lindbergh, inazuma, ahiru, koala, bunnyJoe, terryGilteo, forcesRevo], 'r');

var marineCrew =        new Crew('Marine', [sakazukiAkainu, borsalinoKizaru, isshoFujitora, ryokugyu, hotokeSengoku, monkeyDGarp, tsuru, momonga, maynard, komir, doberMan, smoker, strawberry, yamakaji, lacroix, onigumo, johnGiant, ronse, bastille, dalmatien, cancer, mozambia, stainless, draw, moumousagi, tokkikake, nazuKetagari, haguarDSauro, catacombo, kadar, sicily, akehende, hina, brandnew, yarisugi, daigin, puddingPudding,
                         koby, tBone, verygood, shu, sharinguru, nezumi, tashigi, kibin, gorilla, morgan, hermep, donQuichotteRossinante, fullbody, jango, sentomaru, bogard, boomba, bakezo, andre, candre, glove, jero, koda, kyuji, lines, makko, mashikaku, pike, ripper, rokkaku, shine, stalker, forcesMarines, magellan, hannyabal, domino, forcesImpelDown, basilisk, minochihuahua, minokoala, minorhinoceros, minotaurus, minozebra, sadi, sukoshibaKanishitoru, 
                         ukkari, forcesPacifista, zotto], 'marine');

var corsaireCrew =      new Crew('7 Grands Corsaires', [draculeMihawk, donQuichotteDoflamingo, edwardWeeble, boaHancock, baggy, bartholomewKuma, geckoMoria], 'corsaire');

var supernovaCrew =     new Crew('11 Supernovae', [monkeyDLuffy, eustassKidd, trafalgarDWaterLaw, roronoaZoro, killer, xDrake, scratchmenApoo, basilHawkins, caponeGangBege, kaisoUrouge, jewelryBonney], 'supernova');

var heartCrew =         new Crew('Équipage du Heart', [trafalgarDWaterLaw, bepo, jeanBart, penguin, shachi, ikkaku, clione, uni], 'supernova');

var kiddCrew =          new Crew('Équipage de Kidd', [eustassKidd, killer, heat, wire], 'supernova');

var doflamingoCrew =    new Crew('Don Quichotte Family', [donQuichotteDoflamingo, kichiguVergo, diamante, pica, trebol, dellinger, senorPink, gladius, laoG, bellamy, machvise, jora, buffalo, sugar, monet, cesarClown, kyuin], 'dqd');

var caponeCrew =        new Crew('Équipage du Firetank', [caponeGangBege, vito, gotti, charlotteChiffon, charlotteLaura, caponePets], 'supernova');

var mugiwaraLargeCrew = new Crew('Armada Chapeau de Paille', [monkeyDLuffy, roronoaZoro, nami, usopp, vinsmokeSanji, tonytonyChopper, nicoRobin, franky, brook, jinbe, cavendish, suleiman, bartolomeo, gambia, donSai, donChinjao, boo, baby5, ideo, blueGilly, abdullah, jeet, leo, wicka, kabu, bomba, rampo, flapper, bobomba, nubon, pellini, inhel, cotton, baxcon, daikon, beeAnne, chao, hajrudin, stansen, road, goldberg, gerd, orlombus, colombus, forcesACP, forcesYontaMaria], 'acp');

var GermaCrew =         new Crew('Armée du Germa 66', [vinsmokeJudge, vinsmokeReiju, vinsmokeIchiji, vinsmokeNiji, vinsmokeYonji, forcesGerma], 'germa');

var baroqueWorksCrew =  new Crew('Baroque Works', [crocodile, nicoRobin, dazBonez, zala, bonclay, galdino, babe, drophy, gem, mikita, missCatharina, missFathersDay, missGoldenweek, missMonday, missMothersDay, missSaturday, missThursday, missTuesday, mr6, mr7, mr9, mr10, mr11, mr12, unluckies], 'bw');

var tribuShandiasCrew = new Crew('Tribu Shandias', [wiper, kamakiri, laki, braham, genbo, isa, aisa, yotsubane, mayushika, warashi], 'ciel');

var foxyCrew =          new Crew('Équipage de Foxy', [foxy, porche, hamburg, kibagaeru, lombric, tweetums, kapoty, monda, pickles, bigPan, gina, sonier, donovan], 'fox');

var kozukiCrew =        new Crew('Clan Kozuki', [kozukiOden, kozukiToki, kozukiMomonosuke, kozukiHiyori, ashuraDoji, denjiro, kinemon, kanjuro, yokozunaKawamatsu, nekomamushi, inuarashi, raizo, kikunojo, izou, shinobu, forcesKozuki, hyogoro, ohmasa, yatappe, ocho, tsunagoro, jo, shimotsukiYasuie], 'wano');

var enerCrew =          new Crew('Armée Divine', [ener, ohm, satori, gedatsu, shura, yama, hotori, kotori, gode, macro2], 'ener');

var minksCrew =         new Crew('Tribu des Minks', [nekomamushi, inuarashi, pedro, carrot, wanda, sicilian, concelot, giovanni, milky, lebouc, monji, tristane, variete, rody, blackBack, bepo, pekoms, zepo, keith, yomo], 'zo');

var amazonCrew =        new Crew('Tribu des Amazones', [boaHancock, boaSandersonia, boaMarigold, blueFan, belladonna, aphelandra, cosmos, daisy, enishida, kiku, marguerite, nerine, gloriosa, pansy, poppy, ran, rindo], 'amazon');

var moriaCrew =         new Crew('Armée de Moria', [geckoMoria, oz, absalom, hogback, perona, bao, gyoro, hildon, inuppe, jigoro, kumashi, nin, forcesZombies], 'moria');

var cp9Crew =           new Crew('Cipher-Pol 9', [robLucci, kaku, jabura, blueno, kalifa, fukuro, kumadori, nero, spandam, laskey], 'gm');

var cp0Crew =           new Crew('Cipher-Pol Aegis 0', [robLucci, kaku, stussy, spandam, oeilNoirOeilBlanc, rougePasContent, deuxTraitsOeilDroit, violetBoucheEnO], 'gm');

var bellamyCrew =       new Crew('Équipage du New Age', [bellamy, sarquiss, lily, roth, eddy, helwett, reverse, mani, mule], 'paradise');

var baggyCrew =         new Crew('Équipage du Clown', [baggy, carnage, morge, richy, ladyAlvida, galdino, domoKun, heppoko, kinoko, nnkeKun, peppoko, poppoko], 'baggy');

var hodyCrew =          new Crew('New Sun', [hodyJones, daruma, dosun, hammond, hyouzou, icarosMucchi, zeo, harisenbon, kasagoba], 'hp');

var arlongCrew =        new Crew('Équipage d\'Arlong', [arlong, octy, smack, kuroobi, kaneshiro, pisaro, take, shioyaki], 'hp');

var donKriegCrew =      new Crew('Équipage de Don Krieg', [donKrieg, gin, pearl, hustle, ideaman, kagikko], 'eb');

var wapolCrew =         new Crew('Garde de Wapol', [wapol, chess, kuromarimo, kinderella], 'paradise');

var higumaCrew =        new Crew('Brigands de Goa', [higuma], 'eb');

var kuroCrew =          new Crew('Équipage de Kuro', [kuro, jango, sham, buchi], 'eb');

var hawkinsCrew =       new Crew('Pirates de Hawkins', [basilHawkins, faust], 'supernova');

var yesCrew =           new Crew('Pirates Yes', [koze, packy], 'eb');

var mugiFakeCrew =      new Crew('Faux Mugiwaras',  [demaroBlack, chocolat, drip, cocoa, caribou, coribou, albion, lipDoughty, manjaro, mountblutain, noraGitsune, turco], 'paradise');

var spadeCrew =         new Crew('Pirates de Pique', [portgasDAce, maskedDeuce, mihar, kotatsu, aggie, finamore, ganryu, duckyBree, barry, banshee, kukai, dogya, kimel, cornelia, leonero, hublot, ossamondo, sleepy, wallace], 'bb');

var impelDownCrew =     new Crew('Gardes d\'Impel Down', [magellan, hannyabal, domino, minochihuahua, minorhinoceros, minokoala, basilisk, minotaurus, minozebra], 'marine');

var rumbarCrew =        new Crew('Pirates de Rumbar', [brook, mizutaMadaisuki, mizutaMawaritosuki], 'wb');

var frankyCrew =        new Crew('Franky Family', [franky, kiwi, mozu, kiev, kop, schollzo, zambai], 'paradise');

var usoppCrew =         new Crew('Pirates d\'Usopp', [usopp, ninjin, piiman, tamanegi], 'eb');

var bartoCrew =         new Crew('Barto Club', [bartolomeo, gambia], 'acp');

var cavenCrew =         new Crew('Beaux Pirates', [cavendish, suleiman], 'acp');

var saiCrew =           new Crew('Flotte de Happou', [donSai, donChinjao, boo, baby5, forcesACP], 'acp');

var ideoCrew =          new Crew('Équipage d\'Ideo', [ideo, blueGilly, abdullah, jeet], 'acp');

var leoCrew =           new Crew('Guerriers Tontatta', [leo, baxcon, beeAnne, flapper, kabu, wicka, rampo, bomba, bobomba, nubon, pellini, inhel, cotton, daikon], 'acp');

var hajrudinCrew =      new Crew('Nouveaux Géants', [hajrudin, stansen, road, goldberg, gerd], 'acp');

var orlombusCrew =      new Crew('Flotte Yonta Maria', [orlombus, colombus, forcesYontaMaria], 'acp');

var fourreauxCrew =     new Crew('Fourreaux Rouges', [kinemon, denjiro, inuarashi, nekomamushi, yokozunaKawamatsu, ashuraDoji, raizo, kanjuro, kikunojo], 'wano');

var bigAllianceCrew =   new Crew('Alliance Shinsekai', [monkeyDLuffy, roronoaZoro, vinsmokeSanji, jinbe, nicoRobin, franky, brook, tonytonyChopper, usopp, nami, trafalgarDWaterLaw, bepo, jeanBart, penguin, shachi, 
                                                        ikkaku, clione, uni, kinemon, denjiro, inuarashi, nekomamushi, yokozunaKawamatsu, ashuraDoji, raizo, kanjuro, kikunojo, kozukiMomonosuke, izou, shinobu, hyogoro, 
                                                        ohmasa, yatappe, ocho, tsunagoro, jo, forcesKozuki, pedro, carrot, wanda, sicilian, concelot, giovanni, milky, lebouc, monji, tristane, variete, rody, blackBack, 
                                                        keith, yomo, marco, yamato, xDrake], 'shinsekai');

//####-Batailles-####//
var godValleyBattle =   [[golDRoger, monkeyDGarp, hotokeSengoku, tsuru, silversRayleigh, scopperGabane, nozdon, sunbell, taro, doringo, petermoo, milletPine, ganryu, cBGalant, donquino, mrMomora, moonIsaacJr, yui, rangram, murgen, maxMarks, spencer, erio, rowing, jacksonbanner, bankuro, yamon, blumarine, crocus],
                         [rocksDXebec, edwardNewgate, kaido, charlotteLinlin, shiki, john, silverAxe],
                         []];


var romanceDawnBattle = [[monkeyDLuffy, roronoaZoro, koby],
                        [morgan, hermep],
                        []];

var villageDOrangeBattle = [[monkeyDLuffy, roronoaZoro, nami, boodle],
                            [baggy, carnage, morge, richy],
                            []];

var villageDeSiropBattle = [[monkeyDLuffy, roronoaZoro, nami, usopp, ninjin, piiman, tamanegi],
                            [kuro, jango, sham, buchi],
                            []];

var baratieBattle =     [[monkeyDLuffy, roronoaZoro, vinsmokeSanji, usopp, johnny],
                        [donKrieg, gin, pearl, fullbody],
                        [draculeMihawk]];

var arlongParkBattle =  [[monkeyDLuffy, roronoaZoro, vinsmokeSanji, nami, usopp, genzo, johnny, nojiko],
                        [arlong, octy, smack, kuroobi, kaneshiro, pisaro, take, shioyaki],
                        []];

var loguetownBattle =   [[monkeyDLuffy, roronoaZoro, vinsmokeSanji, nami, usopp],
                        [baggy, ladyAlvida, carnage, morge, richy, heppoko],
                        [smoker, tashigi]];

var whiskeyPeakBattle = [[monkeyDLuffy, roronoaZoro, nami, nefertariVivi, mr9, igaram],
                        [gem, mikita, missMonday, unluckies, missCatharina],
                        []];

var littleGardenBattle = [[monkeyDLuffy, roronoaZoro, vinsmokeSanji, nami, usopp, nefertariVivi],
                        [galdino, missGoldenweek, gem, mikita],
                        [broggy, dorry]];

var drumBattle =        [[monkeyDLuffy, roronoaZoro, vinsmokeSanji, nami, usopp, tonytonyChopper, nefertariVivi, kureha, dolton],
                        [wapol, chess, kuromarimo],
                        []];

var alabastaBattle =    [[monkeyDLuffy, roronoaZoro, vinsmokeSanji, tonytonyChopper, nami, usopp, pell, chaka, nefertariVivi, nefertariCobra, brahm, barrel, arrow, hyota],
                        [nicoRobin, crocodile, dazBonez, bonclay, zala, babe, drophy, mr7, missFathersDay, lassou],
                        [smoker, tashigi, hina, fullbody, jango, forcesMarines]];

var jayaBattle =        [[monkeyDLuffy, montblancCricket, masira, shojo],
                        [bellamy, sarquiss, lily, roth, eddy, helwett, reverse, mani, mule],
                        [marshallDTeach, jesusBurgess, vanAugur, docQ]];

var upperYardBattle =   [[monkeyDLuffy, roronoaZoro, vinsmokeSanji, nicoRobin, tonytonyChopper, nami, usopp],
                        [ener, ohm, satori, gedatsu, shura, yama, hotori, kotori],
                        [wiper, kamakiri, laki, braham, genbo, yotsubane, mayushika, warashi]];

var davyBackFightBattle = [[monkeyDLuffy, roronoaZoro, vinsmokeSanji, nami, usopp, tonytonyChopper, nicoRobin],
                        [foxy, porche, hamburg, kibagaeru, lombric, tweetums, kapoty, monda, pickles, bigPan, gina, sonier, donovan],
                        []];

var eniesLobbyBattle =  [[monkeyDLuffy, roronoaZoro, vinsmokeSanji, nicoRobin, tonytonyChopper, usopp, nami, oimo, kashii, pauly, chimney, kokoro, kop, kiev],
                        [robLucci, kaku, jabura, blueno, kalifa, fukuro, kumadori, nero, spandam, laskey, forcesMarines],
                        [monkeyDGarp, koby, hermep, kuzanAokiji]];

var thrillerBarkBattle = [[monkeyDLuffy, roronoaZoro, vinsmokeSanji,franky, nicoRobin, brook, tonytonyChopper, usopp, nami],
                        [geckoMoria, oz, absalom, perona, hogback, shimotsukiRyuma, forcesZombies, bao, gyoro, hildon, inuppe, jigoro, nin, silverAxe],
                        [bartholomewKuma]];

var sabaodyBattle =     [[monkeyDLuffy, roronoaZoro, eustassKidd, killer, trafalgarDWaterLaw, silversRayleigh],
                        [borsalinoKizaru, sentomaru, bartholomewKuma, forcesPacifista, disco],
                        [ basilHawkins, scratchmenApoo, xDrake, kaisoUrouge, jewelryBonney, caponeGangBege]];

var impelDownBattle =   [[monkeyDLuffy, jinbe, baggy, emporioIvankov, inazuma, bonclay, galdino, crocodile, dazBonez],
                        [magellan, hannyabal, domino, forcesImpelDown, basilisk, minochihuahua, minokoala, minorhinoceros, minotaurus, minozebra, sadi, sukoshibaKanishitoru],
                        [marshallDTeach, shiliew, jesusBurgess, vanAugur, laffite, docQ, vascoShot, catarinaDevon, sanjuanWolf, avaloPizzaro]];

var marineFordBattle =  [[edwardNewgate, marco, portgasDAce, diamondJoz, vista, blamenko, rakuyo, namur, blenheim, curiel, kingdew, haruta, atmos, speedJiru, fossa, izou, littleOzJr, bizarre, barry, baggaley, arthur, andre, amadob, agsilly, aggie, banshee, brew, brocca, choi, colscon, cornelia, decalvanBrothers, delacuaji, dogya, doma, duckyBree, elmy, epoida, finamore, forliewbs, ganryu2, greatMichael, hangan, happygun, hublot, islewan, julius, kechatch, kimel, kinga, kotatsu, kukai, leonero, maskedDeuce, mcGuy, mihar, ninth, nosgarl, ossamondo, palms, pavlik, ramba, reforte, rush, skull,
                        sleepy, vitan, wallace, whiteyBay, zodia, zucca, ao, monkeyDLuffy, jinbe, boaHancock, emporioIvankov, inazuma, baggy, crocodile, dazBonez],
                        [sakazukiAkainu, kuzanAokiji, monkeyDGarp, borsalinoKizaru, hotokeSengoku, komir, johnGiant, momonga, dalmatien, tsuru, maynard, doberMan, strawberry, yamakaji, lacroix, onigumo, ronse, bastille, cancer, mozambia, stainless, draw, moumousagi, kadar, tokkikake, nazuKetagari, catacombo, kadar, sicily, akehende, tBone, smoker, tashigi, koby, hermep, hina, jango, fullbody, bogard, forcesMarines, squardo, draculeMihawk, geckoMoria, donQuichotteDoflamingo, marshallDTeach, jesusBurgess, shiliew, vanAugur, avaloPizzaro, laffite, catarinaDevon, sanjuanWolf, vascoShot, docQ],
                        [shanks, benBeckmann, luckyRoo, yassop, limeJuice, bonkPunch, buildingSnake, hongou, howlingGab, rockstar, trafalgarDWaterLaw, bepo, jeanBart, penguin, shachi, ikkaku, clione, uni]];

var hommesPoissonsBattle = [[monkeyDLuffy, roronoaZoro, vinsmokeSanji, jinbe, franky, nicoRobin, brook, tonytonyChopper, nami, usopp, neptune, shirahoshi, fukaboshi, ryuboshi, manboshi],
                        [hodyJones, dosun, zeo, daruma, icarosMucchi, hyouzou, hammond, wadatsumi, vanderDeckenIX, harisenbon],
                        []];

var punkHazardBattle =  [[monkeyDLuffy, roronoaZoro, vinsmokeSanji, trafalgarDWaterLaw, smoker, tashigi, forcesMarines, franky, nicoRobin, brook, tonytonyChopper, nami, usopp, barbeBrune, run, bakezo, boomba, chappe, jero, konbu, pike, sind, smooge],
                        [cesarClown, kichiguVergo, monet, yetiCoolBrothers, baby5, buffalo],
                        []];

var dressrosaBattle =   [[monkeyDLuffy, roronoaZoro, franky, nicoRobin, brook, usopp, sabo, trafalgarDWaterLaw, cavendish, bartolomeo, hajrudin, donSai, baby5, donChinjao, orlombus, ideo, blueGilly, suleiman, boo, leo, beeAnne, kabu, baxcon, flapper, wicka, rampo, bomba, bobomba, nubon, pellini, inhel, cotton, daikon, gambia, abdullah, jeet, colombus, kyros, viola, acilia, bobbyFunk, chao, dagama, damask, ucy, hera, jeanAngo, kellyFunk, meadows, mummy, rebecca, rikuDoldoIII, rollingLogan, spartan, tankLepanto],
                        [donQuichotteDoflamingo, diamante, pica, trebol, dellinger, senorPink, gladius, laoG, bellamy, machvise, jora, buffalo, sugar, kyuin],
                        [isshoFujitora, maynard, bastille, forcesMarines]];

var wholeCakeBattle =   [[monkeyDLuffy, vinsmokeSanji, brook, jinbe, tonytonyChopper, nami, caponeGangBege, pedro, carrot],
                        [charlotteLinlin, charlotteKatakuri, charlotteSmoothie, charlotteCracker, charlottePerospero, charlotteDaifuku, charlotteOven, charlotteAmande, charlotteHachee, charlotteMontdor, charlotteGalette, charlotteOpera, charlotteCounter, charlotteCadenza, charlotteCabalette, charlotteCompote, charlotteMondee, charlotteBrulee, tamago, bobbin, charlotteMondee, charlotteAmande, charlotteHachee, charlotteEffilee, charlotteGala, charlotteCustard, charlotteAngel, charlotteZuccotto, charlotteBroye,
                            charlotteNusstorte, charlotteBasskarte, charlotteDosmarche, charlotteNoisette, charlotteMoscato, charlotteMash, charlotteCornstarch, charlotteCompo, charlotteLaurin, charlotteMontdor, charlotteMozart, charlotteMarnier, charlotteHighFat, charlotteTablet, charlotteCitron, charlotteCinnamon, charlotteSaintMarc, charlotteBasans, charlotteMelise, charlotteDacquoise, charlotteGalette, charlottePoire,
                            charlotteBavarois, charlottePrim, charlotteKanten, charlotteKato, charlotteMontb, charlotteChiboust, charlotteMobile, charlotteMarble, charlotteMyukuru, charlotteMaple, charlotteBrownie, charlotteJoconde, charlotteRaisin, charlottePanna, charlotteMascarpone, charlotteJoscarpone, charlotteYuen, charlotteNewgo, charlotteNewichi, charlotteNewji, charlotteNewsan, charlotteNewshi, charlotteNutmeg,
                            charlotteAkimeg, charlotteAllmeg, charlotteHarumeg, charlotteFuyumeg, charlotteNougat, charlottePudding, charlotteFlambee, charlotteAnglais, charlotteAnana, charlotteDolce, charlotteDragee, streusen, charlotteNormande, diesel],
                        [vinsmokeJudge, vinsmokeIchiji, vinsmokeNiji, vinsmokeYonji, vinsmokeReiju, forcesGerma]];

var onigashimaBattle =  [[monkeyDLuffy, roronoaZoro, vinsmokeSanji, franky, nicoRobin, brook, tonytonyChopper, nami, usopp, jinbe, trafalgarDWaterLaw, eustassKidd, killer, xDrake, yamato, ashuraDoji, denjiro, kinemon, yokozunaKawamatsu, nekomamushi, inuarashi, raizo, kikunojo, izou, marco, sicilian, giovanni, concelot, carrot, wanda, rody, blackBack, caribou, kozukiMomonosuke, shinobu, hyogoro, ohmasa, tsunagoro, ocho, yatappe, tama, forcesKozuki],
                        [kaido, king, queen, jack, whosWho, pageOne, sasaki, blackMaria, ulti, kanjuro, babanuki, solitaire, daifugo, fourTricks, hamlet, poker, mizerka, basilHawkins, scratchmenApoo, number1, number2, number3, number4, number5, number7, number8, number10, forcesKaido, charlotteLinlin, charlottePerospero, charlotteSmoothie, kurozumiOrochi],
                        []];


//JJJJJJJJJ-JoJo-JJJJJJJJJJ//

//A
var aCDC =              new PersoJ('AC_DC',                     100,    'bt',   0,100,0,0,0,0,0,0);
var adams =             new PersoJ('Adams',                     10,     'pb',   10,0,0,0,0,0,0,0);
var akiraOtoishi =      new PersoJ('Akira_Otoishi',             322,    'du',   0,0,0,322,0,0,0,0);
var alessi =            new PersoJ('Alessi',                    92,     'sc',   0,0,92,0,0,0,0,0);
var andreBoomBoom =     new PersoJ('Andre_Boom_Boom',           151,    'sbr',  0,0,0,0,0,0,151,0);
var anjuroKatagiri =    new PersoJ('Anjuro_Katagiri',           188,    'du',   0,0,0,188,0,0,0,0);
var anne =              new PersoJ('Anne',                      1,      'sc',   0,0,1,0,0,0,0,0);
var arabiaFats =        new PersoJ('Arabia_Fats',               96,     'sc',   0,0,96,0,0,0,0,0);
var axlRO =             new PersoJ('Axl_RO',                    193,    'sbr',  0,0,0,0,0,0,193,0);
var ayaTsuji =          new PersoJ('Aya_Tsuji',                 17,     'du',   0,0,0,17,0,0,0,0);

//B
var bebeVert =          new PersoJ('Bébé_Vert',                 350,    'so',   0,0,0,0,0,350,0,0);
var benjaminBoomBoom =  new PersoJ('Benjamin_Boom_Boom',        161,    'sbr',  0,0,0,0,0,0,161,0);
var blackmore =         new PersoJ('Blackmore',                 332,    'sbr',  0,0,0,0,0,0,332,0);
var boingo =            new PersoJ('Boingo',                    1,      'sc',   0,0,1,0,0,0,0,0);
var bruford =           new PersoJ('Bruford',                   20,     'pb',   20,0,0,0,0,0,0,0);
var brunoBucciarati =   new PersoJ('Bruno_Bucciarati',          360,    'gw',   0,0,0,0,360,0,0,0);
var bugEaten =          new PersoJ('Bug-Eaten',                 178,    'du',   0,0,0,178,0,0,0,0);

//C
var caesarAnthonioZeppeli = new PersoJ('Caesar_Anthonio_Zeppeli', 90,   'bt',   0,90,0,0,0,0,0,0);
var cameo =             new PersoJ('Cameo',                     140,    'sc',   0,0,140,0,0,0,0,0);
var carne2 =            new PersoJ('Carne_',                    222,    'gw',   0,0,0,0,222,0,0,0);
var chaka2 =            new PersoJ('Chaka_',                    280,    'sc',   0,0,280,0,0,0,0,0);
var cioccolata =        new PersoJ('Cioccolata',                310,    'gw',   0,0,0,0,310,0,0,0);

//D
var danielJDArby =      new PersoJ('Daniel_J_D\'Arby',          45,     'sc',   0,0,45,0,0,0,0,0);
var danG =              new PersoJ('Dan_G',                     110,    'so',   0,0,0,0,0,110,0,0);
var darioBrando =       new PersoJ('Dario_Brando',              1,      'pb',   1,0,0,0,0,0,0,0);
var devo =              new PersoJ('Devo',                      281,    'sc',   0,0,281,0,0,0,0,0);
var diavolo =           new PersoJ('Diavolo',                   450,    'gw',   0,0,0,0,450,0,0,0);
var diegoBrando =       new PersoJ('Diego_Brando',              444,    'sbr',  0,0,0,0,0,0,444,0);
var dioBrando =         new PersoJ('Dio_Brando',                500,    'sc',   50,0,500,0,0,0,0,0);
var dire =              new PersoJ('Dire',                      30,     'pb',   30,0,0,0,0,0,0,0);
var dISCO =             new PersoJ('D-I-S-C-O',                 48,     'sbr',  0,0,0,0,0,0,48,0);
var donatellaUna =      new PersoJ('Donatella_Una',             1,      'gw',   0,0,0,0,0,0,0,0);
var donatelloVersace =  new PersoJ('Donatello_Versace',         333,    'so',   0,0,0,0,0,333,0,0);
var donovan =           new PersoJ('Donovan',                   8,      'bt',   0,8,0,0,0,0,0,0);
var doobie =            new PersoJ('Doobie',                    13,     'pb',   13,0,0,0,0,0,0,0);
var dotHan =            new PersoJ('Dot_Han',                   2,      'sbr',  0,0,0,0,0,0,2,0);
var drFerdinant =       new PersoJ('Dr._Ferdinant',             383,    'sbr',  0,0,0,0,0,0,383,0);

//E
var emporioAlnino =     new PersoJ('Emporio_Alnino',            4,      'so',   0,0,0,0,0,4,0,0);
var enricoPucci =       new PersoJ('Enrico_Pucci',              900,   'so',   0,0,0,0,0,900,0,0);
var enya =              new PersoJ('Enya',                      22,     'sc',   0,0,22,0,0,0,0,0);
var erinaPendleton =    new PersoJ('Erina_Pendleton',           1,      'pb',   1,1,0,0,0,0,0,0);

//F
var fatherStyx =        new PersoJ('Father_Styx',               1,      'pb',   1,0,0,0,0,0,0,0);
var fooFighter =        new PersoJ('Foo_Fighters',              288,    'so',   0,0,0,0,0,288,0,0);
var forever =           new PersoJ('Forever',                   31,     'sc',   0,0,31,0,0,0,0,0);
var formaggio =         new PersoJ('Formaggio',                 132,    'gw',   0,0,0,0,132,0,0,0);
var fungamiYuya =       new PersoJ('Fungami_Yuya',              210,    'du',   0,0,0,210,0,0,0,0);
var funnyValentine =    new PersoJ('Funny_Valentine',           990,   'sbr',  0,0,0,0,0,0,990,0);

//G
var gaucho =            new PersoJ('Gaucho',                    2,      'sbr',  0,0,0,0,0,0,2,0);
var gelato =            new PersoJ('Gelato',                    34,     'gw',   0,0,0,0,34,0,0,0);
var georgeJoestarI =    new PersoJ('George_Joestar_I',          1,      'pb',   1,0,0,0,0,0,0,0);
var georgeJoestarIsbr = new PersoJ('George_Joestar_I_sbr',      1,      'sbr',  0,0,0,0,0,0,1,0);
var georgeJoestarII =   new PersoJ('George_Joestar_II',         7,      'bt',   0.1,7,0,0,0,0,0,0);
var ghiaccio =          new PersoJ('Ghiaccio',                  210,    'gw',   0,0,0,0,210,0,0,0);
var giornoGiovanna =    new PersoJ('Giorno_Giovanna',           6000,   'gw',   0,0,0,0,6000,0,0,0);
var gloriaCostello =    new PersoJ('Gloria_Costello',           1,      'so',   0,0,0,0,0,0,0,0);
var grayFly =           new PersoJ('Gray_Fly',                  89,     'sc',   0,0,89,0,0,0,0,0);
var gregorioZeppeli =   new PersoJ('Gregorio_Zeppeli',          33,     'sbr',  0,0,0,0,0,0,33,0);
var guccio =            new PersoJ('Guccio',                    23,     'so',   0,0,0,0,0,23,0,0);
var guidoMista =        new PersoJ('Guido_Mista',               302,    'gw',   0,0,0,0,312,0,0,0);
var gyroZeppeli =       new PersoJ('Gyro_Zeppeli',              395,    'sbr',  0,0,0,0,0,0,395,0);

//H
var hazamadaToshikazu = new PersoJ('Hazamada_Toshikazu',        110,    'du',   0,0,0,110,0,0,0,0);
var hermesCostello =    new PersoJ('Hermes_Costello',           111,    'so',   0,0,0,0,0,111,0,0);
var higashikataJosuke = new PersoJ('Higashikata_Josuke',        400,    'du',   0,0,0,400,0,0,0,0);
var higashikataNorisukeI = new PersoJ('Higashikata_Norisuke_I', 23,     'sbr',  0,0,0,0,0,0,23,0);
var higashikataRina =   new PersoJ('Higashikata_Rina',          1,      'sbr',  0,0,0,0,0,0,1,0);
var higashikataRyohei = new PersoJ('Higashikata_Ryohei',        2,      'du',   0,0,0,2,0,0,0,0);
var higashikataTomoko = new PersoJ('Higashikata_Tomoko',        1,      'du',   0,0,0,1,0,0,0,0);
var hiroseAyana =       new PersoJ('Hirose_Ayana',              1,      'du',   0,0,0,1,0,0,0,0);
var hiroseKoichi =      new PersoJ('Hirose_koichi',             250,    'du',   0,0,0,250,250,0,0,0);
var holHorse =          new PersoJ('Hol_Horse',                 98,     'sc',   0,0,98,0,0,0,0,0);
var hotPants =          new PersoJ('Hot_Pants',                 131,    'sbr',  0,0,0,0,0,0,131,0);

//I
var iggy =              new PersoJ('Iggy',                      196,    'sc',   0,0,196,0,0,0,0,0);
var illuso =            new PersoJ('Illuso',                    225,    'gw',   0,0,0,0,225,0,0,0);

//J
var jackLEventreur =    new PersoJ('Jack_L\'Éventreur',         18,     'pb',   18,0,0,0,0,0,0,0);
var jeanPierrePolnareff = new PersoJ('Jean-Pierre_Polnareff',   300,    'sc',   0,0,300,0,100,0,0,0);
var jesus =             new PersoJ('Jesus',                     999,    'sbr',  0,0,0,0,0,0,999,0);
var jGeil =             new PersoJ('J_Geil',                    299,    'sc',   0,0,299,0,0,0,0,0);
var johngalliA =        new PersoJ('Johngalli_A',               355,    'so',   0,0,0,0,0,355,0,0);
var johnnyJoestar =     new PersoJ('Johnny_Joestar',            5555,   'sbr',  0,0,0,0,0,0,5555,0);
var jonathanJoestar =   new PersoJ('Jonathan_Joestar',          50,     'pb',   50,0,0,0,0,0,0,0);
var josephJoestar =     new PersoJ('Joseph_Joestar',            200,    'bt',   0,200,100,2,0,0,0,0);

//K
var kanedaichiToyohiro = new PersoJ('Kanedaichi_Toyohiro',      44,     'du',   0,0,0,44,0,0,0,0);
var kars =              new PersoJ('Kars',                      1000,   'bt',   0,1000,0,0,0,0,0,0);
var kawajiriHayato =    new PersoJ('Kawajiri_Hayato',           1,      'du',   0,0,0,1,0,0,0,0);
var kawajiriKosaku =    new PersoJ('Kawajiri_Kosaku',           1,      'du',   0,0,0,1,0,0,0,0);
var kawajiriShinobu =   new PersoJ('Kawajiri_Shinobu',          1,      'du',   0,0,0,1,0,0,0,0);
var kennyG =            new PersoJ('Kenny_G',                   45,     'sc',   0,0,45,0,0,0,0,0);
var kenzou =            new PersoJ('Kenzou',                    399,    'so',   0,0,0,0,0,399,0,0);
var khan =              new PersoJ('Khan',                      46,     'sc',   0,0,46,0,0,0,0,0);
var kiraYoshihiro =     new PersoJ('Kira_Yoshihiro',            47,     'du',   0,0,0,47,0,0,0,0);
var kiraYoshikage =     new PersoJ('Kira_Yoshikage',            400,    'du',   0,0,0,400,0,0,0,0);
var kishibeRohan =      new PersoJ('Kishibe_Rohan',             230,    'du',   0,0,0,230,0,0,0,0);
var kobayashiTamami =   new PersoJ('Kobayashi_Tamami',          34,     'du',   0,0,0,34,0,0,0,0);
var kujoHoly =          new PersoJ('Kujo_Holy',                 1,      'sc',   0,0,1,0,0,0,0,0);
var kujoJolyne =        new PersoJ('Kujo_Jolyne',               340,    'so',   0,0,0,0,0,340,0,0);
var kujoJotaro =        new PersoJ('Kujo_Jotaro',               550,    'sc',   0,0,550,490,490,490,0,0);
var kujoSadao =         new PersoJ('Kujo_Sadao',                1,      'sc',   0,0,1,0,0,0,0,0);

//L
var lABoomBoom =        new PersoJ('L.A._Boom_Boom',            156,    'sbr',  0,0,0,0,0,0,156,0);
var langRangler =       new PersoJ('Lang_Rangler',              233,    'so',   0,0,0,0,0,233,0,0)
var leoneAbbacchio =    new PersoJ('Leone_Abbacchio',           251,    'gw',   0,0,0,0,251,0,0,0);
var lisaLisa =          new PersoJ('Lisa-Lisa',                 80,     'bt',   0.1,80,0,0,0,0,0,0);
var loccobarocco =      new PersoJ('Loccobarocco',              7,      'so',   0,0,0,0,0,7,0,0);
var loggins =           new PersoJ('Loggins',                   50,     'bt',   0,50,0,0,0,0,0,0);
var luca =              new PersoJ('Luca',                      44,     'gw',   0,0,0,0,44,0,0,0);
var lucySteel =         new PersoJ('Lucy_Steel',                1,      'sbr',  0,0,0,0,0,0,1,0);

//M
var magentMagent =      new PersoJ('Magent_Magent',             99,     'sbr',  0,0,0,0,0,0,99,0);
var malena =            new PersoJ('Malèna',                    1,      'sc',   0,0,1,0,0,0,0,0);
var mannishBoy =        new PersoJ('Mannish_Boy',               40,     'sc',   0,0,40,0,0,0,0,0);
var marco =             new PersoJ('Marco',                     0.5,    'sbr',  0,0,0,0,0,0,0.5,0);
var mariah =            new PersoJ('Mariah',                    277,    'sc',   0,0,277,0,0,0,0,0);
var marioZeppeli =      new PersoJ('Mario_Zeppeli',             40,     'bt',   0,40,0,0,0,0,0,0);
var marioZucchero =     new PersoJ('Mario_Zucchero',            48,     'gw',   0,0,0,0,48,0,0,0);
var mark =              new PersoJ('Mark',                      3,      'bt',   0,3,0,0,0,0,0,0);
var maryJoestar =       new PersoJ('Mary_Joestar',              1,      'pb',   1,0,0,0,0,0,0,0);
var masazoKinoto =      new PersoJ('Masazo_Kinoto',             1,      'du',   0,0,0,1,0,0,0,0);
var melone =            new PersoJ('Melone',                    238,    'gw',   0,0,0,0,238,0,0,0);
var messina =           new PersoJ('Messina',                   40,     'bt',   0,40,0,0,0,0,0,0);
var midler =            new PersoJ('Midler',                    228,    'sc',   0,0,298,0,0,0,0,0);
var mikeO =             new PersoJ('Mike_O.',                   138,    'sbr',  0,0,0,0,0,0,138,0);
var mikitakaHazekura =  new PersoJ('Mikitaka_Hazekura',         43,     'du',   0,0,0,43,0,0,0,0);
var miraschon =         new PersoJ('Miraschon',                 202,    'so',   0,0,0,0,0,202,0,0);
var miucciaMiuller =    new PersoJ('Miuccia_Miuller',           304,    'so',   0,0,0,0,0,304,0,0);
var mohamedAvdol =      new PersoJ('Mohamed_Avdol',             350,    'sc',   0,0,350,0,0,0,0,0);
var mountainTim =       new PersoJ('Mountain_Tim',              145,    'sbr',  0,0,0,0,0,0,145,0);
var mrsRobinson =       new PersoJ('Mrs_Robinson',              121,    'sbr',  0,0,0,0,0,0,121,0);

//N
var naranciaGhirga =    new PersoJ('Narancia_Ghirga',           295,    'gw',   0,0,0,0,295,0,0,0);
var narcissoAnnasui =   new PersoJ('Narcisso_Annasui',          222,    'so',   0,0,0,0,0,222,0,0);
var nDoul =             new PersoJ('N\'Doul',                   156,    'sc',   0,0,156,0,0,0,0,0);
var nena =              new PersoJ('Nena',                      37,     'sc',   0,0,37,0,0,0,0,0);
var nicholasJoestar =   new PersoJ('Nicholas_Joestar',          3,      'sbr',  0,0,0,0,0,0,3,0);
var nijimuraKeicho =    new PersoJ('Nijimura_Keicho',           133,    'du',   0,0,0,133,0,0,0,0);
var nijimuraOkuyasu =   new PersoJ('Nijimura_Okuyasu',          290,    'du',   0,0,0,290,0,0,0,0);
var noriakiKakyoin =    new PersoJ('Noriaki_Kakyoin',           300,    'sc',   0,0,300,0,0,0,0,0);
var nukesaku =          new PersoJ('Nukesaku',                  21,     'sc',   0,0,21,0,0,0,0,0);

//O
var oingo =             new PersoJ('Oingo',                     11,     'sc',   0,0,11,0,0,0,0,0);
var oyanagiKen =        new PersoJ('Oyanagi_Ken',               36,     'du',   0,0,0,36,0,0,0,0);
var oyecomova =         new PersoJ('Oyecomova',                 309,    'sbr',  0,0,0,0,0,0,309,0);

//P
var pannacottaFugo =    new PersoJ('Pannacotta_Fugo',           356,    'gw',   0,0,0,0,356,0,0,0);
var pericolo =          new PersoJ('Pericolo',                  1,      'gw',   0,0,0,0,1,0,0,0);
var perlaPucci =        new PersoJ('Perla_Pucci',               1,      'so',   0,0,0,0,0,1,0,0);
var pesci =             new PersoJ('Pesci',                     171,    'gw',   0,0,0,0,171,0,0,0);
var petshop =           new PersoJ('Petshop',                   199,    'sc',   0,0,199,0,0,0,0,0);
var poco =              new PersoJ('Poco',                      1,      'pb',   1,0,0,0,0,0,0,0);
var pocoloco =          new PersoJ('Pocoloco',                  39,     'sbr',  0,0,0,0,0,0,39,0);
var polpo =             new PersoJ('Polpo',                     333,    'gw',   0,0,0,0,333,0,0,0);
var porkPieHatKid =     new PersoJ('Pork_Pie_Hat_Kid',          198,    'sbr',  0,0,0,0,0,0,198,0);
var prosciutto =        new PersoJ('Prosciutto',                177,    'gw',   0,0,0,0,177,0,0,0);

//R
var rikiel =            new PersoJ('Rikiel',                    333,    'so',   0,0,0,0,0,333,0,0);
var ringoRoadagain =    new PersoJ('Ringo_Roadagain',           285,    'sbr',  0,0,0,0,0,0,285,0);
var risottoNero =       new PersoJ('Risotto_Nero',              393,    'gw',   0,0,0,0,393,0,0,0);
var robertEOSpeedwagon = new PersoJ('Robert_E_O_Speedwagon',    8,      'pb',   8,1,0,0,0,0,0,0);
var romeoJisso =        new PersoJ('Romeo_Jisso',               1,      'so',   0,0,0,0,0,1,0,0);
var roses =             new PersoJ('Roses',                     15,     'sc',   0,0,15,0,0,0,0,0);
var rubberSoul =        new PersoJ('Rubber_Soul',               321,    'sc',   0,0,321,0,0,0,0,0);
var rudolvonStroheim =  new PersoJ('Rudol_von_Stroheim',        45,     'bt',   0,45,0,0,0,0,0,0);

//S
var sale =              new PersoJ('Sale',                      134,    'gw',   0,0,0,0,134,0,0,0);
var sandman =           new PersoJ('Sandman',                   240,    'sbr',  0,0,0,0,0,0,240,0);
var santana =           new PersoJ('Santana',                   78,     'bt',   0,70,0,0,0,0,0,0);
var scarletValentine =  new PersoJ('Scarlet_Valentine',         1,      'sbr',  0,0,0,0,0,0,1,0);
var scolippi =          new PersoJ('Scolippi',                  1,      'gw',   0,0,0,0,1,0,0,0);
var secco =             new PersoJ('Secco',                     340,    'gw',   0,0,0,0,340,0,0,0);
var sherryPolnareff =   new PersoJ('Sherry_Polnareff',          1,      'sc',   0,0,0,0,0,0,0,0);
var shizukaJoestar =    new PersoJ('Shizuka_Joestar',           0.1,    'du',   0,0,0,0.1,0,0,0,0);
var smokeyBrown =       new PersoJ('Smokey_Brown',              1,      'bt',   0,1,0,0,0,0,0,0);
var sorbet =            new PersoJ('Sorbet',                    34,     'gw',   0,0,0,0,34,0,0,0);
var squalo =            new PersoJ('Squalo',                    209,    'gw',   0,0,0,0,209,0,0,0);
var sportsMaxx =        new PersoJ('Sports_Maxx',               189,    'so',   0,0,0,0,0,189,0,0);
var steelyDan =         new PersoJ('Steely_Dan',                43,     'sc',   0,0,43,0,0,0,0,0);
var stevenSteel =       new PersoJ('Steven_Steel',              1,      'sbr',  0,0,0,0,0,0,1,0);
var straizo =           new PersoJ('Straizo',                   40,     'pb',   40,55,0,0,0,0,0,0);
var sugarMountain =     new PersoJ('Sugar_Mountain',            312,    'sbr',  0,0,0,0,0,0,312,0);
var sugimotoReimi =     new PersoJ('Sugimoto_Reimi',            1,      'du',   0,0,0,1,0,0,0,0);
var suzieQ =            new PersoJ('Suzie_Q',                   1,      'bt',   0,1,1,0,0,0,0,0);

//T
var tama2 =             new PersoJ('Tama_',                     29,     'du',   0,0,0,29,0,0,0,0);
var tarkus =            new PersoJ('Tarkus',                    20,     'pb',   20,0,0,0,0,0,0,0);
var tattoo =            new PersoJ('Tattoo',                    14,     'pb',   14,0,0,0,0,0,0,0);
var terenceTDArby =     new PersoJ('Terence_T_D\'Arby',         46,     'sc',   0,0,46,0,0,0,0,0);
var terunosukeMiyamoto = new PersoJ('Terunosuke_Miyamoto',      295,    'du',   0,0,0,295,0,0,0,0);
var thunderMcQueen =    new PersoJ('Thunder_McQueen',           101,    'so',   0,0,0,0,0,101,0,0);
var tiziano =           new PersoJ('Tiziano',                   25,     'gw',   0,0,0,0,25,0,0,0);
var tonioTrussardi =    new PersoJ('Tonio_Trussardi',           3,      'du',   0,0,0,3,0,0,0,0);
var tonpetty =          new PersoJ('Tonpetty',                  32,     'pb',   32,0,0,0,0,0,0,0);
var trishUna =          new PersoJ('Trish_Una',                 111,    'gw',   0,0,0,0,111,0,0,0);

//U
var ungalo =            new PersoJ('Ungalo',                    43,     'so',   0,0,0,0,0,43,0,0);

//V
var vanillaIce =        new PersoJ('Vanilla_Ice',               384,    'sc',   0,0,384,0,0,0,0,0);
var vivianoWestwood =   new PersoJ('Viviano_Westwood',          1,      'so',   0,0,0,0,0,1,0,0);

//W
var wangChan =          new PersoJ('Wang_Chan',                 11,     'pb',   11,0,0,0,0,0,0,0);
var weatherReport =     new PersoJ('Weather_Report',            600,    'so',   0,0,0,0,0,600,0,0);
var wekapipo =          new PersoJ('Wekapipo',                  325,    'sbr',  0,0,0,0,0,0,325,0);
var wham =              new PersoJ('Wham',                      190,    'bt',   0,190,0,0,0,0,0,0);
var willAnthonioZeppeli = new PersoJ('Will_Anthonio_Zeppeli',   47,     'pb',   47,0,0,0,0,0,0,0);
var wilsonPhillips =    new PersoJ('Wilson_Phillips',           1,      'sc',   0,0,1,0,0,0,0,0);
var wiredBeck =         new PersoJ('Wired_Beck',                12,     'bt',   0,12,0,0,0,0,0,0);

//Y
var yamagishiYukako =   new PersoJ('Yamagishi_Yukako',          220,    'du',   0,0,0,220,0,0,0,0);
var yanguShigekiyo =    new PersoJ('Yangu_Shigekiyo',           190,    'du',   0,0,0,190,0,0,0,0);

//Z
var zZ =                new PersoJ('ZZ',                        28,     'sc',   0,0,28,0,0,0,0,0);




//####-Implément-####//
if(document.getElementById('interface').contains(classementPHTML)) {
    implement(listeOfPersos, classementPHTML);
    implement(listeOfCrews, classementCHTML);


    for (var i = 0; i < listeOfPersos.length; i++) {
        document.getElementById(listeOfPersos[i].id).addEventListener('click', function() {
            try {
                imageHTML.innerHTML = `<img src="../Char/${this.id}.png">`;
            }
            catch {
                imageHTML.innerHTML = `<img src="../Char/${this.id}.jpg">`;
            }
        });
    }


    document.getElementById('batailles').addEventListener('change', function (ev) {

        document.getElementById('team1').innerHTML = '';
        document.getElementById('team2').innerHTML = '';
        document.getElementById('team3').innerHTML = '';

        switch(ev.target.value) {
            case 'godvalley':
                battles(godValleyBattle, 1);
                console.log(sizOfBattle(godValleyBattle, 1));
                break;
            case 'romancedawn':
                battles(romanceDawnBattle, 1);
                console.log(sizOfBattle(romanceDawnBattle, 1));
                break;
            case 'villagedorange':
                battles(villageDOrangeBattle, 1);
                console.log(sizOfBattle(villageDOrangeBattle, 1));
                break;
            case 'villagedesirop':
                battles(villageDeSiropBattle, 1);
                console.log(sizOfBattle(villageDeSiropBattle, 1));
                break;
            case 'baratie':
                battles(baratieBattle, 1);
                console.log(sizOfBattle(baratieBattle, 1));
                break;
            case 'arlongpark':
                battles(arlongParkBattle, 1);
                console.log(sizOfBattle(arlongParkBattle, 1));
                break;
            case 'loguetown':
                battles(loguetownBattle, 1);
                console.log(sizOfBattle(loguetownBattle, 1));
                break;
            case 'whiskeypeak':
                battles(whiskeyPeakBattle, 1);
                console.log(sizOfBattle(whiskeyPeakBattle, 1));
                break;
            case 'littlegarden':
                battles(littleGardenBattle, 1);
                console.log(sizOfBattle(littleGardenBattle, 1));
                break;
            case 'drum':
                battles(drumBattle, 1);
                console.log(sizOfBattle(drumBattle, 1));
                break;
            case 'alabasta':
                battles(alabastaBattle, 1);
                console.log(sizOfBattle(alabastaBattle, 1));
                break;
            case 'jaya':
                battles(jayaBattle, 1);
                console.log(sizOfBattle(jayaBattle, 1));
                break;
            case 'upperyard':
                battles(upperYardBattle, 2);
                console.log(sizOfBattle(upperYardBattle, 2));
                break;
            case 'davybackfight':
                battles(davyBackFightBattle, 2);
                console.log(sizOfBattle(davyBackFightBattle, 2));
                break;
            case 'enieslobby':
                battles(eniesLobbyBattle, 3);
                console.log(sizOfBattle(eniesLobbyBattle, 3));
                break;
            case 'thrillerbark':
                battles(thrillerBarkBattle, 4);
                console.log(sizOfBattle(thrillerBarkBattle, 4));
                break;
            case 'sabaody':
                battles(sabaodyBattle, 5);
                console.log(sizOfBattle(sabaodyBattle, 5));
                break;
            case 'impeldown':
                battles(impelDownBattle, 5);
                console.log(sizOfBattle(impelDownBattle, 5));
                break;
            case 'marineford':
                battles(marineFordBattle, 5);
                console.log(sizOfBattle(marineFordBattle, 5));
                break;
            case 'hommespoissons':
                battles(hommesPoissonsBattle, 6);
                console.log(sizOfBattle(hommesPoissonsBattle, 6));
                break;
            case 'punkhazard':
                battles(punkHazardBattle, 7);
                console.log(sizOfBattle(punkHazardBattle, 7));
                break;
            case 'dressrosa':
                battles(dressrosaBattle, 8);
                console.log(sizOfBattle(dressrosaBattle, 8));
                break;
            case 'wholecake':
                battles(wholeCakeBattle, 9);
                console.log(sizOfBattle(wholeCakeBattle, 9));
                break;
            case 'onigashima':
                battles(onigashimaBattle, 10);
                console.log(sizOfBattle(onigashimaBattle, 10));
                break;
            default:
        }
    });

} else {
    implement(listeOfPersosJ, classementPJHTML);


    for (var i = 0; i < listeOfPersosJ.length; i++) {
        document.getElementById(listeOfPersosJ[i].id).addEventListener('click', function() {
            try {
                imageJHTML.innerHTML = `<img src="../Char/${this.id}.png">`;
            }
            catch {
                imageJHTML.innerHTML = `<img src="../Char/${this.id}.jpg">`;
            }
        });
    }
}