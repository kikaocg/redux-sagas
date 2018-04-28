import React from 'react'
import {connect} from 'react-redux'

import {loadDataUARequest} from '../redux-sagas/actions/actions'

//functional stateless component
const UserAgent = (props) => {
    return (
        <p>
            User agent: {props.data}
            { !props.isFetching && <button onClick={() => props.loadData()}>GET UA</button> }
            {props.isFetching && 'Loading...'}
            {props.error && 'Erro: Não foi possível executar a requisição'}
        </p>
    )
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.ua.isFetching,
        data: state.ua.data,
        error: state.ua.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => dispatch(loadDataUARequest())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAgent)