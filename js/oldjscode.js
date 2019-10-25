
// Avatar creator, makes a div for each avatar, with name and image.
// document.getElementById('character-selector-id').innerHTML = characters.map(character =>
// `
// <div class="character">
//     <a href="#"></a>
//     <div class="character__avatar ${character.styleName}">
//         <img class="avatar-background" src="${character.profilePic}" alt="${character.name} Avatar">
//     </div>
//     ${character.name}
// </div>
// `
// ).join('');

// const accessories = clothes.accessories;

// console.log(accessories)

// <div class="character__avatar avatar-background ${character.styleName}"></div>

// <div class="character__avatar ${character.styleName}">
//     <img class="avatar-background" src="${character.profilePic}" alt="${character.name} Avatar">
// </div>


// for (i = 0; i < characters.length; i++) {

    // const names = characters[i].name;

    // console.log(names)

    // console.log(document.querySelectorAll('.character-selector .character')[i])

    // const theDiv = document.querySelectorAll('.character-selector .character')[i].name;

    // theDiv.innerHTML = `<div class="character__avatar">${names}</div>`;

    // console.log(theDiv);

    // document.querySelectorAll('.character-selector').innerHTML = names;
    // document.querySelectorAll('.character-selector .character').innerHTML = `<div class="character__avatar">${names}</div>`;

    // document.querySelector('#character-description-id').innerHTML = names[i].description;
// }

// document.getElementById('character-selector-id').innerHTML = characters[0].name;

// document.getElementById('character-description-id').innerHTML = characters[0].description;

//// might need a class for person, which gets populated with a character object.

// class Person {
//     constructor (name, description){
//         this.name = name;
//         this.description = description;
//     }

//     printName(name) {
//         console.log(this.name);
//     }

//     printDescription(description) {
//         console.log(this.description)
//     }
// }

// console.log(Person.name)
// const Bob = new Person(characters[1].name, characters[1].description);
// Bob.printName();
// Bob.printDescription();




















// might need object array for each character,
const characters = [{
    id: 'madonna',
    name: 'Madonna',
    styleName: 'madonna',
    profilePic: 'https://avatarfiles.alphacoders.com/153/153257.jpg',
    dressUpPic: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-avatar_DNT?$PNG%20Alpha%20Transparency$',
    description: 'MADONNA When you think of 80s pop hits, you can’t not think about Madonna, right? They don’t call her the Queen of Pop for nothing. A true legend of the era, this Material Girl was all about the fashion. From bright coloured leggings and oversized bows to fishnet tights and that cone bra, she’s no stranger to turning heads. Now? The embellished blazer has Madonna written all over it, but how will you style her?'
},{
    id: 'whitneyHuston',
    name: 'Whitney Houston',
    styleName: 'whitney',
    profilePic: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Whitney_Houston_Welcome_Home_Heroes_1_cropped.jpg',
    dressUpPic: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-avatar_DNT?$PNG%20Alpha%20Transparency$',
    description: 'WHITNEY It’s safe to say Whitney Houston has had her fair share of fashion moments in time. Who can remember that rainbow striped suit dress? Or her red lace catsuit? Her songs are known for being classic 80s hits and so were her outfits with shoulder pads, embellishments and all of the lace. Singer-turned-actress, she’s no stranger to a stage or camera, we think she’d have loved the floral ruched mini dress, but now’s the time for you to find that paparazzi-worthy outfit…'
},{
    id: 'blondie',
    name: 'Blondie',
    styleName: 'blondie',
    profilePic: 'https://townsquare.media/site/295/files/2014/10/Blondie.jpg?w=980&q=75',
    dressUpPic: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-avatar_DNT?$PNG%20Alpha%20Transparency$',
    description: 'BLONDIE With her iconic peroxide hair and even more iconic hits, like Call Me and For Your Eyes Only, Blondie, AKA Debbie Harry was a pioneer of punk in the 70s and 80s. From leopard print onesies and double denim to vintage band tees and her signature smudged eyeliner, she knew all about taking risks when it came to her style, both on and off stage. We think she’d love the oversized men’s leather jacket and knee high boots, but see what you think…'
},{
    id: 'cher',
    name: 'Cher',
    styleName: 'cher',
    profilePic: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Cher_-_Casablanca.jpg',
    dressUpPic: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-avatar_DNT?$PNG%20Alpha%20Transparency$',
    description: 'CHER If we look as good as Cher does in her seventies, we’ll be happy! But let’s rewind a few decades because Cher in the 80s is an icon in her own right! From that nude sequin Oscars gown to dressing down in acid wash jeans and a white top, it’s not just her style she’s famed for - she’s also had some pretty impressive hair styles. From her rock-inspired wig to that towering Bob Mackie headpiece, she knows how to be centre of attention. We can totally see her in the black velvet bandeau, but what will you choose?'
},{
    id: 'freddieMurcury',
    name: 'Freddie Mercury',
    styleName: 'freddie',
    profilePic: 'https://img.etimg.com/thumb/msid-71441709,width-643,imgsize-262296,resizemode-4/freddie-1.jpg',
    dressUpPic: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-avatar_DNT?$PNG%20Alpha%20Transparency$',
    description: 'FREDDIE We couldn’t talk about 80s icons without mentioning the legend himself, right? Freddie Mercury broke the rule book when it came to fashion and his outfits combined real life AND fantasy. From his classic tank top and jeans combo to that time he went topless, wearing a King’s crown and robe with track pants and trainers, his style had no limit. We have a feeling the embellished blazer would be up his street, but see what you choose, just go hard with the accessories!'
},{
    id: 'davidBowie',
    name: 'David Bowie',
    styleName: 'david',
    profilePic: 'https://avatarfiles.alphacoders.com/775/77547.jpg',
    dressUpPic: 'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-avatar_DNT?$PNG%20Alpha%20Transparency$',
    description: 'DAVID David Bowie or Ziggy Stardust knew a thing or two about pushing boundaries, whether that was with his music or through his many style personas. From head to toe denim with that gold foil bomber jacket to his iconic coloured suits, he was no stranger to standing out in the 80s (and the rest of his career!) Now, we think he’d have loved the leather jacket and probably been eyeing up the boots. We say go wild with this one, he’d love you for it…'
}];


