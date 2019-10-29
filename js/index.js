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
        id: 'acy1',
        type: 'accessories',
        item: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-accessories01_DNT?$PNG%20Alpha%20Transparency$'
    },{
        id: 'acy2',
        type: 'accessories',
        item: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-accessories02_DNT?$PNG%20Alpha%20Transparency$'
    },
    // Bottoms
    {
        id: 'bm1',
        type: 'bottoms',
        item: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-bottoms01_DNT?$PNG%20Alpha%20Transparency$'
    },
    {
        id: 'bm2',
        type: 'bottoms',
        item: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-bottoms02_DNT?$PNG%20Alpha%20Transparency$'
    },
    {
        id: 'bm3',
        type: 'bottoms',
        item: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-bottoms04_DNT?$PNG%20Alpha%20Transparency$'
    },
    {
        id: 'bm4',
        type: 'bottoms',
        item: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-bottoms03_DNT?$PNG%20Alpha%20Transparency$'
    },
    // Dresses
    {
        id: 'ds1',
        type: 'dresses',
        item: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-dresses01_DNT?$PNG%20Alpha%20Transparency$' 
    },
    {
        id: 'ds2',
        type: 'dresses',
        item: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-dresses02_DNT?$PNG%20Alpha%20Transparency$' 
    },
    {
        id: 'ds3',
        type: 'dresses',
        item: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-dresses03_DNT?$PNG%20Alpha%20Transparency$' 
    },
    // Jackets
    {
        id: 'js1',
        type: 'jackets',
        item: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-jacket01_DNT?$PNG%20Alpha%20Transparency$' 
    },
    {
        id: 'js2',
        type: 'jackets',
        item: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-jacket02_DNT?$PNG%20Alpha%20Transparency$' 
    },
    {
        id: 'js3',
        type: 'jackets',
        item: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-jacket03_DNT?$PNG%20Alpha%20Transparency$' 
    },
    // Tops
    {
        id: 'ts1',
        type: 'tops',
        item: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-top01_DNT?$PNG%20Alpha%20Transparency$' 
    },
    {
        id: 'ts2',
        type: 'tops',
        item: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-top02_DNT?$PNG%20Alpha%20Transparency$' 
    },
    {
        id: 'ts3',
        type: 'tops',
        item: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-top03_DNT?$PNG%20Alpha%20Transparency$' 
    },
];

class Game {

    constructor() {
        this.position = 0;
        this.characterInit();

        this.state = {
            character: {
                characterName: 'empty',
                characterSrc: ''
            },
            accesories: {
                accessoriesName: 'empty',
                accessoriesSrc: ''
            },
            bottoms: {
                bottomsName: 'empty',
                bottomsSrc: ''
            },
            dresses: {
                dressesName: 'empty',
                dressesSrc: ''
            },
            tops: {
                topsName: 'empty',
                topsSrc: ''
            },
            jackets: {
                jacketsName: 'empty',
                jacketsSrc: ''
            }
        }

        
    }


    moveRight = (pos) => {
        document.getElementById('dress-up-flex').style.transform=`translateX(${pos}%)`;    
    }

    dissapear = () => {
        document.querySelectorAll('.desktop-title')[0].style.display="none";
    }

    clearCharacter = () => {  
        document.querySelectorAll('.absolute-charectar')[0].innerHTML = ``;
        document.querySelectorAll('.character-wardrobe__type')[0].innerHTML = ``;
        document.querySelectorAll('.character-wardrobe__elements')[0].innerHTML = ``;
        document.querySelectorAll('.charectar img').forEach( (image) => {
            image.src = ``;
        }); 
        document.querySelector('.read-more-target').innerHTML = ``;
    }

    goBack = () => {
        document.getElementById('dress-up-flex').style.transform=`translateX(${-32.9}%)`;
        this.clearCharacter();
        // setTimeout(function() {
        //     this.clearCharacter()
        // }, 1500)  
    }

    characterInit = () => {
        const container = document.querySelector('#character-selector-id');
        for (let i = 0; i < characters.length; i++) {
            const People = new Person(characters[i]);
            this.renderMugshot(container, People);
            // const Bob = new Person(characters[1].name, characters[1].description);
        }
    }


    updateState = (clothingType, clothingName, clothingSrc) => {

        switch(clothingType) {
            case 'accessories':                 
                this.state.accesories = {
                    accessoriesName: clothingName,
                    accessoriesSrc: clothingSrc
                }
                // shareLink.accessories = e.target.title
                break;
            case 'bottoms':
                this.state.bottoms = {
                    bottomsName: clothingName,
                    bottomsSrc: clothingSrc
                }
                break;
            case 'dresses':
                this.state.dresses = {
                    dressesName: clothingName,
                    dressesSrc: clothingSrc
                }
                break;
            case 'jackets':
                this.state.jackets = {
                    jacketsName: clothingName,
                    jacketsSrc: clothingSrc
                }
                break;
            case 'tops':
                this.state.tops = {
                    topsName: clothingName,
                    topsSrc: clothingSrc
                }
                break;
            default:
                console.log('Sorry, we are out of items');
        }
        console.log(this.state);
    }


