import './homepage.style.scss'

const HomePage=()=>(
    <div className='homepage'>
        <h1>Welcome to my home page</h1>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <div className='title'>Hats</div>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <div className='title'>JACKETS</div>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <div className='title'>SHOES</div>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <div className='title'>WOMEN</div>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <div className='title'>MEN</div>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
        
    </div>
)

export default HomePage