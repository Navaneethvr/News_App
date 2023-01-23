import React from 'react'

const LoadingScreen = () => {
    return (
        <div>
            <div class="d-flex align-items-center">
                <strong>Fetching Live News...</strong>
                <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
            </div>
        </div>
    )
}

export default LoadingScreen