import PropTypes from 'prop-types';

function Size({ title }) {
    return (<div className="size">
        {title}
    </div>);
}

Size.propTypes = {
    title: PropTypes.string.isRequired
  };

export default Size;