import React,{Fragment} from 'react';

class TabNavbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activeKey:0
        }
        
    }
    render(){
        let {activeKey} = this.state;
        const tabItems = this.props.tabItems.map((tabItem,index)=>
            <li className="nav-item mx-auto" key={`${activeKey++}`}>
                <a 
                    className={(this.state.activeKey === index)?'nav-link active':'nav-link'}
                    href={`#${tabItem}`}
                    data-toggle="tab"
                    role="tab"
                    aria-control={tabItem}
                    aria-selected="true"
                >{tabItem}</a>
            </li>
        )
        return(
            <Fragment>
            {
                this.props.tabItems && this.props.tabItems.length > 0 &&
                <Fragment>
                <ul className="nav nav-tabs nav-fill m-0 p-0 text-center bg-primary show-tabs">
                    {tabItems}
                </ul>
                <div className="tab-content">
                    <div class="tab-pane fade show active" id="Summry" role="tabpanel" aria-labelledby="home-tab">Summry</div>
                    <div class="tab-pane fade" id="Season" role="tabpanel" aria-labelledby="profile-tab">Season</div>
                    <div class="tab-pane fade" id="Casts" role="tabpanel" aria-labelledby="contact-tab">Cast</div>
                </div>
                </Fragment>
            }
            { !(this.props.tabItems && this.props.tabItems.length > 0) &&
                <div className="alert alert-warning">
                    Nothing to display
                </div>
            }
            </Fragment>
        )
    };
}
export default TabNavbar;