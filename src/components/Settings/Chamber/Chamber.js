import classes from './Chamber.module.css'

const Chamber = () => {
    return (
        <div className={classes.Chamber}>
            <h4>Chamber Input</h4>
            <div className={classes.wrapInp}>
                <select>
                    <option value="main">Main chamber</option>
                    <option value="other">Other chambers</option>
                </select>
                <input type="text" placeholder="Title" />
                <textarea cols="20" rows="6" placeholder="Details..."></textarea>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default Chamber
