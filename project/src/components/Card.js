function Card(props){
    const cardList = document.createElement('div')
    cardList.id = 'cards_container'
    props.target.appendChild(cardList)

    this.state = props.initialState

    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        if(!this.state)
            return
        
        cardList.innerHTML = `
            ${this.state.map((data, idx) => 
                `<div idx="${idx+1}" class="card">
                    <div class="card_plane card_plane--front">${data.name}</div>
                    <div class="card_plane card_plane--back">${data.mbti}</div>
                 </div>`).join("")}
        `
    }

    this.render();
}

export default Card