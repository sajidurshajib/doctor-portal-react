import MultiLine from '../Chart/MultiLine/MultiLine'
import PieChart from '../Chart/PieChart/PieChart'
import SideNav from '../SideNav/SideNav'
import Summery from '../Summery/Summery'
import classes from './Graph.module.css'

const Graph = () => {
    return (
        <div className={classes.Graph}>
            <SideNav />
            <Summery />
            <div className={classes.Wrapper}>
                <div>
                    <PieChart />
                </div>
                <div>
                    <MultiLine />
                </div>
            </div>
        </div>
    )
}

export default Graph
