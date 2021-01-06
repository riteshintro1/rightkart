import React from 'react'
import SHOP_DATA from './ShopPages.daata'
import CollectionPreview from '../../components/collection-preview/collection.preview'

class ShopPages extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            collection: SHOP_DATA
        }
        
    }
    render() {
        const { collection } = this.state;
        return (
            <div className='shop-page'>
                {
                    collection.map(({ id, ...othercollectionProps }) => (
                     <CollectionPreview key={id} {...othercollectionProps}/>
                    ))
                    
                }
            </div>
        );
    }
}
export default  ShopPages