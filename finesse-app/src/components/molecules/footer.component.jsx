import {PrimaryButton, SecondaryButton} from '../atoms';

function Footer() {
    return <div className='footer-content-container'>
        <div className='primary'>
        <PrimaryButton title='Add to cart' />
        </div>

        <div className='secondary'>
        <SecondaryButton title='Pay with G Pay' />
        </div>
    </div>;
}

export default Footer