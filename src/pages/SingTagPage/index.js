import React from 'react';
import Tag from '../../componetns/Tag/container/index';
import { history } from '../../Base/routers/AppRouters';
import Button from '../../componetns/Button/component'
import PropTypes from 'prop-types'; 
import { backText } from './constants';
import MainBody from "../../componetns/MainBody";

class TagPage extends React.Component {

    handleBacktoHome = () =>{
        history.push('/');
    };

   render(){
       const { id } = this.props.match.params;
       
        return (
            <MainBody>
                <Button 
                    handle={this.handleBacktoHome}
                    text={backText}
                />
                <Tag urlId={id}/>
            </MainBody>
        )
   }
};

TagPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
          }),
      }),
};

export default TagPage;