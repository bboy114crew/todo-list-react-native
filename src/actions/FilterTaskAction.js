export const showAll = () => {
    return {
        type: 'FILTER_ALL'
        
    }
}

export const showCompleted = () => {
    return {
        type: 'FILTER_COMPLETED'
        
    }
}

const showIncomplete = () => {
    return {
        type: 'FILTER_INCOMPLETE'

    }
}
export default showIncomplete;