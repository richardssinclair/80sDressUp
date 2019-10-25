const characters = [{
    id: 'madonna',
    name: 'Madonna',
    styleName: 'madonna',
    profilePic: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-madonnaicon_DNT',
    dressUpPic: 'https://images.riverisland.com/is/image/RiverIsland/c20191023%2D80siconsgame%2Davatar%2Dmadonna%5FDNT?$PNG%20Alpha%20Transparency$',
    description: 'When you think of 80s pop hits, you can’t not think about Madonna, right? They don’t call her the Queen of Pop for nothing. A true legend of the  era, this Material Girl was all about the fashion. From bright coloured leggings and oversized bows to fishnet tights and that cone bra, she’s no stranger to turning heads. Now? The embellished blazer has Madonna written all over it, but how will you style her?'
},{
    id: 'whitneyHuston',
    name: 'Whitney Houston',
    styleName: 'whitney',
    profilePic: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-whitneyicon_DNT',
    dressUpPic: 'https://images.riverisland.com/is/image/RiverIsland/c20191023%2D80siconsgame%2Davatar%2Dwhitney%5FDNT?$PNG%20Alpha%20Transparency$',
    description: 'It’s safe to say Whitney Houston has had her fair share of fashion moments in time. Who can remember that rainbow striped suit dress? Or her red lace catsuit? Her songs are known for being classic 80s hits and so were her outfits with shoulder pads, embellishments and all of the lace. Singer-turned-actress, she’s no stranger to a stage or camera, we think she’d have loved the floral ruched mini dress, but now’s the time for you to find that paparazzi-worthy outfit…'
},{
    id: 'blondie',
    name: 'Blondie',
    styleName: 'blondie',
    profilePic: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-blondieicon_DNT',
    dressUpPic: 'https://images.riverisland.com/is/image/RiverIsland/c20191023%2D80siconsgame%2Davatar%2Dblondie%5FDNT?$PNG%20Alpha%20Transparency$',
    description: 'With her iconic peroxide hair and even more iconic hits, like Call Me and For Your Eyes Only, Blondie, AKA Debbie Harry was a pioneer of punk in the 70s and 80s. From leopard print onesies and double denim to vintage band tees and her signature smudged eyeliner, she knew all about taking risks when it came to her style, both on and off stage. We think she’d love the oversized men’s leather jacket and knee high boots, but see what you think…'
},{
    id: 'cher',
    name: 'Cher',
    styleName: 'cher',
    profilePic: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-chericon_DNT',
    dressUpPic: 'https://images.riverisland.com/is/image/RiverIsland/c20191023%2D80siconsgame%2Davatar%2Dcher%5FDNT?$PNG%20Alpha%20Transparency$',
    description: 'If we look as good as Cher does in her seventies, we’ll be happy! But let’s rewind a few decades because Cher in the 80s is an icon in her own right! From that nude sequin Oscars gown to dressing down in acid wash jeans and a white top, it’s not just her style she’s famed for - she’s also had some pretty impressive hair styles. From her rock-inspired wig to that towering Bob Mackie headpiece, she knows how to be centre of attention. We can totally see her in the black velvet bandeau, but what will you choose?'
},{
    id: 'freddieMurcury',
    name: 'Freddie Mercury',
    styleName: 'freddie',
    profilePic: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-freddieicon_DNT',
    dressUpPic: 'https://images.riverisland.com/is/image/RiverIsland/c20191023%2D80siconsgame%2Davatar%2Dfreddie%5FDNT?$PNG%20Alpha%20Transparency$',
    description: 'We couldn’t talk about 80s icons without mentioning the legend himself, right? Freddie Mercury broke the rule book when it came to fashion and his outfits combined real life AND fantasy. From his classic tank top and jeans combo to that time he went topless, wearing a King’s crown and robe with track pants and trainers, his style had no limit. We have a feeling the embellished blazer would be up his street, but see what you choose, just go hard with the accessories!'
},{
    id: 'davidBowie',
    name: 'David Bowie',
    styleName: 'david',
    profilePic: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-davidicon_DNT',
    dressUpPic: 'https://images.riverisland.com/is/image/RiverIsland/c20191023%2D80siconsgame%2Davatar%2Dbowie%5FDNT?$PNG%20Alpha%20Transparency$',
    description: 'David Bowie or Ziggy Stardust knew a thing or two about pushing boundaries, whether that was with his music or through his many style personas. From head to toe denim with that gold foil bomber jacket to his iconic coloured suits, he was no stranger to standing out in the 80s (and the rest of his career!) Now, we think he’d have loved the leather jacket and probably been eyeing up the boots. We say go wild with this one, he’d love you for it…'
}];

