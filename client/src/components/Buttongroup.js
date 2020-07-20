import React from 'react';

export default function Buttongroup() {
    return (
        <div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary">Left</button>
                <button type="button" className="btn btn-secondary">Middle</button>
                <button type="button" className="btn btn-secondary">Right</button>
            </div>
        </div>
    )
}
