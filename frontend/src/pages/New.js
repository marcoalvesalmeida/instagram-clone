import React, { Component } from 'react';
import { Redirect } from 'react-router'

import api from '../services/api';
import './New.css';

class New extends Component {

  state = {
    image: null,
    author: '',
    place: '',
    description: '',
    hashtags: '',
    redirect: false    
  }

  handleImage = e => {
    this.setState({ image : e.target.files[0] });
    console.log(this.state);
  }

  handleChange = e => {
    this.setState( { [e.target.name] : e.target.value });
  }

  handleSubmit = async e => {
    e.preventDefault();

    const data = new FormData();

    data.append('image', this.state.image);
    data.append('author', this.state.author);
    data.append('place', this.state.place);
    data.append('description', this.state.description);
    data.append('hashtags', this.state.hashtags);

    api.post('posts', data);

    //this.props.history.push('/');
    this.setState({
      redirect : true
    });

  }

  render() {
    if(this.state.redirect) {
      return <Redirect to="/" />
    }else{
      return (
        <form id="new-post" onSubmit={this.handleSubmit}>
          <input type="file" onChange={this.handleImage} />
          <input type="text" name="author" placeholder="Autor" onChange={this.handleChange} />
          <input type="text" name="place" placeholder="Local" onChange={this.handleChange} />
          <input type="text" name="description" placeholder="Descrição" onChange={this.handleChange} />
          <input type="text" name="hashtags" placeholder="Hashtags" onChange={this.handleChange} />
          <button type="submit">POSTAR</button>
        </form>
      );
    }
  }
}

export default New;
