import React from 'react'
import {loadDataRequest} from "../redux-sagas/actions/actions";
import {connect} from 'react-redux'

//functional stateless component
const Info = (props) => {
    return (
        <p> Seu IP: {props.data.origin}
            {!props.isFetching && <button onClick={() => props.loadData()}>GET IP</button>}
            {props.isFetching && 'Loading...'}
        </p>
    )
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.ip.isFetching,
        data: state.ip.data,
        error: state.ip.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => dispatch(loadDataRequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)