function Card(props){
    const $cardList = document.createElement('div')
    $cardList.id = 'cards_container'
    props.$target.appendChild($cardList)

    this.state = props.initialState

    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        if(!this.state)
            return

        $cardList.innerHTML = `
            ${this.state.map((data, idx) => 
                `<div data-idx="${idx+1}" class="card ${data.status ? "is-flipped": ""}">
                    <div class="card_plane card_plane--front">${data.name}</div>
                    <div class="card_plane card_plane--back">${data.mbti}</div>
                 </div>`).join("")}
        `
    }

    this.render();
    
    $cardList.childNodes.forEach((card)=>{
        card.addEventListener('click', (e)=>{
            const idx = card.dataset.idx-1

            this.state[idx].status = !this.state[idx].status

            if(card.className.includes("is-flipped")){                
                card.className = 'card'
            }else{
                const cardClass = card.className + ' is-flipped'
                card.className = cardClass
            }
            localStorage.setItem('personalInfo', JSON.stringify(this.state))
        })
    })

}

export default Card