const clothes2 = [
    // Accessories
    {
        id: 'accessory1',
        type: 'Accessories',
        item: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-accessories01_DNT?$PNG%20Alpha%20Transparency$'
    },{
        id: 'accessory2',
        type: 'Accessories',
        item: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-accessories02_DNT?$PNG%20Alpha%20Transparency$'
    },
    // Bottoms
    {
        id: 'bottom1',
        type: 'Bottoms',
        item: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-bottoms01_DNT?$PNG%20Alpha%20Transparency$'
    },
    {
        id: 'bottom2',
        type: 'Bottoms',
        item: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-bottoms02_DNT?$PNG%20Alpha%20Transparency$'
    },
    {
        id: 'bottom3',
        type: 'Bottoms',
        item: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-bottoms04_DNT?$PNG%20Alpha%20Transparency$'
    },
    {
        id: 'bottom4',
        type: 'Bottoms',
        item: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-bottoms03_DNT?$PNG%20Alpha%20Transparency$'
    },
    // Dresses
    {
        id: 'dresses1',
        type: 'Dresses',
        item: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-dresses01_DNT?$PNG%20Alpha%20Transparency$' 
    },
    {
        id: 'dresses2',
        type: 'Dresses',
        item: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-dresses02_DNT?$PNG%20Alpha%20Transparency$' 
    },
    {
        id: 'dresses3',
        type: 'Dresses',
        item: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-dresses03_DNT?$PNG%20Alpha%20Transparency$' 
    },
    // Jackets
    {
        id: 'jackets1',
        type: 'Jackets',
        item: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-jacket01_DNT?$PNG%20Alpha%20Transparency$' 
    },
    {
        id: 'jackets2',
        type: 'Jackets',
        item: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-jacket02_DNT?$PNG%20Alpha%20Transparency$' 
    },
    {
        id: 'jackets3',
        type: 'Jackets',
        item: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-jacket03_DNT?$PNG%20Alpha%20Transparency$' 
    },
    // Tops
    {
        id: 'tops1',
        type: 'Tops',
        item: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-top01_DNT?$PNG%20Alpha%20Transparency$' 
    },
    {
        id: 'tops2',
        type: 'Tops',
        item: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-top02_DNT?$PNG%20Alpha%20Transparency$' 
    },
    {
        id: 'tops3',
        type: 'Tops',
        item: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-top03_DNT?$PNG%20Alpha%20Transparency$' 
    },
];


function dissapear() {
    document.querySelectorAll('.desktop-title')[0].style.display="none";
}

function moveRight(num) {
    document.getElementById('dress-up-flex').style.transform=`translateX(${num}%)`;      
}

function clearCharacter() {  
    document.querySelectorAll('.absolute-charectar')[0].innerHTML = ``;
    document.querySelectorAll('.character-wardrobe__type')[0].innerHTML = ``;
    document.querySelectorAll('.character-wardrobe__elements')[0].innerHTML = ``;
    document.querySelectorAll('.charectar img').forEach( (image) => {
        image.src = ``;
    }); 
    document.querySelector('.read-more-target').innerHTML = ``;
}

function goBack(num) {
    document.getElementById('dress-up-flex').style.transform=`translateX(${num}%)`;
    setTimeout(function() {
        clearCharacter();
    }, 1500)  
}

class Game {
    constructor() {
    }

    render() {
    }
}

let shareLink = {
    character: '',
    accessories: '',
    bottoms: '',
    dresses: '',
    jackets: '',
    tops: ''
}

