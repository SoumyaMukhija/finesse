import PropTypes from 'prop-types';
import { Size } from "../atoms";

function SizeRow({ sizes }) {
    return <div className="size-row">
        {
            sizes.map((size) => <Size key={size} title={size} />)
        }
    </div>;
}

SizeRow.propTypes = {
    sizes: PropTypes.array.isRequired
  };
  

export default SizeRow;