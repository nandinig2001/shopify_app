import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import './Home.css'

 class Home extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <span to="/" className="btn-floating halfway-fab btn-large waves-effect waves-light btn blue"  
                            onClick= {() => {
                                    this.handleClick(item.id);
                                    alert('ITEM ADDED SUCCESSFULLY');
                                }}
                                 ><i className="material-icons">add</i></span>
                            
                            
                            
                        </div>

                        <div className="card-content">
                        <span to="/" className="card-title">{item.title}</span>
                        <h6>------------------</h6>
                        <p>{item.desc}</p>
                            
                            <p><b>₹  {item.price}</b></p>
                        </div>
                 </div>

            )
        })

        return(
            <header>
            <div class="container">
                 <h4>Welcome to Shopify</h4>
                <p>Shop bags for women from latest designs on Shopify. 
                    Check out our amazing collection of handbags from  top brands. Take your pick from our trendy range of handbags for women, 
                    including casual cotton sling bags, sophisticated totes, ethnic embroidered handbags and more </p> 
            </div>
            
                <h3 className="center">Products</h3>
                <div className="box">
                    {itemList}
                </div>
            </header>
            
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)