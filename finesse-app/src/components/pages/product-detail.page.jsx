import { useEffect, useState } from 'react';
import ProductTextContent from '../atoms/product-text.component';
import { Footer, Header, ImageSlider, SizeRow, TwoColumnTextContent } from '../molecules';

function ProductDetail() {

    const [data, setData] = useState({});

    useEffect(() => {
        fetch('http://localhost:4000/product/random')
      .then(response => response.json())
      .then(json => setData(json)).catch(error => console.error(error));
    }, [])

    if (!data) {
        return <div>Loading</div>
    }

    const {title, price, desc, images} = data;

    return (
        <div className='product-page'>
            <div className='header-container'>
                <Header />
            </div>
            
            <div className='slider-container'>
                <ImageSlider images={images} />
            </div>
            
            <div className='title-price-container'>
                <TwoColumnTextContent primaryTextContent={title} secondaryTextContent={price}/>
            </div>

            <div className='details-container'>
                <ProductTextContent textContent={desc} />
            </div>

            <div className='size-container'>
                size
                <SizeRow sizes={['S', 'M']}/>
            </div>

            <div className='tab-container'>
                
            </div>

            <div className='footer'>
                <Footer />
            </div>
        </div>);    
}

export default ProductDetail;