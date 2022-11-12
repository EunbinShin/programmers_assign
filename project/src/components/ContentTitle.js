function ContentTitle(props){
    this.element = document.createElement('div')
    this.title = document.createElement('h1')
    this.title.innerText = props.title
    this.element.appendChild(this.title)

    props.target.appendChild(this.element)
}

export default ContentTitle