    PopulateClothesObject = (e) => {
        var data = [];

        document.querySelector('.character-wardrobe__elements').innerHTML = ``

        for (let a = 0; a < clothes2.length; a++) {
            if (clothes2[a].type === e.target.innerHTML) {

                const clothesbutton = document.createElement('img');
                clothesbutton.classList.add('clothesButton');

                clothesbutton.dataset.position = e.target.innerHTML;
                var parentTarget = e.target.innerHTML;

                clothesbutton.setAttribute('src', clothes2[a].item);
                clothesbutton.setAttribute('title', clothes2[a].id);
                document.querySelector('.character-wardrobe__elements').appendChild(clothesbutton);

                clothesbutton.addEventListener('click', (e) => {
                    this.dressCharacter(e, parentTarget, clothes2[a].type);

                    this.updateState(clothes2[a].type, clothes2[a].id, clothes2[a].item);
                    // console.log('this one' + clothes2[a].type)
                });
            }
        }
    }


    dressCharacter = (e, parentTarget, catagory) =>  {
        const characterClothes = document.querySelectorAll(`.${parentTarget}`)[0];
        characterClothes.setAttribute('src', e.target.src);
            
    }


    addEvents = (div, person) => {
        div.addEventListener('click', (event) => {

            // event.preventDefault();

            this.clearCharacter();

            document.querySelector('.absolute-charectar').innerHTML += `
            <img class="dressUpImage" src="${person.state.dressUpPic}" alt="${person.state.name} Avatar">
            `;
            this.moveRight(-66.78);

            document.querySelectorAll('.character-description-id')[0].innerHTML += `<h1 class="character-name">${person.state.name}</h1>
            <p>${person.state.description}</p>
            `;

            let clothesNames = [];
            for (let i = 0; i < clothes2.length; i++) {                
                if(!clothesNames.includes(clothes2[i].type)){
                    clothesNames.push(clothes2[i].type);
                    const button = document.createElement('button');
                    button.classList.add('dressItems');
                    button.innerHTML += `${clothes2[i].type}`
                    document.querySelector('.character-wardrobe__type').appendChild(button);
                    button.addEventListener('click', this.PopulateClothesObject);
                } 
            }

            this.state.character.characterName = person.state.name;
            console.log(this.state);
        });
    }


    renderMugshot = (container, person) => {
        // console.log(person)
        const div = document.createElement('div');
        div.classList.add('character');
        div.innerHTML = `
            <div">
            <div class="character__avatar ${person.state.styleName}">
                <img class="avatar-background" src="${person.state.profilePic}" alt="${person.state.name} Avatar">
            </div>
            ${person.state.name}
            </div>
        `;
        container.appendChild(div);
        this.addEvents(div, person);  
    } 


    saveCharacter = (dressData) => {

        let theUrl = window.location.href;
         
        let characterUrl = this.state.character.characterName;
        let accessoriesUrl = this.state.accesories.accessoriesName;
        let bottomsUrl = this.state.bottoms.bottomsName;
        let dressesUrl = this.state.dresses.dressesName;
        let jacketsUrl = this.state.jackets.jacketsName;
        let topsUrl = this.state.tops.topsName;

        let CharUrl = window.location.href + `?character=${characterUrl}&accesories=${accessoriesUrl}&bottoms=${bottomsUrl}&dresses=${dressesUrl}&jackets=${jacketsUrl}&tops=${topsUrl}`;

    
        console.log(CharUrl)

        const shareDiv = document.createElement('div');
        const containingDiv = document.querySelectorAll('.character-dressRoom')[0];
        shareDiv.classList.add('shareMe');
        shareDiv.innerHTML = `
        <div>
            <p>Share your look, don't forget to tag us @riverisland</p>
            <p>${CharUrl}</p>
        </div>
        `
        // uncomment this when you load the character
        // containingDiv.appendChild(shareDiv);
    }


    loadingCharacter = () => {

        let currentUrl = window.location.href;
        let urlSection = currentUrl.split('?')[1];
        const querySplit = urlSection.split('&');
        const splitVals = []

        console.log(querySplit)

        for (let i = 0; i < querySplit.length; i++) {
            splitVals.push(querySplit[i].split('='));
        }

        for (let j = 0; j < splitVals.length; j++) {

            for (let i = 0; i < clothes2.length; i++){

                if(splitVals[j][0] === clothes2[i].type){

                    // console.log(splitVals[j][0] + clothes2[i].type + ' score ')
                } 
            }
        }
    }
    render() {
    }
}


class Person {
    constructor (data)
    {
        const dressData = [];
        this.state = {...data, dressData};
    }
    // addEvents = (div) => {}
}

const newGame = new Game()

if (window.location.href.includes('?')){
    newGame.loadingCharacter();
    console.log('i worked')
} 



const goRight = document.querySelectorAll('.startGame')[0];
goRight.addEventListener('click', () =>{
    newGame.moveRight(-33)
});

const goLeft = document.querySelectorAll('.back-btn')[0];
goLeft.addEventListener('click', () => {
    newGame.goBack()
});

const hideTitle = document.querySelectorAll('.startGameDesktop')[0];
hideTitle.addEventListener('click', () =>{
    newGame.dissapear();
})

const saveGame = document.querySelectorAll('.complete')[0];
saveGame.addEventListener('click', ()=>{
    newGame.saveCharacter();
})