class Person {
    constructor (data){
        const dressData = [];
        this.state = {...data, dressData};
    }

    PopulateClothesObject = (e) => {
        var data = [];

        document.querySelector('.character-wardrobe__elements').innerHTML = ``

        for (let a = 0; a < clothes2.length; a++) {
            if (clothes2[a].type === e.target.innerHTML) {

                const clothesbutton = document.createElement('img');
                clothesbutton.classList.add('clothesButton');

                // dresses the characgter
                clothesbutton.dataset.position = e.target.innerHTML;
                var parentTarget = e.target.innerHTML;


                clothesbutton.setAttribute('src', clothes2[a].item);
                clothesbutton.setAttribute('title', clothes2[a].id);
                document.querySelector('.character-wardrobe__elements').appendChild(clothesbutton);

                clothesbutton.addEventListener('click', (e) => {
                    this.dressCharacter(e, parentTarget, clothes2[a].type)
                });
            }
        }
    }

    dressCharacter = (e, parentTarget, catagory) =>  {
        const characterClothes = document.querySelectorAll(`.${parentTarget}`)[0];
        characterClothes.setAttribute('src', e.target.src);

        switch(catagory) {
            case 'Accessories': 
                console.log('Accessories')
                shareLink.accessories = e.target.title
                break;
            case 'Bottoms':
                console.log('Bottoms')
                shareLink.bottoms = e.target.title
                break;
            case 'Dresses':
                console.log('Accessories')
                shareLink.dresses = e.target.title
                break;
            case 'Jackets':
                console.log('Jackets')
                shareLink.jackets = e.target.title
                break;
            case 'Tops':
                console.log('Tops')
                shareLink.tops = e.target.title
                break;
            default:
                console.log('Sorry, we are out of ' + catagory + '.');
        }   
    }

    addEvents = (div) => {
        div.addEventListener('click', (event)=>{
            shareLink.character = this.state.name;

            console.log('i ran')
            event.preventDefault();

            clearCharacter();

            document.querySelector('.absolute-charectar').innerHTML += `
            <img class="dressUpImage" src="${this.state.dressUpPic}" alt="${this.state.name} Avatar">
            `;
            moveRight('-66.78');
            console.log("classes are cool")

            document.querySelectorAll('.character-description-id')[0].innerHTML += `<h1 class="character-name">${this.state.name}</h1>
            <p>${this.state.description}</p>
            `;

            let clothesNames = [];
            for (i = 0; i < clothes2.length; i++) {                
                if(!clothesNames.includes(clothes2[i].type)){
                    clothesNames.push(clothes2[i].type);
                    const button = document.createElement('button');
                    button.classList.add('dressItems');
                    button.innerHTML += `${clothes2[i].type}`
                    document.querySelector('.character-wardrobe__type').appendChild(button);
                    button.addEventListener('click', this.PopulateClothesObject);
                } 
            }
        });
    }

    renderMugshot(container) {

        const {dressData} = this.state;

        dressData.forEach((item) => {
            // console.log(clothes[item[0]][item[1]])
        })

        const div = document.createElement('div');
        div.classList.add('character');
        div.innerHTML = `
            <a href="${this.state.id}">
            <div class="character__avatar ${this.state.styleName}">
                <img class="avatar-background" src="${this.state.profilePic}" alt="${this.state.name} Avatar">
            </div>
            ${this.state.name}
            </a>
        `;
        container.appendChild(div);
        this.addEvents(div);  
    }  
}

const container = document.querySelector('#character-selector-id');
for (i = 0; i < characters.length; i++) {
    const People = new Person(characters[i]);
    People.renderMugshot(container);
    // const Bob = new Person(characters[1].name, characters[1].description);
}

function saveCharacter(dressData) {
    let theUrl = window.location.href;
    console.log(shareLink)
    console.log(`?char=${shareLink.character}&acc=${shareLink.accessories}&btm=${shareLink.bottoms}&drs=${shareLink.dresses}&jckt=${shareLink.jackets}&top=${shareLink.tops}`);
    // theUrl = window.location.href += '?char=' + this.state.name;

}


