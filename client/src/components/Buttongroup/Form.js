import React from 'react';
import './style.css';

export function Form() {
    return (
        <div className="row">
            <form action="/action_page.php">
                <label className="lane" id="l1" for="reserve">Reserve Lane 1:</label>
                <input type="date" name="lane1" />
                <input type="submit" />
            </form>

            <form action="/action_page.php">
                <label className="lane" id="l2" for="reserve">Reserve Lane 2:</label>
                <input type="date" name="lane2" />
                <input type="submit" />
            </form>

            <form action="/action_page.php">
                <label className="lane" id="l3" for="reserve">Reserve Lane 3:</label>
                <input type="date" name="lane3" />
                <input type="submit" />
            </form>

        </div>
    )
}

export function PoolImage() {
    return (
        <img className="pool-image" src="https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
    )
}
