const team = [
    {
        name:'Barbara Young',
        profession:'CEO, Founder',
        gender:'female',
        src:'img/team1.jpg'
    },
    {
        name:'Bryan Thompson',
        profession:'Finance Manage',
        gender:'male',
        src: 'img/team2.jpg'

    },
    {
        name:'Paul Walker',
        profession:'Marketing Manager',
        gender:'male',
        src:'img/team3.jpg'
    }
]
let teamTop = document.getElementById('teamTop')
let teamItem = document.getElementById('teamItem')

let genders = []

for(let item of team){
    genders.push(item.gender)
}
console.log(genders);
genders = [...new Set(genders)]
console.log(genders);

let output = `<button onclick="filterItems('all')">all</button>`

for(let gender of genders){
    output += `<button onclick="filterItems('${gender}')">${gender}</button>`
}
teamTop.innerHTML = output

let outputItems = ``
for(let item of team){
    outputItems += `
        <a href="">
            <img src="${item.src}" alt="">
            <h3>${item.name}</h3>
            <p>${item.profession}</p>
        </a>
    `
}
teamItem.innerHTML = outputItems

function filterItems(categ){
    let outputFilter = ``;
    for(let item of team){
        if(item.gender == categ || categ == 'all'){
            outputFilter += `
                <a href="">
                    <img src="${item.src}" alt="">
                    <h3>${item.name}</h3>
                    <p>${item.profession}</p>
                </a>
            `;
        }
    }
    teamItem.innerHTML = outputFilter;
}