// z-index:  Accessories(5),  
const clothes = [
    {
        id: 'accessoriesId',
        name: 'Accessories',
        items: [
            // A one
            'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-accessories01_DNT?$PNG%20Alpha%20Transparency$',
            // A two
            'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-accessories02_DNT?$PNG%20Alpha%20Transparency$'

        ] 
    },
    {
        id: 'bottomsId',
        name: 'Bottoms',
        items: [
            // B one
            'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-bottoms01_DNT?$PNG%20Alpha%20Transparency$',
            // B two
            'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-bottoms02_DNT?$PNG%20Alpha%20Transparency$',
            // B three
            'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-bottoms04_DNT?$PNG%20Alpha%20Transparency$',
            // B four
            'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-bottoms03_DNT?$PNG%20Alpha%20Transparency$'
        ]
    },
    {
        id: 'dressesId',
        name: 'Dresses',
        items: [
            // D one
            'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-dresses01_DNT?$PNG%20Alpha%20Transparency$',
            // D two
            'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-dresses02_DNT?$PNG%20Alpha%20Transparency$',
            // D three
            'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-dresses03_DNT?$PNG%20Alpha%20Transparency$'
        ]
    },
    {
        id: 'jacketsId',
        name: 'Jackets',
        items: [
            // J one
            'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-jacket01_DNT?$PNG%20Alpha%20Transparency$',
            // J two
            'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-jacket02_DNT?$PNG%20Alpha%20Transparency$',
            // J three
            'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-jacket03_DNT?$PNG%20Alpha%20Transparency$'
        ]
    },
    {
        id: 'topsId',
        name: 'Tops',
        items: [
            // T one
            'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-top01_DNT?$PNG%20Alpha%20Transparency$',
            // T two
            'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-top02_DNT?$PNG%20Alpha%20Transparency$',
            // T three
            'https://images.riverisland.com/is/image/RiverIsland/c20190920-80siconsgame-clothing-top03_DNT?$PNG%20Alpha%20Transparency$'
        ]
    } 
];

// Play dress up button
function moveRight() {
    document.getElementById('dress-up-flex').style.left="50%";   
}

class Accessories {
    constructor() {
    }

    render() {
    }
}

// class DressupCard {
//     constructor() {
//     }

//     hello() {
//         console.log('hello')
//     }
// }

class Person {
    constructor (data){
        const dressData = [];
        this.state = {...data, dressData};
        this.init();
        this.ref = this;
    }

    init() {
    }

    printName(name) {
        console.log(this.state.name);
    }

    printDescription(description) {
        console.log(this.state.description)
    }

    populateClothes(e) {
        var data;
        for (let a = 0; a < clothes.length; a++) {
            // console.log(clothes[a].name)

            if (clothes[a].name === e.target.innerHTML) {
                // console.log('met', clothes[a].name, clothes[a].items)
                data =  clothes[a].items
            }
        }

        document.querySelector('.character-wardrobe__elements').innerHTML = ``

        for (let b = 0; b < data.length; b++) {
            // console.log(data[b])

            // const clothesbutton = document.createElement('button');
            // button.classList.add('clothesButton')
            // button.innerHTML += `<div class="element"><img class="clothesSelect" src="${data[b]}" alt=""></div>`
            // document.querySelector('.character-wardrobe__elements').appendChild(clothesbutton);

            document.querySelector('.character-wardrobe__elements').innerHTML += `<div class="element"><img class="clothesSelect" src="${data[b]}" alt="">
            </div>
            `
        }
    }

    addEvents(div) {
        div.addEventListener('click', (event)=>{
            event.preventDefault();
            document.getElementById('dress-up-flex').style.left="-53.3%"; 
            
            // Image for dressup
            document.querySelector('.character-dressRoom').innerHTML += `
            <img class="dressUpImage" src="${this.state.dressUpPic}" alt="${this.state.name} Avatar">
            `;
            // character discription
            document.querySelector('#character-description-id').innerHTML += this.state.description

            // console.log(clothes.tops)

            console.log(clothes)
            for (i = 0; i < clothes.length; i++) {

                // buttons
                const button = document.createElement('button');
                button.classList.add('dressItems')
                button.innerHTML += `${clothes[i].name}`
                document.querySelector('.character-wardrobe__type').appendChild(button);

                button.addEventListener('click', this.populateClothes);
            }
        });
    }

    dressEvents(button) {
    }

    renderMugshot(container) {
        const {dressData} = this.state;
        dressData.forEach((item) => {
            console.log(clothes[item[0]][item[1]])
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
    // console.log(People) 
    // const Bob = new Person(characters[1].name, characters[1].description);
}

let buttonClick = function() {
    console.log("i clciked")
}