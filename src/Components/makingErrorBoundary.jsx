import React, { Component } from 'react'

class makingErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError:false,
        }
    }
    
    static getDerivedStateFromError(){
        return {
            hasError:true
        }
    }
    render() {
        if (this.state.hasError){
            return <h2>some this weng wrong</h2>
        }return this.props.children
    }
}

export default makingErrorBoundary
