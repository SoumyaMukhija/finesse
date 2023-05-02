import PropTypes from 'prop-types';

function SecondaryButton({title}) {
    return <button className='sec-btn'>
        {title}
    </button>;
}

SecondaryButton.propTypes = {
    title: PropTypes.string.isRequired
  };

export default SecondaryButton;