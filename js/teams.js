// Get the NBA Teams API and my inputs

const ul = document.querySelector('.teams')

let obj

const getData = async () => {
    const data = await fetch('https://www.balldontlie.io/api/v1/teams')
    const json = await data.json()

    obj = json

    return json
}

// Render the data

const renderData = async () => {
    const data = await getData()
    data.data.forEach(team => {
        const li = document.createElement('li')
        li.innerText = team.full_name
        ul.appendChild(li)
    })
}

renderData()

// An input field and filter the data

const input1 = document.querySelector('#input1')

input1.addEventListener('input', e => {
    const filteredData = obj.data.filter(team =>
        team.full_name.toLowerCase().startsWith(e.target.value.toLowerCase())
    )

    ul.innerHTML = ''

    filteredData.forEach(team => {
        const li = document.createElement('li')

        li.innerHTML = `<h6>${team.full_name} / Home court in ${team.city}</h6>`

        ul.appendChild(li)
    })
})
