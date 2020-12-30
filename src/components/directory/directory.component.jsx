import './directory.style.scss'

import React from 'react'
import MenuItem from '../menu-item/menu-item.componet'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selector'

const  Directory =({sections})=>(
            <div className='directory-menu'>
                {
                    sections.map(({id,title,imageUrl,size})=>(
                        <MenuItem 
                        key={id} 
                        title={title} 
                        imageUrl = {imageUrl}
                        size = {size}
                        />
                    ))
                }
            </div>
        )
    


const mapStateToProps=()=> createStructuredSelector(
  {
    sections: selectDirectorySections
  }
)

export default connect(mapStateToProps,null)(Directory)