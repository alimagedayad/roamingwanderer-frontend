const capitalizeFirstLetter = (string) => {

    return string ? string.charAt(0).toUpperCase() + string.slice(1) : null;
}

export default capitalizeFirstLetter;