import './shop.style.scss'

import React from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { createStructuredSelector } from 'reselect'
import {connect} from 'react-redux'
import { selectCollectionsData } from '../../redux/collections/collections.selector'

const ShopPage = ({collections})=>{
  
        //const {collections}=this.state
        return(
            <div className='shop-page'>
                {
                    collections.map(({id,...otherCollection})=>(
                        <CollectionPreview
                            key={id}
                            {...otherCollection}
                        />
                   )
                    )

                }
                
                
            </div>
        )
    }

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionsData
})

export default connect(mapStateToProps,null)(ShopPage)