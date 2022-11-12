function Header(props){
    /* Header origin HTML
    <header>
        <div class="header header_left">
            <span class="menu_name" id="menu_home">HOME</span>
        </div>
        <div class="header header_right">
            <div class="menu_name" id="menu_signup">SIGNUP</div>
        </div>
    </header>
     */
    this.header = document.createElement('header');
    
    this.home = document.createElement('div');
    this.home.className = 'header header_left'
    this.home.innerHTML = `<span class="menu_name" id="menu_home">HOME</span>`

    this.signup = document.createElement('div');
    this.signup.className = 'header header_right'
    this.signup.innerHTML = `<div class="menu_name" id="menu_signup">SIGNUP</div>`

    this.header.appendChild(this.home)
    this.header.appendChild(this.signup)

    props.$target.appendChild(this.header)
    
    this.signup.firstChild.addEventListener('click', ()=>{
        props.onClickSignup()
    })
    
    this.home.firstChild.addEventListener('click', ()=>{
        props.onClickHome()
    })
}

export default Header;