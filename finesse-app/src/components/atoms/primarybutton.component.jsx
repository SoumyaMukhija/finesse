import PropTypes from 'prop-types';

function PrimaryButton({title}) {
    return <button className='primary-btn'>
        {title}
    </button>;
}

PrimaryButton.propTypes = {
    title: PropTypes.string.isRequired
  };

export default PrimaryButton;