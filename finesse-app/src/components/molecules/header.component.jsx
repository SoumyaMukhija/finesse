import IconButton from '../atoms/iconbutton.component';

function Header() {
    return <div className='header'>
        <div className='back-btn-container'>
            <IconButton icon={'back'} />
        </div>
        <div className='logo-container'>
            <img src={require(`../../assets/images/logo.png`)} alt='finesse' />
        </div>
        <div className='search-btn-container'>
            <IconButton icon={'search'} />
        </div>
        <div className='cart-btn-container'>
            <IconButton icon={'cart'} />
        </div>
    </div>;
}

export default Header;
