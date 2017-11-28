import React from 'react';

import './App.css';


  class App extends React.Component {
	  constructor(props) {
		  super(props);
      this.state={
        list: this.props.dataRecent
      };
        this.handleChangeAll = this.handleChangeAll.bind(this);
        this.handleChangeLast = this.handleChangeLast.bind(this);

    }





    handleChangeAll() {
      this.setState({
        list: this.props.dataAllTime
      })
    }
    handleChangeLast() {
      this.setState({
        list: this.props.dataRecent
      })
      }
    render() {
	    return (
        <List handleChangeAll={this.handleChangeAll} handleChangeLast={this.handleChangeLast} list={this.state.list}/>
      );
    }
  };
  class TopRow extends React.Component {

    render() {
	    return (
        <div className="row">
          <div className="row rank float">Rank</div>
          <div className="row img float"></div>
          <div className="row name float">Camper</div>
          <div onClick={this.props.handleClickLast} className="border row last float">Last 30 days</div>
          <div onClick={this.props.handleClickAll} className="border row all float">All time</div>
        </div>
      );
    }
  };
  class List extends React.Component {

    render() {
      var listItems=this.props.list.map((user, inx) => {
        return <li key={inx}>
          <div className="rank float border-left">{1+inx}</div>
          <div className="img float"><img src={user.img} alt="pic"/></div>
          <div className="name float">{user.username}</div>
          <div className="last float">{user.recent}</div>
          <div className="all float border-right">{user.alltime}</div>
          </li>;
      });
	   return (
       <div>
         <ul>
           <TopRow handleClickAll={this.props.handleChangeAll} handleClickLast={this.props.handleChangeLast}/>
          {listItems}
         </ul>
       </div>
      );
    }
  };



export default App;
