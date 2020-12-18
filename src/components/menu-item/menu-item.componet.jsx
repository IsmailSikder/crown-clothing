import './menu-item.style.scss'

const MenuItem =(props)=>(
    <div className='menu-item'>
        <div className='content'>
            <div className='title'>{props.title}</div>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem