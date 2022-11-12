function ContentTitle(props){
    /* ContentTitle origin HTML
    <div class="content_title">
        <h1> CardView </h1>
    </div>
     */

    this.$element = document.createElement('div')
    this.$element.className = 'content_title'
    this.$title = document.createElement('h1')
    this.$title.innerText = props.title
    this.$element.appendChild(this.$title)

    props.$target.appendChild(this.$element)
}

export default ContentTitle