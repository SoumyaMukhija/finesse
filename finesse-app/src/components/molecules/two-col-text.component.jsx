import PropTypes from 'prop-types';
import ProductText from '../atoms/product-text.component';

function TwoColumnTextContent({ primaryTextContent, secondaryTextContent}) {
    return (
        <div className='two-col-text-content-container'>
            <ProductText isTitle={true} textContent={primaryTextContent || ""} />
            <ProductText isPrice={true} textContent={secondaryTextContent || ""} />
        </div>
    )
}

TwoColumnTextContent.propTypes = {
    primaryTextContent: PropTypes.string.isRequired,
    secondaryTextContent: PropTypes.string.isRequired
  };

export default TwoColumnTextContent;