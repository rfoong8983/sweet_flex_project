export const TOGGLE_LOADER = 'TOGGLE_LOADER';

export const toggleLoader = (bool) => {
    return {
        type: TOGGLE_LOADER,
        active: bool
    };
};