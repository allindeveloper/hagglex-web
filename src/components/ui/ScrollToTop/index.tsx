import React, { PropsWithRef } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';


interface IScrollToTop{

}
class ScrollToTop  extends React.Component<IScrollToTop & RouteComponentProps> {
    
    componentDidUpdate(prevProps:any) {
        if (this.props.history.location !== prevProps.location) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }

    render() {
        return this.props.children
    }
}

export default withRouter(ScrollToTop);