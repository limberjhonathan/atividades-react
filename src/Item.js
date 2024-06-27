import PropTypes from 'prop-types';

export default function Item(props) {
    return (
        <>
            <li>{props.marca}</li>
        </>
    );
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
};

Item.defaultProps = {
    marca: "Faltou a marca",
};
