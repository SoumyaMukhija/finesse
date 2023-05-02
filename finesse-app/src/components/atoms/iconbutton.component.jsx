import PropTypes from 'prop-types';

function IconButton({ icon }) {
  return <button className='icon-btn'>
    <img src={require(`../../assets/images/${icon}.png`)} alt={icon} />
  </button>;
}

IconButton.propTypes = {
  icon: PropTypes.string.isRequired
};

export default IconButton;