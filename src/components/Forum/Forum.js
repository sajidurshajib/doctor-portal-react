import classes from './Forum.module.css'

const Forum = () => {
    return (
        <div className={classes.Forum}>
            <h2>Dissection Forum</h2>
            <div>
                <h4>Hello world</h4>
                <p>- 12/12/2012</p>
                <p>Rahat Hassan</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nobis!</p>
            </div>

            <div>
                <h4>Patient Thoughts</h4>
                <p>- 12/12/2012</p>
                <p>Rahat Hassan</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nobis!</p>
            </div>

            <div>
                <h4>New operation</h4>
                <p>- 12/12/2012</p>
                <p>Rahat Hassan</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nobis!</p>
            </div>
        </div>
    )
}

export default Forum
