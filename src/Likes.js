import { connect } from 'react-redux'
import { incrementLikes, decrementLikes, onAdded, onReduced } from './redux/actions'

function Likes(props) {
    console.log('props---'+props)
    return (<div>
        <div className="buttonsControl">
            <button onClick={props.onIncrementLikes}>Likes{props.likes}</button>
            <button onClick={props.onDecrementLikes}>Dislikes</button>
        </div>
        <div className="buttonsControl">
        <button onClick={props.onAdd}>Добавить{props.count}</button>
        <button onClick={props.onReduce}>Отнять</button>
        
    </div>
    </div>
    )
}

function mapStateToProps(state) {

    console.log('mapStateToProps>', state)
    const { count } = state;
    const { likes } = state;
    return {
        // likes:state.likes
       likes: likes.likes,
       count:count.count
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onIncrementLikes: () => { return dispatch(incrementLikes()) },
        onDecrementLikes: () => { return dispatch(decrementLikes()) },
        onAdd: () => { return dispatch(onAdded()) },
        onReduce: () => { return dispatch(onReduced()) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Likes)