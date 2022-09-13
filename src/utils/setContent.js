const setContent = (process, error) => {
    switch (process) {
        case 'waiting':
            return null;
        case 'loading':
            return <p style={{'color': 'red'}}>Please, wait...</p>
        case 'confirmed':
            return null;
        case 'error':
            return <p style={{'color': 'red'}}>{error}</p>
        default:
            throw new Error('Unexpected error');
    }
};

export default setContent;