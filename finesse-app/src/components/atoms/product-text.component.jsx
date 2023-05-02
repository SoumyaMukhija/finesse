import PropTypes from 'prop-types';

function ProductTextContent({ textContent, isTitle, isPrice }) {
    const cssClass = isTitle ? 'title-content' : 'text-content';
    return <span className={cssClass}>
        {isPrice ? `$ ${textContent}` : `${textContent}`}
    </span>;
}

ProductTextContent.propTypes = {
    textContent: PropTypes.string.isRequired,
    isTitle: PropTypes.bool,
    isPrice: PropTypes.bool
};

ProductTextContent.defaultProps = {
    isTitle: false,
    isPrice: false
}

export default ProductTextContent;